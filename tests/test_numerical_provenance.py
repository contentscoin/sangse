"""Behavioral T5 regressions through the shipped CLI; no network or sleeps."""
import json
from functools import cached_property
from pathlib import Path
import shutil
import subprocess
import sys
import tempfile
import unittest


PLUGIN = Path(__file__).resolve().parents[1]
SCRIPT = PLUGIN / "skills/sangse/scripts/check_cuts.py"
EXAMPLES = PLUGIN / "examples"


class NumericalProvenanceTests(unittest.TestCase):
    @cached_property
    def base(self) -> Path:
        tmp = tempfile.TemporaryDirectory()
        self.addCleanup(tmp.cleanup)
        return Path(tmp.name)

    def run_gate(self, copy, source, *, legal="## 환불\n자료 없음", facts=None):
        (self.base / "cuts.md").write_text(
            "## C01 · K2 · Q2 · h=1050\nheadline: 제품\nbg: #FFFFFF\nbody: |\n"
            + "\n".join("  " + line for line in copy.splitlines()) + "\n",
            encoding="utf-8",
        )
        (self.base / "legal.md").write_text(legal, encoding="utf-8")
        (self.base / "raw-input.md").write_text(source, encoding="utf-8")
        intake = "" if facts is None else "```quantitative-facts\n" + json.dumps(facts, ensure_ascii=False) + "\n```\n"
        (self.base / "intake-checklist.md").write_text(intake, encoding="utf-8")
        return self.invoke()

    def invoke(self):
        run = subprocess.run([sys.executable, str(SCRIPT), str(self.base), "--json"],
                             capture_output=True, text=True, timeout=15)
        self.assertIn(run.returncode, (0, 1), run.stderr)
        report = json.loads(run.stdout)
        saved = json.loads((self.base / "qa/check_cuts.json").read_text(encoding="utf-8"))
        self.assertEqual(report, saved)
        return next(check for check in report["checks"] if check["id"] == "T5")

    def assert_t5(self, status, *args, **kwargs):
        self.assertEqual(self.run_gate(*args, **kwargs)["status"], status)

    def test_unrelated_pack_number_cannot_supply_mg(self):
        self.assert_t5("FAIL", "지표성분 진세노사이드 합 30 mg", "지표성분 진세노사이드 합 7 mg\n구성 30포")

    def test_same_unit_different_attribute(self):
        for claim in ("카테킨 20 mg", "카페인 400 mg", "카테킨 500 mg"):
            with self.subTest(claim=claim):
                self.assert_t5("FAIL", claim, "카테킨 400 mg\n카페인 20 mg\n캡슐 500 mg")

    def test_same_line_attributes_cannot_swap(self):
        self.assert_t5("FAIL", "카테킨 20 mg, 카페인 400 mg", "카테킨 400 mg, 카페인 20 mg")

    def test_qualifiers_cannot_change(self):
        for claim in ("1포당 카테킨 400 mg", "카테킨 400 mg 보장", "최소 소음 28 dB"):
            with self.subTest(claim=claim):
                self.assert_t5("FAIL", claim, "1일당 카테킨 400 mg\n최대 소음 28 dB")

    def test_unit_changes_and_small_numbers_fail(self):
        for claim in ("카테킨 7 g", "카테킨 7 mL", "카테킨 1 mg", "카테킨 4 mg"):
            with self.subTest(claim=claim):
                self.assert_t5("FAIL", claim, "카테킨 7 mg\n포장 1개\n카드 4장")

    def test_ranges_are_not_bags_of_endpoints(self):
        self.assert_t5("PASS", "고시 규격 3~80 mg", "고시 규격 3~80 mg")
        for claim in ("고시 규격 7~80 mg", "카테킨 80 mg", "고시 규격 80~3 mg"):
            with self.subTest(claim=claim):
                self.assert_t5("FAIL", claim, "고시 규격 3~80 mg\n카테킨 7 mg")

    def test_layout_labels_cannot_hide_quantities(self):
        for claim in ("Point 30 mg", "STEP 4 mg"):
            with self.subTest(claim=claim):
                self.assert_t5("FAIL", claim, "구성 30포\n카드 4장")

    def test_exact_copies_and_formatting(self):
        for claim, source in (("카테킨 400mg", "- 카테킨 400 mg"),
                              ("정가 49000원", "- 정가 49,000원"),
                              ("고시 규격 0.5~1.5 mg", "고시 규격 0.5~1.5 mg")):
            with self.subTest(claim=claim):
                self.assert_t5("PASS", claim, source)

    def test_legal_is_checked_not_only_cuts(self):
        self.assert_t5("FAIL", "제품 안내", "카테킨 400 mg\n카페인 20 mg",
                       legal="## 환불\n카페인 400 mg")

    def test_no_source_is_not_a_pass(self):
        self.assert_t5("WARN", "카테킨 400 mg", "")

    def test_explicit_source_linked_rewording_and_derived_price(self):
        source = "파생: 1,307원 = 39,200원 ÷ 30포 (한 포 단가, 원 단위 반올림)"
        facts = [{"at": "C01.body", "claim": "한 포 1,307원", "sources": [
            {"file": "raw-input.md", "quote": source}]}]
        self.assert_t5("PASS", "한 포 1,307원", source, facts=facts)
        self.assert_t5("FAIL", "한 포 1,308원", source, facts=facts)
        self.assert_t5("FAIL", "한 박스 1,307원", source, facts=facts)

    def test_approval_is_scoped_to_context(self):
        facts = [{"at": "C02.body", "claim": "20 mg", "sources": [
            {"file": "raw-input.md", "quote": "카페인 20 mg"}]}]
        self.assert_t5("FAIL", "20 mg", "카페인 20 mg", facts=facts)

    def test_multiline_attribute_remains_attached(self):
        facts = [{"at": "C01.body", "claim": "카테킨\n400 mg", "sources": [
            {"file": "raw-input.md", "quote": "카테킨 400 mg"}]}]
        self.assert_t5("PASS", "카테킨\n400 mg", "카테킨 400 mg", facts=facts)
        self.assert_t5("FAIL", "카페인\n400 mg", "카테킨 400 mg", facts=facts)

    def test_invalid_declarations_fail_even_with_exact_copy(self):
        for facts in ({}, [None], [{"at": "C01.body", "claim": "카테킨 400 mg", "sources": []}]):
            with self.subTest(facts=facts):
                self.assert_t5("FAIL", "카테킨 400 mg", "카테킨 400 mg", facts=facts)
        for intake in ("```quantitative-facts\n[", "```quantitative-facts\nnot json\n```\n"):
            with self.subTest(intake=intake):
                self.run_gate("카테킨 400 mg", "카테킨 400 mg")
                (self.base / "intake-checklist.md").write_text(intake, encoding="utf-8")
                self.assertEqual(self.invoke()["status"], "FAIL")

    def test_approval_cannot_cite_its_own_claim(self):
        facts = [{"at": "C01.body", "claim": "카테킨 400 mg", "sources": [
            {"file": "intake-checklist.md", "quote": "카테킨 400 mg"}]}]
        self.assert_t5("FAIL", "카테킨 400 mg", "카페인 20 mg", facts=facts)

    def test_stale_or_invalid_source_links_fail_closed(self):
        for file, quote in (("raw-input.md", "카테킨 20 mg"), ("cuts.md", "카테킨 400 mg")):
            with self.subTest(file=file):
                facts = [{"at": "C01.body", "claim": "카테킨은 400 mg", "sources": [
                    {"file": file, "quote": quote}]}]
                self.assert_t5("FAIL", "카테킨은 400 mg", "카테킨 400 mg", facts=facts)

    def test_metadata_is_not_copy(self):
        self.run_gate("제품 안내", "자료 있음")
        with (self.base / "cuts.md").open("a", encoding="utf-8") as out:
            out.write("visual: 98765 pixels\ntext_pos: 2×2\n")
        self.assertEqual(self.invoke()["status"], "PASS")

    def test_shipped_examples_and_reported_mutation(self):
        products = ["punggi-red-ginseng-stick", "gwangyang-maesil-jelly", "jeju-greentea-catechin"]
        variants = ["story-first", "checkpoint", "proof-first", "lookbook", "spec-showcase", "offer-first"]
        for name in products + ["style-pack-variants/" + v for v in variants]:
            with self.subTest(example=name):
                shutil.copytree(EXAMPLES / name, self.base, dirs_exist_ok=True)
                for filename in ("raw-input.md", "intake-checklist.md", "legal.md"):
                    source = EXAMPLES / name / filename
                    self.assertTrue(source.is_file(), f"{name}/{filename}")
                    shutil.copyfile(source, self.base / filename)
                self.assertEqual(self.invoke()["status"], "PASS")
        shutil.copytree(EXAMPLES / products[0], self.base, dirs_exist_ok=True)
        path = self.base / "cuts.md"
        text = path.read_text(encoding="utf-8")
        old = "지표성분 진세노사이드 합 7 mg"
        self.assertEqual(text.count(old), 1)
        path.write_text(text.replace(old, "지표성분 진세노사이드 합 30 mg"), encoding="utf-8")
        self.assertEqual(self.invoke()["status"], "FAIL")


if __name__ == "__main__":
    unittest.main()

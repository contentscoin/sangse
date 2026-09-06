"""Quantitative source-link integrity, not semantic or arithmetic verification.

check_numbers accepts parsed cut fields and the two source documents. Source
approvals and calculations are human-reviewed inputs; no formula is evaluated.
"""
from collections.abc import Iterator, Mapping, Sequence
import json
import re
from typing import Literal, TypeAlias, TypedDict, cast


class NumericalCut(TypedDict):
    """The read-only portion of a parsed cut needed by quantitative validation."""

    id: str
    fields: Mapping[str, str | list[str]]


Status: TypeAlias = Literal["PASS", "WARN", "FAIL"]
JSONValue: TypeAlias = str | int | float | bool | None | list["JSONValue"] | dict[str, "JSONValue"]
PH_RE = re.compile(r"\[(자료 필요|선택|이미지 생성 실패)[^\]]*\]")
FACT_BLOCK = re.compile(r"^```quantitative-facts\s*\n(.*?)^```\s*$", re.M | re.S)
NON_COPY = {"image", "visual", "text_pos", "bg"}


def normalize(text: str) -> str:
    """Formatting only: never discard words, units, ranges, or qualifiers."""
    text = PH_RE.sub("", text).replace("**", "")
    text = re.sub(r"(?m)^\s*[-*]\s+", "", text)
    text = re.sub(r"(?<=\d),(?=\d{3}(?:\D|$))", "", text)
    text = re.sub(r"(?<=\d)\s+(?=(?:mg|g|kg|mL|L|cm|mm|mAh|kcal|dB|원|%)(?![A-Za-z]))", "", text)
    return "\n".join(re.sub(r"[ \t]+", " ", line).strip() for line in text.strip().splitlines())


def has_quantity(text: str) -> bool:
    text = PH_RE.sub("", text)
    # Explicit layout labels, not a blanket exemption for small numbers.
    text = re.sub(r"(?im)(?:^|\|)[ \t]*(?:point|step)[ \t]+\d+[ \t]*(?=$|\|)", "", text)
    return bool(re.search(r"\d", text))


def copy_statements(cuts: Sequence[NumericalCut], legal: str) -> Iterator[tuple[str, str]]:
    """Keep entire fields together, including nonnumeric attribute/context lines."""
    for cut in cuts:
        for key, value in cut["fields"].items():
            if key in NON_COPY:
                continue
            text = "\n".join(value) if isinstance(value, list) else value
            if has_quantity(text):
                yield f"{cut['id']}.{key}", text
    section = ""
    for line in legal.splitlines():
        if line.startswith("## "):
            section = line[3:].strip()
        if has_quantity(line):
            yield f"legal:{section}", line


def check_numbers(
    cuts: Sequence[NumericalCut], legal: str, source_files: Mapping[str, str]
) -> tuple[Status, list[str]]:
    """Return (status, details); declarations are trusted semantic review input.

    A declaration's quote must still exist outside the declaration block. Its
    claim and destination must match in full, so changing only output copy cannot
    reuse a different attribute's number, unit, range endpoint, or approval.
    """
    plain = {name: FACT_BLOCK.sub("", text) for name, text in source_files.items()}
    errors: list[str] = []
    approved: set[tuple[str, str]] = set()
    intake = source_files.get("intake-checklist.md", "")
    blocks = list(FACT_BLOCK.finditer(intake))
    if intake.count("```quantitative-facts") != len(blocks):
        errors.append("intake-checklist.md: unterminated quantitative-facts block")
    for block in blocks:
        try:
            # The decoder guarantees JSON values, not the declaration schema.
            # Validate that schema below before using any untrusted fields.
            facts = cast(JSONValue, json.loads(block.group(1)))
            if not isinstance(facts, list):
                raise ValueError("expected a list")
            for fact in facts:
                if not isinstance(fact, dict) or set(fact) != {"at", "claim", "sources"}:
                    raise ValueError("each fact needs at, claim, sources")
                at, claim, links = fact["at"], fact["claim"], fact["sources"]
                if not isinstance(at, str) or not at or not isinstance(claim, str) or not claim.strip():
                    raise ValueError("at and claim must be nonempty strings")
                if not isinstance(links, list) or not links:
                    raise ValueError("sources must be a nonempty list")
                for link in links:
                    if not isinstance(link, dict) or set(link) != {"file", "quote"}:
                        raise ValueError("source links need file and quote")
                    name, quote = link["file"], link["quote"]
                    if not isinstance(name, str) or name not in plain:
                        raise ValueError(f"{at}: source must be raw-input.md or intake-checklist.md")
                    if not isinstance(quote, str) or not quote.strip() or quote not in plain[name]:
                        raise ValueError(f"{at}: source quote missing from {name}")
                approved.add((at, normalize(claim)))
        except (ValueError, TypeError) as exc:
            errors.append(f"intake-checklist.md quantitative-facts: {exc}")

    if not any(text.strip() for text in plain.values()):
        return ("FAIL", errors) if errors else ("WARN", ["raw-input/intake 없음 — 출처 추적 불가"])
    # Whole statements only; no substring/word/number bags. Rewordings and
    # multiline fields must use an explicit reviewed declaration.
    statements = {normalize(line) for text in plain.values() for line in text.splitlines() if line.strip()}
    for at, text in copy_statements(cuts, legal):
        canonical = normalize(text)
        if (at, canonical) not in approved and canonical not in statements:
            errors.append(f"{at}: unlinked quantitative statement: {text}")
    return ("FAIL" if errors else "PASS"), errors

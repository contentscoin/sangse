# Product fidelity QA — 2026-09-06

Task: st_01a0756e. HISTORICAL SNAPSHOT: Codex-blocked stage before root selected Grok. Current adopted JPEGs and the subsequent C08 recovery are recorded in `product-fidelity-grok-2026-09-06.md`; no-generation statements below apply only to this earlier stage.

## Actual image inspection

All four listed original full PNGs were opened with Read. None was regenerated, replaced or processed.

| Cut / current path | SHA1 | Observed pixels | Required correction | Result |
|---|---|---|---|---|
| C03 `../images/c03.png` | `6736e775d20c30f87c9cd04946ff986fa1d8d5ff` | Case on suitcase has one row of 5 compartments. Text says `7일 케이스에`. Three bottle scenes show blank dark-green labels and two loose capsules each. | Exactly 7 compartments in one unobscured row, keep existing copy and palette. | FAIL: 5 is not 7. |
| C05 `../images/c05.png` | `251b01533d68c7e0376019cd181539f14537c72e` | Hand holds 2 capsules beside one water glass. No bottle label is shown on this cut. Copy says `함량이 보이는 녹차` and `1일 섭취량당 카테킨 400 mg을 라벨에 적었습니다`. Other inspected bottle cuts have blank labels. | `우리지 않고 챙기는 녹차` and `1일 섭취량당 카테킨 400 mg입니다`. Do not claim the generated label demonstrates the quantity. | FAIL: PNG still contains unsupported label assertion and differs from corrected source. |
| C08 `../images/c08.png` | `87dea77ed161530eef39cdb17febd98b5dd60955` | STEP 3 open case has 3 columns × 2 rows = 6 compartments; text says `출장은 7일`. STEP 2 hand holds 2 capsules. | Exactly 7 compartments in one fully visible row; hands must not hide dividers. | FAIL: 6 is not 7. |
| C10 `../images/c10.png` | `a5a1808c7e921f1e8dcf04432a6095e7a43df53c` | Open case has 3 columns × 2 rows = 6 compartments. Bottle label has no 400 mg text; separate postcard and 2 loose capsules visible. Caption says `7일 휴대 케이스`. Bottle's 60 contents cannot be individually verified. | Exactly 7 compartments in one visible row; preserve bottle, postcard and existing captions. | FAIL: 6 is not 7; no visible-label proof of dosage. |

## Source and copy review

`raw-input.md` explicitly supplies the 7-day travel case and catechin 400 mg per daily intake. C05 now states that daily-intake fact, not a claim about generated label contents. Only C05.body numerical approval was changed. The three case briefs now explicitly require one row of 7 visible compartments. This is a countability layout choice, not a new supplied fact about case geometry.

## Generation blocker

No catechin generation was attempted after two red-ginseng calls to the shared pumasi `imagen.sh --backend codex --ref` returned exit 5 with no image. Exact backend reason: `현재 세션에는 호출 가능한 이미지 생성 도구가 없어 이미지를 생성하지 못했습니다. 파일 읽기·저장이나 셸 명령은 실행하지 않았습니다.` Evidence: `../../punggi-red-ginseng-stick/qa/fidelity-2026-09-06/` and that product's fidelity report. Case counts remain unresolved; no candidate or visual success is claimed.

## Historical QA / freshness

Pre-existing `check_copy.json`, `render_check.json`, `render-*.png` and `five-second.md` are HISTORICAL, not evidence of current source/image equality. Previous `check_cuts.json` is preserved as `fidelity-2026-09-06/check_cuts-historical.json`; current `check_cuts.json` checks text/structure only. This task did not regenerate or verify HTML. Only the four listed cuts were visually re-reviewed; unchanged cuts are not newly approved.

# Product fidelity QA — 2026-09-06

Task: st_01a0756e. HISTORICAL SNAPSHOT: Codex-blocked stage before root selected Grok. Current adopted JPEG QA is `product-fidelity-grok-2026-09-06.md`; no-generation statements below apply only to this earlier stage.

## Actual image inspection

Both listed original full PNGs were opened with Read. None was regenerated, replaced or processed.

| Cut / current path | SHA1 | Observed pixels | Required correction | Result |
|---|---|---|---|---|
| C01 `../images/c01.png` | `14eb036de799c4cb1b903fa81247f665f814b592` | Copy reads `매실추출물 20 g 스틱젤리`. One standing pouch, 2 sealed loose sticks, 2 plum fruits. | `스틱젤리 한 포 중량 20 g`, explicitly finished stick weight rather than extract amount; preserve other copy/palette. | FAIL: ambiguous extract quantity remains in PNG, corrected only in cuts.md. |
| C07 `../images/c07.png` | `202947a99c003a5bddb2e3c21a77b9980a7dc3dd` | Text reads `상온 보관이라 여름 가방에도 괜찮습니다`. One opened stick with exposed jelly. No direct-sun qualifier visible. | Body `상온 보관 제품입니다` and visible footnote `직사광선 아래 장시간은 피해 주세요.` | FAIL: unconditional summer reassurance remains in PNG. |

## Source and copy review

C01: `raw-input.md` product packaging is 20 g × 30 sticks, not 20 g of extract. The new wording names the finished stick's weight; no extract content or previously unknown marker amount was invented.

C07: room-temperature storage comes from raw-input intake instructions. Direct-sun qualifier is copied exactly from existing `legal.md` FAQ: `직사광선 아래 장시간은 피해 주세요.` No new numerical temperature or duration was introduced. C01.body and C07.body approvals were updated only for their supported revised wording; the non-numerical footnote uses the existing legal restriction.

## Generation blocker

No jelly generation was attempted after two red-ginseng calls to shared pumasi `imagen.sh --backend codex --ref` returned exit 5 with no image. Exact backend reason: `현재 세션에는 호출 가능한 이미지 생성 도구가 없어 이미지를 생성하지 못했습니다. 파일 읽기·저장이나 셸 명령은 실행하지 않았습니다.` Evidence: `../../punggi-red-ginseng-stick/qa/fidelity-2026-09-06/` and that product's fidelity report. No candidate or successful new image inspection is claimed.

## Historical QA / freshness

Pre-existing `check_copy.json`, `render_check.json`, `render-*.png`, `five-second.md`, `c01-v1-open-stick.png`, `c07-v1-rejected.png` and `c10-v1-rejected.png` are HISTORICAL, not validation of this correction or current image/copy equality. Previous `check_cuts.json` is preserved as `fidelity-2026-09-06/check_cuts-historical.json`; current `check_cuts.json` checks text/structure only. HTML regeneration and browser QA were not performed here. Only the two listed cuts were visually re-reviewed.

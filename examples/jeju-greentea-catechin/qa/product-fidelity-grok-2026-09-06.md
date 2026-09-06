# Product fidelity QA — Grok follow-up, 2026-09-06

Task st_01a0756e. All four requested catechin cuts are now visually verified and adopted. C08 was resolved by one root-directed attempt using the verified C10 reference and a different three-row composition, after preserving the earlier three rejected variants.

## Workflow and integrity

Root selected existing authenticated Grok after Codex/native tool failures; original JPEG retained. The native tool failure was reported by root. Installed Grok auth was confirmed, then all generations used pumasi `imagen.sh --backend grok --ref`. No direct API, installs, login/config changes or image post-processing. Original JPEG bytes retain true `.jpg` extensions; this is root's implementation choice, not separate user approval of Grok or JPEG. All original PNGs remain unchanged. All eleven candidates, prompts and wrapper logs are retained in `grok-2026-09-06/`. All listed images were opened with Read before judgment.

## Current per-cut results

| Cut | Current path / SHA1 | Exact visual findings | Result |
|---|---|---|---|
| C03 | `../images/c03.jpg` / `7701a4f83cbbb9729d9927dc53bee63e3d71921a` | 1024×1024. Bottom-right case shows exactly 7 empty round compartments in one row, blank shared lid, no numeric labels. All scene headings, nine body lines and daily footnote present, including `7일 케이스에`. Top and middle scenes each retain bottle plus 2 loose capsules. Bottom suitcase/bottle illustration is replaced by a countable case close-up; no quantitative fact changed. | PASS, adopted v2. |
| C05 | `../images/c05.jpg` / `28fd71ac7d875b54f78d0e17d2c07b0aeb22b163` | 1024×1024. `우리지 않고 챙기는 녹차`; all four body lines present, final line `1일 섭취량당 카테킨 400 mg입니다`. `Point 1`, `왜 캡슐인가`, callout `아침 물 한 잔에!` present. Hand holds exactly 2 intact capsules beside a separate water glass. No bottle-label proof claim. Original portrait/palm pose became square/pinch pose; original green/white, water, capsules and copy retained. | PASS, adopted v3 with square C01 anchor. |
| C08 | `../images/c08.jpg` / `5f7a8375340a4b2dd089059d4537b0a8c710e5fe` | 1024×1024. Heading `섭취 방법`. Three horizontal rows preserve `STEP 1` / `병을 물 마시는` / `자리에 두기`; `STEP 2` / `아침 식후 물과` / `캡슐 2개`; `STEP 3` / `출장은 7일` / `케이스에 옮기기`. STEP 2 photo shows exactly 2 capsules and a water glass. Large STEP 3 photo preserves C10's case with exactly 7 visible circular wells: first contains 2 capsules, six empty. No numbers inside wells or text obscuring them. | PASS, adopted known-correct-reference candidate. |
| C10 | `../images/c10.jpg` / `043a631ca92bba93d76fb96775601677b157711f` | 1024×1024. Exactly 7 round compartments in a single case row; first well contains 2 capsules, six others empty. Two additional loose capsules, separate closed bottle and tea-field postcard. Three captions preserve `캡슐 500 mg × 60정`, `7일 휴대 케이스`, `제주 다원 엽서`. Bottle label remains blank; 60 bottle contents are NOT visually counted. | PASS, adopted v2. |

Round-well geometry is a countability styling choice for the supplied seven-day case, not a newly asserted manufacturing fact. C03/C10 adopt the same one-row round-well approach. C05 amount is per daily intake, not per capsule or proof from a generated label.

## Rejected and adopted candidates

All filenames below start `st_01a0756e-tea-` inside `grok-2026-09-06/`.

| Cut / suffix | Result |
|---|---|
| `c03-candidate-01.jpg` | REJECTED: 8 compartments; front numbering duplicates 3 (`1,2,3,3,4,5,6,7`). |
| `c03-candidate-02.jpg` | ADOPTED: 7 round compartments, unnumbered. |
| `c05-candidate-01.jpg` | REJECTED: corrected copy, but 880×1168, below required 900-pixel width. |
| `c05-candidate-02.jpg` | REJECTED: square prompt still returned 880×1168 portrait. No resizing used. |
| `c05-candidate-03.jpg` | ADOPTED: square C01 packaging anchor produces 1024×1024; copy and 2 capsules verified. |
| `c08-candidate-01.jpg` | REJECTED: compartment numerals malformed/duplicated; cannot approve as numbered 1–7 case. |
| `c08-candidate-02.jpg` | REJECTED: 6 round wells (1 occupied, 5 empty), not 7. |
| `c08-candidate-03.jpg` | REJECTED: local request to add one well produced 9 total (1 occupied, 8 empty), not 7. This branch was stopped. |
| `c08-verified-reference-candidate.jpg` | ADOPTED: root-directed new composition/reference branch, one attempt only. Reference was adopted `images/c10.jpg`, not any wrong-count image. Seven wells and exact STEP copy verified. |
| `c10-candidate-01.jpg` | REJECTED: 6 rectangular compartments; labels `1,2,3,4,5,7`, missing 6. |
| `c10-candidate-02.jpg` | ADOPTED: 7 round compartments. |

All three C05 wrapper calls returned exit 5 claiming no image, but each stdout named an existing session JPEG. These exact originals were opened and copied without processing. Evidence: `c05-v1-stdout.txt`, `c05-v2-stdout.txt`, `c05-v3-stdout.txt`. This is the same joined-sentence/path retrieval issue seen in red C10, not a backend generation failure. The actual width failures of the first two candidates remain failures and were not bypassed.

## Known-correct-reference C08 recovery

Root selected verified `images/c10.jpg` (SHA1 `043a631ca92bba93d76fb96775601677b157711f`) as the sole reference and requested three simple horizontal instruction rows. The child made exactly one generation call on this new branch. Wrapper exit 0; backend session `01a07594-f445-7f13-98a1-e223d0f4310b`. Prompt `prompt-st_01a0756e-tea-c08-verified-reference.md`, candidate `st_01a0756e-tea-c08-verified-reference-candidate.jpg`, and wrapper log are preserved in `grok-2026-09-06/`. Original C08 text and numerical approval are unchanged; only the visual direction and adopted image path changed.

## Freshness

The earlier `product-fidelity-2026-09-06.md` records the Codex-blocked snapshot before root selected Grok. Historical PNG tables, screenshots, copy/five-second reviews and render checks do not approve newly referenced JPEGs. The final `check_cuts.json` validates source slots, provenance links, existing image paths and dimensions only; it cannot count wells. All requested catechin fidelity corrections now have per-cut Read evidence above. Parent owns subsequent HTML regeneration and browser QA.

# Product fidelity QA — 2026-09-06

Task: st_01a0756e. HISTORICAL SNAPSHOT: Codex-blocked stage before root selected Grok. Current adopted JPEG QA is `product-fidelity-grok-2026-09-06.md`; all no-candidate/no-alternate-backend statements below refer only to this earlier stage.

## Actual image inspection

Original full PNGs were opened with Read, not inferred from captions. C01 was also opened as the packaging reference. No generated candidate exists and no PNG was replaced or processed.

| Cut / current path | SHA1 | Observed pixels | Required correction | Result |
|---|---|---|---|---|
| C03 `../images/c03.png` | `9a31c7f533e48866a9f2cc6095384cec9d5b892a` | Three illustrated scenes and three sealed sticks. Text still says `커피 대신` / `홍삼 한 포로 정신 차리기`. | `가방에서 꺼내` / `간편하게 홍삼 한 포`, unchanged daily-intake footnote. New prompt also requires the scene's card to have 5 columns × 6 rows. | FAIL: unsupported alertness text still in PNG; source copy fixed only. |
| C10 `../images/c10.png` | `a4c363a88fbf6d4b72593e6660a9fcb54488e7e4` | Card has 6 columns × 6 rows = 36 cells, although caption says `30칸 섭취 체크 카드`. Two boxes and one loose sealed stick; no separate farmer leaflet. Box contents not individually countable, so 30 visible sticks NOT verified. | 5 columns × 6 rows = exactly 30 unobscured cells; separate `풍기 농가 소개 리플릿` with its caption. Brief uses one closed case and representative stick, not a false visible 30-count claim. | FAIL: wrong grid and missing supplied item, not minor. |

## Source review

`raw-input.md` supplies one stick per day, portable intake, and all four components including the 30-cell card and farmer leaflet. Only C03.body approval was updated. C10 keeps its original three-line quantitative body and approval; the supplied leaflet is added in the sub slot to respect K11 limits. No efficacy claim, source fact or blanket numerical approval was added.

## Generation blocker

Loaded pumasi image skill and references; used its `imagen.sh`, `--backend codex`, and each existing cut as `--ref`. Image generation feature flag returned `true`.

| Cut | Prompt (repository root) | Temporary candidate target (repository root) | Backend thread | Result |
|---|---|---|---|---|
| C03 | `.imagen/prompt-st_01a0756e-red-c03.md` | `images/2026-09-06/st_01a0756e-red-c03-candidate-01.png` | `01a07570-7cd1-7b80-9454-794c2e98fd11` | exit 5, no image |
| C10 | `.imagen/prompt-st_01a0756e-red-c10.md` | `images/2026-09-06/st_01a0756e-red-c10-candidate-01.png` | `01a07570-7cd1-7130-9bc7-b85b50303cee` | exit 5, no image |

Wrapper exact error for both: `ERROR: codex exec produced NO image (generated_images/stdout/rollout 어디에서도 산출물 없음)`.

C03 backend exact reason: `현재 세션에 호출 가능한 이미지 생성 도구가 없어 이미지를 생성하지 못했습니다. 도구 목록만 확인했으며, 파일 읽기·저장이나 셸 명령은 실행하지 않았습니다.`

C10 backend exact reason: `현재 세션에는 호출 가능한 이미지 생성 도구가 없어 이미지를 생성하지 못했습니다. 파일 읽기·저장이나 셸 명령은 실행하지 않았습니다.`

Preserved prompts, wrapper logs and backend JSONL: `fidelity-2026-09-06/`. This is tool unavailability, not a rejected visual candidate. No direct Codex image invocation, install, alternate backend or post-processing was used.

## Historical QA / freshness

All pre-existing `check_copy.json`, `render_check.json`, `render-*.png`, `five-second.md`, `sim-review-r*.md` and `c03-v1.png` are HISTORICAL artifacts. They do not validate this correction or current copy/image equality. Previous `check_cuts.json` is preserved as `fidelity-2026-09-06/check_cuts-historical.json`; the current `check_cuts.json` is a text/structure check only, not visual approval. HTML regeneration belongs to the parent and was not performed here.

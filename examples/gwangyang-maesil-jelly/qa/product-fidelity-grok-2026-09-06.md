# Product fidelity QA — Grok follow-up, 2026-09-06

Task st_01a0756e. The two requested jelly corrections are visually verified and adopted. This is scoped per-cut QA, not a new HTML/browser approval.

## Workflow and integrity

Root selected existing authenticated Grok after Codex/native tool failures; original JPEG retained. The native tool failure was reported by root. Grok was used only through pumasi `imagen.sh --backend grok --ref`. The existing square C01 is the botanical-packaging anchor for both cuts. No direct API, installs, login/config changes, image resizing, re-encoding, crop or text overlays. Original JPEG output retains true `.jpg` extensions; original PNGs remain unchanged. This records root's implementation choice, not a separate user approval of Grok or JPEG. Candidates, prompts, wrapper logs and recovery stdout are retained in `grok-2026-09-06/`.

## Adopted per-cut Read inspection

| Cut | Current path | SHA1 | Actual inspected quantities and text |
|---|---|---|---|
| C01 | `../images/c01.jpg` | `7602f2c647420a39795342d342ae3e8d4d0a60cf` | 1024×1024. Heading `광양골` / `매실 데일리젤리`; sub `러닝 끝, 죄책감 없이`; tags `#운동후`, `#무설탕`, `#25kcal`. All four body lines present, including `스틱젤리 한 포 중량 20 g` and `하루 한 포로 끝`. Exactly 2 sealed loose sticks, 1 standing pouch and 2 plum fruits, with preserved green botanical print and cream fabric. |
| C07 | `../images/c07.jpg` | `e1a014f2c6e2322b66a2771db32bf89e0d73978e` | 1024×1024. `Point 2`, `맛과 열량`, `새콤달콤 25 kcal`. Four body lines include `1포 25 kcal, 운동 뒤 먹어도 마음이 편합니다`, `냉장하면 젤리가 단단해져 씹는 맛이 납니다`, and `상온 보관 제품입니다`. Visible qualifier directly below body: `직사광선 아래 장시간은 피해 주세요.` Exactly 1 opened botanical stick with protruding jelly in the circular lower image. No unconditional summer-bag reassurance or extra callout. |

C01's 20 g remains the finished stick weight from raw-input, not extract quantity. C07's storage limitation is the existing legal FAQ wording; no numerical temperature or duration was invented. C07 was generated directly as a square composition to satisfy minimum width without upscaling. Layout changed from portrait to square while keeping the Point 2 hierarchy, green/white palette and single opened-stick photograph.

## Candidate and wrapper history

Both first visual candidates were accepted:
- `grok-2026-09-06/st_01a0756e-jelly-c01-candidate-01.jpg`
- `grok-2026-09-06/st_01a0756e-jelly-c07-candidate-01.jpg`

C07 wrapper returned exit 5 (`grok produced NO image`), while its stdout named a real session image. Read opened that exact JPEG, then original bytes were copied. Stdout had a preliminary sentence joined immediately to the path; this was a retrieval issue, not missing generation. Evidence: `c07-v1-stdout.txt`, wrapper log and backend session `01a0758a-dbca-7982-8a80-755a681ba7c9`.

## Freshness

`product-fidelity-2026-09-06.md` is the earlier Codex-blocked snapshot, not the current adopted state. Historical PNG image-brief rows, copy/five-second checks, screenshots and render checks do not validate these JPEGs. Final `check_cuts.json` validates source slots/provenance, paths and image dimensions only. HTML regeneration and browser QA remain with the parent. No unrelated jelly cuts were regenerated or newly approved.

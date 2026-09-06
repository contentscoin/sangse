# Product fidelity QA — Grok follow-up, 2026-09-06

Task st_01a0756e. The requested red-ginseng corrections are visually verified and adopted. This is per-cut image QA, not a new HTML/browser approval.

## Workflow and integrity

Root selected existing authenticated Grok after Codex/native tool failures; original JPEG retained. The native tool failure was reported by root; this child observed the Codex failures and `grok models` reporting logged in with grok.com. Every generation used pumasi `imagen.sh --backend grok --ref`, never a direct image API. All adopted files retain original JPEG bytes and true `.jpg` extensions. This records root's implementation choice, not a separate user approval of Grok or JPEG. No re-encoding, resize, crop, overlay or config/login/install changes. Original PNG files remain unchanged as historical assets. Candidate images, prompts and wrapper logs are in `grok-2026-09-06/`.

## Adopted cuts — actual Read inspection

| Cut | Final path | SHA1 | Visually verified |
|---|---|---|---|
| C03 | `../images/c03.jpg` | `ef0a9fa296eadee121ee1163885b52e3d0135189` | 1024×1024. All three scene headings and nine body lines present; middle copy is `가방에서 꺼내` / `간편하게 홍삼 한 포`, not an alertness claim. Visible spacing in the first phrase is `가방 에서`; characters unchanged. Daily footnote reads `*1일 1회 1포 섭취 제품입니다. 상황에 따라 섭취하세요.` Three sealed sticks. Evening card is 5 columns × 6 rows = 30 cells, one checkmark in upper-left. |
| C10 | `../images/c10.jpg` | `51714ba7eaf0755e66d32177896f917b28d02ed9` | 1024×1024. Card has exactly 5 columns × 6 rows and numbers 1–30, five per row with no missing/duplicate numbers. Separate folded leaflet titled `풍기 농가 소개` and caption `풍기 농가 소개 리플릿`. Closed storage case and one representative sealed stick; stick end is partly behind card. Heading `제품 구성`; captions `스틱 10 mL × 30포`, `종이 보관 케이스`, `30칸 섭취 체크 카드` all present. No claim of visibly counting 30 sachets in the closed case. |

C10 numbered cells are counting aids, not new source facts. Card and leaflet specifications come from raw-input. C10 layout is now a closed-case contents scene; C03 retains its three-scene style and brown/yellow/white palette. The current cuts.md points only to these adopted JPEGs for the two corrected cuts.

## Candidate history — failed candidates are not minor

Names below are under `grok-2026-09-06/`.

| Candidate | Result |
|---|---|
| `st_01a0756e-red-c10-grok-candidate-01.jpg` | REJECTED: leaflet present but card is 6×6=36, not 30. |
| `st_01a0756e-red-c10-grok-candidate-02.jpg` | ADOPTED: numbered 5×6 card and leaflet verified. |
| `st_01a0756e-red-c03-grok-candidate-01.jpg` | REJECTED: portable-intake copy fixed, but evening card still 7×4=28 cells. |
| `st_01a0756e-red-c03-grok-candidate-02.jpg` | REJECTED: enlarged 5×6 card removed/covered the middle scene heading and body. |
| `st_01a0756e-red-c03-grok-candidate-03.jpg` | ADOPTED: local card replacement fits evening panel; 30 cells and all text verified. |

The C10 second call returned wrapper exit 5 (`grok produced NO image`), but its stdout named a real session image. Read opened that exact path and verified it; copying the original bytes recovered the candidate. The wrapper's stdout contained a preliminary sentence joined directly to the absolute path. This was a retrieval failure, not image-tool unavailability. Evidence: `c10-v2-stdout.txt` and `st_01a0756e-red-c10-grok-v2.log`. Backend session `01a0757a-497b-7d23-8e36-9c7c72ddceed`.

## Freshness

`product-fidelity-2026-09-06.md` is the earlier Codex-blocked snapshot. Its no-image statements apply only to that earlier stage. The old PNG image-brief rows, old screenshots/render checks, old copy/five-second reviews and saved `fidelity-2026-09-06/check_cuts-historical.json` are historical, not current image approval. The final `check_cuts.json` is a source-text/structure and image-dimension validator, not visual semantics. HTML regeneration remains the parent's responsibility.

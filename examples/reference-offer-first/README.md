# 또박 손글씨 4주 — complete synthetic offer-first reference

**This is a complete plugin-workflow demonstration, NOT publish-ready real commerce.** Open [index.html](index.html) to view the11 generated cuts and legal information. All product terms, testimonials and metrics are fictional.

## Source origin and approval boundary

Publication scope: raw agent/provider `.log`, `.jsonl` and `*-stdout.txt` files
referenced by historical reports remain local. Only the compact test, apply,
final-generation and gate-result logs explicitly allowed in `.gitignore` ship.
The artifact manifest retains their historical hashes but marks the exclusion
patterns and exceptions; a local-only entry is not a missing release file.

`raw-input.md` begins with the byte-preserved original from `../style-pack-variants/offer-first/raw-input.md`. One separately headed maker-constructed fixture addition supplies recommended practice twice/week for15minutes and photo preparation once/week for5minutes. The illustrative weekly budget is video2×15 + practice2×15 + photo1×5 =65minutes, without rounding; it is neither measured operating fact nor an individual time/result guarantee. No other product or subscription policy was invented.

Earlier customer reviews returned7/8 because this workload was missing. Those reports remain historical in `qa/sim-review-r1.md`, `qa/sim-review-r2.md` and individual reports; their input snapshots are preserved in `qa/history-incomplete/`. They were not relabeled as passes. After explicit fixture scope clarification, a fresh real humanize call, semantic review, Gate1 and four new independent reviewers evaluated the new snapshot.

Implementation permission is not approval of unseen copy. **Actual human/user exact-copy approval, legal clearance and real-commerce evidence were not obtained.** Quantitative entries document implementation-agent semantic review, independently checked by text reviewers, not human sign-off.

## Scorecard

| Stage | Measured/reviewed result | Evidence |
|---|---|---|
| Real humanize | Configured Codex default gpt-6-astra; saved preview reviewed then applied;8 accepted/11,0 guard rejections,3 unchanged; change rate0.031 | qa/humanize.json, qa/humanize-fixture-review.md, qa/humanize-fixture-apply.log |
| Gate1 | PASS;11 cuts;0 failures,0 warnings; T5/T8 PASS;11 images | qa/check_cuts.json |
| Gate2 | New snapshot: customer8/8, regulator0 draft violations, CRO24/30, competitor3 comparisons/defenses; all four PASS within fictional-text scope | qa/sim-review-fixture.md, qa/reviewer-*-fixture.md |
| Image inspection |11/11 original1024x1024 JPEGs read; source bytes retained; four wrapper retrieval errors recovered | qa/image-review.md, qa/image-provenance.json |
| Assembly |11 cuts, no missing images;3 intentional legal placeholders | qa/assemble.json |
| Render390/860 | PASS;11 loaded images;0 missing cuts, broken images, overflow, cut-width or image-width mismatches | qa/render_check.json, qa/render-review.md |
| Blind first-screen proxy |3/3 core answers match product/audience/goal; residual demo-label meaning caveat retained | qa/five-second.md |
| CTA | Image-only visual text; manual_review, measured DOM coordinates null; no checkout | qa/render_check.json |
| Remaining source gaps |3 distinct legal placeholders, visibly exposed | legal.md |
| Publication | Not applicable: synthetic demo, not actual commerce | raw-input.md, legal.md |

Required template sequence: C2 → K10 → K5 → K6 → X10 → P5 → K11 → X6 → L2 → C1 → C2. The opener identifies the class rather than only a discount; benefits01-07 are ordered; class and subscription prices are separate; refund shows both7days and2lessons; FAQ includes answers. Layouts are deliberately simple generated paper cards, not pixel-exact template illustrations.

## Files and traceability

- Inputs/copy: raw-input.md, intake-checklist.md, offer-check.md, cuts.md, legal.md, review-log.md.
- Humanize: cuts.original.md is the FIRST historical original. `qa/humanize-fixture-final-source.md` is the latest generation source; `cuts.humanized.md` and `qa/humanize.json` are its reviewed/applied result. An earlier fixture preview that confused total time with practice-only time was explicitly rejected and archived.
- Images: images/c01.jpg–c11.jpg, image-briefs.md and exact prompts under qa/prompts/. `qa/reference-anchor-original.jpg` is the verified style anchor used before the final label-size correction.
- Surface: index.html; qa/render-390.png, render-860.png and both -full.png captures.
- Reports identify source hashes. `qa/approved-text-cuts.md` is the four-reviewer text snapshot. Final cuts.md differs ONLY by11 image-path metadata lines; its copy equals both that snapshot and cuts.humanized.md.
- `qa/artifact-hashes.json` fingerprints final artifacts and current scripts. Historical manifests remain historical, not final-file integrity claims.

## Reproduce with saved originals

From `plugins/sangse`:

```sh
python3 skills/sangse/scripts/check_cuts.py examples/reference-offer-first --category common --platform web
python3 skills/sangse/scripts/assemble_html.py examples/reference-offer-first --platform web
python3 skills/sangse/scripts/render_check.py examples/reference-offer-first --widths 390,860 --full
```

These commands refresh reports/screenshots. The assembler uses the web720px preset; at390px it fills the viewport. No local server or fabricated payment endpoint is needed. Browser capture requires the existing Node/Playwright installation used by render_check.py.

For a new real humanize run, copy `qa/humanize-fixture-final-source.md` into a separate scratch directory as `cuts.md`, then run the current `humanize_cuts.py` on that directory with `--category common`. Read the preview and meanings, review its quantitative source links, then run only `<directory> --apply`. Do not use `--from-json` to imitate generation or edit hashes to bypass approval. The saved preview is evidence of the actual run, not a promise of deterministic future model wording. No commit was created for this work. Do not reapply it onto the final `cuts.md`: image metadata intentionally changes that file's hash.

To regenerate images, use the exact saved prompts through the existing sibling `../pumasi/skills/image/scripts/imagen.sh <prompt> <target.jpg> 1:1 --backend grok`; inspect the initial anchor before passing it with `--ref` to the remainder. Do not overwrite the saved verified artifacts without fresh image review, assembly, captures and blind review. Grok's internal image-model version is not exposed. In this run C06-C09 exited5 because prose was joined to the saved session path; recovery used that exact path and original bytes, never an unrelated cached image.

## Remaining caveats

- Actual business/contact/checkout/terms, subscription auto-renewal/cancellation/refund scope, and real class materials/testimonial consents/offer-operation evidence are missing. The three yellow legal placeholders are intentional; render metrics count6 DOM nodes because each container includes a highlighted child.
- Blind review is a fresh-agent first-impression proxy, not a timed human study. The final reviewer recognized product, audience and goal, but found the meaning of "가상 시연" unclear and could not see full contents in the first screen. Its exact response is preserved.
- The regulator's zero count applies to this explicitly fictional text only; the education-specific compliance filter is incomplete and refund enforceability was not established.
- All generated image bytes were preserved. Some layouts are simpler than prompt requests; this is documented in image-review.md, not called pixel-perfect fidelity.

Prices, refund terms and deadlines carry real payment and legal consequences. Verify them directly before any actual publication. A future A/B hypothesis is whether naming the class plus offer improves first-screen comprehension over a discount-only opener; no conversion lift was measured or promised.

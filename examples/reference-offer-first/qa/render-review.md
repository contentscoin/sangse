# Final browser surface review

Time: 2026-09-06T08:10:36.441953+00:00. Current render_check.py SHA256 `d6e10b7f7ad30642f895f47b8a15527c2e0a2d02b02583f414ef882eb120a6ce`; assemble_html.py SHA256 `3e1a2138bf69e6a0b618082a59d152eb48c8b841ab4cab32309932d5ee4aee40`. Actual Playwright viewport emulation, not Chrome window-size flags. Fresh first-screen and full screenshots at390 and860 were directly read after final anchor replacement.

Both widths PASS:11 image cuts,0 missing-image cuts,0 broken images,0 request failures,0 horizontal overflow,0 cutWidthMismatches,0 imageWidthMismatches. Main width390 at390 viewport and720 at860 viewport (web preset). Page heights5905 and9271. All image elements fill main width. Original image-internal cream borders are design pixels, not CSS width failures.

CTA is image text, NOT a clickable checkout: ctaPositionStatus=manual_review, firstCtaTop=null, ctaInFirstTwoViewports=null. C01 CTA visibly appears in the first screen at both widths, but no DOM CTA is measured. closingCutTop=0 reflects the opening Q8 offer and must not be reported as final CTA position.

Three unresolved legal placeholders are visibly yellow. The script reports6 matching DOM nodes because each .todo container contains a .todo-inline mark; this means3 distinct placeholder messages, not6 missing facts. No placeholders are hidden and no image placeholders remain. The legal sections use bullets, not a spec table; this demonstration does not claim a rendered table exists.

Direct inspection: final class name and fictional label readable and uncropped, all11 cards present in order; price/refund conditions retained; no browser overlap, broken glyphs apparent or hidden missing-information blocks. Longer full screenshots are scaled by the viewer, so cut-level text was also read in the original individual JPEGs. Individual responses and blind-proxy caveat appear in five-second.md.

## File identities
- `cuts.md` SHA256 `1a1f6f5c2047bcfbeca6f2ae53a60c3353bae17bcbdc08cf9ec64d2aa889ee57`
- `legal.md` SHA256 `0a15a3fa3e62308a61319496aa300786294bf600b46522f27e7147e9a3bcc31c`
- `raw-input.md` SHA256 `c9e32d897c642519692bed200c16f966483642dbf3659fb5ecad4eaf721c1713`
- `intake-checklist.md` SHA256 `8b59e1568431f1c4b79b2c2c8808341754906c8e40df2d48b25c4f1ea869b18d`
- `index.html` SHA256 `0a69714863e072db9708db0e320bb0119d040fcc72a687fe0f04aa055e7aa3b7`
- `qa/render_check.json` SHA256 `4ba8036191f1428f48b2a4380b489184a6eb35b4ac1892c7308cd02a91c856d4`
- `qa/render-390.png` SHA256 `d58b5e32575ddfaf773b2e88edde7cf085c17a0e7589dc5fee852097414ddb96`
- `qa/render-860.png` SHA256 `ba9578276f425bd1a70ea66081f1f3d338fe6699a722e5e9c6fb1331137ec519`
- `qa/render-390-full.png` SHA256 `b5ef84de1efdf7bcae657579510362747085e460855b0ca865bc19d24d5db5ad`
- `qa/render-860-full.png` SHA256 `c54d06cb181d50ea0f8eab858771836f7a031dadb0179a488d28779132cb2c69`

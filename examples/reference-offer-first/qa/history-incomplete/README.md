# 또박 손글씨 4주: current-workflow reference attempt

**Blocked at Gate 2. This is an incomplete fictional demo, NOT publish-ready real commerce.**

This directory preserves a reproducible authoring and review attempt using only the existing fictional offer-first inputs. It is not the completed image/HTML reference requested: the independent customer reviewer returned Yes 7/8 after the targeted correction, because recommended practice and photo-submission workload is absent from the allowed source. No workload estimate was invented and no failed review was presented as PASS.

## Artifacts delivered

- `raw-input.md`: byte-identical existing fictional source.
- `intake-checklist.md`: source-linked, individually assessed quantitative paraphrases, with reviewer identity and lack of actual human approval explicit.
- `offer-check.md`, `cuts.md` (11 cuts, required offer-first sequence), `legal.md`.
- `cuts.original.md`, `cuts.humanized.md`, `qa/humanize.json`, actual generation/apply logs and pre-apply hash review.
- Four independent role reports, combined round-1 report, corrected-draft customer re-review, source hashes and `review-log.md`.
- `qa/check_cuts.json` and actual Gate 1 logs.
- `qa/artifact-hashes.json`: final delivered text and workflow-script fingerprints.

## Scorecard

| Stage | Actual result | Evidence |
|---|---|---|
| Real humanize | Applied saved real Codex preview; gpt-6-astra; accepted 6/11, rejected 0, unchanged 5; change rate 0.04 | qa/humanize.json, qa/humanize-review.md, qa/humanize-apply.log |
| Gate 1 | PASS; 11 cuts; 0 failures, 0 warnings; T5 PASS; T8 PASS | qa/check_cuts.json |
| Gate 2 | FAIL; customer 7/8 after correction; Q5 unresolved | qa/sim-review-r2.md, qa/reviewer-customer-r2.md |
| Other text roles | Historical round 1: regulator 0 draft violations, CRO 24/30, competitor 3 openings/defenses | qa/sim-review-r1.md |
| Exact-copy human/user approval | Not obtained; scope permission is not approval of unseen copy | offer-check.md |
| Images | Not generated, not reviewed; image INFO at Gate 1 is not image PASS | qa/check_cuts.json |
| HTML / 390 and 860 render / blind first screen | Not run: blocked by Gate 2; no fabricated report or screenshot | qa/sim-review-r2.md |
| Missing information | 4 visible legal placeholders | legal.md |
| Publication | Not applicable: fictional demonstration, not real commerce | raw-input.md, legal.md |

## Concrete blocker

Only video cadence and duration are supplied. Additional recommended practice frequency, time per practice session and photo-submission preparation time are unknown. C08 now distinguishes video from other work; legal exposes the gap. The independent reviewer states that honest disclosure resolves the wording defect but still cannot answer "How demanding is it?" affirmatively. Current verification.md requires all eight customer answers to be Yes and forbids continuing past FAIL. Resolving this requires source-owner input or an explicit workflow decision; this directory does neither on their behalf.

Other missing real-commerce information: actual business/contact/checkout/terms, subscription cancellation/auto-renewal/refund scope, genuine materials/testimonial consents and real offer-operating evidence. No checkout URL or working purchase CTA exists.

## Reproduction

From the `plugins/sangse` directory, this read-only-input Gate 1 command reproduces the delivered automatic result (it refreshes the report):

```sh
python3 skills/sangse/scripts/check_cuts.py examples/reference-offer-first --category common --platform web
```

The actual generation command was:

```sh
python3 skills/sangse/scripts/humanize_cuts.py examples/reference-offer-first --category common --model gpt-6-astra --timeout 300
# After reading the preview and recording the semantic/hash review:
python3 skills/sangse/scripts/humanize_cuts.py examples/reference-offer-first --apply
```

Do not re-apply the saved preview onto the final file: the later customer-review correction intentionally changes the source hash, so current --apply should reject that stale operation. Reproduce the historical humanize operation in a separate scratch directory using `cuts.original.md` as `cuts.md` and the saved `cuts.humanized.md`/`qa/humanize.json` from a pre-apply generation; do not alter report hashes to bypass the contract. A fresh real generation is nondeterministic; saved artifacts, not identical new wording, are the reproducibility evidence.

Image generation was not attempted. The authorized later route is existing pumasi imagen.sh with Grok, square originals >=900px, inspecting the anchor before referenced remainder. No Grok success, recovery, image model identity or visual approval is claimed in this blocked attempt.

Prices, refunds and deadlines have real legal and payment consequences. Verify them directly before any real publication. A possible later A/B hypothesis is whether class identity plus an offer is easier to understand than a discount-only opener; no experiment or conversion gain was measured here.

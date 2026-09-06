# T5 numerical provenance

T5 no longer treats source numbers as a bag of reusable digits. A quantitative
copy field must match a complete input statement, or an explicitly reviewed
rewording at that destination. Number, unit, attribute, range and qualification
changes invalidate that match. Multiline bodies are checked together, not as
independent numbers or lines. Legal rows/lines are scoped to their section.

The implementation is isolated in `scripts/numerical_provenance.py`.
Its typed `check_numbers` contract accepts a sequence of `NumericalCut` records
(`id` and `fields`), legal text, and a source-filename/text mapping. It returns
`(Status, list[str])`, where status is `PASS`, `WARN` or `FAIL`, without file I/O.
The CLI retains cut parsing and report writing. Calculations remain
human-reviewed approvals, not arithmetic verified by exact matching.

## Reviewed rewordings

Put a fenced `quantitative-facts` JSON array in `intake-checklist.md`:

````markdown
```quantitative-facts
[
  {
    "at": "C07.body",
    "claim": "Price per stick: 1,307 won",
    "sources": [
      {
        "file": "intake-checklist.md",
        "quote": "Derived price per stick: 1,307 won = 39,200 won / 30 sticks (rounded to the nearest won)."
      }
    ]
  }
]
```
````

The quoted derivation must actually exist outside this block. Quote the input
facts used in the derivation too when recording an approval. `sources` accepts
only `raw-input.md` and `intake-checklist.md`, never output copy, arbitrary paths
or another approval block. Missing quotes, malformed declarations and unclosed
blocks fail T5. Missing input without an invalid declaration remains WARN.

`at` is a cut ID plus field (`C07.headline`, `C07.body`, `C07.footnote`, etc.),
or `legal:` followed by the exact level-two section title. `claim` is the entire
field (body lines joined by `\n`), or the entire legal row/line. Multiple approved
rewordings at one destination are possible. There are no wildcards or automatic
approval generation in the validator. An approval at one cut/field cannot
authorize the same bare quantity at another. Non-numerical body lines remain
part of the match, so changing a preceding attribute within the body also fails.

The reviewer must confirm the source supports the **same subject, attribute,
quantity, unit, serving basis, conditions and time period** before adding an
approval. Do not copy rejected output into this block to make the gate green.
Exact quoted-source presence is checked by code; semantic equivalence is an
explicit human-reviewed input, not something the code infers.

## Normalization and exclusions

- Whitespace within lines, Markdown bold markers and leading bullet markers are
  formatting. Thousands separators and spacing between a number and the listed
  common measurement units are normalized. Unit case, unit conversions, decimal
  values, range endpoints, words and conditions are not discarded.
- Cut headers, image paths, visual directions, backgrounds and text positions
  are metadata, not copy. Other parsed cut fields, including tags and persona,
  are checked. Explicit `Point N` / `STEP N` layout labels alone do not create a
  quantitative claim; their following text is still checked.
- Existing missing-data placeholders remain excluded. Small numbers (including
  1 through 4) in actual claims are not exempt.

## Limits and compatibility

This is a conservative source-link/integrity gate, **not deterministic NLP or
arithmetic verification**. It detects Arabic-digit claims. Spelled-out numbers,
truthfulness of supplied facts, false reviewer approvals, qualitative meaning,
and semantic context outside a checked field still require review. A source
line is assumed to be a complete statement; do not provide ambiguous bare
values without their attribute and conditions. T5 PASS means the quantitative
copy has an exact or reviewed link, not that arbitrary prose has been proved.

Unannotated quantitative paraphrases now fail even if every digit/unit exists
somewhere in the input. Correct new paraphrases need a reviewed declaration.
Formatting-equivalent exact statements do not. Derived prices, totals, dates
and periods need their documented calculation and reviewed rewording; merely
mentioning an operand elsewhere cannot authorize the result. Arithmetic and
rounding are reviewed when the source fact is authored, never evaluated as code.

The shipped intakes contain scoped approvals. The spec-showcase cut has the
unsupported frequency claim removed, as recorded below. The three ginseng
style variants now carry their own raw input, intake and legal copies; neither
the checker nor the fixture runner silently supplies missing inputs. Main
example image corrections and their verification status are recorded in each
product's dated fidelity report. T5 does not approve those image contents.

The ginseng alternative opening used by the offline humanize test is retained
as a reviewed rewording, not a general humanize exemption. Its exact `C01.body`
preserves the product source's six-year-old ginseng and 10 mL stick, the stated
morning/commute convenience, and the intake instruction of one stick per day.
Those three existing raw-input statements are quoted in the approval. No new
quantity, unit, serving basis or efficacy claim is introduced. Entire-field
matching requires this separate record for the supported alternative wording;
other generated openings are not authorized by it.

The fixture migration also makes previously implicit facts explicit:

- Ginseng: per-stick price rounds 39,200 / 30 to 1,307 won; a box lasts 30 days;
  the September launch ends before the October regular-price period.
- Jelly: a box lasts 30 days; the September launch ends before October.
- Catechin: the 10-capsule sample lasts 5 days at 2 capsules/day. The former
  digit-set gate admitted that 5 through unrelated source identifiers.
- Spec showcase: C02's claim of millions of vibrations per second had no
  supplied source. It was removed and replaced with a qualitative statement
  that the product uses ultrasonic misting, supported by the original product
  input. The invented frequency setting and its approval were removed; the
  replacement approval cites only the existing product and flow-rate facts.

## Focused regression command

From the plugin directory:

```sh
python3 -m unittest discover -s tests -p 'test_numerical_provenance.py' -v
```

The tests exercise the real CLI and its saved JSON, including the reported
7-mg-to-30-mg mutation, same-unit attribute swaps, serving basis, ranges, units,
small numbers, legal copy, stale links, scoped approvals, derived per-stick
prices and all nine current examples. Tests assert gate behavior, not prose.

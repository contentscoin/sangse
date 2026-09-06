# Gate 2: corrected-draft customer re-review

Result: FAIL, customer Yes 7/8. See reviewer-customer-r2.md for the actual independently verified final-input hashes, timestamp and script fingerprints.

C08 now says "영상 외 연습·사진 제출 시간은 별도예요". legal.md explicitly exposes missing recommended practice frequency, per-session time and photo-submission preparation time. The reviewer confirms the disclosure defect is resolved, but the underlying information gap prevents an affirmative Q5 answer. No source-supported wording change can supply that missing information.

The other three reviewers' round-1 results remain historical results on their stated hashes; they were not silently promoted to the changed final snapshot. No overall Gate 2 PASS is claimed.

A patch application failed before the correction landed. A mistakenly sequenced review therefore read the old snapshot; its report is preserved as reviewer-customer-stale-attempt.md and its log as reviewer-customer-r2.log. It is not evidence for the corrected copy. The corrected-draft reviewer then read the actual changed files and again returned FAIL. This is disclosed rather than omitted as a failed retry.

Concrete blocker: the original fictional inputs contain no recommended practice workload. The task forbids inventing inputs. Current verification.md forbids proceeding after Gate 2 FAIL, and requires escalation when the customer question remains unanswered. Therefore no images, assembly, browser render, or blind first-screen test were run. This is not an image-backend failure.

허구 데모의 텍스트 초안은 CRO 관점에서 PASS입니다. 가격·구성·환불 조건과 가상 후기 표시가 원자료와 대체로 일관됩니다. 실제 고객 증거, 법률 검토 또는 게시 준비 완료를 뜻하지 않습니다.

검토 일시: `2026-09-06T07:35:38.388308+00:00` · 모드: `cuts` · 독립 CRO 리뷰
제공된 버전: HEAD `61f6f02495775295264c3a10b4ab29972e6ede1a` + working changes
제공된 `check_cuts.py` SHA256: `3f5465f02e0a0cb26c428916f8ac25e1582aa74426c9015cfc1dfeb56da50470` — 스크립트 실행·해시 재검증은 하지 않았습니다.

- **첫 화면 가치제안: 4/5** — C01의 “또박 손글씨 4주”, “온라인 클래스”, “글씨가 고민인 직장인·학부모라면”, “목표는 부끄럽지 않은 손글씨 메모”가 상품·대상·목표를 전달합니다. 실제 10초 이해도는 시험하지 않았습니다.
- **가독성: 4/5** — “연습 사진을 제출해 주세요”, “주 1회 피드백을 드려요”처럼 짧고 구체적입니다. C05의 “첫 달 50%”는 원자료를 유지했지만 무엇의 50%인지 표현이 생략되어 있습니다.
- **CTA·오퍼 배치: 4/5** — C01의 오퍼, C05의 가격 비교, C10의 조건 안내 뒤 C11의 “손글씨 연습 시작해 볼까요”가 자연스럽게 연결됩니다. “클래스 살펴보고 연습해요”도 행동을 제시합니다. 컷 구성으로 평가했으며 반복 DOM 버튼을 요구하지 않았습니다.
- **사회적 증거의 정직성: 5/5** — C06의 “가상 후기”와 “모든 후기와 수치는 시연용 가상 설정입니다”가 후기·평점·완주율의 성격을 명시합니다. 이 점수는 허구 표시의 정직성에 대한 평가입니다.
- **사양 충분성: 4/5** — C07의 “주 2회 · 총 8강 · 각 15분”, “연습장 PDF 4권”, “사진 제출 · 주 1회 피드백”과 C08의 주차별 내용이 학습량과 제공 구성을 설명합니다. 구독의 미확정 조건은 `legal.md`에 공개되어 있습니다.
- **인식 단계 적합성: 3/5** — “얼리버드 49,000원”으로 시작하는 구성은 상품을 이미 아는 방문자에게 적합할 수 있습니다. 입력의 “자사 랜딩(웹)”은 유입 경로를 뜻하지 않으므로 검색·재방문 또는 콜드 광고 유입과의 일치는 확정할 수 없습니다.

정량 의미를 대조하면 49,000원은 얼리버드 단건 가격이며 인원 제한과 기한이 함께 유지됩니다. 59,000원의 기간과 이후 79,000원도 보존되어 있습니다. 월 19,000원은 별도 구독이고 첫 달 조건을 이후 모든 달로 확대하지 않았습니다. 환불은 **결제 후 7일 이내이면서 2강 이하 수강**이라는 두 조건을 유지합니다. 강의 빈도·총수·편당 시간, PDF 권수, 피드백 빈도도 서로 바뀌지 않았습니다. 평점·후기 수·수강생 수·4주 완주율은 별개 속성으로 유지되며 새로운 파생 계산은 없습니다.

**우선 수정 1개:** C05의 `sub` “선착순 100명 · 2026-09-30까지”를 “얼리버드: 선착순 100명 · 2026-09-30까지”로 명시하세요. 현재 가격표 전체 위에 놓인 조건이므로, 적용 대상을 직접 적으면 2차·정가에도 적용된다는 오독을 줄일 수 있습니다. 다른 컷과 원자료에서는 범위가 명확하여 초안 전체의 모순으로 판정하지 않았습니다.

사용자 승인은 없습니다. `intake-checklist.md`의 위치별 기록은 구현 에이전트의 의미 검토이며 사람 승인으로 간주하지 않았습니다. 이미지는 아직 없으므로 이미지 내 글자 가독성·CTA 위치, 클릭 가능 여부와 렌더·5초 테스트는 미검증입니다.

읽은 파일의 SHA256을 새로 계산했으며, 제공된 6개 값과 모두 일치합니다.

```text
/Users/chulrolee/gptaku_plugins/plugins/sangse/examples/reference-offer-first/cuts.md
0794ecd4db1e2662a2755a1eee870d753406b24368ec6921b287282ffd028d38

/Users/chulrolee/gptaku_plugins/plugins/sangse/examples/reference-offer-first/legal.md
8011932707af5a27d08dd29bac67a9cedfd5fdd34cf973a1a60a795771b12de7

/Users/chulrolee/gptaku_plugins/plugins/sangse/examples/reference-offer-first/raw-input.md
f6beea4c824e8e6cb55f553e9d0e372b01d6014c79cc488b3ada6b577d943138

/Users/chulrolee/gptaku_plugins/plugins/sangse/examples/reference-offer-first/intake-checklist.md
5ad598144c06b221a421a7e4088722b4cf6765640cf7e84655258d8884c01956

/Users/chulrolee/gptaku_plugins/plugins/sangse/skills/sangse/references/verification.md
1cc251f2476725ac7e775806b7663938e0890140c34d5c986002e4f2d9effaa2

/Users/chulrolee/gptaku_plugins/plugins/sangse/skills/sangse/references/numerical-provenance.md
1077f9f0e49b9ca0be4090544376f81a0e2b2900aca7bc3d6fdc3197bf0e61f9

/Users/chulrolee/gptaku_plugins/plugins/sangse/skills/sangse/references/evidence.md
c0d8e5b84010f81a0e24ce670b5f71eff3472ed568a531ce23a1912a049dce1b
```

VERDICT: PASS

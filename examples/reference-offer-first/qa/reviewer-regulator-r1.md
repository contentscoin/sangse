허구 데모 텍스트 범위에서 **위반 없음. 초안 위반 0건**입니다. 실제 광고의 적법성·고객 증거의 진실성·판매 준비 완료를 뜻하지 않습니다.

검토 일시: `2026-09-06T07:35:38.388308+00:00`(제공값). 모드: `cuts`. 제공된 플러그인 HEAD: `61f6f02495775295264c3a10b4ab29972e6ede1a` + 작업 변경. 제공된 `check_cuts.py` SHA256: `3f5465f02e0a0cb26c428916f8ac25e1582aa74426c9015cfc1dfeb56da50470`. 스크립트는 실행하지 않았습니다.

`verification.md` §2·§5, `numerical-provenance.md`, `compliance.md` §1–3·§7을 적용했습니다. **식품 규정은 이 교육 데모에 적용되지 않습니다. §6 교육 분야 상세 필터는 미작성 상태**이므로 실제 거래의 법률 검토를 포괄하지 않습니다.

경계 표현 세 가지를 검토했습니다.

- **한정 가격** — C01·C05·C11의 “얼리버드 49,000원”, “선착순 100명 · 2026-09-30까지”는 원자료의 얼리버드 조건입니다. 2차 59,000원은 `10-01~10-15`, 이후 정가는 79,000원으로 유지됩니다. 제공 기준의 표시광고법 제3조 및 다크패턴 규제와 관련된 표현이지만, 명시된 허구 시연 범위에서 거짓 운영으로 판단할 근거는 없습니다. 필수 수정 없음.
- **후기·성과 수치** — C06의 “평점 4.8/5 · 후기 312개”, “수강생 1,240명 · 4주 완주율 71%”는 원자료의 대상·척도·기간을 유지합니다. 완주율을 개선 성공률로 바꾸지 않았고, “모든 후기와 수치는 시연용 가상 설정입니다”라고 표시합니다. 표시광고법 제3조·추천보증 심사지침 관점에서 실제 고객 증거로 인정할 수는 없지만, 이 데모의 조작 후기 위반으로 집계하지 않습니다. 필수 수정 없음.
- **조건부 전액 환불** — C10의 “결제 후 7일 이내 / 2강 이하 수강 시 / 전액 환불”은 두 조건을 모두 충족해야 한다는 원자료와 일치합니다. C03·C09와 `legal.md`도 같은 조건입니다. 다만 제공 기준 §7의 전자상거래법상 청약철회 설명만으로 디지털 콘텐츠의 공급 개시·동의·예외 및 해당 제한의 집행 가능성을 확정할 수 없습니다. 데모 수정은 불필요하며 실제 약관의 유효성은 미판정입니다.

정량 의미도 대조했습니다. 주 2회·총 8강·각 15분, PDF 4권, 사진 제출에 따른 주 1회 피드백, 4주 커리큘럼과 혜택 7개의 범위가 유지됩니다. 별도 월 구독 19,000원·첫 달 50%를 단건 가격에 합치거나 새로운 할인 금액으로 계산하지 않았습니다.

`legal.md`는 사업자·문의처·결제 경로·이용약관 및 구독 자동결제·해지·환불 조건의 누락을 공개합니다. 이는 실판매 검토의 미완료 사항이며 이번 허구 초안의 위반으로 집계하지 않습니다. **사람의 승인은 없습니다.** 구현 에이전트의 위치별 의미 검토는 `numerical-provenance.md`의 사람 승인 요건을 충족했다는 증거가 아닙니다. 이번 판정도 그 승인을 대신하지 않습니다. 이미지는 미생성이므로 이미지·가독성·렌더 검수는 통과 판정하지 않았습니다.

읽은 파일의 SHA256을 직접 재계산했습니다. 제공된 여섯 해시는 모두 일치합니다.

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

/Users/chulrolee/gptaku_plugins/plugins/sangse/skills/sangse/references/compliance.md
2efeefc75da133eee2e4b9f4144c1b01922a924cc2687d828a67ec5936ef829c
```

VERDICT: PASS

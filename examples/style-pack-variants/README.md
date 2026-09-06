# style-pack-variants - 카피 전용 스타일 비교

[풍기 홍삼 메인 예시](../punggi-red-ginseng-stick/)를 세 스타일 팩으로 편성한 컷 시트다. 각 폴더에는 2026-09-06 복사 시점의 실제 메인 예시 파일 `raw-input.md`·`intake-checklist.md`·`legal.md`가 독립 사본으로 들어 있다. 심볼릭 링크나 실행 시 부모 폴더 입력을 빌리는 방식이 아니다. 필요한 정량 승인 누락을 피하려고 승인 블록을 잘라내지 않고 그대로 복사했다. 이후 입력이나 카피 변경은 해당 폴더에서 출처와 승인을 다시 검토해야 한다.

**6팩 모두 이미지 없는 카피 전용 시안**이다. 팩이 시퀀스·팔레트·정렬을 어떻게 바꾸는지 비교하는 용도이며 이미지 검수 완료나 게시 준비 완료 예시가 아니다. 향후 별도 완성형 레퍼런스 예시를 만들 수 있지만 현재는 존재하지 않는다.

| 폴더 | 팩 | 첫 3컷 | 특징 |
|---|---|---|---|
| story-first/ | 고민 장면 스토리형 | X9 K2 K6 | 고객 목소리 말풍선 오프너, 다크·탄 배경 교차, 클로징 오퍼(X10) |
| checkpoint/ | 핵심 포인트 체크리스트형 | K2 K5 K6 | 밝은 배경만, 전부 중앙 정렬, 포인트 3 심화 + STEP 라인아트 + 구성품 그리드 |
| proof-first/ | 근거·수치 우선형 | P1 K2 P2 | 근거 히어로 → 인증·수상 배지 그리드 → 리뷰 그리드(자료 없는 칸은 [자료 필요]) |

과거 실험의 PASS를 현재 파일의 승인으로 재사용하지 않는다. 메인 예시는 v0.4에서 시작한 역사적 QA를 포함하며, 2026-09-06 교정과 이미지 교체·검수가 진행 중이다. 생성은 외부 장애 뒤 대체 경로로 재개됐고 원본 JPEG(`cNN.jpg`) 교체도 허용한다. 현재 컷별 상태는 각 메인 상품의 `qa/product-fidelity-2026-09-06.md`에서 확인한다. 이 변형 시트의 텍스트 검사는 메인 이미지 검수를 대신하지 않는다.

## 비식품 3팩 (가상 입력 포함)

| 폴더 | 팩 | 입력 | 첫 3컷 | 특징 |
|---|---|---|---|---|
| lookbook/ | 룩북형 | 린넨 셔츠(common/web) | F1 F2 F3 | 무카피 컷 3, 좌측 정렬, 배경 3종, 헤드 평균 5자 |
| spec-showcase/ | 스펙 쇼케이스형 | 무선 미니 가습기(common/smartstore) | S1 S1 P3 | 네이비↔그레이 교차, 중앙 정렬, 좌우 비교·수치 카드 |
| offer-first/ | 혜택·구성 프로모션형 | 손글씨 클래스 랜딩(common/web) | C2 K10 K5 | 할인 숫자 히어로(랜딩 전용), 혜택 01~07, 계단식 가격표 |

모든 입력은 가상 설정이며 실제 상품의 인증·사양·후기를 검증한 자료가 아니다. 현재 계약은 전체 템플릿 44종, 시트당 10~20컷이다.

## 독립 실행과 판정 범위

플러그인 루트에서 실행한다. 명령은 각 폴더의 `qa/check_cuts.json`을 새로 쓰므로 역사적 QA 보존이 필요하면 폴더를 임시 위치에 복사해 실행한다.

```bash
python3 skills/sangse/scripts/check_cuts.py examples/style-pack-variants/story-first --category health_food --platform smartstore
python3 skills/sangse/scripts/check_cuts.py examples/style-pack-variants/checkpoint --category health_food --platform smartstore
python3 skills/sangse/scripts/check_cuts.py examples/style-pack-variants/proof-first --category health_food --platform smartstore
python3 skills/sangse/scripts/check_cuts.py examples/style-pack-variants/lookbook --category common --platform web
python3 skills/sangse/scripts/check_cuts.py examples/style-pack-variants/spec-showcase --category common --platform smartstore
python3 skills/sangse/scripts/check_cuts.py examples/style-pack-variants/offer-first --category common --platform web
```

검토 대상은 항상 로컬 `cuts.md`+`legal.md`+`raw-input.md`+`intake-checklist.md`다. [정량 출처 계약](../../skills/sangse/references/numerical-provenance.md)에 따라 정확한 문장 또는 위치별 사람 검토 승인으로 연결한다. 파생 계산의 산술은 사람이 확인하며 자동 게이트가 계산을 증명하지 않는다.

텍스트 초안 PASS, 이미지 검수, 게시 준비는 [별도 상태](../../skills/sangse/references/verification.md)로 보고한다. 보고에는 입력 경로·SHA-256·버전·검토 일시를 남긴다. 이미지가 없는 시트의 자동 PASS나 T8 PASS를 실제 이미지·상품의 검증으로 읽지 않는다. 가상 시연의 게시 준비 상태는 해당 없음이다.

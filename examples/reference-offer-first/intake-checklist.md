# Intake — ttobak-handwriting-class (가상 서비스, 인터뷰 생략)

| 슬롯 | 상태 | 내용 요약 | 출처 |
|---|---|---|---|
| M1 무엇 | 채움 | 4주 손글씨 클래스: 8강 15분 + PDF 4권 + 주 1회 피드백 | raw-input.md |
| M2 누구 | 채움 | 글씨 콤플렉스 20~40대 직장인·학부모 | raw-input.md |
| M3 가격 | 채움 | 79,000 → 49,000(선착순 100명, ~09-30) → 59,000(10-01~10-15); 월 19,000 첫 달 50% | raw-input.md |
| M4 변화 | 채움 | 4주 뒤 부끄럽지 않은 손글씨 메모 | raw-input.md |
| S1 고민 장면 | 채움 | 학원 시간 고정, 유튜브 피드백 없음 | raw-input.md |
| S2 결과·수치 | 채움 | 1,240명, 4.8/5(312개), 완주율 71% (가상) | raw-input.md |
| S3 한계·메커니즘 | 채움 | 주 1회 사진 피드백 | raw-input.md |
| S4 사례·후기 | 채움 | 후기 2개(가상) | raw-input.md |
| S5 단계·시간 | 가상 설정 | 4주 커리큘럼 + 주 65분 가상 권장 예산 | raw-input.md 원본 및 추가 가상 입력 |
| S6 구성 | 채움 | 혜택 7개 리스트 | raw-input.md |
| S7 환불 | 채움 | 7일 이내 2강 이하 전액 | raw-input.md |
| S8 기한·할인 | 채움 | 얼리버드 09-30, 2차 10-15 | raw-input.md |
| S9 플랫폼 | 채움 | 자사 랜딩 | raw-input.md |
| S10 톤·색 | 채움 | 친근한 존댓말, 아이보리+오렌지 | raw-input.md |
| 규제 | 채움 | 교육 서비스 — 표시광고 일반 | raw-input.md |

## 검토 범위

기존 offer-first의 원본 가상 입력과 raw-input.md 말미에 명시한 기준 예제용 가상 학습 시간 설정만 사용한다. 추가 설정은 제작자 구성값이며 사용자 카피 승인이나 실제 운영 사실이 아니다. 새 고객 조사·실제 실물·판매 증거는 없다.
정량 재서술은 현재 윤문 결과를 읽은 뒤 위치별로 의미를 대조해 기록한다.
이 기록의 검토자는 구현 에이전트이며 실제 사람의 카피 승인을 뜻하지 않는다.
단건 클래스와 월 구독은 별도 옵션이다. 구독 해지·자동결제 상세는 입력에 없어 미확정이다.

## 위치별 정량 재서술 검토

검토자: OmO 구현 에이전트. 아래는 원자료를 읽고 대상·속성·수량·단위·조건·기간을 각 위치별로 대조한 시연용 의미 검토이며, 사람 검토자나 사용자의 승인을 가장하지 않는다. 자동 검사는 이 의미 판단의 진실성을 증명하지 않는다. 실제 게시 전 사람의 거래조건 검토는 미완료다.
추가 가상 입력의 주간 권장 예산만 파생했다. 영상 2×15=30분, 연습 2×15=30분, 사진 준비 1×5=5분, 합계 65분/주를 직접 대조했다. 반올림 없음. 개인별 소요나 결과 보장이 아니다. 기존 할인율 38%는 사용하지 않았다.
법정 블록의 서비스·혜택·환불 문장은 원자료의 완전한 문장과 동일해 별도 재서술 승인을 만들지 않았다.

- `C01.headline`: Class duration remains four weeks; price is early-bird class price, not monthly subscription.
- `C01.body`: Same audience and goal; 100-person cap and full September deadline qualify early-bird, no guaranteed result.
- `C03.headline`: Exactly seven numbered benefits, not seven lessons.
- `C03.sub`: 01 is the first benefit label, lifetime possession; no new duration.
- `C03.body`: 02 through 07 occur once in order; four PDF books and weekly feedback unchanged; refund explicitly conditional, both conditions in adjacent footnote.
- `C03.footnote`: Both conjunctive conditions: within seven days after payment AND no more than two lessons.
- `C04.body`: Limitations softened to audience experience, photos submitted and once each week preserved.
- `C05.sub`: 100 seats and 2026-09-30 apply to early bird only.
- `C05.body`: 49,000 early bird, 59,000 second round; following date line belongs to second round; thereafter 79,000 regular. No invented period or rounded price.
- `C05.footnote`: 19,000 is the separate monthly option, first-month 50 percent; no invented discounted monetary total or recurring class price.
- `C06.sub`: 4.8 is out of five, from 312 fictional reviews; fictional headline and footer are retained.
- `C06.body`: Both quotations and supplied anonymous roles unchanged; 1,240 students and 71 percent four-week completion remain explicitly fictional.
- `C07.body`: Twice weekly, eight total lessons, fifteen minutes each, four PDFs, photo-based weekly feedback are distinct and unchanged.
- `C08.headline`: Four weeks is course duration, not guaranteed improvement time.
- `C08.body`: Weeks one through four retain their original learning topics in order.
- `C09.body`: FAQ now answers supplied questions without new rules; frequency, both refund conditions, free retake and unlimited all-class subscription retain source scope.
- `C10.body`: Seven days after payment plus at most two lessons; full refund only if both apply.
- `C11.sub`: Class identity and four-week duration unchanged.
- `C11.body`: Early-bird price qualified by both cap and full date, explicitly fictional and not for real sale.
- `legal:단건 클래스 가격·기한`: Separate class schedule copies each original price and both early-bird conditions, without extrapolating a missing year.
- `legal:별도 월 구독 옵션`: Separate subscription preserves monthly base and first-month discount; unprovided cancellation terms remain visibly missing.

```quantitative-facts
[
  {
    "at": "C01.headline",
    "claim": "또박 손글씨 4주|얼리버드 49,000원",
    "sources": [
      {
        "file": "raw-input.md",
        "quote": "- 상품: 또박 손글씨 4주 온라인 클래스. 주 2회 영상(총 8강, 각 15분) + 연습장 PDF 4권 + 주 1회 피드백(사진 제출)."
      },
      {
        "file": "raw-input.md",
        "quote": "- 오퍼(가상): 정가 79,000원 → 얼리버드 49,000원(선착순 100명, 2026-09-30까지), 2차 59,000원(10-01~10-15), 이후 정가. 월 구독 옵션 19,000원(모든 클래스 무제한, 첫 달 50%)."
      }
    ]
  },
  {
    "at": "C01.body",
    "claim": "글씨가 고민인 직장인·학부모라면\n부끄럽지 않은 손글씨 메모가 목표예요\n선착순 100명 · 2026-09-30까지",
    "sources": [
      {
        "file": "raw-input.md",
        "quote": "- 타겟: 글씨 콤플렉스가 있는 20~40대 직장인·학부모."
      },
      {
        "file": "raw-input.md",
        "quote": "- 변화: \"4주 뒤 손글씨 메모를 부끄럽지 않게 남긴다.\""
      },
      {
        "file": "raw-input.md",
        "quote": "- 오퍼(가상): 정가 79,000원 → 얼리버드 49,000원(선착순 100명, 2026-09-30까지), 2차 59,000원(10-01~10-15), 이후 정가. 월 구독 옵션 19,000원(모든 클래스 무제한, 첫 달 50%)."
      }
    ]
  },
  {
    "at": "C03.headline",
    "claim": "받으실 혜택은|7가지예요",
    "sources": [
      {
        "file": "raw-input.md",
        "quote": "- 혜택 리스트(가상): 01 평생 소장 02 연습장 PDF 4권 03 주 1회 피드백 04 수료증 05 재수강 무료 06 커뮤니티 07 7일 환불 보장."
      }
    ]
  },
  {
    "at": "C03.sub",
    "claim": "01 평생 소장",
    "sources": [
      {
        "file": "raw-input.md",
        "quote": "- 혜택 리스트(가상): 01 평생 소장 02 연습장 PDF 4권 03 주 1회 피드백 04 수료증 05 재수강 무료 06 커뮤니티 07 7일 환불 보장."
      }
    ]
  },
  {
    "at": "C03.body",
    "claim": "02 연습장 PDF 4권\n03 주 1회 피드백\n04 수료증\n05 재수강 무료\n06 커뮤니티\n07 조건부 전액 환불",
    "sources": [
      {
        "file": "raw-input.md",
        "quote": "- 혜택 리스트(가상): 01 평생 소장 02 연습장 PDF 4권 03 주 1회 피드백 04 수료증 05 재수강 무료 06 커뮤니티 07 7일 환불 보장."
      },
      {
        "file": "raw-input.md",
        "quote": "- 환불: 결제 후 7일 이내, 2강 이하 수강 시 전액 환불."
      }
    ]
  },
  {
    "at": "C03.footnote",
    "claim": "결제 후 7일 이내, 2강 이하 수강 시",
    "sources": [
      {
        "file": "raw-input.md",
        "quote": "- 환불: 결제 후 7일 이내, 2강 이하 수강 시 전액 환불."
      }
    ]
  },
  {
    "at": "C04.body",
    "claim": "학원 시간 맞추기는 어렵고\n유튜브만 봐서는 피드백이 아쉬웠다면\n연습 사진을 보내주세요\n주 1회 피드백을 드려요",
    "sources": [
      {
        "file": "raw-input.md",
        "quote": "- 기존 한계(창업자): 학원은 시간 고정, 유튜브는 피드백이 없다."
      },
      {
        "file": "raw-input.md",
        "quote": "- 상품: 또박 손글씨 4주 온라인 클래스. 주 2회 영상(총 8강, 각 15분) + 연습장 PDF 4권 + 주 1회 피드백(사진 제출)."
      }
    ]
  },
  {
    "at": "C05.sub",
    "claim": "선착순 100명 · 2026-09-30까지",
    "sources": [
      {
        "file": "raw-input.md",
        "quote": "- 오퍼(가상): 정가 79,000원 → 얼리버드 49,000원(선착순 100명, 2026-09-30까지), 2차 59,000원(10-01~10-15), 이후 정가. 월 구독 옵션 19,000원(모든 클래스 무제한, 첫 달 50%)."
      }
    ]
  },
  {
    "at": "C05.body",
    "claim": "얼리버드 49,000원\n2차 59,000원\n10-01~10-15\n이후 정가 79,000원",
    "sources": [
      {
        "file": "raw-input.md",
        "quote": "- 오퍼(가상): 정가 79,000원 → 얼리버드 49,000원(선착순 100명, 2026-09-30까지), 2차 59,000원(10-01~10-15), 이후 정가. 월 구독 옵션 19,000원(모든 클래스 무제한, 첫 달 50%)."
      }
    ]
  },
  {
    "at": "C05.footnote",
    "claim": "별도 월 구독 19,000원 · 첫 달 50%",
    "sources": [
      {
        "file": "raw-input.md",
        "quote": "- 오퍼(가상): 정가 79,000원 → 얼리버드 49,000원(선착순 100명, 2026-09-30까지), 2차 59,000원(10-01~10-15), 이후 정가. 월 구독 옵션 19,000원(모든 클래스 무제한, 첫 달 50%)."
      }
    ]
  },
  {
    "at": "C06.sub",
    "claim": "평점 4.8/5 · 후기 312개",
    "sources": [
      {
        "file": "raw-input.md",
        "quote": "- 근거(가상): 수강생 1,240명, 평점 4.8/5(후기 312개), 4주 완주율 71% — 전부 가상 수치. 후기 2개(가상): \"글씨가 정돈돼서 메모가 즐거워요\"(직장인 3년차), \"아이 알림장 쓰기가 편해졌어요\"(주부)."
      }
    ]
  },
  {
    "at": "C06.body",
    "claim": "글씨가 정돈돼서 메모가 즐거워요\n직장인 3년차 · 가상 후기\n아이 알림장 쓰기가 편해졌어요\n주부 · 가상 후기\n수강생 1,240명 · 4주 완주율 71%",
    "sources": [
      {
        "file": "raw-input.md",
        "quote": "- 근거(가상): 수강생 1,240명, 평점 4.8/5(후기 312개), 4주 완주율 71% — 전부 가상 수치. 후기 2개(가상): \"글씨가 정돈돼서 메모가 즐거워요\"(직장인 3년차), \"아이 알림장 쓰기가 편해졌어요\"(주부)."
      }
    ]
  },
  {
    "at": "C07.body",
    "claim": "주 2회 · 총 8강 · 각 15분\n연습장 PDF 4권\n사진 제출 · 주 1회 피드백",
    "sources": [
      {
        "file": "raw-input.md",
        "quote": "- 상품: 또박 손글씨 4주 온라인 클래스. 주 2회 영상(총 8강, 각 15분) + 연습장 PDF 4권 + 주 1회 피드백(사진 제출)."
      }
    ]
  },
  {
    "at": "C08.headline",
    "claim": "4주 커리큘럼",
    "sources": [
      {
        "file": "raw-input.md",
        "quote": "- 상품: 또박 손글씨 4주 온라인 클래스. 주 2회 영상(총 8강, 각 15분) + 연습장 PDF 4권 + 주 1회 피드백(사진 제출)."
      },
      {
        "file": "raw-input.md",
        "quote": "- 진행: 1주 기본 획 → 2주 자음·모음 → 3주 문장 → 4주 나만의 서체."
      }
    ]
  },
  {
    "at": "C08.body",
    "claim": "1주 기본 획\n2주 자음·모음\n3주 문장\n4주 나만의 서체",
    "sources": [
      {
        "file": "raw-input.md",
        "quote": "- 진행: 1주 기본 획 → 2주 자음·모음 → 3주 문장 → 4주 나만의 서체."
      }
    ]
  },
  {
    "at": "C09.body",
    "claim": "피드백은? 사진 제출, 주 1회예요\n환불은? 결제 후 7일 이내, 2강 이하예요\n재수강은? 무료예요\n월 구독은? 모든 클래스 무제한이에요",
    "sources": [
      {
        "file": "raw-input.md",
        "quote": "- 상품: 또박 손글씨 4주 온라인 클래스. 주 2회 영상(총 8강, 각 15분) + 연습장 PDF 4권 + 주 1회 피드백(사진 제출)."
      },
      {
        "file": "raw-input.md",
        "quote": "- 환불: 결제 후 7일 이내, 2강 이하 수강 시 전액 환불."
      },
      {
        "file": "raw-input.md",
        "quote": "- 혜택 리스트(가상): 01 평생 소장 02 연습장 PDF 4권 03 주 1회 피드백 04 수료증 05 재수강 무료 06 커뮤니티 07 7일 환불 보장."
      },
      {
        "file": "raw-input.md",
        "quote": "- 오퍼(가상): 정가 79,000원 → 얼리버드 49,000원(선착순 100명, 2026-09-30까지), 2차 59,000원(10-01~10-15), 이후 정가. 월 구독 옵션 19,000원(모든 클래스 무제한, 첫 달 50%)."
      }
    ]
  },
  {
    "at": "C10.body",
    "claim": "결제 후 7일 이내\n2강 이하 수강 시\n전액 환불해 드려요",
    "sources": [
      {
        "file": "raw-input.md",
        "quote": "- 환불: 결제 후 7일 이내, 2강 이하 수강 시 전액 환불."
      }
    ]
  },
  {
    "at": "C11.sub",
    "claim": "또박 손글씨 4주 클래스",
    "sources": [
      {
        "file": "raw-input.md",
        "quote": "- 상품: 또박 손글씨 4주 온라인 클래스. 주 2회 영상(총 8강, 각 15분) + 연습장 PDF 4권 + 주 1회 피드백(사진 제출)."
      }
    ]
  },
  {
    "at": "C11.body",
    "claim": "얼리버드 49,000원\n선착순 100명 · 2026-09-30까지\n가상 시연 · 실제 판매용 아님",
    "sources": [
      {
        "file": "raw-input.md",
        "quote": "- 오퍼(가상): 정가 79,000원 → 얼리버드 49,000원(선착순 100명, 2026-09-30까지), 2차 59,000원(10-01~10-15), 이후 정가. 월 구독 옵션 19,000원(모든 클래스 무제한, 첫 달 50%)."
      }
    ]
  },
  {
    "at": "legal:단건 클래스 가격·기한",
    "claim": "- 정가 79,000원. 얼리버드 49,000원(선착순 100명, 2026-09-30까지). 2차 59,000원(10-01~10-15), 이후 정가.",
    "sources": [
      {
        "file": "raw-input.md",
        "quote": "- 오퍼(가상): 정가 79,000원 → 얼리버드 49,000원(선착순 100명, 2026-09-30까지), 2차 59,000원(10-01~10-15), 이후 정가. 월 구독 옵션 19,000원(모든 클래스 무제한, 첫 달 50%)."
      }
    ]
  },
  {
    "at": "legal:별도 월 구독 옵션",
    "claim": "- 월 구독 19,000원(모든 클래스 무제한, 첫 달 50%).",
    "sources": [
      {
        "file": "raw-input.md",
        "quote": "- 오퍼(가상): 정가 79,000원 → 얼리버드 49,000원(선착순 100명, 2026-09-30까지), 2차 59,000원(10-01~10-15), 이후 정가. 월 구독 옵션 19,000원(모든 클래스 무제한, 첫 달 50%)."
      }
    ]
  },
  {
    "at": "C08.sub",
    "claim": "가상 총 학습 시간 주65분",
    "sources": [
      {
        "file": "raw-input.md",
        "quote": "- 상품: 또박 손글씨 4주 온라인 클래스. 주 2회 영상(총 8강, 각 15분) + 연습장 PDF 4권 + 주 1회 피드백(사진 제출)."
      },
      {
        "file": "raw-input.md",
        "quote": "- 기준 예제 가상 권장 연습: 주 2회, 회당 15분."
      },
      {
        "file": "raw-input.md",
        "quote": "- 기준 예제 가상 사진 제출 준비: 주 1회, 회당 5분."
      },
      {
        "file": "raw-input.md",
        "quote": "- 기준 예제 가상 주간 권장 예산: 영상 2회 × 15분 + 연습 2회 × 15분 + 사진 제출 준비 1회 × 5분 = 주 65분. 반올림 없음. 개인별 소요 시간이나 학습 결과 보장이 아닙니다."
      }
    ]
  }
]
```

## 추가 가상 입력 적용 후 의미 재검토

C01.body의 목표 표현, C03.headline의 "7가지예요", C04.body의 사진 제출 표현만 다시 대조했다. 대상·수량·조건은 동일하다. C08.sub의 주65분은 가상 총 학습 시간이며 영상 30분 + 연습 30분 + 사진 준비 5분의 합이다. 각 피연산자·단위·주간 기준을 원본 및 추가 가상 입력과 대조했으며 반올림은 없다. 연습만 65분이라는 첫 프리뷰는 거부했다. legal의 가상 연습·사진 준비·합계 문장은 raw-input의 완전한 문장을 그대로 인용하므로 별도 재서술 승인을 추가하지 않았다. 모두 구현 에이전트의 수동 의미 대조이며 실제 사람 승인 아님.

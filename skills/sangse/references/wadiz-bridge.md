# Optional Wadiz production bridge

기존 sangse 명령과 결과물은 계속 사용할 수 있다. 카테고리·주제·상품별 가변 기획, OpenCrab 근거 검색, GPT Image 2.5와 GIF 제작은 [wadiz-detail-page-production-skill](https://github.com/contentscoin/wadiz-detail-page-production-skill)의 공통 규격으로 연결한다.

## 설치와 지원 계약

sangse contentscoin 포크 0.8.1의 브리지 검증 기준은 **Wadiz [v0.3.0 릴리스](https://github.com/contentscoin/wadiz-detail-page-production-skill/releases/tag/v0.3.0)**다. 브리지는 안정 버전 `0.3.x`, `release.json`의 `schema_version: 1`, **Node >=20.9.0**을 사전 검사한다. 메타데이터 없음·손상, 구버전, 프리릴리스, 다른 minor/major 또는 schema 변경은 자동 대체하지 않고 중단한다. Wadiz 소스 저장소 루트와 설치한 스킬 폴더를 모두 지원한다.

Wadiz 설치 방법은 해당 릴리스의 README를 따른다. 재현 가능한 설치가 필요하면 clone 후 `git checkout v0.3.0`으로 고정하고 그 릴리스의 스킬 폴더를 설치한다. 이 브리지는 자동 clone·설치·업데이트·의존성 설치를 수행하지 않는다. `plan`/`import`만 실행하는 브리지에는 이전 `pumasi` 플러그인이 필요하지 않다. 실제 이미지·GIF 제작의 의존성과 모델/비용 승인 확인은 Wadiz 쪽의 절차를 따른다.

contentscoin sangse 플러그인을 설치할 때는 `/plugin marketplace add https://github.com/contentscoin/sangse.git` 다음 `/plugin install sangse@contentscoin-sangse`를 쓴다. 업데이트는 `/plugin marketplace update contentscoin-sangse` 후 `/plugin update sangse@contentscoin-sangse`이며 재시작한다. upstream `gptaku-plugins`의 sangse와 설치 출처가 다르다. 같은 `/sangse` 명령을 제공하는 두 버전을 동시에 활성화하면 충돌할 수 있으므로 사용하려는 버전을 명시한다. 원저자와 MIT 라이선스는 유지된다.

```sh
node skills/sangse/scripts/wadiz-bridge.mjs import sangse/product --out wadiz/product-import --category living --topic gift --wadiz-skill /path/to/wadiz-detail-page-production
```

명령형 스킬에서는 `/sangse wadiz import <project> --out <new-dir> --category <id> --topic <id>`를 사용한다. `--wadiz-skill`, `WADIZ_SKILL_ROOT`, `CODEX_HOME/skills/wadiz-detail-page-production`(기본 `~/.codex/skills/…`) 순으로 설치 위치를 찾는다. 브리지는 필요한 스크립트·메타데이터를 찾지 못하면 위치를 안내하고 종료하며 자동 설치를 수행하지 않는다.

가져오기는 `cuts.md`·`legal.md`·`raw-input.md`·`intake-checklist.md`를 읽고 새 출력 폴더에 `product-brief.json`, `page-plan.json`, `media-jobs.json`, `evidence-matrix.json`, `legal.md`, `legacy-source-bundle.json`, `compatibility-report.json`을 만든다. 원본 카피·컷 순서·거래 조건·숫자 출처와 원문을 보존한다. 가져온 사실은 원자료 검토 전 `confirmation_needed`이다. 실물 상품 참조 이미지가 없으면 미디어 작업은 blocked 상태이며 제품 외형을 임의로 생성하지 않는다. 확인된 상품 기준 자료는 가져오기 `--ref <image>` 인자로 전달하고 별도 실제 사실 검수를 수행한다.

```sh
node skills/sangse/scripts/wadiz-bridge.mjs plan wadiz/product-import/product-brief.json --out wadiz/product-plan --style story-first --wadiz-skill /path/to/wadiz-detail-page-production
node skills/sangse/scripts/wadiz-bridge.mjs convert-jobs old-imagegen-jobs.json --out new-imagegen-jobs.json --backend ima2 --wadiz-skill /path/to/wadiz-detail-page-production
```

`plan`은 공통 기획기를 실행한다. 가져온 원래 컷을 그대로 유지하려면 import가 만든 `page-plan.json`을 사용한다. 새 가변 구성과 GIF 작업은 구형 `cuts.md`·이미지 작업 규격으로 완전히 역변환되지 않으므로 호환 보고서를 확인한다. 브리지 명령은 유료 생성 호출을 하지 않는다. 실제 제작은 와디즈 스킬에서 GPT Image 2.5 지원·참조 이미지·승인 상태를 확인한 뒤 수행한다.

## 검증

`bash tests/test-gates.sh`에는 기존 회귀와 새 Node 브리지·릴리스 출처 검사가 함께 연결된다. CI의 core 게이트는 Linux/Windows에서 숫자 출처·윤문 승인과 Node 브리지/릴리스 회귀를 네트워크·유료 생성 없이 실행한다. 실제 Wadiz 연결은 [주 저장소](https://github.com/contentscoin/wadiz-detail-page-production-skill)의 호환 테스트와 별도 smoke 결과로 검증하며, 모의 설치 테스트 통과를 유료 생성 성공으로 해석하지 않는다.

# Jo Kim — Portfolio

Next.js + Tailwind CSS + Framer Motion으로 만든 개인 포트폴리오 사이트입니다.
GitHub Pages에 자동 배포됩니다.

## 로컬에서 실행하기

```bash
npm install
npm run dev
```

브라우저에서 http://localhost:3000 접속.

## 내용 수정하기

**모든 텍스트와 데이터는 `lib/content.ts` 한 파일에서 수정합니다.**

- `site` — 이름, 이메일, GitHub, 소개문
- `sections` — 6개 포트폴리오 섹션 (Broadcast / Editorial / Localization / Strategy / Vendor / Innovation)
- `timeline` — 커리어 연혁
- `skills` — 스킬 차트
- `stats` — 상단 티커에 흐르는 스탯

`[SAMPLE]` 표시가 있는 항목은 예시이므로 실제 경력으로 교체하세요.

### YouTube 영상 넣기

`sections`의 해당 섹션에서 `videos` 배열의 주석을 해제하고 YouTube 영상 ID를 넣으세요.
(예: `https://youtube.com/watch?v=ABC123` → ID는 `ABC123`)

### PDF 넣기

1. PDF 파일을 `public/docs/` 폴더에 넣기 (폴더가 없으면 생성)
2. 해당 섹션의 `pdfs` 배열에 `{ title: "제목", href: "/docs/파일명.pdf" }` 추가

## GitHub Pages 배포하기

### 1. 저장소 만들기

두 가지 중 하나를 선택:

- **`jokim90.github.io`** 라는 이름의 저장소 → 주소가 `https://jokim90.github.io` (추천)
- 다른 이름(예: `portfolio`) → 주소가 `https://jokim90.github.io/portfolio`

basePath는 워크플로우가 저장소 이름을 보고 자동으로 처리하므로 따로 설정할 것이 없습니다.

### 2. 코드 올리기

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/jokim90/jokim90.github.io.git
git push -u origin main
```

### 3. Pages 설정 (한 번만)

GitHub 저장소 → **Settings → Pages → Source**를 **"GitHub Actions"** 로 변경.

이후에는 `main`에 push할 때마다 자동으로 빌드·배포됩니다.

## 구조

```
portfolio/
├── app/
│   ├── page.tsx            # 홈 (Hero + 티커 + 포트폴리오 그리드 + 스킬 + 타임라인)
│   ├── about/page.tsx      # About
│   └── work/[slug]/        # 6개 섹션 페이지 (자동 생성)
├── components/             # Hero, Navbar, RaceCard, Timeline, Skills 등
├── lib/content.ts          # ★ 모든 내용은 여기서 수정
└── .github/workflows/      # GitHub Pages 자동 배포
```

## 디자인 노트

- 컨셉: **출마표(race card)** — 10년의 경마 방송 경력을 시각 언어로.
- 6개 섹션의 게이트 번호 색은 실제 새들클로스 표준색(1=흰, 2=검, 3=빨, 4=파, 5=노, 6=초록)을 따릅니다.
- 히어로의 점선 세로줄은 사진판독선(photo-finish line)입니다.
- 다크모드는 우측 상단 토글, 시스템 설정을 기본으로 따릅니다.
- `prefers-reduced-motion` 설정 시 애니메이션이 자동으로 꺼집니다.

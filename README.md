# Frog UI

**"코드가 아니라 언어로 스타일을 말하다. (Speaking styles in language, not code.)"**

Frog UI는 Semantic CSS를 사용하여 일관되고 의미 있는 화면을 구현하는 현대적인 CSS 프레임워크입니다.

## 🐸 Overview

Frog UI는 SCSS로 작성되고 Gulp로 빌드되는 고성능 CSS 프레임워크입니다. 특정 프레임워크(React, Vue 등)에 의존하지 않는 순수 CSS 레이어를 지향하며, 개발자가 UI를 구현할 때 약어나 암호 같은 토큰 대신 자연스러운 문장으로 그림 그리듯 스타일을 적용할 수 있도록 설계되었습니다.

## ✨ Core Principles

1. **프레임워크의 제약을 받지 않을 것 (Framework Agnostic)**
   - 스타일과 동작을 분리하여 어떤 UI 라이브러리와도 결합 가능합니다.
   - 의존성을 최소화하여 새로운 기술 스택이 등장해도 스타일 시스템을 그대로 재사용할 수 있습니다.

2. **프로젝트에 최적화된 시스템 (Tailored for Your Project)**
   - 완성된 라이브러리를 강요하기보다, 각 프로젝트의 브랜드 아이덴티티를 온전히 담을 수 있는 도구를 제공합니다.
   - 컬러, 타이포그래피 등 핵심 디자인 토큰 변경만으로 고유한 테마를 구축할 수 있습니다.

3. **압도적인 개발자 경험 (Superior DX)**
   - 클래스 이름만 보고도 역할을 즉시 이해할 수 있는 시맨틱 네이밍을 지향합니다.
   - 직관적인 요소 조합을 통해 학습 비용을 낮추고 구현 속도를 극대화합니다.

## 🎨 Semantic CSS Concept

Frog UI의 네이밍은 시각적 특성을 그대로 묘사합니다.

- **Brands:** `primary`, `secondary` (브랜드 중요도와 우선순위)
- **Status:** `success`, `info`, `danger`, `attention`, `importance`
- **Sizes:** `tiny` ~ `massive` (상대 단위 rem 기반)
- **Features:** `fluid` (가변 너비), `round` (라운드 처리), `compact` (여백 압축), `border`/`outline`
- **Grouping:** `{element}s` (예: `ga-buttons`, `ga-tags`) - 그룹 래퍼 명명 규칙

### Usage Example
```html
<!-- namespace : "ga" -->

<!-- "둥근 모서리에 주요 색상을 가진 유동적인 버튼" -->
<button class="ga-button primary round fluid">
  Submit
</button>

<!-- "성공 상태를 나타내는 작은 태그" -->
<span class="ga-tag label success small">
  Completed
</span>
```

## 🛠 Tech Stack & Build

- **Styling:** SCSS (Sass), PostCSS (Autoprefixer)
- **Build Tool:** Gulp
- **Documentation:** Node.js, Express, Pug, Markdown-it

### Commands

```bash
# 의존성 설치
npm install

# 프레임워크 빌드 (dist/ 및 site/public/ 로 빌드)
npx gulp build

# 특정 테마 빌드
npx gulp build --file=gcloud

# 전체 테마 빌드
npx gulp buildAll

# 문서 사이트 실행 (Local Development)
npm run dev
```

## 📂 Project Structure

- `src/`: 프레임워크 코어 소스 (Definitions, Themes, Utils)
- `dist/`: 빌드된 정적 파일 (.css, .js)
- `site/`: Frog UI 가이드 및 데모 사이트
- `tasks/`: 빌드 및 자동화 스크립트

---
Developed by [noistommy@gmail.com](mailto:noistommy@gmail.com)



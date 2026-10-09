<!-- README.md -->
**English** | [한국어](./README_KO.md)
<div align="center">

<!-- TODO: add your logo, e.g. <img src="./docs/logo.png" alt="Frog UI logo" width="120" /> -->

# 🐸 Frog UI

**Speaking styles in language, not code.**

A modern CSS framework that uses Semantic CSS to build consistent, meaningful interfaces.

[Documentation](https://frog-ui-css.vercel.app/) ·
[Components](https://frog-ui-css.vercel.app/pages/components) ·
[Design Tokens](https://frog-ui-css.vercel.app/pages/tokens) ·
[Theming](https://frog-ui-css.vercel.app/pages/theming)

<!-- TODO: add a screenshot or GIF, e.g. ![Frog UI preview](./docs/preview.png) -->

</div>

---

## Overview

Frog UI is a high-performance CSS framework written in SCSS and built with Gulp. It aims to be a pure CSS layer that does not depend on any specific framework (React, Vue, etc.).

Instead of cryptic abbreviations and coded tokens, you describe your UI in natural, readable words, almost like painting a picture with sentences.

## Core Principles

### 1. Framework agnostic
- Styling is separated from behavior, so Frog UI combines with any UI library.
- Dependencies are kept to a minimum, so your style system stays reusable even when a new tech stack appears.

### 2. Tailored for your project
- Rather than forcing a finished, one-size-fits-all library on you, Frog UI gives you tools to express each project's brand identity.
- Change core design tokens such as color and typography to build your own theme.

### 3. Superior developer experience
- Semantic naming lets you understand a class's role at a glance.
- Intuitive composition lowers the learning curve and speeds up implementation.

## Semantic CSS Concept

Frog UI class names describe what an element looks like and what it means.

| Category | Classes | Description |
| --- | --- | --- |
| **Brands** | `primary`, `secondary` | Brand importance and priority |
| **Status** | `success`, `info`, `danger`, `attention`, `importance` | Meaning and state |
| **Sizes** | `tiny` ~ `massive` | Relative sizes based on `rem` |
| **Features** | `fluid`, `round`, `compact`, `border`, `outline` | Fluid width, rounded corners, tighter spacing, border styles |
| **Grouping** | `{element}s` (e.g. `ga-buttons`, `ga-tags`) | Naming rule for group wrappers |

### Usage example

```html
<!-- namespace: "ga" -->

<!-- "A fluid button with rounded corners in the primary color" -->
<button class="ga-button primary round fluid">
  Submit
</button>

<!-- "A small tag that indicates a success state" -->
<span class="ga-tag label success small">
  Completed
</span>
```

Browse every component with live examples in the [documentation](https://frog-ui-css.vercel.app/pages/components).

## Features

- **Semantic CSS**: readable class names that combine design tokens with meaningful words
- **Design tokens**: a single set of tokens drives color, typography, and more
- **Light and dark themes**: supported out of the box with CSS variables
- **Custom theming**: build your own theme by changing tokens
- **Minimal utilities**: a small, curated set of utility classes, so you don't need a separate utility library
- **Responsive**: responsive components and a grid system

## Use with React and Vue

Because Frog UI is plain CSS, it pairs well with headless UI components. Two companion libraries are available:

| Library | Description |
| --- | --- |
| [Be-UI for React](https://react-be-ui.vercel.app/) | Headless React components styled with Frog UI |
| [Be-UI for Vue](https://beui.vercel.app/) | Headless Vue components styled with Frog UI |

## Tech Stack and Build

- **Styling:** SCSS (Sass), PostCSS (Autoprefixer)
- **Build tool:** Gulp
- **Documentation site:** Node.js, Express, Pug, Markdown-it

### Getting started

```bash
# Install dependencies
npm install

# Build the framework (outputs to dist/ and site/public/)
npx gulp build

# Build a specific theme
npx gulp build --file=gcloud

# Build all themes
npx gulp buildAll

# Run the documentation site locally
npm run dev
```

The built CSS and JS files are generated in `dist/`.

<!-- TODO: once published, add CDN / npm install instructions here -->

## CDN

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/noistommy/frog-ui-css@main/dist/css/frogui.min.css" />
```

```css
@import url("https://cdn.jsdelivr.net/gh/noistommy/frog-ui-css@main/dist/css/frogui.min.css");
```

## Project Structure

```text
src/     Framework core source (definitions, themes, utils)
dist/    Built static files (.css, .js)
site/    Frog UI guide and demo site
tasks/   Build and automation scripts
```

## Documentation

Full documentation is available at **[frog-ui-css.vercel.app](https://frog-ui-css.vercel.app/)**:

- [What is Frog?](https://frog-ui-css.vercel.app/pages/welcome)
- [Components](https://frog-ui-css.vercel.app/pages/components)
- [Design Tokens](https://frog-ui-css.vercel.app/pages/tokens)
- [Semantic Classes](https://frog-ui-css.vercel.app/pages/semantic)
- [Theming](https://frog-ui-css.vercel.app/pages/theming)
- [Utility Classes](https://frog-ui-css.vercel.app/pages/utilities)

## Contributing

Issues and pull requests are welcome. If you find a bug, have an idea, or want to improve the docs, please [open an issue](https://github.com/noistommy/frog-ui-css/issues).

## Author

Developed by [noistommy](https://github.com/noistommy) · [noistommy@gmail.com](mailto:noistommy@gmail.com)

<!-- ## License

<!-- TODO: confirm your license and add a LICENSE file -->
<!-- Released under the [MIT License](./LICENSE). --> -->
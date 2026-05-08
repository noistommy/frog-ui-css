# Frog UI Framework

Frog UI is a Semantic CSS framework designed to provide consistent and meaningful UI implementation. It is built using SCSS and Gulp, resulting in a single static CSS file that can be used across any web project.

## Project Structure

- `src/`: Core source files for the CSS framework.
  - `definitions/`: SCSS definitions for components and base styles.
    - `bases/`: Core styles like `reset.scss`, `root.scss`, and `variables.scss`.
    - `components/`: Modular SCSS and accompanying JS for UI components (e.g., buttons, cards, modals).
  - `themes/`: Theme-specific SCSS overrides.
  - `assets/`: Static assets like icons (e.g., `xeicon`).
- `site/`: Documentation and demo site.
  - `app.js`: Express application entry point.
  - `views/`: Pug templates for the site.
  - `public/`: Static files for the demo site, including built CSS/JS.
  - `mds/`: Markdown files for documentation content in multiple languages (EN, KO).
- `gulpfile.js`: Gulp task configuration for building the framework.
- `dist/`: Output directory for the built CSS and JS files.

## Tech Stack

- **Styling:** SCSS (Sass), PostCSS (Autoprefixer)
- **Build Tool:** Gulp
- **Demo Site:** Node.js, Express, Pug, Markdown-it
- **Package Management:** NPM, Bower (for legacy assets like `xeicon`)

## Building and Running

### Framework Build

The framework uses Gulp for its build process.

- **Default Task:** `npx gulp`
  - Cleans the `dist/` directory.
  - Builds the default theme CSS and JS.
  - Starts a watcher for source file changes.
- **Build Specific Theme:** `npx gulp build --file=<theme_name>`
  - Example: `npx gulp build --file=gcloud`
- **Build All Themes:** `npx gulp buildAll`
- **Clean Dist:** `npx gulp clean`

### Documentation Site

The documentation site is an Express app that demos the components.

- **Start Site:** `npm start`
- **Development Mode:** `npm run dev`
  - Runs the site with `nodemon` and watches for SCSS changes in the site's public folder.

## Development Conventions

- **Semantic CSS:** Follow semantic naming conventions for classes to ensure clarity and consistency.
- **Component-Driven:** Each UI component should have its own SCSS file in `src/definitions/components/`. If the component requires JavaScript for interaction (like a modal), a corresponding `.js` file should be placed in the same directory.
- **Themeability:** Use variables from `src/definitions/bases/variables.scss` to ensure components are themeable. Theme-specific overrides should be placed in `src/themes/`.
- **Build Integration:** When adding new assets or components, ensure they are correctly handled in `gulpfile.js` for both development and production builds.
- **Documentation:** Update the Markdown files in `site/mds/` (both `en` and `ko`) when adding or modifying components to keep the documentation current.

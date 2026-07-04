# Frog UI Component Map

Use this map to find canonical usage before editing or recommending a component. Paths may not all exist for every component; inspect the available files and state missing coverage when relevant.

## Primary Sources

- Demo pages: `site/views/components/*.pug`
- Site code snippets: `site/codes/*.js`
- Base component styles: `src/definitions/components/*.scss`
- Component runtime behavior: `src/definitions/components/*.js`
- Theme component overrides: `src/themes/components/*.scss`
- Theme tokens: `src/themes/{default,beui,gcloud,gcloud_p}/bases/*.scss`

## Component Names

| Component | Demo | Snippets | Style | Runtime |
| --- | --- | --- | --- | --- |
| badge | `site/views/components/badge.pug` | `site/codes/badge.js` | `src/definitions/components/badge.scss` | - |
| button | `site/views/components/button.pug` | `site/codes/button.js` | `src/definitions/components/button.scss` | `src/definitions/components/button.js` |
| calendar | `site/views/components/calendar.pug` | `site/codes/calendar.js` | `src/definitions/components/calendar.scss` | `src/definitions/components/calendar.js` |
| card/cards | `site/views/components/cards.pug` | `site/codes/cards.js` | `src/definitions/components/card.scss` | - |
| checkbox | `site/views/components/checkbox.pug` | `site/codes/checkbox.js` | `src/definitions/components/checkbox.scss` | `src/definitions/components/checkbox.js` |
| form | `site/views/components/form.pug` | `site/codes/form.js` | `src/definitions/components/form.scss` | - |
| grid | `site/views/components/grid.pug` | `site/codes/grid.js` | `src/definitions/components/grid.scss` | - |
| grid2 | `site/views/components/grid2.pug` | `site/codes/grid2.js` | `src/definitions/components/grid2.scss` | - |
| input | `site/views/components/input.pug` | `site/codes/input.js` | `src/definitions/components/input.scss` | `src/definitions/components/input.js` |
| list | `site/views/components/list.pug` | `site/codes/list.js` | `src/definitions/components/list.scss` | `src/definitions/components/list.js` |
| message | `site/views/components/message.pug` | `site/codes/message.js` | `src/definitions/components/message.scss` | - |
| modal | `site/views/components/modal.pug` | - | `src/definitions/components/modal.scss` | `src/definitions/components/modal.js` |
| pagination | `site/views/components/pagination.pug` | `site/codes/pagination.js` | `src/definitions/components/pagination.scss` | `src/definitions/components/pagination.js` |
| panel | `site/views/components/panel.pug` | `site/codes/panel.js` | `src/definitions/components/panel.scss` | `src/definitions/components/panel.js` |
| segment/segments | `site/views/components/segments.pug` | `site/codes/segments.js` | `src/definitions/components/segment.scss` | - |
| selectbox | `site/views/components/selectbox.pug` | `site/codes/selectbox.js` | `src/definitions/components/selectbox.scss` | `src/definitions/components/selectbox.js` |
| switch | `site/views/components/switch.pug` | `site/codes/switch.js` | `src/definitions/components/switch.scss` | - |
| table | `site/views/components/table.pug` | `site/codes/table.js` | `src/definitions/components/table.scss` | - |
| tabs | `site/views/components/tabs.pug` | `site/codes/tabs.js` | `src/definitions/components/tabs.scss` | `src/definitions/components/tabs.js` |
| tag | `site/views/components/tag.pug` | `site/codes/tag.js` | `src/definitions/components/tag.scss` | - |
| toast | `site/views/components/toast.pug` | - | `src/definitions/components/toast.scss` | `src/definitions/components/toast.js` |
| tree | `site/views/components/tree.pug` | `site/codes/tree.js` | `src/definitions/components/tree.scss` | `src/definitions/components/tree.js` |

## Related Style-Only Components

- `alert`: `src/definitions/components/alert.scss`
- `rate`: `src/definitions/components/rate.scss`
- `slider`: `src/definitions/components/slider.scss`, `src/definitions/components/slider.js`
- `tooltip`: `src/definitions/components/tooltip.scss`

## Docs And Navigation Pages

- Component index: `site/views/components/components.pug`, `site/mds/{ko,en}/components.md`
- Foundations: `site/views/components/base.pug`, `colors.pug`, `semantic.pug`, `breakpoint.pug`
- Markdown docs: `site/mds/{ko,en}/*.md`

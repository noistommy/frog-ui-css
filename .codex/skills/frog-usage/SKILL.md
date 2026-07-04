---
name: frog-usage
description: Check Frog UI CSS component usage before implementing, editing, refactoring, documenting, or recommending any Frog UI component. Use when working with component classes, Pug examples, JavaScript behavior, SCSS definitions, site docs, demos, or usage snippets in this repository.
---

# Frog Usage

## Required Workflow

Before changing or recommending a Frog UI component, inspect the existing usage source for that component. Do not infer API, class names, markup, options, or JavaScript behavior from memory.

1. Identify the component name from the user request, changed file, class name, or route.
2. Read `references/component-map.md` if the component name, pluralization, or source path is not obvious.
3. Read the component usage files in this order when they exist:
   - `site/views/components/<component>.pug` for rendered demo markup and page structure.
   - `site/codes/<component>.js` for documented code snippets shown on the site.
   - `src/definitions/components/<component>.scss` for CSS classes, variants, states, and structure.
   - `src/definitions/components/<component>.js` for runtime behavior and public initialization patterns.
   - `src/themes/components/<component>.scss` and theme files only when the task touches theme-specific behavior.
4. Summarize the usage facts that matter for the task before editing: required wrapper, key classes, variants/states, and JavaScript initialization if any.
5. Make the smallest change consistent with the observed component pattern.
6. If a usage file is missing, compare the nearest related component and state the gap instead of guessing.

## Editing Rules

- Preserve existing component naming and class conventions.
- Prefer existing snippets from `site/codes` and demos from `site/views/components` over newly invented examples.
- Keep docs, demo markup, SCSS, and JS behavior aligned when a change affects public usage.
- Check both singular and plural names. Examples: `card` SCSS maps to `cards` docs; `segment` SCSS maps to `segments` docs.
- For theme changes, inspect `src/themes/default`, `src/themes/beui`, `src/themes/gcloud`, and `src/themes/gcloud_p` only as needed.

## Useful Searches

Use these searches to find component usage quickly:

```bash
rg "component-name|class-name" site/views/components site/codes src/definitions/components src/themes/components
rg "new Frog|data-|\\.component-class" src/definitions/components site/views/components site/codes
```

## References

- Read `references/component-map.md` for known component source locations and naming exceptions.

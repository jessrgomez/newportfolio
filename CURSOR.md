# CURSOR.md

Project rules for Cursor AI in this repository. (Cursor natively reads rules
from `.cursor/rules/*.mdc` or a root `.cursorrules` file; this document is the
human-readable source of truth those should mirror.)

## What this is

A single-page Vue 3 + Vite portfolio, deployed to GitHub Pages via GitHub
Actions on every push to `main`. Content lives in component files and
`src/data/projects.js` — there is no backend.

## Ground rules

1. **Every fact must be verifiable.** Experience, project, and employer
   details come from real commit history, existing site content, or what the
   user states directly — never fabricated to fill a gap.
2. **Build before done.** Run `npm run build` after any change; there is no
   test suite, so a clean build is the minimum bar.
3. **Ask before committing/pushing.** Don't assume permission carries over
   from a previous request.
4. **Follow existing patterns:**
   - `<script setup>` Composition API everywhere, not Options API.
   - Content (skills/jobs/projects) is data in JS arrays, not hardcoded in
     templates — edit the data for content changes.
   - CSS uses the existing custom properties (`--accent`, `--bg-*`,
     `--text-*`) so theme switching keeps working. Tailwind is available for
     new components (preflight disabled on purpose — don't re-enable it).
   - Scroll animations use the `useAnimateOnScroll` composable, not one-off
     IntersectionObservers.
5. **Respect `prefers-reduced-motion`** except where explicitly overridden
   (Hero stat counter, 3D laptop scene) at the user's request.
6. **No secrets assumed hidden in a static bundle.** Anything client-visible
   in this repo is meant to be public (e.g. the Web3Forms form key).

## Deploy flow

Edit → `npm run build` → commit → push to `main` → GitHub Actions deploys
automatically. There is no manual deploy step to add or replace.

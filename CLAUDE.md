# CLAUDE.md

Guidance for Claude (or any AI coding assistant) working in this repository.

## What this is

A single-page Vue 3 + Vite portfolio, deployed to GitHub Pages via GitHub
Actions (`.github/workflows/deploy.yml`) on every push to `main`. There is no
backend — content lives in component files and `src/data/projects.js`.

## Ground rules

1. **Every fact about experience, projects, or employers must be verifiable.**
   Don't invent companies, dates, tech stacks, or metrics. When adding or
   editing a project/experience entry, base the description on real commit
   history, existing content elsewhere in the site, or what the user states
   directly — never guess to fill a gap.
2. **Always run `npm run build` after a change and before calling the task
   done.** This is a static site with no test suite; a clean build is the
   baseline signal that nothing broke.
3. **Never commit or push without being asked.** Every commit in this repo's
   history is a distinct, explicit user request — batch unrelated edits into
   one commit only when the user asked for all of them together.
4. **Match existing conventions, don't introduce new ones:**
   - Components use `<script setup>` (Composition API), not the Options API.
   - Page content (skills, jobs, projects) lives in plain JS arrays inside the
     relevant component or `src/data/projects.js` — edit the data, not the
     template, when the ask is a content change.
   - Styling is hand-written CSS in `src/style.css` using the `--accent`,
     `--bg-*`, `--text-*` custom properties so dark/light theme switching
     keeps working. Tailwind utilities are available (`@tailwindcss/vite`)
     for new components, but preflight is intentionally disabled — don't
     re-enable it without checking every section for regressions first.
   - Scroll-reveal animations go through the `useAnimateOnScroll` composable
     and the `.section.animate-in` CSS pattern, not ad-hoc IntersectionObservers.
5. **Respect `prefers-reduced-motion` by default.** It was deliberately
   overridden for the Hero stat counter and the 3D laptop scene at the user's
   explicit request — don't extend that override to other animations without
   being asked again.
6. **No secrets in source.** API keys/tokens that must be client-visible
   (e.g. the Web3Forms access key in `ContactSection.vue`) are fine only
   because the service is designed for public client-side use; don't add
   anything that assumes a real secret can be hidden in a static bundle.

## Workflow this repo actually follows

- Content changes → edit the data arrays → `npm run build` → commit with a
  message describing the change → push to `main` → GitHub Actions redeploys
  automatically. No manual deploy step exists or should be added.
- For anything UI-visible, prefer verifying in a real browser (dev server or
  a headless check) over assuming the diff is correct.

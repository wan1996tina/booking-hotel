# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
yarn dev          # start dev server (Vite)
yarn build        # type-check then build for production
yarn lint         # ESLint
yarn preview      # preview production build locally
```

There are no tests configured in this project.

## Architecture

React 19 + TypeScript SPA built with Vite. Styling is Tailwind CSS v4 (configured via `@theme` in `src/index.css`, not `tailwind.config.js`). Icons via `@mdi/react`.

**Path alias:** `@` resolves to `src/` (configured in `vite.config.ts`).

**Structure:**
- `src/pages/<PageName>/` — each page owns its own `components/` subfolder for page-specific sections (e.g. `pages/HomePage/components/Hero.tsx`)
- `src/components/layout/` — shared layout components (NavBar, ImgCarousel, DecoLine)
- `src/components/ui/` — shared primitive UI components (Button, HeroButton)
- `src/assets/` — images (`.webp`), SVGs, and local fonts (Noto Serif TC `.ttf`)

**Routing:** React Router v7 (`BrowserRouter` + `Routes`) declared in `App.tsx`. Currently only `/` → `HomePage`.

**Design tokens** are defined as CSS custom properties under `@theme` in `src/index.css`:
- Colors: `primary-{120,100,80,60,40,10}` (warm browns) and `neutral-{100,80,60,40,10,0}`
- Font: `font-serif-tc` → Noto Serif TC (loaded from Google Fonts)
- Utility classes like `.text-display` are defined under `@layer components` in the same file

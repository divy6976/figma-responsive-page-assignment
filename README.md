# Figma Responsive Page Assignment

A responsive React + Vite + TypeScript page built from a Figma reference. The layout is implemented with Bootstrap 5 grid and utility classes, plus light custom CSS. It reproduces the desktop and mobile designs with smooth transitions between breakpoints.

## Features

- Sign In / Join In auth card with tab switching
- Social auth buttons and inputs with accessible focus states
- “Or connect with” divider styled per design
- Explore/Hobbies dropdown menus styled per design
- Community header with CTA and scroll toggle (top/bottom)
- Testimonials, Features, Add-your-own sections
- Fully responsive: desktop side-by-side, mobile stacks (`col-12`, `col-md-*`)

## Tech Stack

- React 18, TypeScript
- Vite
- Bootstrap 5 grid/utilities
- Lucide Icons
- Tailwind config present for UI primitives (Shadcn) used in repo

## Getting Started

```bash
# 1) Install deps
npm install

# 2) Start dev server
npm run dev

# 3) Build for production
npm run build

# 4) Preview production build
npm run preview
```

Open the dev server URL Vite prints (typically `http://localhost:5173`).

## Project Structure

```
src/
  components/
    Navbar.tsx            # Explore/Hobbies dropdowns
    HeroSection.tsx       # Sign In / Join In tabs, auth card
    CommunitySection.tsx  # Header + scroll toggle + illustration
    FeaturesSection.tsx
    TestimonialsSection.tsx
    AddYourOwnSection.tsx
    Footer.tsx
  assets/                 # Images
  App.tsx, App.css        # App shell and styles
  main.tsx                # Vite entry
```

## Responsiveness Notes

- Uses `container`, `row`, `col-12 col-md-*` across sections
- Mobile: columns collapse to single column; images use `img-fluid`; buttons go full-width via a helper when needed
- Desktop: multi-column sections remain side-by-side, matching Figma spacing

## Key Scripts

- `dev`: Vite dev server
- `build`: Production build
- `preview`: Preview production build

## Linting

This template includes ESLint config. If your editor doesn’t auto-run, you can add a script to run ESLint or rely on your IDE.

## Screenshots

Add screenshots of Desktop and Mobile views here for quick reference.

## Deployment

Any static host will work (Vercel, Netlify, GitHub Pages). Use the `dist` folder produced by `npm run build`.

## Git Remote

This repo is intended to be connected to `https://github.com/divy6976/figma-responsive-page-assignment.git`. See setup below for the exact commands.

## License

MIT

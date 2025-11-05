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
# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/1141c683-3472-4d87-9271-9b0511c0d336

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/1141c683-3472-4d87-9271-9b0511c0d336) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/1141c683-3472-4d87-9271-9b0511c0d336) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)

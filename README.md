# Professional Personal Portfolio

A scalable, high-performance personal portfolio website for a freelance web designer and developer.

## Tech Stack
- **React 18** - Frontend UI library
- **Vite** - Next Generation Frontend Tooling
- **TypeScript** - Type safety and autocomplete
- **Tailwind CSS v4** - Utility-first CSS framework
- **React Router v6** - Client-side routing
- **Framer Motion** - Animations and micro-interactions
- **Lucide React** - Icon set
- **ESLint** - Code linting and formatting standards

## Getting Started

### Prerequisites
- Node.js (v18+)
- npm

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

### Build
```bash
npm run build
```

## Environment Variables
Environment variables are managed safely via `src/lib/env.ts`. Only client-safe variables prefixed with `VITE_` are exposed to the browser.

## Architecture Overview
```
src/
├── assets/          # Images, icons, fonts
├── components/      # Reusable UI components
│   ├── common/      # Generic shared components
│   ├── layout/      # Layout, Header, Footer
│   ├── sections/    # Page-specific feature sections
│   └── ui/          # Primitives (Buttons, Cards, Inputs)
├── data/            # Data models and initial data files (config.ts, projects.ts)
├── hooks/           # Custom React hooks
├── lib/             # Configuration & utility functions (env.ts)
├── pages/           # Page routes (Home, Projects, About, Contact)
├── styles/          # Global styles & Tailwind import
└── types/           # TypeScript interfaces & type definitions
```

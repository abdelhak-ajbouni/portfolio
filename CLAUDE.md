# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A personal portfolio website built with Astro 4.x using server-side rendering (SSR) and deployed to Netlify. The site uses React islands for interactive client-side features, TypeScript for type safety, and Tailwind CSS for styling. Features include a 3D animated star field background (Three.js), a working contact form (EmailJS), and Google Analytics integration with Partytown for performance optimization.

## Development Commands

```bash
# Install dependencies (uses pnpm workspaces)
pnpm install

# Start development server at localhost:4321
pnpm dev
# or
pnpm start

# Build for production (outputs to ./dist/)
pnpm build

# Preview production build locally
pnpm preview

# Run Astro CLI commands
pnpm astro [command]
```

## Environment Setup

Required environment variables for EmailJS contact form integration:
- `PUBLIC_SERVICE_ID` - EmailJS service ID
- `PUBLIC_TEMPLATE_ID` - EmailJS template ID
- `PUBLIC_KEY` - EmailJS public key

Copy `.env.example` to `.env` and configure before running locally. These must also be set in Netlify dashboard for production.

## Architecture

### Rendering Strategy

The project uses **Astro SSR mode** (`output: 'server'`) with the Netlify adapter. This means:
- Pages are rendered on-demand on the server
- Static assets are still optimized
- React components are hydrated selectively using `client:idle` directive

### Component Organization

**Astro Components** (`src/components/`):
- Server-rendered components with no client-side JavaScript
- Used for static sections: Intro, About, Projects, Footer, TopBar, Connections
- Common reusable components in `src/components/common/`: Container.astro, Divider.astro

**React Islands** (`src/islands/`):
- Client-side interactive components that hydrate on the client
- `Contact.tsx` - Form handling with react-hook-form and EmailJS integration
- `Stars.tsx` - Lazy loads the Three.js scene with a CSS fallback
- `ThreeScene.tsx` - Three.js/React Three Fiber 3D star field animation

Use the `client:idle` directive when importing islands into Astro pages to defer hydration until the page is idle.

### Page Structure

Single-page application with all sections on `src/pages/index.astro`:
1. Header with Intro component and Stars background
2. Main content with About, Projects, and Contact sections
3. Footer component

Layout wrapper (`src/layouts/Layout.astro`) provides:
- HTML head with SEO meta tags
- TopBar navigation
- Google Analytics with Partytown (loads in web worker for better performance)
- Slot for page content

### Styling Approach

- Tailwind CSS with `class:list` for dynamic classes
- Dark slate color scheme (slate-700/800) as base
- Gradient accents using purple and pink colors
- Container utility centered with 2rem padding
- Responsive design with mobile-first breakpoints (md, lg)

### Performance Optimizations

**Vite Configuration** (`astro.config.mjs`):
- Manual code splitting for Three.js libraries into separate chunks
- Chunk size warning limit increased to 1MB
- Splits: `three`, `react-three-fiber`, `react-three-drei`

**Client-side Loading**:
- Three.js scene lazy loaded with React.lazy() and Suspense
- Fallback shows CSS-only animated stars during load
- Islands use `client:idle` for deferred hydration

**Partytown**:
- Google Analytics runs in web worker to avoid blocking main thread
- Forward config for dataLayer.push events

### Icon System

Uses `astro-icon` with Iconify collections:
- `mdi` - Material Design Icons (LinkedIn, GitHub, etc.)
- `akar-icons` - Next.js and Redux icons
- `simple-icons` - Astro logo
- `cib` - Netlify icon

Icons are explicitly included in config to minimize bundle size.

## Key Technical Details

### TypeScript Configuration
- Extends `astro/tsconfigs/strict` for strict type checking
- JSX mode set to "react" for React islands
- Base URL set to "." for absolute imports from project root

### Contact Form Flow
1. Form rendered in React island with react-hook-form validation
2. On submit, EmailJS browser client sends email via their API
3. Toast notifications (react-hot-toast) for success/error feedback
4. Form ref required for EmailJS integration

### Three.js Scene
- Creates animated particle system for star field effect
- Wrapped in Suspense with CSS fallback
- Positioned absolutely to overlay header background gradient

## Deployment

Configured for Netlify with:
- Build command: `pnpm build`
- Publish directory: `dist`
- Adapter: `@astrojs/netlify` (server mode)
- Site URL: https://abdelhak-ajbouni.com

Remember to set environment variables in Netlify dashboard before deploying.

## Important Notes

- When adding new React components, decide if they should be islands (interactive, in `src/islands/`) or regular components (static, can be .astro files in `src/components/`)
- Keep Three.js code in islands to avoid SSR issues
- Use `import.meta.env` for environment variables (Astro/Vite pattern)
- All image assets in `public/images/`, documents in `public/files/`
- Sitemap auto-generated by `@astrojs/sitemap` integration

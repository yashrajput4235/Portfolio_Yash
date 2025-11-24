# Professional Portfolio Website

## Overview

This repository now houses a **frontend-only** portfolio for Yash Rajput. The application is a polished single-page React experience packed with advanced animations, glass morphism, particle effects, and refined UI details powered by Tailwind CSS and shadcn/ui. All interactivity, including the contact experience and resume download, runs entirely in the browser—no backend server or database required.

## User Preferences

- Preferred communication style: simple, everyday language.

## Architecture

### Frontend
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for ultra-light client-side routing
- **Styling**: Tailwind CSS + shadcn/ui + custom animations
- **State**: React hooks with Zod-powered validation
- **Build Tooling**: Vite for dev server, builds, and preview
- **Theme**: Custom theme provider with light/dark mode persistence

### What Changed
- Removed Express server, Drizzle ORM, Neon/PostgreSQL, and all database code.
- Contact form now validates locally and displays a toast confirmation without leaving the browser.
- Resume downloads directly from bundled assets instead of hitting `/api/resume`.
- NPM scripts simplified to pure Vite commands (`dev`, `build`, `preview`, `check`).
- TypeScript config limited to the client source tree.

## Key UI Sections
- **Navigation**: Glass morphism navbar with smooth section jumps.
- **Hero**: Typing animation, floating imagery, CTA buttons, and social links.
- **Skills / Experience / Projects / Education**: Rich cards, timeline layouts, and hover micro-interactions.
- **Projects Ticker**: Animated marquee showcasing highlighted work.
- **Contact Section**: Zod + React Hook Form validation, glowing inputs, and instant toast feedback.
- **Theme + Particles**: Custom theme provider plus background particle canvas for depth.

## Data Flow Highlights

### Contact Form
1. User fills out the form (validated via React Hook Form + Zod).
2. Submission triggers a short client-side delay to mimic network latency.
3. Toast appears confirming the message was queued—no API call necessary.

### Resume Download
1. User clicks “Download Resume”.
2. The PDF stored in `attached_assets/` is served by Vite like any other static asset.
3. A temporary `<a>` element triggers the browser download with the expected filename.

### Theme Management
1. Theme is stored in `localStorage`.
2. System preference is read on first visit.
3. CSS variables switch instantly, ensuring consistent theming everywhere.

## External Dependencies (Selected)
- **UI / Styling**: `@radix-ui/*`, `tailwindcss`, `class-variance-authority`, `lucide-react`
- **Forms & Validation**: `react-hook-form`, `@hookform/resolvers`, `zod`
- **Animations & Effects**: `framer-motion`, `embla-carousel-react`, custom CSS animations
- **Utilities**: `clsx`, `wouter`, `react-icons`, `next-themes`

## Development Workflow
1. `npm install`
2. `npm run dev` for local work (Vite + HMR)
3. `npm run check` to type-check the client
4. `npm run build` to produce the static site in `dist/public`
5. `npm run preview` to serve the production build locally

## Recent Changes (November 2025)
- Converted the project to frontend-only architecture.
- Removed TanStack Query, Express, Drizzle, database schemas, and related tooling.
- Simplified the contact experience to run entirely client-side.
- Wired resume downloads directly to the bundled PDF.
- Cleaned up TypeScript paths and dependency graph for a leaner setup.

The result is a blazing-fast, zero-backend portfolio that still showcases sophisticated frontend engineering through rich visuals, animations, and UX polish.
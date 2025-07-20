# Portfolio Website

## Overview

This is a modern, full-stack portfolio website built with React, Express.js, and PostgreSQL. The application showcases a professional portfolio with sections for skills, experience, projects, education, and contact functionality. It features a clean, responsive design using Tailwind CSS and shadcn/ui components, with both light and dark theme support.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query for server state, React hooks for local state
- **Build Tool**: Vite for development and production builds
- **Theme System**: Custom theme provider with light/dark mode support

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js with ES modules
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (configured for Neon serverless)
- **API Design**: RESTful APIs with proper error handling and logging

### Development Architecture
- **Monorepo Structure**: Shared schema and utilities between client and server
- **Type Safety**: Full TypeScript implementation with shared types
- **Development Server**: Vite dev server with HMR integration
- **Build Process**: Separate build processes for client (Vite) and server (esbuild)

## Key Components

### Frontend Components
- **Navigation**: Responsive navigation with smooth scrolling and active section highlighting
- **Hero Section**: Professional introduction with social links and resume download
- **Skills Section**: Animated skill bars with categorized technical skills
- **Experience Section**: Timeline-based experience showcase
- **Projects Section**: Featured project cards with technology badges
- **Education Section**: Academic background and achievements
- **Contact Section**: Contact form with validation and contact information

### Backend Services
- **Contact API**: Handles contact form submissions with validation
- **Resume API**: Serves resume file downloads
- **Storage Layer**: Abstracted storage interface with in-memory implementation (ready for database)
- **Middleware**: Request logging, error handling, and JSON parsing

### Shared Resources
- **Schema Definitions**: Drizzle schema for database tables and Zod validation schemas
- **Type Definitions**: Shared TypeScript types for API contracts

## Data Flow

### Contact Form Submission
1. User fills out contact form with validation (React Hook Form + Zod)
2. Form data sent to `/api/contact` endpoint
3. Server validates data using shared schema
4. Contact stored in database/memory storage
5. Success/error response sent back to client
6. Toast notification displayed to user

### Resume Download
1. User clicks download resume button
2. Request sent to `/api/resume` endpoint
3. Server serves PDF file from attached_assets directory
4. File downloaded with proper filename

### Theme Management
1. Theme preference stored in localStorage
2. System preference detection on first visit
3. CSS variables updated dynamically
4. Theme state managed through React context

## External Dependencies

### Core Dependencies
- **@tanstack/react-query**: Server state management and caching
- **drizzle-orm**: Type-safe database operations
- **@neondatabase/serverless**: PostgreSQL adapter for Neon
- **react-hook-form**: Form handling with validation
- **@hookform/resolvers**: Zod integration for form validation
- **zod**: Runtime type validation and schema definition

### UI Dependencies
- **@radix-ui/***: Headless UI components for accessibility
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Type-safe variant API for components
- **lucide-react**: Icon library

### Development Dependencies
- **vite**: Frontend build tool and dev server
- **tsx**: TypeScript execution for development
- **esbuild**: Fast JavaScript bundler for server builds

## Deployment Strategy

### Production Build
- **Client**: Vite builds optimized React application to `dist/public`
- **Server**: esbuild bundles Express server to `dist/index.js`
- **Assets**: Static assets served from `attached_assets` directory

### Environment Configuration
- **Database**: PostgreSQL connection via `DATABASE_URL` environment variable
- **Development**: Local development with Vite dev server and file watching
- **Production**: Optimized builds with proper error handling

### Database Management
- **Migrations**: Drizzle Kit handles schema migrations
- **Schema**: Centralized schema definition in `shared/schema.ts`
- **Storage**: Abstracted storage layer allows easy switching between implementations

### Development Features
- **Hot Module Replacement**: Vite provides instant updates during development
- **Type Checking**: Continuous TypeScript checking across the entire codebase
- **Error Overlay**: Runtime error modal for development debugging
- **Request Logging**: Detailed API request logging with timing information

The architecture prioritizes type safety, developer experience, and maintainability while providing a solid foundation for a professional portfolio website. The modular design allows for easy extension and modification of features.
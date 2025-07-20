# Professional Portfolio Website

## Overview

This is an exceptional, modern full-stack portfolio website showcasing Yash Rajput's professional software development expertise. Built with cutting-edge technologies including React, Express.js, and PostgreSQL, the application features advanced animations, glass morphism effects, particle backgrounds, and sophisticated user interactions that demonstrate expert-level web development skills. The portfolio includes comprehensive sections for skills, experience, projects, education, and contact functionality with a stunning responsive design using Tailwind CSS and shadcn/ui components.

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
- **Advanced Navigation**: Glass morphism navigation with gradient text effects and smooth scrolling
- **Hero Section**: Dynamic hero with typing animation, floating elements, particle background, and glowing CTAs
- **Skills Section**: Interactive skill cards with hover animations and progress bars
- **Experience Section**: Timeline-based showcase with hover lift effects and micro-interactions
- **Projects Section**: Image overlay effects, scaling animations, and professional project cards
- **Education Section**: Enhanced achievement displays with publication details and certifications
- **Contact Section**: Glass effect contact form with validation and animated interactions
- **Loading Screen**: Professional loading animation with progress indicator
- **Particle Background**: Animated particle system for visual enhancement
- **Typing Animation**: Dynamic text cycling for multiple professional roles

### Backend Services
- **Contact API**: Handles contact form submissions with validation and database storage
- **Resume API**: Serves resume file downloads
- **Admin API**: Provides endpoint to retrieve all submitted contacts
- **Database Layer**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Storage Layer**: Database-backed storage replacing in-memory implementation
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
- **Performance Optimization**: Preconnected domains and DNS prefetching for faster loading
- **SEO Optimization**: Comprehensive meta tags, Open Graph, and Twitter Card support

### Advanced Visual Features
- **Glass Morphism Effects**: Modern glassmorphism design throughout the interface
- **Gradient Text**: Dynamic gradient text effects for branding elements
- **Particle System**: Animated background particles for enhanced visual appeal
- **Hover Animations**: Sophisticated lift effects and micro-interactions
- **Loading Animations**: Professional loading screen with progress tracking
- **Smooth Transitions**: Cubic bezier animations for premium user experience
- **Custom Scrollbar**: Themed scrollbar matching the overall design
- **Responsive Design**: Fully responsive across all device sizes

### Recent Changes (January 2025)
- **Database Integration**: Added PostgreSQL database with Drizzle ORM
- **Contact Storage**: Contact form submissions now saved to database
- **Admin Endpoint**: Added API endpoint to retrieve all contacts
- **Enhanced Visual Design**: Expert-level animations and effects
- **Glass Morphism**: Modern glassmorphism navigation and contact form
- **Dynamic Typing**: Animated text cycling for professional roles
- **Particle System**: Animated background particles for visual enhancement
- **Micro-interactions**: Hover lift effects throughout the interface
- **Loading Screen**: Professional loading animation with progress indicator
- **SEO Optimization**: Comprehensive meta tags and social media support
- **Modern Theme**: Purple gradient color scheme with premium effects
- **Performance**: Floating animations and optimized user experience

The architecture now demonstrates expert-level web development skills with advanced animations, modern design patterns, and sophisticated user interactions that create an exceptional portfolio experience. The enhanced visual effects and performance optimizations showcase professional frontend development capabilities.
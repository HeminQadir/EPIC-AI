# EPIC-AI: Neurological Outcomes Research Platform

## Overview

EPIC-AI is an open research project funded by Helse Sør-Øst RHF, Norway, focused on advancing neurological outcome assessment in comatose cardiac arrest survivors. The platform serves as a dissemination hub for research on AI-enhanced EEG analysis and multimodal prognostication, aiming to reduce uncertainty in clinical decision-making and improve patient outcomes.

The application is a full-stack web platform built to showcase research findings, team members, work packages, publications, and results from the neurological outcomes research initiative. It presents complex medical research in an accessible, academically credible format with sophisticated design principles adapted for scientific dissemination.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack:**
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight client-side routing)
- **UI Components**: Shadcn/ui with Radix UI primitives
- **Styling**: Tailwind CSS with custom design system
- **State Management**: TanStack Query (React Query) for server state
- **Build Tool**: Vite

**Design System:**
- **Color Scheme**: Sophisticated grayscale palette with minimal accent colors (Clinical Blue, Success Green, Alert Red)
- **Typography**: Google Fonts - Inter (body), Space Grotesk (headings), JetBrains Mono (data/code)
- **Theme**: Dark mode primary with light mode alternative, following Material Design principles adapted for academic research
- **Component Library**: Comprehensive Shadcn/ui components including cards, forms, dialogs, navigation, data visualization elements

**Key Pages & Routes:**
- Home page with hero section and project overview
- Team member profiles with detail pages
- Work packages overview and individual package details
- Research milestones timeline
- Publications library with search functionality
- Data & results dashboard with statistics cards
- Contact form with institutional information

### Backend Architecture

**Technology Stack:**
- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js
- **Development**: Vite middleware for HMR in development
- **Database ORM**: Drizzle ORM
- **Session Management**: connect-pg-simple (PostgreSQL session store)

**API Design:**
- RESTful API with `/api` prefix for all routes
- Middleware logging for API requests with duration tracking
- Error handling middleware for consistent error responses
- Session-based request handling with credentials

**Data Layer:**
- Currently using in-memory storage (`MemStorage`) for user data
- Designed for PostgreSQL integration via Drizzle ORM
- Schema defined in `shared/schema.ts` for type-safe database operations
- User model includes id, username, and password fields

### External Dependencies

**Database:**
- **Provider**: Neon (serverless PostgreSQL) - configured but not yet fully integrated
- **ORM**: Drizzle with PostgreSQL dialect
- **Migrations**: Managed via drizzle-kit with schema in `shared/schema.ts`
- **Configuration**: DATABASE_URL environment variable required

**UI & Component Libraries:**
- **Radix UI**: Comprehensive set of unstyled, accessible UI primitives (accordion, dialog, dropdown, select, tabs, toast, etc.)
- **Tailwind CSS**: Utility-first CSS framework with custom configuration
- **Class Variance Authority (CVA)**: For managing component variants
- **Embla Carousel**: Touch-friendly carousel component

**Development Tools:**
- **Replit Plugins**: Cartographer for dependency visualization, dev banner, runtime error modal
- **Form Management**: React Hook Form with Zod resolvers for validation
- **Date Handling**: date-fns library
- **Icons**: Lucide React icons and React Icons (SiLinkedin, SiGooglescholar, SiOrcid)

**Build & Deployment:**
- **Build Process**: Vite for frontend bundling, esbuild for backend bundling
- **Static Assets**: Served from `dist/public` after build
- **Development Server**: Vite dev server with Express middleware mode
- **Production**: Node.js server serving pre-built static assets

**Third-Party Services (Potential Integration Points):**
- Email service for contact form submissions (currently mock)
- Document hosting for PDF publications (currently placeholder links)
- Analytics for research dissemination tracking (not yet implemented)
- DOI resolution services for publication metadata
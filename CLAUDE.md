# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
npm run dev        # Start development server on localhost:3000
npm run build      # Build for production
npm run start      # Start production server
npm run lint       # Run ESLint checks
```

**Database:**
```bash
npx prisma generate    # Generate Prisma client after schema changes
npx prisma db push     # Push schema changes to database
npx prisma migrate dev # Create and apply migrations
npx prisma studio      # Open Prisma Studio database GUI
```

## Architecture Overview

This is a **Next.js 14 fundraising platform** using the App Router with the following key technologies:

- **Frontend:** Next.js 14 + React 18 + TypeScript + Tailwind CSS
- **Backend:** Next.js API routes + Prisma ORM + PostgreSQL (Supabase)
- **Authentication:** NextAuth.js with JWT strategy and role-based access
- **State Management:** Redux Toolkit with feature-based slices
- **UI Components:** shadcn/ui library built on Radix UI primitives
- **External Services:** SmartLead API (email campaigns), Resend (emails), Cloudflare R2 (file storage)

## Key Architectural Patterns

**Component-Section Pattern:** Pages are composed of section components:
```
dashboard/page.tsx → DashboardSection → NavigationSection, ContentSection, etc.
```

**Redux State Structure:**
- `userSlice` - User authentication and profile data
- `campaignSlice` - Campaign management state
- `leadSlice` - Lead tracking and management

**Route Organization:**
- `(auth)/` - Authentication routes (signin, signup)
- `(pages)/` - Protected application pages with consistent layout
- Route protection via middleware redirects unauthenticated users to `/dashboard`

**Database Access:**
- Use DAO (Data Access Objects) pattern in `/src/dao/` for database operations
- Available DAOs: UserDao, DocumentDao, CampaignDao, LeadDao, VerficationTokenDao
- Prisma models: User, UserDetails, Campaign, Lead, MessageHistory, Documents
- Connection pooling via Supabase pgbouncer

**DAO Pattern Implementation:**
- Each DAO class follows consistent structure with methods like create(), getById(), update(), delete()
- DAOs handle error management and return structured responses
- Example usage: `const documentDao = new DocumentDao(); const docs = await documentDao.getDocumentsByUserId(userId);`
- DAOs abstract Prisma queries and provide reusable database operations

## Development Guidelines

**State Management:**
- Use Redux slices for complex state that needs to persist across components
- Server actions in `/src/actions/` for form submissions and server-side operations
- React Hook Form + Zod for form validation

**Styling:**
- Use Tailwind CSS with custom design tokens defined in globals.css
- Component variants using `class-variance-authority` (cva)
- Import UI components from `/src/components/ui/` (shadcn/ui)

**Type Safety:**
- Validation schemas in `/src/schemas/` using Zod
- TypeScript enums in `/src/enums/` for consistent constants
- Prisma generates type-safe database client

**Authentication:**
- NextAuth configuration in `/src/auth.ts` and `/src/auth.config.ts`
- Role-based access: SUPERADMIN, ADMIN, USER
- Protected routes defined in `/src/routes.tsx`

## Important Integration Points

**SmartLead API:** Email campaign management - check existing implementations in campaign API routes before adding new email functionality.

**File Uploads:** Use Cloudflare R2 integration - existing utilities handle secure upload workflows.

**Database Migrations:** Always create Prisma migrations for schema changes rather than pushing directly to avoid production issues.

## Common Development Patterns

- Server components by default, use 'use client' only when necessary
- Form components use React Hook Form with Zod resolvers
- API routes follow RESTful patterns with proper error handling
- Environment variables are typed and validated in configuration files
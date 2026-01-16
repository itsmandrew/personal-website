# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website for Andrew Chang built with Next.js 15, React 19, and TypeScript. The site features a terminal-inspired design aesthetic with animated text effects using Typed.js.

## Development Commands

```bash
# Start development server (runs on http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server (requires build first)
npm start

# Run ESLint
npm run lint
```

## Architecture

### Framework & Routing
- **Next.js 15** with the App Router architecture
- All pages are in `app/` directory
- Single-page application structure with smooth scroll navigation
- Client-side components use `"use client"` directive

### Styling Approach
- **Hybrid styling system**:
  - Tailwind CSS for utility classes
  - Bootstrap 5 for grid system and utilities
  - CSS Modules for component-specific styles (e.g., `Hero.module.css`)
- **Font setup**: Custom fonts (JetBrains Mono, Inter) loaded via `next/font/google` with CSS variables
- **Color scheme**: Terminal theme with `#252b3b` background and `#1eff00` primary text color

### Component Structure
- **Feature components**: Located in `components/features/` (Hero, About, Experience)
- **Layout components**: Located in `components/layout/` (Footer)
- Each feature component has its own CSS module (`.module.css`)
- All feature components are client-side rendered due to Typed.js animations

### Key Patterns

#### Navigation System
- No traditional navbar - navigation handled via smooth scroll links in Hero section
- Navigation links are generated dynamically in Typed.js animation
- Sections are identified by `data-section` attributes (e.g., `data-section="about"`)
- Scroll behavior: `scrollIntoView({behavior: 'smooth'})`

#### Animation & Interactivity
- **Typed.js** for typing animations in Hero, About, and Experience sections
- **IntersectionObserver** for scroll-triggered animations (fade-in effects)
- Mobile-responsive behavior with window width checks (`window.innerWidth <= 768`)
- Experience section includes expandable bullet points on mobile

#### Image Handling
- Uses Next.js `Image` component for optimization
- Company logos stored in `public/logos/`
- Profile image at `public/profile_pic.jpg`
- Resume PDF expected at `public/static/resume.pdf` (referenced in About section)

### Data Management
- Experience data is hardcoded in `Experience.tsx` component as a JavaScript array
- To update work experience, edit the `experiences` array in `components/features/Experience/Experience.tsx`
- Each experience includes: company, logo path, title, date, and points array

### Path Aliases
- `@/*` maps to project root (configured in `tsconfig.json`)
- Use `@/components/...` for importing components
- Use `@/app/...` for importing from app directory

## Technical Notes

### TypeScript Configuration
- Target: ES2017
- Strict mode enabled
- Uses Next.js plugin for type checking

### Bootstrap Integration
- Bootstrap CSS loaded both via npm package and CDN (in `layout.tsx`)
- FontAwesome icons loaded via npm and CDN for social media icons in Footer

### Mobile Responsiveness
- Breakpoint at 768px for mobile detection
- Experience section truncates long bullet points on mobile with "Read more" functionality
- Hero section adjusts spacing in navigation links based on screen width

## Important Files

- `app/layout.tsx` - Root layout with font configuration, global styles, and Footer
- `app/page.tsx` - Main page composing Hero, About, and Experience sections
- `components/features/Experience/Experience.tsx` - Contains all work experience data
- `app/globals.css` - Global styles and CSS variables

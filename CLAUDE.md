# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a VIP (Vegas Improv Power) one-pager website built with Vite + React + TypeScript + shadcn/ui + Tailwind CSS. The project creates a printable one-page marketing document for Vegas Improv Power's services, featuring their brand colors and design system.

## Development Commands

- `npm run dev` - Start development server on port 8080
- `npm run build` - Build for production
- `npm run build:dev` - Build for development mode
- `npm run lint` - Run ESLint linting
- `npm run preview` - Preview production build

## Key Architecture & Structure

### Core Application
- **Entry Point**: `src/main.tsx` → `App.tsx` → `pages/Index.tsx` → `components/VIPOnePager.tsx`
- **Routing**: Single-page application with React Router, main content at `/` route
- **Main Component**: `VIPOnePager.tsx` - the core one-pager layout component

### Design System Integration
- **Brand Colors**: Custom VIP purple and orange color palette defined in `tailwind.config.ts`
- **Typography**: Poppins (headings) and Karma (body) fonts via Google Fonts
- **Design Documentation**: `VIP-DESIGN-SYSTEM.md` and `VIP-STYLE-GUIDE.md` contain comprehensive brand guidelines
- **Print Optimization**: Component is designed for print layout (612px x 792px)

### UI Components
- **shadcn/ui**: Full component library available in `src/components/ui/`
- **Path Aliases**: `@/` maps to `src/` directory
- **Component Structure**: Uses Tailwind CSS with custom VIP brand color classes

### Custom Styling Classes
The project uses custom CSS classes following the VIP design system:
- `vip-glass-card` - Glassmorphic card effects
- `vip-shadow-elegant` - Custom shadow system
- `vip-heading` and `vip-body` - Typography classes
- VIP color classes: `vip-purple-*`, `vip-orange-*`, `vip-gray-*`

### Assets & Images
- Logo assets stored in `public/assets/`
- Two logo variants: color and white versions

## TypeScript Configuration
- Relaxed TypeScript settings for rapid development
- Path aliases configured for clean imports
- Type checking available but not strictly enforced

## Build Configuration
- **Vite**: Modern build tool with React SWC plugin
- **Development**: Clean build configuration for local development
- **Server**: Configured for port 8080 with IPv6 support

## Key Files to Understand
- `src/components/VIPOnePager.tsx` - Main component with print layout
- `VIP-STYLE-GUIDE.md` - Overall brand design guidelines with styles, typography, and colors
- `VIP-DESIGN-SYSTEM.md` - Complete design system documentation with specific tokens and references
- `tailwind.config.ts` - Custom color system and theme configuration
- `components.json` - shadcn/ui configuration
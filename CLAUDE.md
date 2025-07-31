# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Kava Crawler is a Nuxt.js 3 web application for planning kava bar crawls in Florida. Users can discover kava bars, filter by preferences, and create optimized routes for visiting multiple locations.

## Technology Stack

- **Framework**: Nuxt.js 3 with Vue.js 3 Composition API
- **Styling**: Tailwind CSS 4 with @tailwindcss/forms plugin
- **Icons**: Lucide Vue Next
- **Language**: TypeScript enabled

## Development Commands

```bash
# Start development server (localhost:3000)
npm run dev

# Build for production
npm run build

# Generate static files
npm run generate

# Preview production build
npm run preview

# Install dependencies
npm install
```

## Architecture

### Core Application Structure
- `/app.vue` - Main application layout with NuxtPage router outlet
- `/pages/` - File-based routing for main application views
- `/components/` - Reusable Vue components (NavBar, ThemeToggle, AppFooter)

### Key Pages
- `index.vue` - Landing page with feature overview
- `plan.vue` - Main planning interface with filters and bar selection
- `lucky.vue` - Random itinerary generator
- `itinerary.vue` - Generated crawl plan display

### State Management
Currently uses local component state. Sample kava bar data is hardcoded in components with structure:
```javascript
{
  id: number,
  name: string, 
  address: string,
  features: number[], // Array of feature IDs
  hours: string,
  happyHour: string,
  distance: number
}
```

### Styling System
- Tailwind CSS 4 configured for component scanning
- Dark mode implementation with system preference detection and localStorage persistence
- Client-side plugin (`/plugins/dark-mode.client.js`) handles SSR compatibility

### Current Development Status
The application has a complete UI framework with sample data. Future development areas include:
- Real kava bar database integration
- Google Maps API integration
- Route optimization algorithms
- User authentication and saved crawls

## File Structure Notes
- Components follow single-file Vue component structure
- Dark mode toggle state is managed globally via client plugin
- Tailwind configuration includes forms plugin for enhanced form styling
- All pages use Composition API with `<script setup>` syntax
# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

NBA Finals Results website - a static site displaying historical NBA Finals data with clickable links to view details for each championship series. Hosted on GitHub Pages.

## Tech Stack

- **Framework**: React 18 with Vite
- **Styling**: Tailwind CSS
- **Data**: Static JSON file (no backend)
- **Hosting**: GitHub Pages
- **Language**: TypeScript

## Build & Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Deploy to GitHub Pages
npm run deploy
```

## Architecture

### Data Structure
- `/src/data/finals.json` - NBA Finals historical data (year, teams, scores, MVP, etc.)

### Key Components
- Results list view showing all NBA Finals
- Detail view for individual Finals series
- React Router for navigation between views

### GitHub Pages Deployment
- Build output goes to `/dist`
- Uses `gh-pages` package for deployment
- Base URL configured in `vite.config.ts` for `/basketball-results/` path

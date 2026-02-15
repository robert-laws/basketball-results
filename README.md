# 🏀 NBA Finals Championship History

[![Deploy to GitHub Pages](https://github.com/robert-laws/basketball-results/actions/workflows/deploy.yml/badge.svg)](https://github.com/robert-laws/basketball-results/actions/workflows/deploy.yml)
[![Live Site](https://img.shields.io/badge/Live-GitHub%20Pages-blue?logo=github)](https://robert-laws.github.io/basketball-results/)

A modern, visually engaging website showcasing NBA Finals championship history from 2010-2024. Built with React, TypeScript, and Tailwind CSS for a responsive, fast experience.

**🔗 [Visit Live Site](https://robert-laws.github.io/basketball-results/)**

## ✨ Features

### Visual Enhancements (Phase 1 - 2024)
- **Modern Card Design**: Team color-coded cards with smooth hover effects and transitions
- **Hero Sections**: Gradient backgrounds using official NBA team colors on detail pages
- **Era Classification**: Finals grouped and tagged by era (Early 2010s, Warriors Era, Mid 2010s, Modern Era)
- **Responsive Grid**: Adaptive layout (1 column mobile, 2 tablet, 3 desktop)
- **Smooth Animations**: Fade-in and slide-up transitions for visual polish

### Content & Data
- Browse all **15 NBA Finals** from 2010-2024
- View detailed series information:
  - Champion and runner-up teams with brand colors
  - Series result and Finals MVP
  - Game-by-game scores, locations, and results
  - Era and historical classification
  - Ready for narrative, significance, and notable moments (user-fillable)

### Information Architecture
- **List View**: Browse all Finals with team colors, era tags, and series info
- **Detail Pages**: Comprehensive Finals series information with:
  - Hero section with team color gradients
  - Quick stat cards
  - Game-by-game card layout with color-coded winners
  - Expandable sections for narrative and context
  - Responsive design optimized for all devices

## 🛠️ Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom NBA team colors
- **Routing**: React Router for navigation
- **Hosting**: GitHub Pages
- **Component Library**: Custom Badge, Card, and StatBox components

## 📦 Component Library

Reusable components built from scratch:

- **Badge**: Era tags and series result badges with multiple variants
- **Card**: Flexible card wrapper with default/elevated/hero variants
- **StatBox**: Statistics display with colored backgrounds

## 🚀 Getting Started

### Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# The site will be available at http://localhost:5174/basketball-results/
```

### Production

```bash
# Build for production
npm run build

# Preview production build locally
npm run preview

# Deploy to GitHub Pages
npm run deploy
```

## 📊 Data Structure

NBA Finals data is stored in `src/data/finals.json` with the following structure:

```typescript
interface Finals {
  year: number;
  champion: string;
  runnerUp: string;
  series: string;           // e.g., "4-1"
  mvp: string;
  teamColors: {
    champion: string;       // Hex color
    runnerUp: string;       // Hex color
  };
  era: string;              // e.g., "Warriors Era"
  narrative?: string;       // Championship story
  significance?: string;    // Historical importance
  notableMoments?: string[]; // Key moments
  dates?: {
    start: string;
    end: string;
  };
  stats?: {
    avgPointsChampion?: number;
    avgPointsRunnerUp?: number;
    largestMargin?: number;
    heroStat?: string;
  };
  games: Game[];
}
```

## 🎨 Design System

### Colors
- **NBA Official Colors**: Primary (#17408B) and Secondary (#C9082A)
- **Team Colors**: 12 NBA team brand colors (Celtics, Warriors, Heat, Spurs, Lakers, Nuggets, 76ers, Pacers, Rockets, Mavericks, Grizzlies, Suns)
- **Semantic**: Green for victories, yellow for MVP, blue for information

### Typography
- Modern font weights and sizes for visual hierarchy
- Large year displays and team names
- Readable body text and secondary information

## 📱 Responsive Design

- **Mobile (320px+)**: Single column layout, optimized touch targets
- **Tablet (768px+)**: Two-column grid
- **Desktop (1024px+)**: Three-column grid with full feature display

## 🔄 Deployment

The site is automatically deployed to GitHub Pages on push to main branch. Deployment badges above show the current status of the GitHub Actions workflow and live site availability.

## 🚧 Future Enhancements

### Phase 2: Filtering & Interactivity
- Era filtering and team search
- Tabbed detail pages (Overview, Games, Stats, Context)
- Data visualizations and charts

### Phase 3: Exploration Pages
- Timeline view of championship history
- Team history and Finals records
- Statistics dashboard

### Phase 4: Polish
- Advanced animations and micro-interactions
- Performance optimization
- Accessibility enhancements

## 📝 Contributing

To contribute or extend this project:

1. Add new Finals entries to `src/data/finals.json`
2. Ensure team colors are accurate (hex format)
3. Fill in optional fields (narrative, significance, stats)
4. Test locally with `npm run dev`
5. Build and preview with `npm run build && npm run preview`

## 📄 License

This project displays publicly available NBA Finals data for educational purposes.

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**

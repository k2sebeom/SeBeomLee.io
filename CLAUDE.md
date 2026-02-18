# Project Memory - SeBeomLee.io Portfolio

## Project Overview
Interactive portfolio website featuring a scrolling pixel-art map with an animated player character. Built with React 19, Vite 7, and TypeScript.

## Architecture

### Tech Stack
- **Framework**: React 19 + TypeScript
- **Build Tool**: Vite 7
- **Styling**: Pure CSS (no frameworks)
- **Package Manager**: Yarn

### Project Structure
```
src/
├── main.tsx                      # React entry point
├── App.tsx                       # Main app component
├── App.css                       # App-level styles
├── index.css                     # Global styles
└── components/
    ├── InteractiveMap.tsx        # Scrolling map component
    └── InteractiveMap.css        # Map component styles

public/
└── sprites/
    ├── map.png                   # Background map (456x1823px)
    ├── logo.png                  # Portfolio logo
    ├── player_idle.png           # Player idle sprite (64x64px)
    ├── player_walk_1.png         # Player walk frame 1 (64x64px)
    ├── player_walk_2.png         # Player walk frame 2 (64x64px)
    └── exclamation.png           # UI marker (32x32px)
```

## Core Features

### 1. Scrolling Map System
- **Background**: map.png fills entire screen width, scrolls vertically as user scrolls
- **Implementation**: Fixed position background with `transform: translateY()` based on scroll progress
- **Map dimensions**: 456x1823px (narrow vertical map)
- **Scroll calculation**: `scrollProgress = scrollY / (scrollHeight - windowHeight)`
- **Map movement**: `translateY(-${scrollProgress * 100}%)`

### 2. Animated Player Character
- **Position**: Fixed at center of viewport (50%, 50%)
- **Animation States**:
  - **Idle**: `player_idle.png` when not scrolling
  - **Walking**: Alternates between `player_walk_1.png` and `player_walk_2.png` every 200ms when scrolling
- **Scroll Detection**: 150ms debounce timeout to detect scrolling stop
- **Frame Rate**: 200ms per walk frame (5 fps animation)

### 3. Z-Index Layering
- **Layer 0**: Map background (fixed, scrolls with transform)
- **Layer 1**: Player sprite (fixed at center, below content)
- **Layer 10**: Content overlay (transparent sections, above player)

### 4. Content Structure
- **Hero Section**: Centers logo.png (600px max-width, 90% responsive width)
- **About/Projects/Contact**: Transparent overlay sections, each 100vh height
- **Pointer Events**: Overlay is `pointer-events: none` by default, sections have `pointer-events: auto`

## CSS Key Details

### Map Rendering
```css
.map-image {
  width: 100%;           /* Fills parent container width */
  height: auto;          /* Maintains aspect ratio */
  min-height: 100vh;     /* Ensures full viewport coverage */
  image-rendering: pixelated; /* Crisp pixel art */
}
```

### Player Sprite
```css
.player-sprite {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;            /* Below overlay content */
  width: 64px;
  height: 64px;
}
```

### Content Overlay
```css
.content-overlay {
  position: relative;
  z-index: 10;           /* Above player sprite */
  pointer-events: none;  /* Allow clicks to pass through */
}

.content-section {
  min-height: 100vh;     /* Full viewport sections */
  pointer-events: auto;  /* Enable interaction with content */
  background: transparent; /* Fully transparent overlay */
}
```

## Implementation Rules

### 1. Sprite Management
- All sprites located in `/public/sprites/`
- Player sprites are 64x64px pixel art
- Use `image-rendering: pixelated` for crisp pixel art rendering
- Logo uses `image-rendering: auto` for smooth rendering

### 2. Scroll Behavior
- Passive scroll listeners for performance: `{ passive: true }`
- Debounced scroll detection (150ms) to transition between walk/idle states
- Walk frame animation uses `setInterval` with 200ms timing
- Cleanup intervals/timeouts on component unmount

### 3. TypeScript Configuration
- Refs for timeout must be typed as `useRef<number | undefined>(undefined)`
- setTimeout casting required: `setTimeout(...) as unknown as number`

### 4. Build Requirements
- Must run `yarn build` successfully before deployment
- Build outputs to `/dist/` folder
- Optimized CSS and JS bundles with gzip compression

## Development Workflow

### Local Development
```bash
yarn dev        # Start dev server on http://localhost:5173
```

### Production Build
```bash
yarn build      # TypeScript compile + Vite build
```

### Git Branch
- Current branch: `refactor/redesign`
- Main branch: `main`

## Design Concept
Portfolio designed as an interactive game-like experience where users "walk" through a vertical map by scrolling. The player character appears to walk in place while the map scrolls beneath them, creating an illusion of movement through the portfolio content.

## Current State (2026-02-12)
- ✅ Basic scrolling map implementation complete
- ✅ Player walk animation functional
- ✅ Logo centered on hero section
- ✅ Transparent overlay system working
- ✅ Z-index layering properly configured
- ✅ Production build verified working
- 🔄 Content sections ready for portfolio content

## Future Considerations
- Add actual portfolio content to About/Projects/Contact sections
- Consider adding interactive elements or markers on the map
- Potential use of exclamation.png sprite for points of interest
- Mobile optimization and touch gesture support
- Performance optimization for larger maps if needed

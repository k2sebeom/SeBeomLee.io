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
├── components/
│   ├── InteractiveMap.tsx        # Scrolling map component with Pokemon encounters
│   ├── InteractiveMap.css        # Map component styles
│   ├── PokedexCard.tsx           # Pokemon-style info card component
│   └── PokedexCard.css           # Pokedex card styles
└── data/
    ├── aboutData.json            # About Me content
    ├── projectsData.json         # Projects content
    ├── educationData.json        # Education content
    ├── workData.json             # Work experience content
    └── contactData.json          # Contact information

public/
└── sprites/
    ├── map.png                   # Background map (456x1823px)
    ├── logo.png                  # Portfolio logo
    ├── player_idle.png           # Player idle sprite (64x64px)
    ├── player_walk_1.png         # Player walk frame 1 (64x64px)
    ├── player_walk_2.png         # Player walk frame 2 (64x64px)
    ├── pikachu.png               # Pokemon sprite - About Me (48x48px displayed)
    ├── pachirisu.png             # Pokemon sprite - Work Experience (48x48px displayed)
    ├── pengdori.png              # Pokemon sprite - Projects (48x48px displayed)
    ├── snorlax.png               # Pokemon sprite - Education (48x48px displayed)
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

### 3. Pokemon Encounter System
- **Pokemon Sprites**: Placed at specific pixel positions down the street (e.g., 1200px from top)
- **Encounter Detection**: Uses `getBoundingClientRect()` to detect when Pokemon reaches center of screen (player position)
- **Threshold**: 50px tolerance for encounter detection
- **Deadzone**: 200px deadzone after closing Pokedex to prevent infinite popup loops
- **Repeatable Encounters**: Can encounter same Pokemon multiple times after moving away and returning
- **Data Integration**: Each Pokemon displays content from JSON files in `src/data/`

### 4. Pokedex Card Component
- **Style**: Pokemon-style red card with white header and footer
- **Layout**: Sprite display at top, scrollable content sections below
- **Animations**: Fade in overlay, slide up card, Pokemon sprite appear animation
- **Interaction**: Click anywhere to close, prevents body scrolling when open
- **Content Types Supported**:
  - **About**: Profile statement and bio sections
  - **Work Experience**: Company cards with position, date, description, and technology badges
  - **Projects**: Featured projects grid and full projects list with clickable cards
  - **Education**: Institution cards with degree badges and website links
- **Responsive**: Adapts to mobile screens with smaller sprites and text
- **Styling**: Red accent colors, gradient backgrounds, hover effects on interactive elements

### 5. Z-Index Layering
- **Layer 0**: Map background (fixed, scrolls with transform)
- **Layer 5**: Pokemon sprites (placed down the street)
- **Layer 15**: Player sprite (fixed at center, above Pokemon)
- **Layer 20**: Content flow (logo and layout structure, above player)
- **Layer 1000**: Pokedex overlay (above all when triggered)

### 6. Content Structure
- **Logo Container**: Centers logo.png (800px max-width, 95% width), takes full viewport height
- **Pokemon Sprites**: Positioned with `marginTop` in pixels, creates vertical spacing
- **Content Flow**: Relative positioned container with no overlay, just natural document flow
- **Pointer Events**: All interactive elements have `pointer-events: none` to allow map scrolling

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
  z-index: 15;           /* Above Pokemon, below logo */
  width: 64px;
  height: 64px;
}
```

### Pokemon Sprites
```css
.pokemon-sprite {
  width: 48px;
  height: 48px;
  z-index: 5;            /* Below player sprite */
  pointer-events: none;
}

.pokemon-image {
  image-rendering: pixelated;
  filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.3));
  /* No animation - sprites remain static */
}
```

### Content Flow
```css
.content-flow {
  position: relative;
  z-index: 20;           /* Above player sprite */
  pointer-events: none;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.logo-container {
  min-height: 100vh;     /* Centers logo on page load */
  display: flex;
  justify-content: center;
  align-items: center;
}
```

## Implementation Rules

### 1. Sprite Management
- All sprites located in `/public/sprites/`
- Player sprites are 64x64px pixel art
- Pokemon sprites displayed at 48x48px
- Use `image-rendering: pixelated` for crisp pixel art rendering
- Logo uses `image-rendering: auto` for smooth rendering

### 2. Pokemon Encounter Configuration
- Define encounters in `encounters` array in `InteractiveMap.tsx`
- Each encounter requires:
  - `id`: Unique identifier string
  - `name`: Display name for Pokedex title
  - `sprite`: Path to sprite image
  - `position`: Pixel distance from logo (e.g., 1200 for 1200px down)
  - `data`: JSON object with content (varies by type)
- Import data from `src/data/*.json` files
- Pokemon refs tracked with `useRef<Map<string, HTMLDivElement>>(new Map())`
- **Data Types Supported**:
  - `statement` + `bio`: Simple text content (About Me)
  - `workList`: Array of work experiences with company, position, date, description, technologies
  - `featuredProjects` + `projectsList`: Arrays of projects with title, description, thumbnail, link
  - `educationList`: Array of institutions with title, degrees array, thumbnail, link

### 3. Encounter Mechanics
- Encounter detection runs on scroll event
- Calculates Pokemon position relative to viewport center (player position)
- 50px threshold for triggering encounter
- 200px deadzone after closing Pokedex to prevent immediate re-trigger
- Deadzone clears when player moves 200px away from Pokemon
- `lastClosedId` state tracks which Pokemon is in deadzone
- Encounters are repeatable after leaving and returning

### 4. Scroll Behavior
- Passive scroll listeners for performance: `{ passive: true }`
- Debounced scroll detection (150ms) to transition between walk/idle states
- Walk frame animation uses `setInterval` with 200ms timing
- Cleanup intervals/timeouts on component unmount

### 5. TypeScript Configuration
- Refs for timeout must be typed as `useRef<number | undefined>(undefined)`
- setTimeout casting required: `setTimeout(...) as unknown as number`

### 6. Build Requirements
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
Portfolio designed as an interactive Pokemon-style game experience where users "walk" through a vertical map by scrolling. The player character stays fixed at center screen while the map and Pokemon sprites scroll past. When the player reaches a Pokemon sprite, a Pokedex-style card appears displaying portfolio information. The experience combines nostalgic Pokemon mechanics with modern portfolio presentation.

## Current State (2026-02-18)
- ✅ Basic scrolling map implementation complete
- ✅ Player walk animation functional
- ✅ Logo centered on page load (800px max-width)
- ✅ Pokemon encounter system fully implemented
- ✅ Pokedex card component with red Pokemon-style design
- ✅ Encounter detection with getBoundingClientRect()
- ✅ Deadzone system (200px) to prevent infinite popups
- ✅ Repeatable encounters after moving away
- ✅ Z-index layering: Logo (20) > Player (15) > Pokemon (5) > Map (0)
- ✅ All 4 Pokemon encounters placed and functional:
  - **Pikachu** at 1200px - About Me (statement + bio)
  - **Pachirisu** at 2400px - Work Experience (4 work entries with tech badges)
  - **Pengdori** at 3600px - Projects (6 featured + 20 total projects)
  - **Snorlax** at 4800px - Education (2 institutions with degrees)
- ✅ Pokedex card handles multiple content types (about, work, projects, education)
- ✅ Interactive project cards with external links
- ✅ Education cards with degree badges and website links
- ✅ Static Pokemon sprites (no bouncing animation)
- ✅ Production build verified working
- ✅ Complete portfolio data integrated

## Future Considerations
- Add contact information encounter (contactData.json)
- Add visual indicator when approaching Pokemon (exclamation.png sprite)
- Mobile optimization and touch gesture support
- Performance optimization if needed
- Consider sound effects for encounters (optional)
- Add particle effects or visual feedback on encounter trigger
- Implement smooth scroll or anchor navigation
- Add loading states for Pokedex card content

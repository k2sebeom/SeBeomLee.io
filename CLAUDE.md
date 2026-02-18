# SeBeomLee.io - Pokemon-themed Portfolio

## Project Overview
Interactive portfolio website with Pokemon-style scrolling mechanics. As users scroll through content, they "walk" through a map and encounter Pokemon that reveal portfolio information via Pokedex cards.

## Current Implementation

### Layout Structure
- **Map Background**: `map.png` repeats vertically as background of `.content`, fills 100% width
- **Logo**: Centered on initial viewport (100vh container)
- **Pokemon Column**: Single centered column with uniform spacing
- **Player Sprite**: Fixed at center of screen (50%, 50%), z-index: 15
- **Footnote**: Footer bar with copyright notice

### Responsive Design
All sprites and spacing scale proportionally to screen width, optimized for 950px:
- **Player sprite**: `6.74vw` (64px at 950px)
- **Pokemon sprites**: `5.05vw` (48px at 950px)
- **Gap between Pokemon**: `47.37vw` (450px at 950px)
- **Column padding**: `21.05vw` top/bottom (200px at 950px)
- **Bottom margin**: `50vh` before footnote

### Player Animation
- Shows `player_idle.png` when stationary
- Alternates `player_walk_1.png` and `player_walk_2.png` (200ms interval) while scrolling
- 150ms debounce to detect scroll stop

### Encounter System
Pokemon sprites mapped to portfolio data in order:
1. **Pikachu** → About Me (`aboutData.json`)
2. **Pachirisu** → Work Experience (`workData.json`)
3. **Pengdori** → Projects (`projectsData.json`)
4. **Snorlax** → Education (`educationData.json`)
5. **NPC** → Contact (`contactData.json`)

**Detection logic**:
- Triggers when Pokemon sprite reaches within 50px of screen center (where player is)
- Shows PokedexCard overlay with portfolio data
- 200px deadzone after closing to prevent immediate re-trigger
- Encounters are repeatable after moving away

### Z-Index Layering
- Map: 0 (background)
- Pokemon sprites: 5
- Player: 15
- Logo: 20
- Pokedex overlay: 1000

### Styling Rules
- **Pixel art**: Use `image-rendering: pixelated` (with vendor prefixes) for map, Pokemon, and player sprites
- **Logo**: Use `image-rendering: auto` for smooth rendering
- **Background**: `background-repeat: repeat-y` on map to tile vertically

## File Structure
```
src/
├── App.tsx              # Main app with scroll logic and encounter detection
├── App.css              # Layout and responsive styles
├── components/
│   ├── PokedexCard.tsx  # Pokemon-style info card overlay
│   └── PokedexCard.css  # Card styling with animations
└── data/
    ├── aboutData.json
    ├── workData.json
    ├── projectsData.json
    ├── educationData.json
    └── contactData.json
```

## Development Notes
- No fixed heights - document scrolls naturally based on content
- All spacing uses `vw`/`vh` units for proportional scaling
- Encounters use refs to track Pokemon element positions
- Player animation state managed with useEffect hooks

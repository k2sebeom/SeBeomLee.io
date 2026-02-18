import { useEffect, useRef, useState } from 'react'
import './InteractiveMap.css'
import PokedexCard from './PokedexCard'
import aboutData from '../data/aboutData.json'
import workData from '../data/workData.json'
import projectsData from '../data/projectsData.json'
import educationData from '../data/educationData.json'

interface WorkExperience {
  company: string
  position: string
  date: string
  description: string
  technologies: string[]
}

interface Project {
  title: string
  description: string
  thumbnail: string
  link: string
}

interface Education {
  title: string
  degrees: string[]
  thumbnail: string
  link: string
}

interface PokemonEncounter {
  id: string
  name: string
  sprite: string
  position: number // Position in pixels from top of page
  data: {
    statement?: string
    bio?: string
    workList?: WorkExperience[]
    featuredProjects?: Project[]
    projectsList?: Project[]
    educationList?: Education[]
  }
}

const encounters: PokemonEncounter[] = [
  {
    id: 'about',
    name: 'About Me',
    sprite: '/sprites/pikachu.png',
    position: 1200, // 1200px from top
    data: aboutData
  },
  {
    id: 'work',
    name: 'Work Experience',
    sprite: '/sprites/pachirisu.png',
    position: 2400, // 2400px from top
    data: workData
  },
  {
    id: 'projects',
    name: 'Projects',
    sprite: '/sprites/pengdori.png',
    position: 3600, // 3600px from top
    data: projectsData
  },
  {
    id: 'education',
    name: 'Education',
    sprite: '/sprites/snorlax.png',
    position: 4800, // 4800px from top
    data: educationData
  }
]

const InteractiveMap = () => {
  const mapRef = useRef<HTMLDivElement>(null)
  const pokemonRefs = useRef<Map<string, HTMLDivElement>>(new Map())
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)
  const [walkFrame, setWalkFrame] = useState(1)
  const [activeEncounter, setActiveEncounter] = useState<PokemonEncounter | null>(null)
  const [lastClosedId, setLastClosedId] = useState<string | null>(null)
  const scrollTimeoutRef = useRef<number | undefined>(undefined)

  useEffect(() => {
    const handleScroll = () => {
      if (mapRef.current) {
        const scrollY = window.scrollY
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight
        const progress = maxScroll > 0 ? scrollY / maxScroll : 0
        setScrollProgress(progress)

        // Check for Pokemon encounters - when Pokemon sprite reaches center of screen
        const playerY = window.innerHeight / 2

        encounters.forEach(encounter => {
          const pokemonElement = pokemonRefs.current.get(encounter.id)
          if (pokemonElement) {
            const rect = pokemonElement.getBoundingClientRect()
            const pokemonCenterY = rect.top + rect.height / 2

            // Check if Pokemon is at player position (center of screen)
            const threshold = 50 // pixels
            const distance = Math.abs(pokemonCenterY - playerY)

            // Clear the deadzone if player moved away from the last closed Pokemon
            if (lastClosedId === encounter.id && distance > 200) {
              setLastClosedId(null)
            }

            // Trigger encounter if within threshold and not in deadzone
            if (distance < threshold) {
              // Only trigger if not already showing and not in deadzone
              if (activeEncounter?.id !== encounter.id && lastClosedId !== encounter.id) {
                setActiveEncounter(encounter)
              }
            }
          }
        })

        // Set scrolling state
        setIsScrolling(true)

        // Clear existing timeout
        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current)
        }

        // Set timeout to stop scrolling animation
        scrollTimeoutRef.current = setTimeout(() => {
          setIsScrolling(false)
        }, 150) as unknown as number
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initialize

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }
    }
  }, [activeEncounter, lastClosedId])

  // Animate walk frames when scrolling
  useEffect(() => {
    if (!isScrolling) return

    const interval = setInterval(() => {
      setWalkFrame(prev => prev === 1 ? 2 : 1)
    }, 200) // Switch frames every 200ms

    return () => clearInterval(interval)
  }, [isScrolling])

  // Calculate map position (map moves up as you scroll)
  const mapOffset = scrollProgress * 100

  return (
    <div className="interactive-map-container" ref={mapRef}>
      <div
        className="map-background"
        style={{
          transform: `translateY(-${mapOffset}%)`,
        }}
      >
        <img src="/sprites/map.png" alt="Map" className="map-image" />
      </div>

      <div className="player-sprite">
        <img
          src={isScrolling ? `/sprites/player_walk_${walkFrame}.png` : '/sprites/player_idle.png'}
          alt="Player"
          className="player-image"
        />
      </div>

      {/* Content flow with logo and Pokemon sprites */}
      <div className="content-flow">
        {/* Logo at top */}
        <div className="logo-container">
          <img src="/sprites/logo.png" alt="Logo" className="logo" />
        </div>

        {/* Pokemon sprites placed down the street */}
        {encounters.map(encounter => (
          <div
            key={encounter.id}
            ref={(el) => {
              if (el) pokemonRefs.current.set(encounter.id, el)
            }}
            className="pokemon-sprite"
            style={{
              marginTop: `${encounter.position}px`,
            }}
          >
            <img
              src={encounter.sprite}
              alt={encounter.name}
              className="pokemon-image"
            />
          </div>
        ))}

        {/* Extra space at bottom */}
        <div className="spacer-bottom"></div>
      </div>

      {/* Pokedex Card */}
      {activeEncounter && (
        <PokedexCard
          title={activeEncounter.name}
          sprite={activeEncounter.sprite}
          content={activeEncounter.data}
          onClose={() => {
            setLastClosedId(activeEncounter.id)
            setActiveEncounter(null)
          }}
        />
      )}
    </div>
  )
}

export default InteractiveMap

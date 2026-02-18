import { useEffect, useRef, useState } from 'react'
import './InteractiveMap.css'

const InteractiveMap = () => {
  const mapRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)
  const [walkFrame, setWalkFrame] = useState(1)
  const scrollTimeoutRef = useRef<number | undefined>(undefined)

  useEffect(() => {
    const handleScroll = () => {
      if (mapRef.current) {
        const scrollY = window.scrollY
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight
        const progress = maxScroll > 0 ? scrollY / maxScroll : 0
        setScrollProgress(progress)

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
  }, [])

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

      {/* Content sections that user can scroll through */}
      <div className="content-overlay">
        <section className="content-section hero">
          <img src="/sprites/logo.png" alt="Logo" className="logo" />
        </section>

        <section className="content-section about">
          <h2>About Me</h2>
          <p>Your about content here</p>
        </section>

        <section className="content-section projects">
          <h2>Projects</h2>
          <p>Your projects here</p>
        </section>

        <section className="content-section contact">
          <h2>Contact</h2>
          <p>Get in touch</p>
        </section>
      </div>
    </div>
  )
}

export default InteractiveMap

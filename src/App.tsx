import { useEffect, useRef, useState } from 'react';
import './App.css';
import PokedexCard from './components/PokedexCard';
import aboutData from './data/aboutData.json';
import workData from './data/workData.json';
import projectsData from './data/projectsData.json';
import educationData from './data/educationData.json';
import contactData from './data/contactData.json';

interface Encounter {
  id: string;
  name: string;
  sprite: string;
  data: any;
}

function App() {
  const [isScrolling, setIsScrolling] = useState(false);
  const [walkFrame, setWalkFrame] = useState(1);
  const [activeEncounter, setActiveEncounter] = useState<Encounter | null>(null);
  const [lastClosedId, setLastClosedId] = useState<string | null>(null);

  const scrollTimeoutRef = useRef<number | undefined>(undefined);
  const walkIntervalRef = useRef<number | undefined>(undefined);
  const pokemonRefs = useRef<Map<string, HTMLImageElement>>(new Map());

  const encounters: Encounter[] = [
    { id: 'pikachu', name: 'About Me', sprite: '/sprites/pikachu.png', data: aboutData },
    { id: 'pachirisu', name: 'Work Experience', sprite: '/sprites/pachirisu.png', data: workData },
    { id: 'pengdori', name: 'Projects', sprite: '/sprites/pengdori.png', data: projectsData },
    { id: 'snorlax', name: 'Education', sprite: '/sprites/snorlax.png', data: educationData },
    { id: 'npc', name: 'Contact', sprite: '/sprites/NPC.png', data: contactData },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);

      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 150) as unknown as number;

      // Check for encounters
      if (activeEncounter) return;

      const screenCenterY = window.innerHeight / 2;

      for (const encounter of encounters) {
        if (lastClosedId === encounter.id) continue;

        const pokemonElement = pokemonRefs.current.get(encounter.id);
        if (!pokemonElement) continue;

        const rect = pokemonElement.getBoundingClientRect();
        const pokemonCenterY = rect.top + rect.height / 2;
        const distance = Math.abs(pokemonCenterY - screenCenterY);

        if (distance < 50) {
          setActiveEncounter(encounter);
          break;
        }
      }

      // Clear deadzone if moved far enough
      if (lastClosedId) {
        const closedPokemon = pokemonRefs.current.get(lastClosedId);
        if (closedPokemon) {
          const rect = closedPokemon.getBoundingClientRect();
          const pokemonCenterY = rect.top + rect.height / 2;
          const distance = Math.abs(pokemonCenterY - screenCenterY);

          if (distance > 200) {
            setLastClosedId(null);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [activeEncounter, lastClosedId]);

  useEffect(() => {
    if (isScrolling) {
      walkIntervalRef.current = setInterval(() => {
        setWalkFrame((prev) => (prev === 1 ? 2 : 1));
      }, 200) as unknown as number;
    } else {
      if (walkIntervalRef.current) {
        clearInterval(walkIntervalRef.current);
      }
    }

    return () => {
      if (walkIntervalRef.current) {
        clearInterval(walkIntervalRef.current);
      }
    };
  }, [isScrolling]);

  const playerSprite = isScrolling
    ? `/sprites/player_walk_${walkFrame}.png`
    : '/sprites/player_idle.png';

  const handleClosePokedex = () => {
    if (activeEncounter) {
      setLastClosedId(activeEncounter.id);
    }
    setActiveEncounter(null);
  };

  return (
    <div className="app">
      <img src={playerSprite} alt="Player" className="player-sprite" />

      <div className="content">
        <div className="logo-container">
          <img src="/sprites/logo.png" alt="Logo" className="logo" />
        </div>

        <div className="pokemon-column">
          {encounters.map((encounter) => (
            <img
              key={encounter.id}
              ref={(el) => {
                if (el) pokemonRefs.current.set(encounter.id, el);
              }}
              src={encounter.sprite}
              alt={encounter.name}
              className="pokemon-sprite"
            />
          ))}
        </div>

        <div className="footnote">
          © 2026 SeBeom Lee. Made with Claude Code.
        </div>
      </div>

      {activeEncounter && (
        <PokedexCard
          name={activeEncounter.name}
          sprite={activeEncounter.sprite}
          data={activeEncounter.data}
          onClose={handleClosePokedex}
        />
      )}
    </div>
  );
}

export default App;

import { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const [isScrolling, setIsScrolling] = useState(false);
  const [walkFrame, setWalkFrame] = useState(1);
  const scrollTimeoutRef = useRef<number | undefined>(undefined);
  const walkIntervalRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);

      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 150) as unknown as number;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

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

  return (
    <div className="app">
      <img src={playerSprite} alt="Player" className="player-sprite" />

      <div className="content">
        <div className="logo-container">
          <img src="/sprites/logo.png" alt="Logo" className="logo" />
        </div>

        <div className="pokemon-column">
          <img
            src="/sprites/pikachu.png"
            alt="Pikachu"
            className="pokemon-sprite"
          />
          <img
            src="/sprites/pachirisu.png"
            alt="Pachirisu"
            className="pokemon-sprite"
          />
          <img
            src="/sprites/pengdori.png"
            alt="Pengdori"
            className="pokemon-sprite"
          />
          <img
            src="/sprites/snorlax.png"
            alt="Snorlax"
            className="pokemon-sprite"
          />
        </div>
      </div>
    </div>
  );
}

export default App;

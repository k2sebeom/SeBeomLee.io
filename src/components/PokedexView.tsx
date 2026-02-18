import { useEffect } from 'react';
import './PokedexView.css';

interface Encounter {
  id: string;
  name: string;
  sprite: string;
  data: any;
}

interface PokedexViewProps {
  encounters: Encounter[];
  onClose: () => void;
  onSelect: (encounter: Encounter) => void;
}

function PokedexView({ encounters, onClose, onSelect }: PokedexViewProps) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="pokedex-view-overlay" onClick={onClose}>
      <div className="pokedex-view" onClick={(e) => e.stopPropagation()}>
        <div className="pokedex-view-header">
          <h2>Pokédex</h2>
          <button className="close-button" onClick={onClose}>✕</button>
        </div>
        <div className="pokedex-grid">
          {encounters.map((encounter) => (
            <div
              key={encounter.id}
              className="pokedex-entry"
              onClick={() => onSelect(encounter)}
            >
              <div className="entry-sprite">
                <img src={encounter.sprite} alt={encounter.name} />
              </div>
              <div className="entry-name">
                {encounter.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PokedexView;

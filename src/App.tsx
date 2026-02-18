import './App.css';

function App() {
  return (
    <div className="app">
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

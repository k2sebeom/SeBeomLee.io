import './App.css';

function App() {
  return (
    <div className="app">
      <div className="content">
        <div className="logo-container">
          <img src="/sprites/logo.png" alt="Logo" className="logo" />
        </div>

        <div
          style={{
            backgroundColor: 'pink',
            height: 1500,
            width: 200,
          }}
        ></div>
      </div>
    </div>
  );
}

export default App;

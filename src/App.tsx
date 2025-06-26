import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import StarField from './components/StarField';

function App() {
  return (
    <div className="App">
      <StarField />
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Education />
      <Contact />
    </div>
  );
}

export default App;

import { Suspense, lazy, useEffect } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import { initSmoothScroll } from './lib/smoothScroll';

// three.js is large, so the scene loads after the page content
const GlassScene = lazy(() => import('./three/GlassScene'));

function App() {
  useEffect(() => initSmoothScroll(), []);

  return (
    <div className="app">
      <Suspense fallback={null}>
        <GlassScene />
      </Suspense>
      <div className="scene__vignette" />
      <div className="grain" />

      <Navigation />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
    </div>
  );
}

export default App;

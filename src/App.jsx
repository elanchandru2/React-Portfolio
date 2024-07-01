import React, { useCallback } from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import AboutMe from './Components/About_me';
import Project from './Components/Project';
import Contact from './Components/Contact';
import Footer from './Components/Footer';


function App() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log(container);
  }, []);

  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <AboutMe />
        <Project />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;

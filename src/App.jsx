import React, { useCallback } from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import AboutMe from './Components/About_me';
import Project from './Components/Project';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Particles from '@tsparticles/react';
import { loadFull } from 'tsparticles';

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
        <Particles
          id='tsparticles'
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            fpsLimit: 120,
            particles: {
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 2, max: 5 }
              },
              number: {
                value: 200,
              }
            }
          }}
        />
      </div>
    </>
  );
}

export default App;

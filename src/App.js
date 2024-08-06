import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import About from './components/About';
import Skills from './components/Skills';
import Experiences from './components/Experiences';
import Projects from './components/Projects';

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="flex bg-gray-700 font-sans text-white">
      {windowWidth > 768 && (
        <div>
          <Sidebar />
        </div>
      )}
      <div className={`${windowWidth > 768 ? 'ml-[20%]' : 'ml-0'} mr-[10%] mt-8 mb-8 flex-grow bg-gray-700`}>
        <About />
        <Experiences />
        <Projects />
        <Skills />
      </div>
    </div>
  );
}

export default App;

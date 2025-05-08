import { useState, useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Education from './components/Education.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Achievements from './components/Achievements.jsx';
import Footer from './components/Footer.jsx'
import ContactForm from './components/ContactForm.jsx';
const Portfolio = () => {
    const [darkMode, setDarkMode] = useState(false);

  // Initialize dark mode from localStorage or system preference
  useEffect(() => {
    if (localStorage.getItem('darkMode') === 'true' ||
        (!localStorage.getItem('darkMode') && 
         window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setDarkMode(true);
    }
  }, []);

  // Update localStorage and document class when dark mode changes
  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 ${darkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero darkMode={darkMode} />
      <About darkMode={darkMode} />
      <Education darkMode={darkMode} />
      <Skills darkMode={darkMode} />
      <Projects darkMode={darkMode} />
      <Achievements darkMode={darkMode} />
      <ContactForm darkMode={darkMode}/>
      <Footer darkMode={darkMode} />
    </div>
  )
}

export default Portfolio
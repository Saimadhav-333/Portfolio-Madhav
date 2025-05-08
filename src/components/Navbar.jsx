import React from 'react'
import { useState,useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';


const Navbar = ({ darkMode, toggleDarkMode }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 10) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    return (
      <nav className={`${darkMode ? 'bg-gray-900' : 'bg-white'} ${scrolled ? 'shadow-lg' : ''} 
                      sticky top-0 z-50 transition-all duration-300`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#home" className={`text-2xl font-bold ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
            Sai Madhav
          </a>
          
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#about" className={`hover:${darkMode ? 'text-blue-400' : 'text-blue-600'} transition-colors`}>About</a>
            <a href="#education" className={`hover:${darkMode ? 'text-blue-400' : 'text-blue-600'} transition-colors`}>Education</a>
            <a href="#skills" className={`hover:${darkMode ? 'text-blue-400' : 'text-blue-600'} transition-colors`}>Skills</a>
            <a href="#projects" className={`hover:${darkMode ? 'text-blue-400' : 'text-blue-600'} transition-colors`}>Projects</a>
            <a href="#achievements" className={`hover:${darkMode ? 'text-blue-400' : 'text-blue-600'} transition-colors`}>Achievements</a>
            
            <button 
              onClick={toggleDarkMode} 
              className={`p-2 rounded-full ${darkMode ? 'bg-gray-800 text-yellow-300' : 'bg-gray-200 text-gray-800'} transition-colors duration-300`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
          
          <div className="md:hidden flex items-center space-x-4">
            <button 
              onClick={toggleDarkMode} 
              className={`p-2 rounded-full ${darkMode ? 'bg-gray-800 text-yellow-300' : 'bg-gray-200 text-gray-800'} transition-colors duration-300`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isOpen && (
          <div className={`md:hidden ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} py-4`}>
            <div className="container mx-auto px-4 flex flex-col space-y-4">
              <a href="#about" className={`block hover:${darkMode ? 'text-blue-400' : 'text-blue-600'} transition-colors`} onClick={() => setIsOpen(false)}>About</a>
              <a href="#education" className={`block hover:${darkMode ? 'text-blue-400' : 'text-blue-600'} transition-colors`} onClick={() => setIsOpen(false)}>Education</a>
              <a href="#skills" className={`block hover:${darkMode ? 'text-blue-400' : 'text-blue-600'} transition-colors`} onClick={() => setIsOpen(false)}>Skills</a>
              <a href="#projects" className={`block hover:${darkMode ? 'text-blue-400' : 'text-blue-600'} transition-colors`} onClick={() => setIsOpen(false)}>Projects</a>
              <a href="#achievements" className={`block hover:${darkMode ? 'text-blue-400' : 'text-blue-600'} transition-colors`} onClick={() => setIsOpen(false)}>Achievements</a>
            </div>
          </div>
        )}
      </nav>
    );
  };

export default Navbar
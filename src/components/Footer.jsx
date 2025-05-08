import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';


const Footer = ({ darkMode }) => {
    return (
      <footer className={`${darkMode ? 'bg-gray-900 border-t border-gray-800' : 'bg-gray-100 border-t border-gray-200'} py-10 transition-colors duration-300`}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                Pendem Sai Madhav
              </h3>
              <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                Computer Science Student
              </p>
            </div>
            
            <div className="flex space-x-6">
              <a 
                href="https://github.com/Saimadhav-333" 
                target="_blank" 
                className={`${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-700 hover:text-blue-600'} transition-colors`}
              >
                <Github size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/sai-madhav777/" 
                target="_blank" 
                className={`${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-700 hover:text-blue-600'} transition-colors`}
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:saimadhav204@gmail.com" 
                className={`${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-700 hover:text-blue-600'} transition-colors`}
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
              © {new Date().getFullYear()} Pendem Sai Madhav. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  };

export default Footer
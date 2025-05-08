import React from 'react'
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = ({ darkMode }) => {
  return (
    <section id="home" className={`py-20 ${darkMode ? 'bg-gradient-to-r from-gray-900 to-blue-900' : 'bg-gradient-to-r from-blue-50 to-indigo-100'} transition-colors duration-300`}>
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0 flex justify-center">
          <div className={`${darkMode ? 'bg-gradient-to-r from-blue-600 to-purple-600' : 'bg-gradient-to-r from-blue-400 to-purple-500'} 
                          rounded-full h-64 w-64 overflow-hidden border-4 ${darkMode ? 'border-gray-700' : 'border-white'} shadow-2xl transition-all duration-300
                          hover:scale-105 transform`}>
            <img src="saimadhav3.jpg" alt="Sai Madhav" className="object-cover w-full h-full" />
          </div>
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            Pendem Sai Madhav
          </h1>
          <h2 className={`text-2xl md:text-3xl mb-6 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
            Computer Science Student
          </h2>
          <p className={`text-lg mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Passionate about building innovative solutions with modern technologies
          </p>
          
          <div className="flex space-x-4 justify-center md:justify-start">
            <a 
              href="https://github.com/Saimadhav-333" 
              target="_blank" 
              className={`${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'} 
                         transition-colors p-3 rounded-full shadow-lg hover:shadow-xl`}
            >
              <Github size={24} className={darkMode ? 'text-white' : 'text-gray-800'} />
            </a>
            <a 
              href="https://www.linkedin.com/in/sai-madhav777/" 
              target="_blank" 
              className={`${darkMode ? 'bg-blue-700 hover:bg-blue-600' : 'bg-blue-500 hover:bg-blue-600'} 
                         transition-colors p-3 rounded-full shadow-lg hover:shadow-xl`}
            >
              <Linkedin size={24} className="text-white" />
            </a>
            <a 
              href="mailto:saimadhav204@gmail.com" 
              className={`${darkMode ? 'bg-red-700 hover:bg-red-600' : 'bg-red-500 hover:bg-red-600'} 
                         transition-colors p-3 rounded-full shadow-lg hover:shadow-xl`}
            >
              <Mail size={24} className="text-white" />
            </a>
            <a 
              href="https://leetcode.com/u/SAI_MADHAV_07/" 
              target="_blank"
              className={`${darkMode ? 'bg-yellow-600 hover:bg-yellow-500' : 'bg-yellow-400 hover:bg-yellow-500'} 
                         transition-colors p-3 rounded-full shadow-lg hover:shadow-xl`}
            >
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png" 
                alt="LeetCode" 
                className="w-6 h-6 object-contain" 
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;

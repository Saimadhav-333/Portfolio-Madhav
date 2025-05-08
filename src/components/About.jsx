import React from 'react'
import { User } from 'lucide-react';


const About = ({darkMode}) => {
  return (
    <section id="about" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'} transition-colors duration-300`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-10">
          <User size={28} className={`${darkMode ? 'text-blue-400' : 'text-blue-600'} mr-3`} />
          <h2 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>About Me</h2>
        </div>
        <div className={`${darkMode ? 'bg-gray-900' : 'bg-white'} rounded-lg shadow-lg p-8 transition-all duration-300 hover:shadow-xl`}>
          <p className={`text-lg leading-relaxed mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            I am a Computer Science student at Keshav Memorial Institute of Technology with a strong foundation in full-stack development
            and a passion for solving complex problems using technology.
          </p>
          <p className={`text-lg leading-relaxed mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            My expertise spans across various programming languages and frameworks, with a particular focus on MERN stack development
            and AI/ML applications. I enjoy building innovative solutions that make a meaningful impact.
          </p>
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 mb-4">
              <p className={`font-semibold ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Phone:</p>
              <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>9177756036</p>
            </div>
            <div className="w-full md:w-1/2 mb-4">
              <p className={`font-semibold ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Email:</p>
              <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>saimadhav204@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
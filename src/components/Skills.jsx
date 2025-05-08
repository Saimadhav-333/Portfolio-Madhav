import React from 'react'
import { Code } from 'lucide-react';


const Skills = ({darkMode}) => {
    const skillCategories = [
        {
          category: "Languages",
          skills: ["Java", "JavaScript", "Python", "C++"]
        },
        {
          category: "Backend",
          skills: ["Node.js", "Express.js","Flask"]
        },
        {
          category: "Frontend",
          skills: ["React.js", "Bootstrap", "HTML", "CSS"]
        },
        {
          category: "Databases",
          skills: ["MySQL", "MongoDB"]
        },
        {
          category: "Tools and Platforms",
          skills: ["Git", "GitHub", "Docker", "Postman", "VS Code", "Eclipse"]
        },
        {
          category: "Core Concepts",
          skills: ["Data Structures and Algorithms", "Full Stack Development", "Object Oriented Design", "Problem Solving", "Database Management Systems"]
        }
      ];
    
      return (
        <section id="skills" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'} transition-colors duration-300`}>
          <div className="container mx-auto px-4">
            <div className="flex items-center mb-10">
              <Code size={28} className={`${darkMode ? 'text-blue-400' : 'text-blue-600'} mr-3`} />
              <h2 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Technical Skills</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillCategories.map((category, index) => (
                <div 
                  key={index} 
                  className={`${darkMode ? 'bg-gray-900' : 'bg-white'} rounded-lg shadow-md p-6 hover:shadow-xl
                             transition-all duration-300 transform hover:scale-105 hover:rotate-1`}
                >
                  <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                    {category.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex} 
                        className={`${darkMode ? 'bg-blue-900 text-blue-200' : 'bg-blue-50 text-blue-700'} 
                                   px-3 py-1 rounded-md text-sm transition-colors duration-300`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
}

export default Skills
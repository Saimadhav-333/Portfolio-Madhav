import React from 'react';
import { Award } from 'lucide-react';


const Achievements = ({ darkMode }) => {
    return (
      <section id="achievements" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'} transition-colors duration-300`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-10">
            <Award size={28} className={`${darkMode ? 'text-blue-400' : 'text-blue-600'} mr-3`} />
            <h2 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Achievements and Certifications</h2>
          </div>
          
          <div className={`${darkMode ? 'bg-gray-900' : 'bg-white'} rounded-lg shadow-lg p-8
                           transition-all duration-300 hover:shadow-xl border-t-4 ${darkMode ? 'border-blue-500' : 'border-blue-600'}`}>
            <ul className={`space-y-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <li className="flex items-start">
                <div className={`p-2 ${darkMode ? 'bg-blue-900' : 'bg-blue-100'} rounded-full mr-3 mt-1`}>
                  <Award size={20} className={darkMode ? 'text-blue-300' : 'text-blue-700'} />
                </div>
                <div>
                  <span className="font-medium">Project School Certificates</span> issued by Keshav Memorial Institute of Technology on successful completion of projects.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  };


export default Achievements
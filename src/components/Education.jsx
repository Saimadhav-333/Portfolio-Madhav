import React from 'react'
import { BookOpen } from 'lucide-react';


const Education = ({darkMode}) => {
    const educationData = [
        {
          institution: "Keshav Memorial Institute of Technology, Hyderabad",
          degree: "Bachelor of Science in Computer Science",
          period: "November 2022 - Present",
          score: "8.6 CGPA"
        },
        {
          institution: "Narayana Junior college, Hyderabad",
          degree: "Maths, Physics, Chemistry (MPC)",
          period: "2020 - 2022",
          score: "97.8 percent"
        },
        {
          institution: "Narayana e techno high school",
          degree: "Secondary School Certificate (SSC)",
          period: "2019 - 2020",
          score: "10 GPA"
        }
      ];
    
      return (
        <section id="education" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'} transition-colors duration-300`}>
          <div className="container mx-auto px-4">
            <div className="flex items-center mb-10">
              <BookOpen size={28} className={`${darkMode ? 'text-blue-400' : 'text-blue-600'} mr-3`} />
              <h2 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Education</h2>
            </div>
            
            <div className="space-y-6">
              {educationData.map((item, index) => (
                <div 
                  key={index} 
                  className={`${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-50 hover:bg-gray-100'} 
                             rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300
                             border-l-4 ${darkMode ? 'border-blue-500' : 'border-blue-600'}`}
                >
                  <div className="flex justify-between flex-wrap">
                    <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                      {item.institution}
                    </h3>
                    <span className={`${darkMode ? 'text-blue-400' : 'text-blue-600'} font-medium`}>
                      {item.period}
                    </span>
                  </div>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mt-2`}>
                    {item.degree}
                  </p>
                  <div className={`mt-4 inline-block ${darkMode ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800'} 
                                  py-1 px-3 rounded-full text-sm font-semibold`}>
                    {item.score}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
}

export default Education
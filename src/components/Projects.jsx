import React from 'react';
import { Briefcase, ChevronRight, ExternalLink } from 'lucide-react';

const Projects = ({ darkMode }) => {
  const projects = [
    {
      title: "GenAI-based Gym/Workout Assistant",
      tech: "MERN, GenAI, OpenCV",
      image: "genai.jpg",
      description: [
        "AI-powered fitness assistant with personalized workout plans and posture correction",
        "Features conversational AI interface and progress tracking visualization",
        "Utilizes MISTRAL LLM for diet recommendations"
      ],
      link: "https://github.com/rithesh10/workout2" // Replace with your GitHub or live demo link
    },
    {
      title: "Mental Health Assessment Website",
      tech: "MERN, Machine learning, Flask",
      image: "mentalhealth.jpg",
      description: [
        "MERN stack web app for assessing student mental health conditions",
        "Predicts depression, anxiety and stress levels with targeted questions",
        "Includes teacher alert system for concerning assessment results"
      ],
      link: "https://github.com/rithesh10/ps" // Replace with your GitHub or live demo link
    },
    {
      title: "Chatbot for Agriculture Queries",
      tech: "LLM, RAG, Streamlit",
      image: "agribot.jpg",
      description: [
        "Specialized chatbot using LLM and RAG technology for agriculture information",
        "Retrieves data from ICAR-CRIDA website with intuitive Streamlit interface",
        "Supports farmers, researchers and officials with accurate information access"
      ],
      link: "https://github.com/Shireesh-Kumar-2005/ProjectLLM" // Replace with your GitHub or live demo link
    }
  ];

  return (
    <section id="projects" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'} transition-colors duration-300`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-10">
          <Briefcase size={28} className={`${darkMode ? 'text-blue-400' : 'text-blue-600'} mr-3`} />
          <h2 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Projects</h2>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`${darkMode ? 'bg-gray-800' : 'bg-gray-50'} rounded-xl overflow-hidden
                         shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-102`}
            >
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-2/5 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 lg:h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="lg:w-3/5 p-6 lg:p-8">
                  <h3 className={`text-2xl font-bold ${darkMode ? 'text-blue-400' : 'text-blue-700'} mb-2`}>
                    {project.title}
                  </h3>
                  <div className="mb-4">
                    <span className={`${darkMode ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800'}
                                    py-1 px-3 rounded-full text-sm font-semibold`}>
                      {project.tech}
                    </span>
                  </div>
                  <ul className={`space-y-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {project.description.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex">
                        <ChevronRight size={20} className={`${darkMode ? 'text-blue-400' : 'text-blue-500'} mr-1 flex-shrink-0 mt-1`} />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <button className={`${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'} 
                                         text-white py-2 px-4 rounded-md transition-colors duration-300 flex items-center`}>
                        View Project <ExternalLink size={16} className="ml-2" />
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

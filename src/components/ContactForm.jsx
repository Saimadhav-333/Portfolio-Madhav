import React, { useState } from 'react';
import { Mail } from 'lucide-react';

const ContactForm = ({ darkMode }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    
    try {
      const response = await fetch('https://formspree.io/f/xzzrgqpz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Oops! Something went wrong. Please try again.');
      }
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      setStatus('Error: Unable to send message.');
    }
  };

  return (
    <section id="contact" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'} transition-colors duration-300`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-10">
          <Mail size={28} className={`${darkMode ? 'text-blue-400' : 'text-blue-600'} mr-3`} />
          <h2 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Contact Me</h2>
        </div>
        
        <form
          onSubmit={handleSubmit}
          className={`w-full max-w-lg mx-auto ${darkMode ? 'bg-gray-800' : 'bg-gray-50'} p-8 rounded-lg shadow-md`}
        >
          <div className="mb-4">
            <label htmlFor="name" className={`block text-lg ${darkMode ? 'text-white' : 'text-gray-800'}`}>Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className={`w-full p-3 mt-2 ${darkMode ? 'bg-gray-700' : 'bg-white'} text-gray-800 border border-gray-300 rounded-md`}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className={`block text-lg ${darkMode ? 'text-white' : 'text-gray-800'}`}>Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={`w-full p-3 mt-2 ${darkMode ? 'bg-gray-700' : 'bg-white'} text-gray-800 border border-gray-300 rounded-md`}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className={`block text-lg ${darkMode ? 'text-white' : 'text-gray-800'}`}>Your Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className={`w-full p-3 mt-2 ${darkMode ? 'bg-gray-700' : 'bg-white'} text-gray-800 border border-gray-300 rounded-md`}
            />
          </div>

          <div className="mb-4">
            <button
              type="submit"
              className={`w-full py-3 px-4 text-white ${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'} rounded-md transition-colors duration-300`}
            >
              Send Message
            </button>
          </div>

          {status && <p className="text-center text-gray-500">{status}</p>}
        </form>
      </div>
    </section>
  );
};

export default ContactForm;

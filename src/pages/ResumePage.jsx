import React from 'react';

const ResumePage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8 border border-gray-200">
          
          {/* Header */}
          <div className="text-center mb-12">
            
            <h1 className="text-4xl font-bold mb-4 text-purple-700">Sahil Sonkamble</h1>
            <p className="text-gray-500">sahilsonkamble17@gmail.com | +91 9404281358</p>
            <div className="mt-2 space-x-4">
              <a href="https://www.linkedin.com/in/sonkamblesahil" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">LinkedIn</a>
              <a href="https://github.com/sonkamblesahil" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">GitHub</a>
              <a href="https://leetcode.com/u/sahilsonkamble17" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">LeetCode</a>
              <a href="https://www.geeksforgeeks.org/user/sahilsonk7e1u" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">GeeksforGeeks</a>
            </div>
          </div>

          {/* Summary */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 border-b-2 border-purple-500 pb-2">Professional Summary</h2>
            <p className="text-gray-700 leading-relaxed">
              Passionate Full Stack Developer with expertise in React.js, Node.js, Python, and MongoDB. 
              Experienced in building scalable web applications, integrating APIs, and implementing best coding practices.
              Strong foundation in Data Structures & Algorithms, problem-solving, and backend systems.
            </p>
          </div>

          {/* Skills */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 border-b-2 border-purple-500 pb-2">Technical Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium mb-2 text-purple-600">Languages & Frameworks</h3>
                <ul className="text-gray-700 space-y-1">
                  <li>• Java, JavaScript, Python, HTML, CSS</li>
                  <li>• React.js, Node.js, Express.js</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2 text-purple-600">Database & Tools</h3>
                <ul className="text-gray-700 space-y-1">
                  <li>• MongoDB, MySQL, SQLite3</li>
                  <li>• Git, GitHub, VS Code, Linux</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 border-b-2 border-purple-500 pb-2">Key Projects</h2>
            <div className="space-y-4">
              
              <div>
                <h3 className="text-lg font-medium text-purple-600">Portfolio Website</h3>
                <p className="text-gray-700">Personal portfolio website built with React and Tailwind CSS. Showcases my projects, skills, and achievements in a modern, responsive layout. Features smooth navigation and interactive sections for a professional online presence.</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-purple-600">Story Hub</h3>
                <p className="text-gray-700">A MERN stack platform for users to create, share, and read stories. Includes user authentication, story management, and a clean UI for engaging content. Designed RESTful APIs and implemented secure data handling.</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-purple-600">NotesApp</h3>
                <p className="text-gray-700">A note-taking app using MongoDB, Express.js, React.js, and Node.js. Allows users to create, edit, and delete notes with persistent storage. Features a user-friendly interface and real-time updates for efficient productivity.</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-purple-600">Online Clipboard</h3>
                <p className="text-gray-700">Web app to share and access text snippets across devices using unique links, secret keys, and QR codes. Built with JavaScript, Node.js, and Express for fast and secure sharing. Implemented instant updates and cross-platform compatibility.</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-purple-600">Parking Booking System</h3>
                <p className="text-gray-700">Command-line parking system developed in Python with SQLite3 for booking, reserving, and cancelling slots. Tracks booking history and provides admin controls for slot management. Ensures robust operations with input validation and efficient database design.</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-purple-600">Weather Website</h3>
                <p className="text-gray-700">Real-time weather updates for any city using HTML, CSS, JavaScript, and OpenWeatherMap API. Displays current conditions and forecasts with a clean, responsive UI. Integrated error handling and location-based search for enhanced usability.</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-purple-600">Spotify Clone</h3>
                <p className="text-gray-700">Responsive music streaming interface mimicking Spotify, built with HTML and CSS. Utilizes Flexbox and Grid layouts for pixel-perfect design and interactive elements. Demonstrates strong front-end skills and attention to detail.</p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 border-b-2 border-purple-500 pb-2">Education</h2>
            <div className="mb-4">
              <h3 className="text-lg font-medium">B.Tech in Computer Science and Engineering</h3>
              <p className="text-purple-600">Shri Guru Gobind Singhji Institute of Engineering and Technology, Nanded</p>
              <p className="text-gray-700">CGPA: 8.22 | Expected May 2026</p>
            </div>
            <div>
              <h3 className="text-lg font-medium">HSC</h3>
              <p className="text-purple-600">Sant Tukaram National Model School, Latur</p>
              <p className="text-gray-700">Percentage: 75.80%</p>
            </div>
          </div>

          {/* Certifications */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 border-b-2 border-purple-500 pb-2">Certifications</h2>
            <ul className="text-gray-700 space-y-2">
              <li>• Crash Course on Python - Google/Coursera</li>
              <li>• Data Structures and Algorithms - Self Paced (GeeksforGeeks)</li>
              <li>• SQL (Basic) Certificate - HackerRank</li>
            </ul>
          </div>

          {/* Competitive Programming */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 border-b-2 border-purple-500 pb-2">Competitive Programming</h2>
            <ul className="text-gray-700 space-y-2">
              <li>• LeetCode: Solved 250+ problems</li>
              <li>• GeeksforGeeks: Solved 400+ problems and ranked under top 100 at institute level</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ResumePage;

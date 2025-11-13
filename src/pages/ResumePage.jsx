import React from 'react';

const ResumePage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8 border border-gray-200">

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-purple-700">Sahil Sonkamble</h1>
            <p className="text-gray-600">Nanded, MH | 9404281358 | sahilsonkamble17@gmail.com</p>
            <div className="mt-2 space-x-4">
              <a href="https://www.linkedin.com/in/sonkamblesahil" className="text-purple-600 hover:underline">LinkedIn</a>
              <a href="https://github.com/sonkamblesahil" className="text-purple-600 hover:underline">GitHub</a>
            </div>
          </div>

          {/* Summary */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 border-b-2 border-purple-500 pb-2">Summary</h2>
            <p className="text-gray-700 leading-relaxed">
              Strong foundation in Java, JavaScript, and the MERN stack. Proficient in developing full-stack web
              applications with experience in both frontend and backend technologies.
            </p>
          </section>

          {/* Education */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 border-b-2 border-purple-500 pb-2">Education</h2>

            <div className="mb-4">
              <h3 className="text-lg font-medium">Shri Guru Gobind Singhji Institute of Engineering and Technology, Nanded</h3>
              <p className="text-purple-600">2022 – Present</p>
              <p className="text-gray-700">B.Tech. in Computer Science and Engineering | CGPA: 8.22</p>
            </div>

            <div className="mb-4">
              <h3 className="text-lg font-medium">Sant Tukaram National Model School, Latur</h3>
              <p className="text-purple-600">2021 – 2022</p>
              <p className="text-gray-700">Higher Secondary Certificate (HSC) | 75.80%</p>
            </div>

            <div>
              <h3 className="text-lg font-medium">Maharashtra Public School, Chhatrapati Sambhajinagar</h3>
              <p className="text-purple-600">2019 – 2020</p>
              <p className="text-gray-700">Secondary School Certificate (SSC) | 93.80%</p>
            </div>
          </section>

          {/* Projects */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 border-b-2 border-purple-500 pb-2">Projects</h2>
            <div className="space-y-5">

              <div>
                <h3 className="text-lg font-medium text-purple-600">StoryHub</h3>
                <p className="text-gray-700">Developed a full-stack MERN website for writing and publishing stories with JWT authentication, secure profiles, and optimized server efficiency by 1.5x.</p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-purple-600">Personal Portfolio</h3>
                <p className="text-gray-700">Responsive React portfolio with smooth scrolling, optimized performance (PageSpeed 95+, SEO 96), and integrated contact form.</p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-purple-600">Chat Application</h3>
                <p className="text-gray-700">Real-time chat app using MERN with secure login, conversation history, and user search—boosted engagement by 20%.</p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-purple-600">Online Clipboard</h3>
                <p className="text-gray-700">Instant text-sharing app using unique links and QR codes, supporting light/dark themes and responsive UI.</p>
              </div>
            </div>
          </section>

          {/* Skills */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 border-b-2 border-purple-500 pb-2">Skills Overview</h2>
            <ul className="text-gray-700 space-y-2">
              <li><strong>Programming Languages:</strong> Java, JavaScript, C, Python, HTML, CSS</li>
              <li><strong>Frameworks & Libraries:</strong> React.js, Node.js, Express.js, Tailwind CSS, Swing</li>
              <li><strong>Databases:</strong> MySQL, MongoDB, SQLite3, JDBC</li>
              <li><strong>Developer Tools:</strong> Git, GitHub, VS Code, NetBeans, Postman, Figma, Google Colab</li>
              <li><strong>CS Fundamentals:</strong> DS & Algo, OS, DBMS, CN</li>
              <li><strong>Other:</strong> REST APIs, JWT, MS-Excel, MS-PowerPoint, MS-Word</li>
            </ul>
          </section>

          {/* Achievements */}
          <section>
            <h2 className="text-2xl font-semibold mb-3 border-b-2 border-purple-500 pb-2">Achievements & Certifications</h2>
            <ul className="text-gray-700 space-y-2">
              <li>LeetCode: Solved 350+ problems | Contest Rating: 1419</li>
              <li>GeeksforGeeks: Solved 400+ problems | Top 50 at institute</li>
              <li>HackerRank: Certified in Java (Basic) & SQL (Basic)</li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
};

export default ResumePage;
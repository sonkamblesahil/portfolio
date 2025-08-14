import React from "react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "CodeVault",
    tech: "MongoDB, Express.js, React.js",
    desc: "Built a website for users to save and organize code, with sorting, notes, and full CRUD operations.",
    github: "https://github.com/sonkamblesahil"
  },
  {
    title: "Online Clipboard",
    tech: "JavaScript, Node.js, Express",
    desc: "Web app to share and access text snippets across devices with unique links, keys, and QR codes.",
    github: "https://github.com/sonkamblesahil"
  },
  {
    title: "Parking Booking System",
    tech: "Python, SQLite3, DBMS",
    desc: "Command-line parking system for booking, reserving, and cancelling slots with history tracking.",
    github: "https://github.com/sonkamblesahil"
  },
  {
    title: "Weather Website",
    tech: "HTML, CSS, JavaScript, OpenWeather API",
    desc: "Real-time weather updates for any city using OpenWeatherMap API.",
    github: "https://github.com/sonkamblesahil"
  },
  {
    title: "Spotify Clone",
    tech: "HTML, CSS",
    desc: "Responsive music streaming interface mimicking Spotify with Flexbox and Grid layouts.",
    github: "https://github.com/sonkamblesahil"
  }
];

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-purple-900 to-zinc-900 p-8 text-white">
      <h1 className="text-4xl font-extrabold text-center mb-12">My Projects</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <div
            key={i}
            className="bg-zinc-800 rounded-2xl shadow-lg p-6 flex flex-col justify-between hover:scale-105 transition-transform duration-300"
          >
            <div>
              <h2 className="text-2xl font-bold mb-2">{p.title}</h2>
              <p className="text-purple-300 text-sm mb-3">{p.tech}</p>
              <p className="text-gray-300">{p.desc}</p>
            </div>
            <a
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center gap-2 text-purple-400 hover:text-purple-200 transition"
            >
              <FaGithub size={20} /> View on GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;

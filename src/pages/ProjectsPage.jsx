import React from "react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Portfolio Website",
    tech: "React, Tailwind CSS",
    desc: "A sleek and responsive personal portfolio website to showcase my skills, experience, and projects. Features smooth animations, modern UI, and a dark/light theme for a better user experience.",
    github: "https://github.com/sonkamblesahil",
  },
  {
    title: "Story Hub",
    tech: "MERN",
    desc: "A collaborative platform where users can create, edit, and share stories. Includes authentication, rich-text editor, comment system, and personalized user dashboards.",
    github: "https://github.com/sonkamblesahil",
  },
  {
   
  title: "Hospital Management System",
  tech: "Java, JDBC, Swing",
  desc: "A desktop-based application designed to manage hospital operations efficiently. It allows administrators to handle patient records, doctor scheduling, billing, and staff management through a user-friendly interface built with Java Swing. Data is securely stored and managed using JDBC for database connectivity.",
  github: "https://github.com/sonkamblesahil"


  },
  {
    title: "Chat App",
    tech: "MERN",
    desc: "A real-time chat application using WebSockets for instant communication. Supports private chats, group messaging, typing indicators, and online/offline status tracking.",
    github: "https://github.com/sonkamblesahil",
  },
  {
    title: "NotesApp",
    tech: "MERN",
    desc: "A full-featured note-taking application where users can create, update, and delete notes with tags and search functionality. Provides secure user authentication and cloud-based data storage.",
    github: "https://github.com/sonkamblesahil",
  },
  {
    title: "Online Clipboard",
    tech: "JavaScript, Node.js, Express",
    desc: "A web app for quickly sharing text snippets across multiple devices. Generates unique links, secret keys, and QR codes for fast access. Designed for simplicity and privacy.",
    github: "https://github.com/sonkamblesahil",
  },
  {
    title: "Parking Booking System",
    tech: "Python, SQLite3, DBMS",
    desc: "A command-line system to manage parking slots efficiently. Supports booking, reservations, cancellations, and transaction history. Useful for small and medium facilities.",
    github: "https://github.com/sonkamblesahil",
  },
  {
    title: "Weather Website",
    tech: "HTML, CSS, JavaScript, OpenWeather API",
    desc: "A weather forecast web app providing real-time temperature, humidity, and condition updates. Allows users to search by city with dynamic icons and responsive UI.",
    github: "https://github.com/sonkamblesahil",
  },
  {
    title: "Spotify Clone",
    tech: "HTML, CSS",
    desc: "A responsive front-end clone of Spotify with a clean, modern interface. Built using CSS Flexbox and Grid, featuring playlists, music controls, and hover animations.",
    github: "https://github.com/sonkamblesahil",
  },
];


const ProjectsPage = () => {
  return (
    <div className="bg-gradient-to-br from-zinc-900 via-purple-900 to-zinc-900 p-8 text-white min-h-screen">
      <h1 className="text-4xl font-extrabold text-center mb-12">My Projects</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((p, i) => (
          <div
            key={i}
            className="relative group bg-zinc-800/60 backdrop-blur-md rounded-2xl shadow-lg p-6 flex flex-col justify-between border border-purple-700/30 hover:border-purple-400 transition duration-300"
          >
            {/* Hover glow */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-500 opacity-0 group-hover:opacity-20 blur-xl transition duration-500"></div>

            <div className="relative z-10">
              <h2 className="text-2xl font-bold mb-2 group-hover:text-purple-300 transition">
                {p.title}
              </h2>
              <p className="text-purple-400 text-sm mb-3 font-medium">
                {p.tech}
              </p>
              <p className="text-gray-300">{p.desc}</p>
            </div>

            <a
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 mt-6 flex items-center gap-2 text-purple-400 hover:text-purple-200 transition font-semibold"
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

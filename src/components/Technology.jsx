import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FaLinkedin, FaInstagram, FaTwitter, FaPhoneAlt } from "react-icons/fa";

const Technology = () => {
  const skills = [
    { name: "Java", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "Python", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "C++", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
    { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "HTML", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "React.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Node.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "Tailwind CSS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
    { name: "MongoDB", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "MySQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "Pandas", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
    { name: "NumPy", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
    { name: "Git", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "GitHub", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "VS Code", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  ];

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_9u5b3pd", // EmailJS service ID
        "template_0ls53fd", // EmailJS template ID
        formData,
        "BrHKnNH4rvXLanbPL"   // EmailJS public key
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        () => {
          alert("❌ Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className=" w-full flex flex-col justify-between">
      {/* Skills Section */}
      <div className=" min-h-screen flex flex-col items-center justify-center p-6">
        <h1 className="text-5xl text-white font-extrabold text-center mb-8 tracking-wide">
          Technology, Tools & Frameworks
        </h1>

        <div className="flex flex-wrap justify-center gap-6 max-w-[1100px]">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="h-[8vh] min-w-[150px] px-6 flex items-center gap-3 justify-center font-semibold text-white border border-white/30 rounded-lg shadow-md backdrop-blur-sm transition-transform transform hover:scale-105 hover:shadow-lg hover:border-white duration-300"
            >
              <img src={skill.img} alt={skill.name} className="w-6 h-6 object-contain" />
              {skill.name}
            </div>
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-black/40 backdrop-blur-lg text-white p-8 mt-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
            <form onSubmit={sendEmail} className="flex flex-col space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="p-3 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="p-3 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="p-3 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              ></textarea>
              <button
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 rounded-lg transition hover:cursor-pointer"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Social Links & Contact */}
          <div>
            <h2 className="text-3xl font-bold mb-4">Connect With Me</h2>
            <p className="mb-4">I'm always open to discussing new projects and opportunities.</p>
            <div className="flex gap-6 text-2xl mb-6">
              <a href="https://linkedin.com/in/sonkamblesahil" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
                <FaLinkedin />
              </a>
              <a href="https://instagram.com/sahilsonkamble17" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition">
                <FaInstagram />
              </a>
              <a href="https://twitter.com/your-twitter" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition">
                <FaTwitter />
              </a>
              <a href="tel:+919404281358" className="hover:text-green-400 transition">
                <FaPhoneAlt />
              </a>
            </div>
            <p className="text-lg">📞 +91 9404281358</p>
            <p className="text-lg">✉️ sahilsonkamble17@gmail.com</p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-8 text-sm text-gray-400">
          © {new Date().getFullYear()} SahilSonkamble. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Technology;

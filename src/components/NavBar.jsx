import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HomeIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2.09954L3 10.9995V21.9995H21V10.9995L12 2.09954ZM19 19.9995H5V11.8995L12 5.09954L19 11.8995V19.9995Z"></path>
  </svg>
);

const AboutIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path>
  </svg>
);

const ProjectsIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20 6h-8l-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V6h5.17l2 2H20v10z"></path>
  </svg>
);

const ResumeIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M7 18h10v-2H7v2zm10-4H7v-2h10v2zm-6-4H7V8h4v2zm9-6H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-2 14H6V6h12v12z"></path>
  </svg>
);

const GitHubIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
  </svg>
);

const MenuIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
  </svg>
);

const NavLink = ({ to, children, target, rel, onClick, isExternal = false }) => {
  if (isExternal) {
    return (
      <div>
        <a
          href={to}
          target={target}
          rel={rel}
          onClick={onClick}
          className="flex items-center space-x-2 space-y-1 text-white hover:text-gray-300 transition-colors duration-200 relative group"
        >
          {children}
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-br from-purple-900 to-white transition-all duration-300 group-hover:w-full"></span>
        </a>
      </div>
    );
  }

  return (
    <div>
      <Link
        to={to}
        onClick={onClick}
        className="flex items-center space-x-2 space-y-1 text-white hover:text-gray-300 transition-colors duration-200 relative group"
      >
        {children}
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-br from-purple-900 to-white transition-all duration-300 group-hover:w-full"></span>
      </Link>
    </div>
  );
};

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='h-[10vh] flex items-center justify-between px-6 text-white relative backdrop-blur-xl'>
      <div className="logo">
        <Link to="/" className="text-2xl text-white font-bold hover:text-purple-400 transition-colors">
          सा
        </Link>
      </div>
      

      <div className="hidden md:flex items-center text-lg text-white space-x-10">
        <NavLink to="/">
          <HomeIcon className="w-6 h-6" />
          <span>Home</span>
        </NavLink>

        <NavLink to="/about">
          <AboutIcon className="w-6 h-6" />
          <span>About</span>
        </NavLink>

        <NavLink to="/projects">
          <ProjectsIcon className="w-6 h-6" />
          <span>Projects</span>
        </NavLink>

        <NavLink to="/resume">
          <ResumeIcon className="w-6 h-6" />
          <span>Resume</span>
        </NavLink>

        <NavLink to="https://github.com/sonkamblesahil" target="_blank" rel="noopener noreferrer" isExternal={true}>
          <GitHubIcon className="w-6 h-6" />
          <span>GitHub</span>
        </NavLink>
      </div>

      <button
        className="md:hidden text-white"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <MenuIcon className="w-6 h-6" />
      </button>

      {isMenuOpen && (
        <div className="absolute w-30 top-[60%] right-0 rounded-2xl bg-transparent md:hidden">
          <div className="flex flex-col space-y-4 px-6 py-4">
            <NavLink to="/" onClick={() => setIsMenuOpen(false)}>
              <HomeIcon className="w-6 h-6" />
              <span>Home</span>
            </NavLink>
            <NavLink to="/about" onClick={() => setIsMenuOpen(false)}>
              <AboutIcon className="w-6 h-6" />
              <span>About</span>
            </NavLink>
            <NavLink to="/projects" onClick={() => setIsMenuOpen(false)}>
              <ProjectsIcon className="w-6 h-6" />
              <span>Projects</span>
            </NavLink>
            <NavLink to="/resume" onClick={() => setIsMenuOpen(false)}>
              <ResumeIcon className="w-6 h-6" />
              <span>Resume</span>
            </NavLink>
            <NavLink to="https://github.com/sonkamblesahil" target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)} isExternal={true}>
              <GitHubIcon className="w-6 h-6" />
              <span>GitHub</span>
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;

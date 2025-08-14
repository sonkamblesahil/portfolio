import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import IntroSection from './components/IntroSection'
import Technology from './components/Technology'
import AboutPage from './pages/AboutPage'
import ProjectsPage from './pages/ProjectsPage'
import ResumePage from './pages/ResumePage'

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      {/* <IntroSection /> */}
      <Technology />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <div className='relative w-full bg-gradient-to-br from-zinc-900 via-purple-900 to-zinc-900'>
        <div className="navbar sticky top-0 z-50">
          <NavBar />
        </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/resume" element={<ResumePage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

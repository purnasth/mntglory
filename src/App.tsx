import React from 'react';
import {
  BrowserRouter as Router,
  // Routes,
  // Route,
  // Navigate,
} from 'react-router-dom';
// import Intro from './components/Intro';
import Navbar from './layouts/Navbar';
import './test.css';
import AboutIntro from './components/AboutIntro';
import Team from './components/Team';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Events from './components/Events';

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Hero />
        {/* <Intro /> */}
        <AboutIntro />
        <Team />
        <Events />
        <Gallery />
      </Router>
    </>
  );
};

export default App;

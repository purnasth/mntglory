import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Intro from './components/Intro';
import Navbar from './layouts/Navbar';
import './test.css';
import AboutIntro from './components/AboutIntro';
import Team from './components/Team';

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Intro />
        <AboutIntro />
        <Team />
      </Router>
    </>
  );
};

export default App;

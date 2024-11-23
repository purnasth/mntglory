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
import MasterSlider from './components/ui/MasterSlider';

import slider1 from './assets/img/slider/62.jpg';
import slider2 from './assets/img/slider/37.jpg';

const sliderImages = [
  {
    image:
      // 'https://wallpapercave.com/wp/wp4299473.jpg',
      slider2,
    // 'https://mntglory.saksham.edu.np/images/mgs.webp',
    title: 'Image 1',
    description: 'Description 1',
  },
  {
    image: slider1,
    title: 'Image 1',
    description: 'Description 1',
  },
];

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Intro />
        <MasterSlider slides={sliderImages} />
      </Router>
    </>
  );
};

export default App;

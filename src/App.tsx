import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Navigate,
} from 'react-router-dom';
import Navbar from './layouts/Navbar';
import './test.css';
import Footer from './layouts/Footer';
import Home from './pages/Home';
import GalleryPage from './pages/GalleryPage';

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<GalleryPage/>} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;

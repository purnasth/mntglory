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
import Notice from './pages/Notice';
import Loader from './layouts/Loader';
import useLenisScroll from './hooks/useLenisScroll';
import RouterToTop from './utils/RouterToTop';
import AboutPage from './pages/AboutPage';
import EventsPage from './pages/EventsPage';
import EventDetailsPage from './pages/EventDetailsPage';
import TeamPage from './pages/TeamPage';
import Error404 from './pages/Error404';

const App: React.FC = () => {
  useLenisScroll();
  return (
    <>
      <Loader />
      <Router>
        <RouterToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/notice" element={<Notice />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/events/:eventTitle" element={<EventDetailsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;

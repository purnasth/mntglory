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
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import AddGalleryPage from './pages/AddGalleryPage';
import AddNoticePage from './pages/AddNoticePage';
import { ToastContainer } from 'react-toastify';

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
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/gallery/add" element={<AddGalleryPage />} />
          <Route path="/notice/add" element={<AddNoticePage />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </Router>
      <ToastContainer />
    </>
  );
};

export default App;

import React, { useState, useEffect } from 'react';

import logo from '../assets/logo.webp';
import SideNav from '../components/SideNav';

import { Link, NavLink } from 'react-router-dom';

const navLinks = [
  {
    id: 1,
    title: 'Home',
    url: '/',
  },
  {
    id: 2,
    title: 'About',
    url: '/about',
  },
  {
    id: 3,
    title: 'Events',
    url: '/events',
  },
  {
    id: 4,
    title: 'Notice',
    url: '/notice',
  },
  {
    id: 5,
    title: 'Gallery',
    url: '/gallery',
  },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLogoClick = () => {
    const event = new Event('scrollToTop');
    window.dispatchEvent(event);
  };

  return (
    <>
      <nav className={`sticky top-0 z-40 w-full border-b border-dark/20`}>
        <div
          className={`transition-300 absolute inset-0 size-full bg-white ${
            isScrolled ? 'bg-white' : ''
          }`}
        />
        <div className="container relative flex items-center justify-between py-2">
          <Link to="/" className="flex" onClick={handleLogoClick}>
            <img
              src={logo}
              alt="Logo"
              className={`object-contain transition-all duration-500 ${
                isScrolled ? 'size-10 md:size-12' : 'size-14 md:size-20'
              }`}
            />
          </Link>

          <div className="flex items-center gap-8">
            <ul className="site-menu hidden items-center gap-8 md:flex">
              {navLinks.map((link) => (
                <li key={link.id} className="group">
                  <NavLink
                    to={link.url}
                    data-text={link.title}
                    className={({ isActive }) =>
                      `a-hover-animation navlink ${isActive ? 'text-primary' : 'text-dark'}`
                    }
                  >
                    {link.title}
                  </NavLink>
                </li>
              ))}
            </ul>
            {/* <div className="md:hidden"> */}
            <SideNav />
            {/* </div> */}
          </div>
        </div>
        {/* <hr className="border-light/50" /> */}
      </nav>
    </>
  );
};

export default Navbar;

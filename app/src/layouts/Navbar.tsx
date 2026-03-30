import React, { useState, useEffect } from 'react';

import logo from '../assets/logo.webp';
import SideNav from '../components/SideNav';

import { Link, NavLink } from 'react-router-dom';
import useFetchAPI from '../hooks/useFetchAPI';
import { useAuth } from '../context/AuthContext';

interface NavLinksProps {
  id: number;
  title: string;
  url: string;
}

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { isAuthenticated } = useAuth();

  const {
    data: navLinks = [],
    isLoading,
    isError,
  } = useFetchAPI<NavLinksProps[]>('navbar', '/api/navbar.json');

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

  if (isLoading) return null;
  if (isError) {
    console.error(isError);
    return null;
  }

  return (
    <>
      <nav className={`sticky top-0 z-40 w-full border-b border-dark/20`}>
        <div
          className={`transition-300 absolute inset-0 size-full bg-white ${
            isScrolled ? 'bg-white' : ''
          }`}
        />
        <div className="relative flex items-center justify-between py-2 md:container">
          <Link to="/" className="flex" onClick={handleLogoClick}>
            <img
              src={logo}
              alt="Logo"
              className={`object-contain transition-all duration-500 ${
                isScrolled ? 'size-10 md:size-12' : 'size-14 md:size-20'
              }`}
            />
          </Link>

          <div className="flex items-center gap-4 md:gap-8">
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
            <NavLink
              to={isAuthenticated ? '/profile' : '/login'}
              className={({ isActive }) =>
                `transition-300 flex size-8 items-center justify-center rounded-full text-xs font-semibold ${
                  isActive
                    ? 'bg-primary text-light'
                    : isAuthenticated
                      ? 'bg-primary/10 text-primary hover:bg-primary hover:text-light'
                      : 'border border-dark/20 text-dark/60 hover:border-primary hover:text-primary'
                }`
              }
              title={isAuthenticated ? 'My Profile' : 'Login'}
              aria-label={isAuthenticated ? 'My Profile' : 'Login'}
            >
              <span aria-hidden="true">{isAuthenticated ? '✓' : '→'}</span>
            </NavLink>
            {/* <div className="md:hidden"> */}
            <SideNav navLinks={navLinks} />
            {/* </div> */}
          </div>
        </div>
        {/* <hr className="border-light/50" /> */}
      </nav>
    </>
  );
};

export default Navbar;

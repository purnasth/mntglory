import { TbMenu2 } from 'react-icons/tb';
import React, { useState, useEffect } from 'react';
import { MdClose, MdSchool } from 'react-icons/md';
import { NavLink, useLocation } from 'react-router-dom';

import logo from '../assets/logo.webp';
import ContactInfo from '../components/ui/ContactInfo';

interface NavLink {
  id: number;
  url: string;
  title: string;
}

interface NavPageProps {
  navLinks: NavLink[];
}

const NavPage: React.FC<NavPageProps> = ({ navLinks }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  }, [location]);

  const toggleNav = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = !isOpen ? 'hidden' : 'auto';
  };

  const closeNav = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <button onClick={toggleNav} className="text-xl text-dark md:text-2xl">
        <TbMenu2 />
      </button>

      <div
        className={`fixed left-0 top-0 h-screen w-full bg-light text-dark transition-all duration-1000 ${
          isOpen
            ? 'pointer-events-auto translate-y-0 opacity-100 blur-0'
            : // : 'pointer-events-auto translate-y-0 opacity-100 blur-0'
              'pointer-events-none -translate-y-1/4 opacity-0 blur-3xl'
        } z-50`}
      >
        {/* <div
          className="absolute inset-0 -z-10 size-full bg-cover"
          style={{
            backgroundImage:
              'url("https://media.istockphoto.com/id/1704870086/vector/abstract-gray-and-white-color-gradient-background-vector-illustration.jpg?s=612x612&w=0&k=20&c=U_tzoW8Rktdydkc8Ng-O-1kPI-r7BcJun-o2O3n2nvM=")',
          }}
        ></div> */}
        <button
          onClick={closeNav}
          className="absolute right-10 top-10 inline-flex items-center gap-1 text-xs font-normal uppercase tracking-widest"
        >
          Close
          <MdClose className="text-xl md:text-3xl" />
        </button>
        <div className="m-6 flex items-center justify-center gap-2">
          <a href="/" className="flex">
            <img src={logo} alt="Logo" className="size-32 object-contain" />
          </a>
          {/* <h2 className="mx-auto max-w-64 text-center text-xl">
            Mount Glory English Boarding High School
          </h2> */}
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-16">
          <ul className="links flex w-32 flex-col gap-6">
            {navLinks.map((link) => (
              <li key={link.id} className="group w-full">
                <NavLink
                  to={link.url}
                  className={({ isActive }) =>
                    `navlink inline-flex w-full justify-between text-right text-2xl text-dark transition-all duration-300 ${isActive ? 'text-primary' : 'text-dark'}`
                  }
                  aria-label={link.title}
                >
                  <MdSchool className="inline-block -translate-x-2 -translate-y-4 opacity-0 transition-all duration-300 ease-linear group-hover:opacity-100 md:group-hover:translate-y-0" />
                  {link.title}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="">
            <img
              src="https://mntglory.saksham.edu.np/images/gallery/sports/30.webp"
              alt="Mount Glory School Building"
              className="h-[36rem] w-96 object-cover"
            />
          </div>
          <div className="flex w-32 flex-col justify-end">
            <ContactInfo />
          </div>
        </div>
      </div>
    </>
  );
};

export default NavPage;

import React, { useState } from 'react';
import { TbMenu2 } from 'react-icons/tb';
import { MdClose, MdSchool } from 'react-icons/md';
// import { TbMenu2, TbMailFilled } from 'react-icons/tb';
// import { MdClose, MdCall, MdSchool } from 'react-icons/md';
// import { IoLogoWhatsapp } from 'react-icons/io';
import logo from '../assets/logo.svg';

// import { AiFillInstagram } from 'react-icons/ai';

// import { PiWatchBold } from 'react-icons/pi';
// import { PiHandbagBold } from 'react-icons/pi';
// import { PiImageSquareBold } from 'react-icons/pi';
// import { TbRosetteDiscountCheck } from 'react-icons/tb';
import { NavLink } from 'react-router-dom';

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
    url: '/services',
  },
  {
    id: 4,
    title: 'Gallery',
    url: '/gallery',
  },
];

const SideNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

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

      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black opacity-50"
          onClick={closeNav}
        />
      )}

      <div
        className={`fixed left-0 top-0 h-screen w-full bg-light text-dark transition-all duration-500 md:w-96 ${
          isOpen
            ? 'pointer-events-auto translate-x-0'
            : 'pointer-events-none -translate-x-full'
        } z-50`}
      >
        {/* <div
          className="absolute inset-0 -z-10 size-full bg-cover"
          style={{
            backgroundImage:
              'url("https://media.istockphoto.com/id/1704870086/vector/abstract-gray-and-white-color-gradient-background-vector-illustration.jpg?s=612x612&w=0&k=20&c=U_tzoW8Rktdydkc8Ng-O-1kPI-r7BcJun-o2O3n2nvM=")',
          }}
        ></div> */}
        <div className="flex size-full flex-col items-center justify-between p-6">
          <div className="relative flex w-full items-center justify-between">
            <a href="/" className="flex">
              <img src={logo} alt="Logo" className="size-14 object-contain" />
            </a>
            <button
              onClick={closeNav}
              className="inline-flex items-center justify-end gap-1 text-xs font-normal uppercase tracking-widest"
            >
              Close
              <MdClose className="text-xl md:text-3xl" />
            </button>
          </div>
          <div className="w-full">
            <span className="uppercase text-dark/40">Menu</span>

            <ul className="links mt-8 flex flex-col items-start justify-start gap-6">
              {navLinks.map((link) => (
                <li key={link.id} className="group w-full">
                  <NavLink
                    to={link.url}
                    className={({ isActive }) =>
                      `navlink inline-flex w-full justify-between text-2xl text-dark transition-all duration-300 ${isActive ? 'text-primary' : 'text-dark'}`
                    }
                    aria-label={link.title}
                  >
                    {link.title}
                    <MdSchool className="inline-block -translate-y-4 opacity-0 transition-all duration-300 ease-linear group-hover:opacity-100 md:group-hover:translate-y-0" />
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative flex w-full flex-col justify-between">
            <p>&copy; 2024 Mount Glory School</p>
            <p className="item-center group flex">
              Developed by
              <a
                className="ml-1 flex items-center gap-1 font-semibold"
                rel="noreferrer"
                href="https://www.purnashrestha.com.np/"
                target="_blank"
              >
                <span className="h-[1px] w-1 bg-dark/80 transition-all duration-300 group-hover:w-6"></span>
                Purna Shrestha
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideNav;

import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.webp';

const Loader: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const startTime = Date.now();

    const handleLoad = () => {
      const loadTime = Date.now() - startTime;
      const minimumDuration = 2000;

      const remainingTime = minimumDuration - loadTime;
      setTimeout(
        () => {
          setIsLoaded(true);
        },
        remainingTime > 0 ? remainingTime : 0,
      );
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <div
      id="preloader"
      className={`fixed inset-0 z-[99] flex h-screen w-full origin-center cursor-none items-center justify-center bg-white transition-all duration-[1.5s] ${
        isLoaded
          ? 'pointer-events-none -translate-y-full opacity-100'
          : 'translate-y-0 opacity-100'
      }`}
    >
      <img
        src={logo}
        alt="Mount Glory"
        className="size-48 md:size-72 object-contain transition-transform duration-1000"
      />
    </div>
  );
};

export default Loader;

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function RouterToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScrollToTop = () => {
      window.scrollTo(0, 0);
    };

    window.addEventListener('scrollToTop', handleScrollToTop);

    return () => {
      window.removeEventListener('scrollToTop', handleScrollToTop);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
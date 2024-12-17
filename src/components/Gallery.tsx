import React, { useRef, useState } from 'react';
import LightGallery from 'lightgallery/react';
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgFullscreen from 'lightgallery/plugins/fullscreen';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-video.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-fullscreen.css';

import useFetchAPI from '../hooks/useFetchAPI';

interface ImageData {
  id: number;
  url: string;
  alt: string;
  category: string;
}

interface GalleryProps {
  limit?: number;
}

const Gallery: React.FC<GalleryProps> = ({ limit }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const galleryRef = useRef<HTMLDivElement>(null);

  const {
    data: galleryImages = [],
    isLoading,
    isError,
  } = useFetchAPI<ImageData[]>('gallery', '/api/gallery.json'); // Replace with your API endpoint

  const filteredImages =
    activeCategory === 'All'
      ? galleryImages
      : galleryImages.filter((image) => image.category === activeCategory);

  const categories = [
    'All',
    ...new Set(galleryImages.map((image) => image.category)),
  ];

  const handleCategoryClick = (category: string) => {
    setIsTransitioning(true);
    setActiveCategory(category);

    setTimeout(() => {
      setIsTransitioning(false);
      if (galleryRef.current) {
        galleryRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }, 200);
  };

  const limitGalleryImages = limit
    ? filteredImages.slice(0, limit)
    : filteredImages;

  if (isLoading) return <div className="p-4 text-center">Loading...</div>;
  if (isError)
    return (
      <div className="p-4 text-center text-red-500">Failed to load images.</div>
    );

  return (
    <>
      <div
        id="gallery"
        className="sticky top-16 z-30 mb-4 mt-8 flex flex-wrap justify-center gap-4 bg-white p-2"
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={`${
              activeCategory === category
                ? 'bg-primary/5 font-semibold text-primary'
                : 'font-medium text-dark/60'
            } transition-linear rounded-md px-4 py-1 text-lg capitalize hover:bg-primary/5 hover:text-primary`}
          >
            {category}
          </button>
        ))}
      </div>

      <LightGallery
        plugins={[lgZoom, lgVideo, lgThumbnail, lgFullscreen]}
        mode="lg-fade"
        elementClassNames={`w-full columns-3 gap-2 transition-linear ${
          isTransitioning ? 'translate-y-1/2' : 'translate-y-0'
        }`}
      >
        {limitGalleryImages.map((image) => (
          <div
            key={image.id}
            className={`gallery-item group mb-2 overflow-hidden transition-all duration-300 ease-linear ${
              isTransitioning ? 'scale-0' : 'scale-100'
            }`}
            data-src={image.url}
          >
            <img
              className="h-full w-full cursor-pointer object-cover shadow-lg transition duration-700 ease-in-out group-hover:scale-125"
              src={image.url}
              alt={image.alt}
              loading="lazy"
            />
          </div>
        ))}
      </LightGallery>
    </>
  );
};

export default Gallery;

import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
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

import api from '../utils/api';
import { useAuth } from '../context/AuthContext';

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
  const { isAuthenticated } = useAuth();
  const [activeCategory, setActiveCategory] = useState('All');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const galleryRef = useRef<HTMLDivElement>(null);

  const { data: allImages = [], isLoading: allLoading } = useQuery<ImageData[]>(
    {
      queryKey: ['gallery-all'],
      queryFn: async () => {
        const res = await api.get('/gallery');
        return res.data;
      },
      staleTime: 1000 * 60 * 5,
    },
  );

  const { data: filteredFromApi = [], isLoading: filteredLoading } = useQuery<
    ImageData[]
  >({
    queryKey: ['gallery', activeCategory],
    queryFn: async () => {
      const params =
        activeCategory !== 'All' ? { category: activeCategory } : {};
      const res = await api.get('/gallery', { params });
      return res.data;
    },
    staleTime: 1000 * 60 * 5,
  });

  const galleryImages = activeCategory === 'All' ? allImages : filteredFromApi;

  const categories = [
    'All',
    ...new Set(allImages.map((image) => image.category)),
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
    ? galleryImages.slice(0, limit)
    : galleryImages;

  if (allLoading || filteredLoading) return null;

  return (
    <>
      <div
        id="gallery"
        className="sticky top-14 z-30 mb-4 mt-8 flex flex-wrap items-center justify-center gap-2 bg-white p-2 md:top-16 md:gap-4"
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={`${
              activeCategory === category
                ? 'bg-primary/5 font-semibold text-primary'
                : 'font-medium text-dark/60'
            } transition-linear rounded-md px-4 py-1 text-sm capitalize hover:bg-primary/5 hover:text-primary md:text-lg`}
          >
            {category}
          </button>
        ))}
        {isAuthenticated && (
          <Link
            to="/gallery/add"
            className="transition-300 ml-2 rounded-xl border border-primary bg-primary px-4 py-1 text-sm font-semibold text-light hover:bg-light hover:text-primary md:text-lg"
          >
            + Add Image
          </Link>
        )}
      </div>

      {limitGalleryImages.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <p className="mb-2 text-lg text-dark/40">No images found</p>
          <p className="mb-4 text-sm text-dark/30">
            {activeCategory !== 'All'
              ? `No images in the "${activeCategory}" category yet.`
              : 'The gallery is empty.'}
          </p>
          {isAuthenticated && (
            <Link
              to="/gallery/add"
              className="transition-300 rounded-xl border border-primary bg-primary px-6 py-2 text-sm font-semibold text-light hover:bg-light hover:text-primary"
            >
              + Add Image
            </Link>
          )}
        </div>
      ) : (
        <LightGallery
          plugins={[lgZoom, lgVideo, lgThumbnail, lgFullscreen]}
          mode="lg-fade"
          elementClassNames={`w-full columns-1 md:columns-2 lg:columns-3 gap-2 transition-linear ${
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
      )}
    </>
  );
};

export default Gallery;

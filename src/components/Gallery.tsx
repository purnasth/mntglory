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

const galleryImages = [
  {
    id: 1,
    url: 'https://mntglory.saksham.edu.np/images/gallery/education/39.webp',
    alt: 'Art Competition',
    category: 'Education',
  },
  {
    id: 2,
    url: 'https://mntglory.saksham.edu.np/images/gallery/program/51.webp',
    alt: 'Parents Day',
    category: 'Program',
  },
  {
    id: 3,
    url: 'https://mntglory.saksham.edu.np/images/gallery/education/14.webp',
    alt: 'Educational Trip',
    category: 'Education',
  },
  {
    id: 4,
    url: 'https://mntglory.saksham.edu.np/images/gallery/sports/28.webp',
    alt: 'Futsal',
    category: 'Sport',
  },
  {
    id: 5,
    url: 'https://mntglory.saksham.edu.np/images/gallery/program/17.webp',
    alt: 'Swimming',
    category: 'Program',
  },
  {
    id: 6,
    url: 'https://mntglory.saksham.edu.np/images/gallery/education/20.webp',
    alt: 'Environment Day',
    category: 'Education',
  },
  {
    id: 7,
    url: 'https://mntglory.saksham.edu.np/images/gallery/sports/34.webp',
    alt: 'Sports Meet',
    category: 'Sport',
  },
  {
    id: 8,
    url: 'https://mntglory.saksham.edu.np/images/gallery/sports/30.webp',
    alt: 'Kids Marathon',
    category: 'Sport',
  },
  {
    id: 9,
    url: 'https://mntglory.saksham.edu.np/images/gallery/program/61.webp',
    alt: "28th Parents' Day",
    category: 'Program',
  },
  {
    id: 10,
    url: 'https://mntglory.saksham.edu.np/images/gallery/sports/32.webp',
    alt: 'Kids Game',
    category: 'Sport',
  },
  {
    id: 11,
    url: 'https://mntglory.saksham.edu.np/images/gallery/sports/64.webp',
    alt: 'Prize Distribution',
    category: 'Education',
  },
  {
    id: 12,
    url: 'https://mntglory.saksham.edu.np/images/gallery/program/37.webp',
    alt: 'Tihar Celebration',
    category: 'Program',
  },
];

interface GalleryProps {
  limit?: number;
}

const Gallery: React.FC<GalleryProps> = ({ limit }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const galleryRef = useRef<HTMLDivElement>(null);

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
                ? 'font-medium text-primary bg-primary/5'
                : 'font-medium text-dark/60'
            } transition-linear rounded-md px-4 py-1 text-xs capitalize hover:bg-primary/5 hover:text-primary md:px-4 md:py-1 md:text-sm lg:text-lg`}
          >
            {category}
          </button>
        ))}
      </div>
      <LightGallery
        plugins={[lgZoom, lgVideo, lgThumbnail, lgFullscreen]}
        mode="lg-fade"
        elementClassNames={`w-full columns-3 sm:columns-2 lg:columns-3 xl:columns-3 gap-2 md:gap-2 transition-linear ${
          isTransitioning ? 'translate-y-1/2' : 'translate-y-0'
        }`}
        thumbnail={true}
        autoplay={true}
      >
        {limitGalleryImages.map((image) => (
          <div
            key={image.id}
            className={`gallery-item group mb-2 origin-center overflow-hidden transition-all duration-300 ease-linear md:mb-2 ${
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

import React, { useState } from 'react';
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
    url: 'https://mntglory.saksham.edu.np/images/gallery/program/61.webp',
    alt: 'Mount Glory School',
    category: 'Events',
  },
  {
    id: 2,
    url: 'https://mntglory.saksham.edu.np/images/gallery/sports/30.webp',
    alt: 'Mount Glory School',
    category: 'Extra Curricular',
  },
  {
    id: 3,
    url: 'https://mntglory.saksham.edu.np/images/gallery/program/61.webp',
    alt: 'Mount Glory School',
    category: 'Events',
  },
  {
    id: 4,
    url: 'https://mntglory.saksham.edu.np/images/gallery/sports/30.webp',
    alt: 'Mount Glory School',
    category: 'Extra Curricular',
  },
  {
    id: 5,
    url: 'https://mntglory.saksham.edu.np/images/gallery/program/61.webp',
    alt: 'Mount Glory School',
    category: 'Events',
  },
  {
    id: 6,
    url: 'https://mntglory.saksham.edu.np/images/gallery/sports/30.webp',
    alt: 'Mount Glory School',
    category: 'Extra Curricular',
  },
  {
    id: 7,
    url: 'https://mntglory.saksham.edu.np/images/gallery/program/61.webp',
    alt: 'Mount Glory School',
    category: 'Events',
  },
  {
    id: 8,
    url: 'https://mntglory.saksham.edu.np/images/gallery/sports/30.webp',
    alt: 'Mount Glory School',
    category: 'Extra Curricular',
  },
  {
    id: 9,
    url: 'https://mntglory.saksham.edu.np/images/gallery/program/61.webp',
    alt: 'Mount Glory School',
    category: 'Events',
  },
  {
    id: 10,
    url: 'https://mntglory.saksham.edu.np/images/gallery/sports/30.webp',
    alt: 'Mount Glory School',
    category: 'Extra Curricular',
  },
  {
    id: 11,
    url: 'https://mntglory.saksham.edu.np/images/gallery/program/61.webp',
    alt: 'Mount Glory School',
    category: 'Events',
  },
  {
    id: 12,
    url: 'https://mntglory.saksham.edu.np/images/gallery/sports/30.webp',
    alt: 'Mount Glory School',
    category: 'Extra Curricular',
  },
];

const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [isTransitioning, setIsTransitioning] = useState(false);

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
    }, 200);
  };
  return (
    <>
      <div className="flex flex-wrap justify-center gap-4 p-4 md:p-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={`${
              activeCategory === category
                ? 'text-custom-black'
                : 'text-custom-black/50'
            } transition-linear hover:text-custom-black hover:bg-custom-black/5 rounded-md px-1 py-2 font-title text-xs font-bold uppercase md:px-4 md:py-2 md:text-sm lg:text-base`}
          >
            {category}
          </button>
        ))}
      </div>
      <LightGallery
        plugins={[lgZoom, lgVideo, lgThumbnail, lgFullscreen]}
        mode="lg-fade"
        elementClassNames={`w-full grid grid-cols-2 lg:grid-cols-4 gap-4 transition-linear ${
          isTransitioning ? 'translate-y-1/2' : 'translate-y-0'
        }`}
        thumbnail={true}
        autoplay={true}
      >
        {filteredImages.map((image) => (
          <div
            key={image.id}
            className={`gallery-item group overflow-hidden transition-all duration-200 ease-linear ${
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

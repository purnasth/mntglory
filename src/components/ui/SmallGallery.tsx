import React from 'react';
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

interface ImageTypes {
  images: { src: string; alt: string }[];
}

const SmallGallery: React.FC<ImageTypes> = ({ images }) => {
  return (
    <>
      <LightGallery
        plugins={[lgZoom, lgVideo, lgThumbnail, lgFullscreen]}
        mode="lg-fade"
        elementClassNames={`w-full columns-1 md:columns-2 lg:columns-3 gap-2 transition-linear`}
      >
        {images.slice(0, 6).map((image, index) => (
          <div
            key={index}
            className={`gallery-item group mb-2 overflow-hidden transition-all duration-300 ease-linear`}
            data-src={image.src}
          >
            <img
              className="h-full w-full cursor-pointer object-cover shadow-lg transition duration-700 ease-in-out group-hover:scale-125"
              src={image.src}
              alt={image.alt}
              loading="lazy"
            />
          </div>
        ))}
      </LightGallery>
    </>
  );
};

export default SmallGallery;

import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import SliderNavigation from './SliderNavigation';

interface Slide {
  image: string;
  title?: string;
  description?: string;
}

interface MasterSliderProps {
  slides: Slide[];
  hasContent?: boolean;
  autoplay?: boolean;
  speed?: number;
  delay?: number;
  sizeClassName?: string;
}

const MasterSlider: React.FC<MasterSliderProps> = ({
  slides,
  hasContent = false,
  autoplay = true,
  speed = 2000,
  delay = 3000,
  sizeClassName = 'relative flex h-screen items-center justify-center',
}) => {
  const swiperRef = useRef<any>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.on('slideChange', () => {
        setCurrentIndex(swiperRef.current.realIndex);
      });
    }
  }, []);

  const handleNext = () => swiperRef.current?.slideNext();
  const handlePrev = () => swiperRef.current?.slidePrev();

  return (
    <>
      <Swiper
        modules={[Navigation, Autoplay, EffectFade]}
        autoplay={autoplay ? { delay, disableOnInteraction: false } : undefined}
        loop={true}
        speed={speed}
        spaceBetween={0}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="relative h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className={`${sizeClassName}`}>
            <img
              src={slide.image}
              alt={slide.title || `Slide ${index + 1}`}
              className="-z-10 h-screen w-full object-cover"
            />
            {hasContent && (
              <div className="absolute bottom-0 left-0 flex h-max w-full items-end justify-between space-y-2 bg-gradient-to-t from-black to-transparent p-8 pt-16 text-start">
                {slide.title && (
                  <h3 className="text-light text-xl capitalize leading-snug sm:text-2xl md:text-4xl lg:text-5xl lg:leading-none">
                    {slide.title}
                  </h3>
                )}
                <SliderNavigation
                  currentIndex={currentIndex}
                  totalItems={slides.length}
                  onNext={handleNext}
                  onPrev={handlePrev}
                />
                {/* {slide.description && (
                  <p className="text-center text-sm text-dark/60">
                    {slide.description}
                  </p>
                )} */}
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default MasterSlider;

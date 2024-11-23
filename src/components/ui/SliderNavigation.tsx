import React from 'react';
import { TbArrowNarrowRight, TbArrowNarrowLeft } from 'react-icons/tb';
import { RxSlash } from 'react-icons/rx';

interface SliderNavigationProps {
  currentIndex: number;
  totalItems: number;
  onNext: () => void;
  onPrev: () => void;
}

const SliderNavigation: React.FC<SliderNavigationProps> = ({
  // currentIndex,
  // totalItems,
  onNext,
  onPrev,
}) => {
  return (
    <div className="border-light/40 flex h-7 items-center gap-0 overflow-hidden rounded-full border bg-gradient-to-r from-[#0575E6] to-[#021B79] px-4">
      <button
        onClick={onPrev}
        aria-label="Previous"
        className="text-light text-2xl"
      >
        <TbArrowNarrowLeft />
        {/* &larr; */}
      </button>
      {/* <span className="text-base">
        {currentIndex + 1} / {totalItems}
      </span> */}

      <RxSlash className="text-light scale-x-50 scale-y-110 text-3xl" />
      <button
        onClick={onNext}
        aria-label="Next"
        className="text-light text-2xl"
      >
        {/* &rarr; */}
        <TbArrowNarrowRight />
      </button>
    </div>
  );
};

export default SliderNavigation;

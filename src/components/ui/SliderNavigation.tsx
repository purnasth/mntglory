import React from 'react';
// import { TbArrowNarrowRight, TbArrowNarrowLeft } from 'react-icons/tb';

interface SliderNavigationProps {
  currentIndex: number;
  totalItems: number;
  onNext: () => void;
  onPrev: () => void;
}

const SliderNavigation: React.FC<SliderNavigationProps> = ({
  currentIndex,
  totalItems,
  onNext,
  onPrev,
}) => {
  return (
    <div className="flex items-center gap-2">
      <button onClick={onPrev} aria-label="Previous" className="text-4xl">
        &larr;
      </button>
      <span className="text-base">
        {currentIndex + 1} / {totalItems}
      </span>
      <button onClick={onNext} aria-label="Next" className="text-4xl">
        &rarr;
      </button>
    </div>
  );
};

export default SliderNavigation;

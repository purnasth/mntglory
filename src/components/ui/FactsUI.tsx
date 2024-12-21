import React, { useState, useEffect, useRef } from 'react';
import anime from 'animejs';

interface FactsContents {
  number: string;
  title: string;
}

const factsContents: FactsContents[] = [
  {
    number: '42+',
    title: 'Total Staffs',
  },
  {
    number: '24+',
    title: 'Years Experience',
  },
  {
    number: '100%',
    title: 'Happy Students',
  },
  {
    number: '97',
    title: 'Awards Won',
  },
  {
    number: '13000+',
    title: 'Students',
  },
];

const FactsUI: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartAnimation(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 },
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  useEffect(() => {
    if (startAnimation) {
      const targets = document.querySelectorAll('.animated-number');

      targets.forEach((target) => {
        const finalValue = target.getAttribute('data-value') || '0';
        const symbol = target.getAttribute('data-symbol') || '';

        anime({
          targets: target,
          innerHTML: [0, parseInt(finalValue)],
          easing: 'easeOutExpo',
          duration: 3000,
          round: 1, // Round to whole numbers
          update: (anim) => {
            target.innerHTML = `${Math.floor((anim.currentTime / 3000) * parseInt(finalValue))}${symbol}`;
          },
        });
      });
    }
  }, [startAnimation]);

  return (
    <div
      ref={containerRef}
      className="flex items-center justify-between rounded-2xl bg-slate-100 p-3 sm:p-6 shadow-sm outline outline-1 outline-dark/20"
    >
      {factsContents.map((content, index) => {
        const numberMatch = content.number.match(/\d+/);
        const symbolMatch = content.number.replace(numberMatch?.[0] || '', '');

        return (
          <div
            key={index}
            className="flex flex-1 flex-col items-center"
          >
            <span
              className="animated-number font-medium text-primary text-xl md:text-3xl"
              data-value={numberMatch ? numberMatch[0] : '0'}
              data-symbol={symbolMatch}
            >
              0{symbolMatch}
            </span>
            <span className="mt-1 text-[0.5em] md:text-sm text-gray-600">{content.title}</span>
          </div>
        );
      })}
    </div>
  );
};

export default FactsUI;

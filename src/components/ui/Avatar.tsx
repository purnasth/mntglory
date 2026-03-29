import React, { useState } from 'react';

interface AvatarProps {
  src?: string;
  alt: string;
  name: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  fallback?: string;
  style?: React.CSSProperties;
  showTooltip?: boolean;
}

const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  name,
  size = 'md',
  className = '',
  fallback,
  style,
  showTooltip = true,
}) => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const sizeClasses = {
    sm: 'size-8',
    md: 'size-10',
    lg: 'size-16',
    xl: 'size-20',
  };

  return (
    <div
      className={`relative inline-block ${className}`}
      onMouseEnter={() => setIsTooltipVisible(true)}
      onMouseLeave={() => setIsTooltipVisible(false)}
      style={style}
    >
      <img
        src={src || fallback}
        alt={alt}
        className={`rounded-full bg-white object-cover outline outline-1 outline-white ${sizeClasses[size]}`}
      />

      {showTooltip && isTooltipVisible && (
        <div className="absolute bottom-full left-1/2 z-50 mb-2 -translate-x-1/2 transform">
          <div className="whitespace-nowrap rounded-md bg-black px-2 py-1 text-xs font-extralight text-white shadow-lg">
            {name}
          </div>
          <div className="absolute left-1/2 top-full h-0 w-0 -translate-x-1/2 transform border-l-2 border-r-2 border-t-4 border-transparent border-t-black"></div>
        </div>
      )}
    </div>
  );
};

export default Avatar;


import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
  objectFit?: string;
}

const AnimatedImage: React.FC<AnimatedImageProps> = ({
  src,
  alt,
  className,
  aspectRatio = 'aspect-square',
  objectFit = 'object-cover',
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    const currentRef = document.getElementById(`image-${alt.replace(/\s+/g, '-').toLowerCase()}`);
    if (currentRef) {
      observer.observe(currentRef);
    }
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [alt]);

  return (
    <div 
      id={`image-${alt.replace(/\s+/g, '-').toLowerCase()}`}
      className={cn(
        "relative overflow-hidden",
        aspectRatio,
        className
      )}
    >
      {(!isLoaded || !isInView) && (
        <div className="absolute inset-0 shimmer-loading" />
      )}
      {isInView && (
        <img
          src={src}
          alt={alt}
          className={cn(
            "w-full h-full transition-all duration-1000 ease-smooth",
            objectFit,
            isLoaded ? "opacity-100" : "opacity-0"
          )}
          onLoad={() => setIsLoaded(true)}
          {...props}
        />
      )}
    </div>
  );
};

export default AnimatedImage;

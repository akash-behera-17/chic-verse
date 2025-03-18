
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Button from '@/components/common/Button';
import AnimatedImage from '@/components/ui/AnimatedImage';

const Gallery: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1634302086887-13b5281d354e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      alt: "Woman with blond hair",
    },
    {
      src: "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      alt: "Hair styling session",
    },
    {
      src: "https://images.unsplash.com/photo-1614159406151-311338fd42f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1973&q=80",
      alt: "Woman with curly hair",
    },
    {
      src: "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Hair coloring process",
    },
  ];
  
  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const headingElement = entry.target.querySelector('.section-heading');
          const imagesElement = entry.target.querySelectorAll('.gallery-image');
          
          if (headingElement) {
            headingElement.classList.add('opacity-100', 'translate-y-0');
          }
          
          imagesElement.forEach((image, index) => {
            setTimeout(() => {
              image.classList.add('opacity-100', 'scale-100');
            }, 150 * index);
          });
        }
      });
    };
    
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
    });
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section ref={sectionRef} className="section bg-white">
      <div className="container">
        <div className="section-heading text-center mb-12 opacity-0 -translate-y-6 transition-all duration-700 ease-smooth">
          <h2 className="mb-4">Our Gallery</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of our best work and beautiful transformations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="gallery-image opacity-0 scale-95 transition-all duration-700 ease-smooth"
            >
              <AnimatedImage 
                src={image.src}
                alt={image.alt}
                className="rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                aspectRatio={index % 2 === 0 ? "aspect-[3/4]" : "aspect-[3/3]"}
              />
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" className="opacity-0 animate-fade-up">
            <Link to="/gallery">View Full Gallery</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;

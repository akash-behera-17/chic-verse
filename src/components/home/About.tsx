
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Button from '@/components/common/Button';
import AnimatedImage from '@/components/ui/AnimatedImage';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const imageElement = entry.target.querySelector('.about-image');
          const textElement = entry.target.querySelector('.about-text');
          
          if (imageElement) imageElement.classList.add('opacity-100', 'translate-x-0');
          if (textElement) textElement.classList.add('opacity-100', 'translate-x-0');
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
    <section ref={sectionRef} className="section">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="about-image opacity-0 -translate-x-8 transition-all duration-1000 ease-smooth order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -inset-8 rounded-2xl border border-salon-100 -z-10"></div>
              <AnimatedImage 
                src="https://images.unsplash.com/photo-1559599101-f09722fb4948?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80" 
                alt="Salon interior" 
                className="rounded-xl shadow-lg"
                aspectRatio="aspect-[3/4]"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg w-48">
                <p className="font-medium text-primary">20+ years</p>
                <p className="text-sm text-muted-foreground">
                  Of excellence in beauty
                </p>
              </div>
            </div>
          </div>
          
          <div className="about-text opacity-0 translate-x-8 transition-all duration-1000 ease-smooth order-1 lg:order-2">
            <h2 className="mb-6">About Elegance Salon</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Founded in 2003, Elegance Salon has been a cornerstone of beauty and wellness in the community for over two decades.
            </p>
            <p className="mb-6">
              Our philosophy is simple: we believe that everyone deserves to feel beautiful and confident. Our team of skilled professionals is dedicated to providing exceptional service and creating personalized experiences that leave you feeling refreshed and revitalized.
            </p>
            <ul className="space-y-2 mb-8">
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary text-white text-xs mr-3 mt-0.5">✓</span>
                <span>Expert stylists with years of industry experience</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary text-white text-xs mr-3 mt-0.5">✓</span>
                <span>Premium products and latest techniques</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary text-white text-xs mr-3 mt-0.5">✓</span>
                <span>Relaxing, welcoming atmosphere</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary text-white text-xs mr-3 mt-0.5">✓</span>
                <span>Personalized consultations for every client</span>
              </li>
            </ul>
            <Button size="lg">
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;


import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Button from '@/components/common/Button';
import { Scissors } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const textElement = entry.target.querySelector('.hero-text');
          const imageElement = entry.target.querySelector('.hero-image');
          
          if (textElement) textElement.classList.add('opacity-100', 'translate-y-0');
          if (imageElement) imageElement.classList.add('opacity-100', 'scale-100');
        }
      });
    };
    
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
    });
    
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    
    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);
  
  return (
    <div 
      ref={heroRef}
      className="relative min-h-screen pt-20 flex items-center"
    >
      <div className="absolute inset-0 -z-10 bg-[url('https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-salon-950/50 backdrop-blur-sm"></div>
      </div>
      
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="hero-text opacity-0 translate-y-8 transition-all duration-1000 ease-smooth">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-6">
              <Scissors size={16} className="text-white" />
              <p className="text-white text-sm font-medium">Premium Salon Experience</p>
            </div>
            <h1 className="text-white mb-6 leading-tight">Reveal Your Natural Beauty with Expert Care</h1>
            <p className="text-white/90 text-lg mb-8 max-w-lg">
              Experience the finest hair and beauty services tailored to enhance your unique style and personality.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90"
              >
                Book Appointment
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white/10"
              >
                <Link to="/services">Our Services</Link>
              </Button>
            </div>
          </div>
          
          <div className="hero-image opacity-0 scale-95 transition-all duration-1000 delay-300 ease-smooth lg:mt-0 mt-8">
            <div className="relative">
              <div className="absolute -inset-4 bg-white/10 backdrop-blur-md rounded-2xl -z-10 transform -rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1595171349553-002c46191c9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80" 
                alt="Salon haircut" 
                className="rounded-xl shadow-xl w-full object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

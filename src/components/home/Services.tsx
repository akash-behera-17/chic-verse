
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '@/components/ui/ServiceCard';
import Button from '@/components/common/Button';

const Services: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  const services = [
    {
      title: "Haircuts & Styling",
      description: "Precision cuts and styling for all hair types by our expert stylists.",
      price: "From $45",
      image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3869&q=80"
    },
    {
      title: "Hair Coloring",
      description: "Vibrant colors, highlights, balayage, and ombre techniques.",
      price: "From $75",
      image: "https://images.unsplash.com/photo-1595867818082-083862f3d630?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
    },
    {
      title: "Hair Treatments",
      description: "Rejuvenating treatments to repair and nourish your hair.",
      price: "From $60",
      image: "https://images.unsplash.com/photo-1560869713-7d0a29430803?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    }
  ];
  
  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const headingElement = entry.target.querySelector('.section-heading');
          const cardsElement = entry.target.querySelectorAll('.service-card');
          
          if (headingElement) {
            headingElement.classList.add('opacity-100', 'translate-y-0');
          }
          
          cardsElement.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add('opacity-100', 'translate-y-0');
            }, 200 * index);
          });
        }
      });
    };
    
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
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
    <section ref={sectionRef} className="section bg-secondary/50">
      <div className="container">
        <div className="section-heading text-center mb-12 opacity-0 -translate-y-6 transition-all duration-700 ease-smooth">
          <h2 className="mb-4">Our Services</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We offer a comprehensive range of hair and beauty services to help you look and feel your best.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="service-card opacity-0 translate-y-8 transition-all duration-700 ease-smooth"
            >
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" className="opacity-0 translate-y-8 animate-fade-up">
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;

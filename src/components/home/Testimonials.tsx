
import React, { useEffect, useRef } from 'react';
import TestimonialCard from '@/components/ui/TestimonialCard';

const Testimonials: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  const testimonials = [
    {
      name: "Sarah Johnson",
      text: "I've been coming to Elegance for years, and they never disappoint. My stylist always knows exactly what I want and executes it perfectly.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
    },
    {
      name: "Michael Chen",
      text: "As someone who's always been nervous about trying new styles, the team at Elegance made me feel comfortable and gave me the best haircut I've ever had.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
    },
    {
      name: "Emily Davis",
      text: "The atmosphere is so relaxing, and the staff is incredibly professional. My color treatment came out exactly as I wanted. Highly recommend!",
      rating: 4,
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1961&q=80"
    },
  ];
  
  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const headingElement = entry.target.querySelector('.section-heading');
          const cardsElement = entry.target.querySelectorAll('.testimonial-card');
          
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
    <section ref={sectionRef} className="section bg-salon-50">
      <div className="container">
        <div className="section-heading text-center mb-12 opacity-0 -translate-y-6 transition-all duration-700 ease-smooth">
          <h2 className="mb-4">What Our Clients Say</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Hear from our satisfied clients about their experience at Elegance Salon.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="testimonial-card opacity-0 translate-y-8 transition-all duration-700 ease-smooth"
            >
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

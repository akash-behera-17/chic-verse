import React, { useEffect, useRef } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ServiceCard from '@/components/ui/ServiceCard';
import { Scissors, ScissorsLineDashed, Phone } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const pageRef = useRef<HTMLDivElement>(null);

  const hairServices = [
    {
      title: "Women's Haircut",
      description: "Expert cut and style tailored to your face shape and hair texture.",
      price: "$65+",
      image: "https://images.unsplash.com/photo-1500840216050-6ffa99d75160?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1997&q=80"
    },
    {
      title: "Men's Haircut",
      description: "Precision cut with attention to detail and personal style.",
      price: "$45+",
      image: "https://images.unsplash.com/photo-1593702288056-f5fe88965592?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
    },
    {
      title: "Blow Dry & Styling",
      description: "Professional blow dry and styling for any occasion.",
      price: "$50+",
      image: "https://images.unsplash.com/photo-1522336572468-97b06e8ef143?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80"
    },
    {
      title: "Special Event Styling",
      description: "Elegant updos and special occasion styling.",
      price: "$85+",
      image: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2066&q=80"
    }
  ];

  const colorServices = [
    {
      title: "Full Color",
      description: "Complete hair color transformation with premium products.",
      price: "$95+",
      image: "https://images.unsplash.com/photo-1608612528493-3471f39b2318?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
    },
    {
      title: "Highlights/Lowlights",
      description: "Dimensional color effects to enhance your natural hair color.",
      price: "$125+",
      image: "https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Balayage",
      description: "Hand-painted highlights for a natural, sun-kissed look.",
      price: "$165+",
      image: "https://images.unsplash.com/photo-1629008337640-9c6207fd4427?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
    },
    {
      title: "Root Touch-Up",
      description: "Quick refresh for maintaining your color between full services.",
      price: "$75+",
      image: "https://images.unsplash.com/photo-1601557527050-a3a5387ff053?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
    }
  ];

  const treatmentServices = [
    {
      title: "Deep Conditioning",
      description: "Intensive moisture treatment for dry or damaged hair.",
      price: "$35+",
      image: "https://images.unsplash.com/photo-1607779097040-17bae5596064?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
    },
    {
      title: "Keratin Treatment",
      description: "Smoothing treatment that reduces frizz and adds shine.",
      price: "$250+",
      image: "https://images.unsplash.com/photo-1560093230-231f3a98fa34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Scalp Treatment",
      description: "Therapeutic treatment for scalp health and hair growth.",
      price: "$65+",
      image: "https://images.unsplash.com/photo-1522748906645-95d8adfd52c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
    },
    {
      title: "Hair Mask",
      description: "Restorative mask that repairs and strengthens damaged hair.",
      price: "$45+",
      image: "https://images.unsplash.com/photo-1600334369011-321aeca42ec6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1950&q=80"
    }
  ];

  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
    
    // Set page title
    document.title = 'Our Services - Elegance Salon';
    
    // Handle hash navigation
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          const headerOffset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    };
    
    // Check hash on initial load
    handleHashChange();
    
    // Add listener for hash changes
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const servicesSections = entry.target.querySelectorAll('.services-section');
          
          servicesSections.forEach((section, index) => {
            setTimeout(() => {
              section.classList.add('opacity-100', 'translate-y-0');
            }, 300 * index);
          });
        }
      });
    };
    
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
    });
    
    if (pageRef.current) {
      observer.observe(pageRef.current);
    }
    
    return () => {
      if (pageRef.current) {
        observer.unobserve(pageRef.current);
      }
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bg-salon-50 py-16 md:py-24">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center space-x-2 bg-salon-200/50 px-4 py-2 rounded-full mb-6">
                <Scissors size={16} className="text-primary" />
                <p className="text-primary text-sm font-medium">Our Premium Services</p>
              </div>
              <h1 className="mb-6">Services & Pricing</h1>
              <p className="text-lg text-muted-foreground">
                We offer a full range of hair and beauty services to help you look and feel your best.
                Each service begins with a thorough consultation to ensure we meet your unique needs.
              </p>
            </div>
          </div>
        </section>
        
        {/* Services Categories */}
        <div ref={pageRef} className="py-12 md:py-16">
          <div className="container">
            {/* Haircuts & Styling */}
            <section id="haircuts" className="services-section opacity-0 translate-y-8 transition-all duration-700 ease-smooth mb-20">
              <div className="flex items-center gap-3 mb-8">
                <ScissorsLineDashed size={24} className="text-primary" />
                <h2 className="text-3xl">Haircuts & Styling</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {hairServices.map((service, index) => (
                  <ServiceCard key={index} {...service} />
                ))}
              </div>
            </section>
            
            {/* Coloring */}
            <section id="coloring" className="services-section opacity-0 translate-y-8 transition-all duration-700 ease-smooth mb-20">
              <div className="flex items-center gap-3 mb-8">
                <ScissorsLineDashed size={24} className="text-primary" />
                <h2 className="text-3xl">Hair Coloring</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {colorServices.map((service, index) => (
                  <ServiceCard key={index} {...service} />
                ))}
              </div>
            </section>
            
            {/* Treatments */}
            <section id="treatments" className="services-section opacity-0 translate-y-8 transition-all duration-700 ease-smooth">
              <div className="flex items-center gap-3 mb-8">
                <ScissorsLineDashed size={24} className="text-primary" />
                <h2 className="text-3xl">Hair Treatments</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {treatmentServices.map((service, index) => (
                  <ServiceCard key={index} {...service} />
                ))}
              </div>
            </section>
          </div>
        </div>
        
        {/* Booking Info */}
        <section className="bg-salon-50 py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="mb-6">Ready to Book Your Appointment?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Contact us to schedule your service or consultation. We look forward to helping you achieve your hair goals.
              </p>
              <div className="inline-flex flex-col sm:flex-row gap-4">
                <a 
                  href="tel:+11234567890" 
                  className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-primary text-white hover:bg-primary/90 transition-colors"
                >
                  <Phone size={18} className="mr-2" />
                  Call Us
                </a>
                <a 
                  href="/contact" 
                  className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-primary text-primary hover:bg-primary/5 transition-colors"
                >
                  Book Online
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ServicesPage;

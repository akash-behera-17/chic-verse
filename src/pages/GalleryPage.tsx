
import React, { useEffect, useRef, useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AnimatedImage from '@/components/ui/AnimatedImage';

interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

const GalleryPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const pageRef = useRef<HTMLDivElement>(null);
  
  const galleryImages: GalleryImage[] = [
    {
      src: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      alt: "Salon interior",
      category: "salon"
    },
    {
      src: "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      alt: "Hair styling session",
      category: "haircuts"
    },
    {
      src: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2066&q=80",
      alt: "Special occasion hairstyle",
      category: "haircuts"
    },
    {
      src: "https://images.unsplash.com/photo-1595171349553-002c46191c9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80",
      alt: "Woman getting hair washed",
      category: "treatments"
    },
    {
      src: "https://images.unsplash.com/photo-1634302086887-13b5281d354e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      alt: "Woman with blond hair",
      category: "color"
    },
    {
      src: "https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Detailed hair color work",
      category: "color"
    },
    {
      src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      alt: "Nail art close up",
      category: "nails"
    },
    {
      src: "https://images.unsplash.com/photo-1457972729786-0411a3b2b626?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      alt: "Woman with styled updo",
      category: "haircuts"
    },
    {
      src: "https://images.unsplash.com/photo-1629008337640-9c6207fd4427?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      alt: "Balayage hair color",
      category: "color"
    },
    {
      src: "https://images.unsplash.com/photo-1614159406151-311338fd42f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1973&q=80",
      alt: "Woman with curly hair",
      category: "haircuts"
    },
    {
      src: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      alt: "Woman with makeup",
      category: "makeup"
    },
    {
      src: "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Hair coloring process",
      category: "color"
    }
  ];
  
  const filteredImages = activeFilter === 'all'
    ? galleryImages
    : galleryImages.filter(image => image.category === activeFilter);
  
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
    
    // Set page title
    document.title = 'Gallery - Elegance Salon';
    
    // Simulate loading
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  
  useEffect(() => {
    // Reset loading state when filter changes
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 600);
  }, [activeFilter]);
  
  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const filtersElement = entry.target.querySelector('.filters-container');
          
          if (filtersElement) {
            filtersElement.classList.add('opacity-100', 'translate-y-0');
          }
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
  
  const categories = [
    { id: 'all', name: 'All' },
    { id: 'haircuts', name: 'Haircuts & Styling' },
    { id: 'color', name: 'Color' },
    { id: 'treatments', name: 'Treatments' },
    { id: 'makeup', name: 'Makeup' },
    { id: 'nails', name: 'Nails' },
    { id: 'salon', name: 'Salon' }
  ];
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow pt-20" ref={pageRef}>
        {/* Hero Section */}
        <section className="bg-salon-50 py-16 md:py-24">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="mb-6">Our Gallery</h1>
              <p className="text-lg text-muted-foreground">
                A showcase of our best work and beautiful transformations. See what we can do for you.
              </p>
            </div>
          </div>
        </section>
        
        {/* Gallery Section */}
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="filters-container opacity-0 -translate-y-8 transition-all duration-700 ease-smooth mb-10">
              <div className="flex flex-wrap justify-center gap-3">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveFilter(category.id)}
                    className={`px-4 py-2 rounded-full transition-all duration-300 ${
                      activeFilter === category.id
                        ? 'bg-primary text-white'
                        : 'bg-salon-100 text-foreground hover:bg-salon-200'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="relative min-h-[400px]">
              {isLoading ? (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 border-4 border-salon-200 border-t-primary rounded-full animate-spin"></div>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {filteredImages.map((image, index) => (
                    <div
                      key={index}
                      className="opacity-0 scale-95 animate-fade-in"
                      style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
                    >
                      <AnimatedImage
                        src={image.src}
                        alt={image.alt}
                        className="rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                        aspectRatio={index % 3 === 0 ? "aspect-[3/4]" : "aspect-square"}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default GalleryPage;

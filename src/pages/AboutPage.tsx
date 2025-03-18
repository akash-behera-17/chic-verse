
import React, { useEffect, useRef } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AnimatedImage from '@/components/ui/AnimatedImage';
import { Heart, Star, Award, Users, Clock } from 'lucide-react';

const AboutPage: React.FC = () => {
  const pageRef = useRef<HTMLDivElement>(null);

  const teamMembers = [
    {
      name: "Jessica Miller",
      role: "Founder & Master Stylist",
      bio: "With over 15 years of experience, Jessica founded Elegance Salon with a vision to provide exceptional hair services in a welcoming environment.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
    },
    {
      name: "David Chen",
      role: "Color Specialist",
      bio: "David is known for his innovative color techniques and ability to create the perfect shade for every client's unique style and personality.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
    },
    {
      name: "Sophia Rodriguez",
      role: "Senior Stylist",
      bio: "Sophia specializes in precision cuts and textured styles. Her attention to detail ensures every client leaves feeling confident and beautiful.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1961&q=80"
    },
    {
      name: "Marcus Johnson",
      role: "Texture Expert",
      bio: "Marcus has dedicated his career to understanding and working with all hair textures, creating styles that enhance natural beauty.",
      image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
    }
  ];

  const values = [
    {
      icon: <Heart className="h-6 w-6 text-primary" />,
      title: "Passion",
      description: "We're passionate about hair and beauty, constantly learning and evolving to provide the best service possible."
    },
    {
      icon: <Star className="h-6 w-6 text-primary" />,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from technique to customer service."
    },
    {
      icon: <Award className="h-6 w-6 text-primary" />,
      title: "Quality",
      description: "We use only premium products and techniques to ensure the best results for our clients."
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Community",
      description: "We believe in building strong relationships with our clients and the community around us."
    }
  ];

  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
    
    // Set page title
    document.title = 'About Us - Elegance Salon';
  }, []);

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sections = entry.target.querySelectorAll('.animate-section');
          
          sections.forEach((section, index) => {
            setTimeout(() => {
              section.classList.add('opacity-100', 'translate-y-0');
            }, 200 * index);
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
      
      <main className="flex-grow pt-20" ref={pageRef}>
        {/* Hero Section */}
        <section className="bg-salon-50 py-16 md:py-24">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="mb-6">About Elegance Salon</h1>
              <p className="text-lg text-muted-foreground">
                Founded in 2003, Elegance Salon has been a cornerstone of beauty and wellness, providing exceptional hair and beauty services to our community.
              </p>
            </div>
          </div>
        </section>
        
        {/* Our Story */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-section opacity-0 translate-y-8 transition-all duration-700 ease-smooth">
                <div className="relative">
                  <AnimatedImage 
                    src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80" 
                    alt="Salon interior" 
                    className="rounded-xl shadow-lg"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                    <p className="font-medium text-primary">Est. 2003</p>
                    <p className="text-sm text-muted-foreground">
                      Serving our community
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="animate-section opacity-0 translate-y-8 transition-all duration-700 ease-smooth">
                <h2 className="text-3xl mb-6">Our Story</h2>
                <p className="text-lg mb-4">
                  Elegance Salon was founded with a simple mission: to provide exceptional hair and beauty services in a welcoming, relaxing environment.
                </p>
                <p className="mb-4">
                  What began as a small salon with just three chairs has grown into a full-service beauty destination, but our core values remain the same. We believe in the power of beauty to transform not just appearances, but confidence and self-esteem.
                </p>
                <p className="mb-4">
                  Our founder, Jessica Miller, started her career as a stylist in New York City before moving to our community to establish Elegance. Her vision was to bring high-end salon services to our area while maintaining a warm, approachable atmosphere where everyone feels welcome.
                </p>
                <p>
                  Today, our team of skilled professionals continues that tradition, combining years of experience with ongoing education to stay at the forefront of hair and beauty trends and techniques.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Values */}
        <section className="py-16 bg-salon-50">
          <div className="container">
            <div className="text-center mb-12 animate-section opacity-0 translate-y-8 transition-all duration-700 ease-smooth">
              <h2 className="text-3xl mb-4">Our Values</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                These core principles guide everything we do at Elegance Salon.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-lg border border-salon-100 shadow-sm animate-section opacity-0 translate-y-8 transition-all duration-700 ease-smooth"
                >
                  <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-salon-100">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-medium mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Our Team */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="text-center mb-12 animate-section opacity-0 translate-y-8 transition-all duration-700 ease-smooth">
              <h2 className="text-3xl mb-4">Meet Our Team</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our skilled professionals are passionate about beauty and dedicated to helping you look and feel your best.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div 
                  key={index} 
                  className="animate-section opacity-0 translate-y-8 transition-all duration-700 ease-smooth"
                >
                  <div className="bg-white rounded-lg overflow-hidden border border-salon-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="aspect-[3/4] overflow-hidden">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-medium mb-1">{member.name}</h3>
                      <p className="text-primary mb-3">{member.role}</p>
                      <p className="text-muted-foreground">{member.bio}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Timeline */}
        <section className="py-16 bg-salon-50">
          <div className="container">
            <div className="text-center mb-12 animate-section opacity-0 translate-y-8 transition-all duration-700 ease-smooth">
              <h2 className="text-3xl mb-4">Our Journey</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                How we've grown and evolved over the years.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <div className="space-y-12">
                <div className="relative pl-10 animate-section opacity-0 translate-y-8 transition-all duration-700 ease-smooth">
                  <div className="absolute left-0 top-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary">
                    <Clock className="h-4 w-4 text-white" />
                  </div>
                  <div className="absolute left-4 top-8 bottom-0 w-px bg-salon-200"></div>
                  <div className="bg-white p-6 rounded-lg border border-salon-100 shadow-sm">
                    <h3 className="text-xl font-medium mb-1">2003</h3>
                    <p className="text-primary mb-3">Humble Beginnings</p>
                    <p className="text-muted-foreground">Elegance Salon opens its doors with three styling chairs and a team of two stylists, including founder Jessica Miller.</p>
                  </div>
                </div>
                
                <div className="relative pl-10 animate-section opacity-0 translate-y-8 transition-all duration-700 ease-smooth">
                  <div className="absolute left-0 top-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary">
                    <Clock className="h-4 w-4 text-white" />
                  </div>
                  <div className="absolute left-4 top-8 bottom-0 w-px bg-salon-200"></div>
                  <div className="bg-white p-6 rounded-lg border border-salon-100 shadow-sm">
                    <h3 className="text-xl font-medium mb-1">2008</h3>
                    <p className="text-primary mb-3">Expansion</p>
                    <p className="text-muted-foreground">After five successful years, we expanded to a larger location, adding more services and growing our team to seven stylists.</p>
                  </div>
                </div>
                
                <div className="relative pl-10 animate-section opacity-0 translate-y-8 transition-all duration-700 ease-smooth">
                  <div className="absolute left-0 top-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary">
                    <Clock className="h-4 w-4 text-white" />
                  </div>
                  <div className="absolute left-4 top-8 bottom-0 w-px bg-salon-200"></div>
                  <div className="bg-white p-6 rounded-lg border border-salon-100 shadow-sm">
                    <h3 className="text-xl font-medium mb-1">2015</h3>
                    <p className="text-primary mb-3">Innovation</p>
                    <p className="text-muted-foreground">Introduced new hair treatment technologies and expanded our service offerings to include makeup and nail services.</p>
                  </div>
                </div>
                
                <div className="relative pl-10 animate-section opacity-0 translate-y-8 transition-all duration-700 ease-smooth">
                  <div className="absolute left-0 top-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary">
                    <Clock className="h-4 w-4 text-white" />
                  </div>
                  <div className="bg-white p-6 rounded-lg border border-salon-100 shadow-sm">
                    <h3 className="text-xl font-medium mb-1">Today</h3>
                    <p className="text-primary mb-3">Community Leader</p>
                    <p className="text-muted-foreground">Now a cornerstone of the community, Elegance Salon continues to provide exceptional beauty services while giving back through charitable initiatives and education.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutPage;

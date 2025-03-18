import React, { useEffect, useRef, useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Button from '@/components/common/Button';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const ContactPage: React.FC = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Booking Request Sent!",
        description: "We'll confirm your appointment soon.",
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        date: '',
        time: '',
        message: '',
      });
    }, 1500);
  };
  
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
    
    // Set page title
    document.title = 'Contact Us - Elegance Salon';
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
              <h1 className="mb-6">Contact Us</h1>
              <p className="text-lg text-muted-foreground">
                We're here to help you book an appointment or answer any questions you may have.
              </p>
            </div>
          </div>
        </section>
        
        {/* Contact Form & Info */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              {/* Contact Information */}
              <div className="lg:col-span-2 animate-section opacity-0 translate-y-8 transition-all duration-700 ease-smooth">
                <div className="bg-salon-50 rounded-lg p-8 h-full">
                  <h2 className="text-2xl font-medium mb-8">Get in Touch</h2>
                  
                  <div className="space-y-8">
                    <div className="flex">
                      <MapPin className="text-primary h-6 w-6 mt-1 mr-4 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium text-lg mb-2">Visit Us</h3>
                        <p className="text-muted-foreground">
                          123 Beauty Street, Suite 100<br />
                          Elegance City, EC 12345
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <Phone className="text-primary h-6 w-6 mt-1 mr-4 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium text-lg mb-2">Call Us</h3>
                        <p className="text-muted-foreground">
                          <a href="tel:+11234567890" className="hover:text-primary transition-colors">
                            (123) 456-7890
                          </a>
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <Mail className="text-primary h-6 w-6 mt-1 mr-4 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium text-lg mb-2">Email Us</h3>
                        <p className="text-muted-foreground">
                          <a href="mailto:info@elegancesalon.com" className="hover:text-primary transition-colors">
                            info@elegancesalon.com
                          </a>
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <Clock className="text-primary h-6 w-6 mt-1 mr-4 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium text-lg mb-2">Our Hours</h3>
                        <p className="text-muted-foreground">
                          Monday - Friday: 9am - 8pm<br />
                          Saturday: 9am - 6pm<br />
                          Sunday: 10am - 4pm
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-10">
                    <h3 className="font-medium text-lg mb-4">Connect With Us</h3>
                    <div className="flex space-x-4">
                      <a href="#" className="text-salon-400 hover:text-primary transition-colors" aria-label="Facebook">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                      </a>
                      <a href="#" className="text-salon-400 hover:text-primary transition-colors" aria-label="Instagram">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
                      </a>
                      <a href="#" className="text-salon-400 hover:text-primary transition-colors" aria-label="Twitter">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-1-4.8 4-8.9 8-5 1.6-1 3-2.2 4-4"></path></svg>
                      </a>
                      <a href="#" className="text-salon-400 hover:text-primary transition-colors" aria-label="Pinterest">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" x2="12" y1="8" y2="16"></line><line x1="8" x2="16" y1="12" y2="12"></line></svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="lg:col-span-3 animate-section opacity-0 translate-y-8 transition-all duration-700 ease-smooth">
                <div className="bg-white border border-salon-100 rounded-lg shadow-sm p-8">
                  <h2 className="text-2xl font-medium mb-6">Book an Appointment</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                          Your Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-border rounded-md focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-border rounded-md focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-border rounded-md focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                          Service <span className="text-red-500">*</span>
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-border rounded-md focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                          required
                        >
                          <option value="">Select a service</option>
                          <option value="womens-haircut">Women's Haircut</option>
                          <option value="mens-haircut">Men's Haircut</option>
                          <option value="blowdry">Blow Dry & Styling</option>
                          <option value="color">Hair Color</option>
                          <option value="highlights">Highlights/Lowlights</option>
                          <option value="balayage">Balayage</option>
                          <option value="treatment">Hair Treatment</option>
                          <option value="makeup">Makeup Service</option>
                          <option value="nails">Nail Service</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="date" className="block text-sm font-medium text-foreground mb-2">
                          Preferred Date <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="date"
                          id="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          min={new Date().toISOString().split('T')[0]}
                          className="w-full px-4 py-2 border border-border rounded-md focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="time" className="block text-sm font-medium text-foreground mb-2">
                          Preferred Time <span className="text-red-500">*</span>
                        </label>
                        <select
                          id="time"
                          name="time"
                          value={formData.time}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-border rounded-md focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                          required
                        >
                          <option value="">Select a time</option>
                          <option value="morning">Morning (9am - 12pm)</option>
                          <option value="afternoon">Afternoon (12pm - 4pm)</option>
                          <option value="evening">Evening (4pm - 8pm)</option>
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Additional Information
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-2 border border-border rounded-md focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                        placeholder="Tell us more about what you're looking for..."
                      ></textarea>
                    </div>
                    
                    <Button type="submit" size="lg" className="w-full md:w-auto" disabled={isSubmitting}>
                      {isSubmitting ? 'Submitting...' : 'Book Appointment'}
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Map Section */}
        <section className="py-12 bg-salon-50 animate-section opacity-0 translate-y-8 transition-all duration-700 ease-smooth">
          <div className="container">
            <div className="text-center mb-10">
              <h2 className="text-3xl mb-4">Find Us</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Visit our salon to experience our premium services in person.
              </p>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-md border border-border">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6305.906797423825!2d-74.00594139559499!3d40.71276526538397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3c30bdf%3A0xb89d1fe6bc499443!2sDowntown%20Manhattan%2C%20New%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sus!4v1621535867374!5m2!1sen!2sus" 
                width="100%" 
                height="450" 
                allowFullScreen={true} 
                loading="lazy" 
                className="w-full"
                title="Google Maps"
              ></iframe>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ContactPage;


import React, { useEffect, useRef, useState } from 'react';
import Button from '@/components/common/Button';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
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
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });
    }, 1500);
  };
  
  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const headingElement = entry.target.querySelector('.section-heading');
          const formElement = entry.target.querySelector('.contact-form');
          const infoElement = entry.target.querySelector('.contact-info');
          
          if (headingElement) headingElement.classList.add('opacity-100', 'translate-y-0');
          if (formElement) formElement.classList.add('opacity-100', 'translate-y-0');
          if (infoElement) infoElement.classList.add('opacity-100', 'translate-y-0');
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
          <h2 className="mb-4">Get in Touch</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have questions or ready to book an appointment? Reach out to us.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="contact-form opacity-0 translate-y-8 transition-all duration-700 ease-smooth">
            <div className="bg-white border border-salon-100 rounded-lg shadow-sm p-6 md:p-8">
              <h3 className="text-2xl font-medium mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Your Name
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
                      Email Address
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-border rounded-md focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-border rounded-md focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                    >
                      <option value="">Select a service</option>
                      <option value="haircut">Haircut & Styling</option>
                      <option value="coloring">Hair Coloring</option>
                      <option value="treatment">Hair Treatment</option>
                      <option value="makeup">Makeup Service</option>
                      <option value="nails">Nail Service</option>
                    </select>
                  </div>
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-border rounded-md focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                    required
                  ></textarea>
                </div>
                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
          </div>
          
          <div className="contact-info opacity-0 translate-y-8 transition-all duration-700 ease-smooth delay-100">
            <div className="bg-secondary rounded-lg p-6 md:p-8 h-full">
              <h3 className="text-2xl font-medium mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex">
                  <MapPin className="text-primary h-5 w-5 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium mb-1">Location</h4>
                    <p className="text-muted-foreground">
                      123 Beauty Street, Suite 100<br />
                      Elegance City, EC 12345
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <Phone className="text-primary h-5 w-5 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium mb-1">Phone</h4>
                    <p className="text-muted-foreground">
                      <a href="tel:+11234567890" className="hover:text-primary transition-colors">
                        (123) 456-7890
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <Mail className="text-primary h-5 w-5 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <p className="text-muted-foreground">
                      <a href="mailto:info@elegancesalon.com" className="hover:text-primary transition-colors">
                        info@elegancesalon.com
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <Clock className="text-primary h-5 w-5 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium mb-1">Business Hours</h4>
                    <p className="text-muted-foreground">
                      Monday - Friday: 9am - 8pm<br />
                      Saturday: 9am - 6pm<br />
                      Sunday: 10am - 4pm
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6305.906797423825!2d-74.00594139559499!3d40.71276526538397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3c30bdf%3A0xb89d1fe6bc499443!2sDowntown%20Manhattan%2C%20New%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sus!4v1621535867374!5m2!1sen!2sus" 
                  width="100%" 
                  height="200" 
                  allowFullScreen={false} 
                  loading="lazy" 
                  className="rounded-md border border-border"
                  title="Google Maps"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

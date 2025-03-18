
import React from 'react';
import { Link } from 'react-router-dom';
import { Scissors, Mail, Phone, MapPin, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-salon-950 text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Scissors size={20} className="text-salon-100" />
              <span className="text-xl font-display">Elegance</span>
            </div>
            <p className="text-salon-200 text-sm max-w-xs">
              Where beauty meets expertise. We're dedicated to bringing out your natural beauty and helping you feel your best.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-salon-200 hover:text-white transition-colors" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="text-salon-200 hover:text-white transition-colors" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
              </a>
              <a href="#" className="text-salon-200 hover:text-white transition-colors" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-1-4.8 4-8.9 8-5 1.6-1 3-2.2 4-4"></path></svg>
              </a>
              <a href="#" className="text-salon-200 hover:text-white transition-colors" aria-label="Pinterest">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" x2="12" y1="8" y2="16"></line><line x1="8" x2="16" y1="12" y2="12"></line></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-salon-200 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/services" className="text-salon-200 hover:text-white transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/about" className="text-salon-200 hover:text-white transition-colors">About</Link>
              </li>
              <li>
                <Link to="/gallery" className="text-salon-200 hover:text-white transition-colors">Gallery</Link>
              </li>
              <li>
                <Link to="/contact" className="text-salon-200 hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services#haircuts" className="text-salon-200 hover:text-white transition-colors">Haircuts & Styling</Link>
              </li>
              <li>
                <Link to="/services#coloring" className="text-salon-200 hover:text-white transition-colors">Hair Coloring</Link>
              </li>
              <li>
                <Link to="/services#treatments" className="text-salon-200 hover:text-white transition-colors">Hair Treatments</Link>
              </li>
              <li>
                <Link to="/services#makeup" className="text-salon-200 hover:text-white transition-colors">Makeup Services</Link>
              </li>
              <li>
                <Link to="/services#nail" className="text-salon-200 hover:text-white transition-colors">Nail Services</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="text-salon-300 mt-0.5 mr-2 flex-shrink-0" />
                <span className="text-salon-200">123 Beauty Street, Suite 100<br />Elegance City, EC 12345</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-salon-300 mr-2 flex-shrink-0" />
                <a href="tel:+11234567890" className="text-salon-200 hover:text-white transition-colors">(123) 456-7890</a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-salon-300 mr-2 flex-shrink-0" />
                <a href="mailto:info@elegancesalon.com" className="text-salon-200 hover:text-white transition-colors">info@elegancesalon.com</a>
              </li>
              <li className="flex items-start">
                <Clock size={18} className="text-salon-300 mt-0.5 mr-2 flex-shrink-0" />
                <div className="text-salon-200">
                  <p>Mon-Fri: 9am - 8pm</p>
                  <p>Sat: 9am - 6pm</p>
                  <p>Sun: 10am - 4pm</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-salon-800 text-center text-salon-400 text-sm">
          <p>&copy; {currentYear} Elegance Salon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

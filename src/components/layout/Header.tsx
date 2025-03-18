
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import Button from '@/components/common/Button';
import { Scissors, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-smooth backdrop-blur-md",
        isScrolled ? 'bg-white/90 shadow-sm py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="container flex justify-between items-center">
        <Link 
          to="/" 
          className="flex items-center space-x-2 text-primary"
          aria-label="Return to homepage"
        >
          <Scissors size={24} className="transition-transform duration-500 ease-smooth group-hover:rotate-45" />
          <span className="text-xl font-display font-medium">Elegance</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                "relative text-sm font-medium transition-colors hover:text-primary",
                location.pathname === link.path 
                  ? "text-primary" 
                  : "text-foreground/80"
              )}
            >
              {link.name}
              {location.pathname === link.path && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full" />
              )}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" size="sm">
            Call Us
          </Button>
          <Button size="sm">
            Book Now
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground rounded-md p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-x-0 top-[57px] bg-white/95 backdrop-blur-md shadow-md transition-all duration-300 ease-smooth transform md:hidden",
          isMobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        )}
      >
        <div className="container py-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                "py-2 px-4 text-center text-base font-medium transition-colors rounded-md",
                location.pathname === link.path 
                  ? "bg-secondary text-primary" 
                  : "text-foreground/80 hover:bg-secondary/50"
              )}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex flex-col space-y-2 pt-2">
            <Button variant="outline" fullWidth>
              Call Us
            </Button>
            <Button fullWidth>
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

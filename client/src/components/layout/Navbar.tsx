import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll to add shadow when scrolled
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 bg-white z-50 ${isScrolled ? 'shadow-md' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            {/* Logo */}
            <div className="font-[Playfair_Display] font-bold text-2xl text-[#FF7A00]">
              <a href="#" className="flex items-center">
                <i className="fas fa-seedling mr-2"></i>
                <span>Life Coach</span>
              </a>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button 
              type="button" 
              id="mobile-menu-button" 
              className="text-gray-dark hover:text-[#FF7A00] focus:outline-none"
              onClick={toggleMenu}
            >
              <i className="fas fa-bars text-2xl"></i>
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center">
            <div className="flex space-x-8">
              <a href="#services" className="font-medium hover:text-[#FF7A00] transition-colors">Services</a>
              <a href="#about" className="font-medium hover:text-[#FF7A00] transition-colors">About</a>
              <a href="#testimonials" className="font-medium hover:text-[#FF7A00] transition-colors">Testimonials</a>
              <a href="#contact" className="font-medium hover:text-[#FF7A00] transition-colors">Contact</a>
            </div>
            <div className="ml-8">
              <Button asChild className="bg-[#FF7A00] hover:bg-[#E56E00] px-6 py-3 rounded-md font-semibold transition-colors">
                <a href="#book">Book Now</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div className={`md:hidden bg-white border-t border-gray-100 ${isMenuOpen ? '' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a 
            href="#services" 
            className="block px-3 py-2 rounded-md font-medium hover:bg-gray-light hover:text-[#FF7A00]"
            onClick={closeMenu}
          >
            Services
          </a>
          <a 
            href="#about" 
            className="block px-3 py-2 rounded-md font-medium hover:bg-gray-light hover:text-[#FF7A00]"
            onClick={closeMenu}
          >
            About
          </a>
          <a 
            href="#testimonials" 
            className="block px-3 py-2 rounded-md font-medium hover:bg-gray-light hover:text-[#FF7A00]"
            onClick={closeMenu}
          >
            Testimonials
          </a>
          <a 
            href="#contact" 
            className="block px-3 py-2 rounded-md font-medium hover:bg-gray-light hover:text-[#FF7A00]"
            onClick={closeMenu}
          >
            Contact
          </a>
          <a 
            href="#book" 
            className="block px-3 py-2 mt-4 text-center bg-[#FF7A00] text-white rounded-md font-semibold"
            onClick={closeMenu}
          >
            Book Now
          </a>
        </div>
      </div>
    </nav>
  );
}

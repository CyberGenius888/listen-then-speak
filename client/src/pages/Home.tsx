import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import About from "@/components/sections/About";
import Process from "@/components/sections/Process";
import Booking from "@/components/sections/Booking";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/layout/Footer";
import { useEffect } from "react";

export default function Home() {
  // Scroll to section when clicking on anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      
      if (anchor && anchor.getAttribute('href') !== '#') {
        e.preventDefault();
        
        const targetId = anchor.getAttribute('href');
        if (!targetId) return;
        
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          const headerOffset = 80;
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      <Testimonials />
      <About />
      <Process />
      <Booking />
      <FAQ />
      <CTA />
      <Footer />

      {/* Floating Contact Button */}
      <div className="fixed bottom-8 right-8 z-30">
        <a 
          href="#book" 
          className="bg-[#FF7A00] hover:bg-[#E56E00] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-colors"
        >
          <i className="fas fa-calendar-check text-xl"></i>
        </a>
      </div>
    </div>
  );
}

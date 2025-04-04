import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Imagine from "@/components/sections/Imagine";
import Testimonials from "@/components/sections/Testimonials";
import FeaturedIn from "@/components/sections/FeaturedIn";
import About from "@/components/sections/About";
import Process from "@/components/sections/Process";
import Ebook from "@/components/sections/Ebook";
import Podcast from "@/components/sections/Podcast";
import CTA from "@/components/sections/CTA";
import StatsBanner from "@/components/sections/StatsBanner";
import Newsletter from "@/components/sections/Newsletter";
import Footer from "@/components/layout/Footer";
import { useEffect } from "react";

export default function Home() {
  // Scroll to section when clicking on anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      let anchor = target.closest('a[href^="#"]');
      
      // If target itself is the anchor, use it directly
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        anchor = target;
      }
      
      if (anchor && anchor.getAttribute('href') !== '#') {
        e.preventDefault();
        
        const targetId = anchor.getAttribute('href');
        if (!targetId) return;
        
        const targetElement = document.getElementById(targetId.replace('#', ''));
        
        if (targetElement) {
          const headerOffset = 80;
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - headerOffset;
          
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
      <StatsBanner />
      <Services />
      <Imagine />
      <Podcast />
      <Testimonials />
      <FeaturedIn />
      <About />
      <Process />
      <Ebook />
      <Newsletter />
      <CTA />
      <Footer />

      {/* Floating Connect Button */}
      <div className="fixed bottom-8 right-8 z-30">
        <a 
          href="https://calendly.com/listenthenspeak/30min" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-[#FF7A00] hover:bg-[#E56E00] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-colors"
          title="Let's connect"
        >
          <i className="fas fa-calendar-check text-xl"></i>
        </a>
      </div>
    </div>
  );
}

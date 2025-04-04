import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

// Import individual company logos
import laWireLogo from "@/assets/featured/la-wire.png";
import fastCompanyLogo from "@/assets/featured/fast-company.png";
import laWeeklyLogo from "@/assets/featured/la-weekly.png";
import ceoWeeklyLogo from "@/assets/featured/ceo-weekly.png";
import canvasRebelLogo from "@/assets/featured/canvas-rebel.png";
import forceLogo from "@/assets/featured/force.png";
import linkedinTopVoicesLogo from "@/assets/featured/linkedin-top-voices.png";

// Define company data with logos
const companies = [
  { name: "Los Angeles Wire", logo: laWireLogo },
  { name: "Fast Company", logo: fastCompanyLogo },
  { name: "LA Weekly", logo: laWeeklyLogo },
  { name: "CEO Weekly", logo: ceoWeeklyLogo },
  { name: "Canvas Rebel", logo: canvasRebelLogo },
  { name: "Force", logo: forceLogo },
  { name: "LinkedIn Top Voices", logo: linkedinTopVoicesLogo },
];

export default function FeaturedIn() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % companies.length;
        const api = (carouselRef.current as any)?.__emblaApi;
        if (api) {
          api.scrollTo(nextIndex);
        }
        return nextIndex;
      });
    }, 3000);
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  // Handle auto play
  useEffect(() => {
    if (autoPlay) {
      startAutoPlay();
    }
    
    return () => {
      stopAutoPlay();
    };
  }, [autoPlay]);

  // Handle hover pause
  const handleMouseEnter = () => setAutoPlay(false);
  const handleMouseLeave = () => setAutoPlay(true);

  return (
    <section className="py-16 bg-black text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-[#FF7A00]/10 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#FF7A00]/10 to-transparent"></div>
      <div className="absolute top-10 left-10 w-20 h-20 bg-[#FF7A00]/10 rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 bg-[#FF7A00]/10 rounded-full"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-wider mb-2">
            AS FEATURED IN
          </h2>
          <div className="w-20 h-1 bg-[#FF7A00] mx-auto rounded-full"></div>
        </motion.div>

        <div 
          className="max-w-6xl mx-auto"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Carousel 
            ref={carouselRef as any} 
            className="w-full" 
            opts={{
              align: "center",
              loop: true,
              slidesToScroll: 1,
              startIndex: currentIndex
            }}
            onSelect={(api: any) => {
              if (api && typeof api.selectedScrollSnap === 'function') {
                const selectedIndex = api.selectedScrollSnap();
                setCurrentIndex(selectedIndex);
              }
            }}
          >
            <CarouselContent>
              {companies.map((company, index) => (
                <CarouselItem key={index} className="basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4 pl-4 md:pl-6">
                  <motion.div 
                    className="bg-black/50 backdrop-blur-sm h-40 flex items-center justify-center p-6 rounded-xl border border-[#FF7A00]/20 shadow-xl hover:border-[#FF7A00]/50 transition-all duration-300"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ 
                      scale: 1.05,
                      borderColor: "rgba(255, 122, 0, 0.5)",
                      boxShadow: "0 20px 30px -10px rgba(0, 0, 0, 0.3)"
                    }}
                  >
                    <img 
                      src={company.logo} 
                      alt={company.name} 
                      className="max-h-28 w-auto object-contain filter brightness-110 hover:brightness-125 transition-all duration-300"
                    />
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <div className="absolute -left-4 top-1/2 -translate-y-1/2 hidden md:block">
              <CarouselPrevious className="bg-black/70 border-[#FF7A00]/30 hover:bg-[#FF7A00]/80 hover:border-[#FF7A00]" />
            </div>
            <div className="absolute -right-4 top-1/2 -translate-y-1/2 hidden md:block">
              <CarouselNext className="bg-black/70 border-[#FF7A00]/30 hover:bg-[#FF7A00]/80 hover:border-[#FF7A00]" />
            </div>
          </Carousel>
          
          {/* Indicator dots for mobile */}
          <div className="flex justify-center space-x-3 mt-6 md:hidden">
            {companies.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  const api = (carouselRef.current as any)?.__emblaApi;
                  if (api) {
                    api.scrollTo(index);
                  }
                }}
                className="group relative"
              >
                <span className={`block w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index 
                    ? "bg-[#FF7A00] scale-125" 
                    : "bg-gray-500 hover:bg-gray-400"
                }`}
                aria-label={`View ${companies[index].name}`}
                />
                <span className={`absolute -inset-1 rounded-full scale-0 transition-all duration-300 ${
                  currentIndex === index ? "bg-[#FF7A00]/30 animate-ping" : ""
                }`}></span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
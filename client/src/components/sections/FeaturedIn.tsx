import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import featuredLogos from "@/assets/featured/featured_logos.png";

// Company names matching the logos in the image
const companies = [
  "The Seattle Times",
  "Fast Company",
  "LA Weekly",
  "CEO Weekly",
  "Canvas Rebel",
  "Force",
  "LinkedIn Top Voices"
];

export default function FeaturedIn() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Setup automatic slideshow
  useEffect(() => {
    const startSlideshow = () => {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % companies.length);
      }, 2000); // Change company every 2 seconds
    };

    startSlideshow();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <section className="py-16 bg-black text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-[#FF7A00]/10 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#FF7A00]/10 to-transparent"></div>
      <div className="absolute top-10 left-10 w-20 h-20 bg-[#FF7A00]/10 rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 bg-[#FF7A00]/10 rounded-full"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-10"
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

        <div className="flex flex-col items-center">
          {/* Logo display */}
          <motion.div 
            className="relative w-full max-w-5xl mx-auto mb-8"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex justify-center">
              <img
                src={featuredLogos}
                alt="Publications where Jahmaal Marshall has been featured"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </motion.div>

          {/* Company name slideshow */}
          <div className="h-16 flex items-center justify-center relative overflow-hidden bg-black/50 backdrop-blur-sm px-10 py-3 rounded-full border border-[#FF7A00]/20 shadow-xl">
            {companies.map((company, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: currentIndex === index ? 1 : 0,
                  y: currentIndex === index ? 0 : 20,
                  scale: currentIndex === index ? 1 : 0.8
                }}
                transition={{ 
                  duration: 0.6, 
                  ease: "easeOut" 
                }}
                className="absolute"
                style={{ 
                  display: currentIndex === index ? 'block' : 'none'
                }}
              >
                <h3 className="text-xl md:text-2xl font-medium">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF7A00] to-[#FF5500]">
                    {company}
                  </span>
                </h3>
              </motion.div>
            ))}
          </div>
          
          {/* Indicator dots */}
          <div className="flex space-x-3 mt-6">
            {companies.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  // Reset the interval timer when manually changing slides
                  if (intervalRef.current) {
                    clearInterval(intervalRef.current);
                    intervalRef.current = setInterval(() => {
                      setCurrentIndex((prevIndex) => (prevIndex + 1) % companies.length);
                    }, 2000);
                  }
                }}
                className="group relative"
              >
                <span className={`block w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index 
                    ? "bg-[#FF7A00] scale-125" 
                    : "bg-gray-500 hover:bg-gray-400"
                }`}
                aria-label={`View ${companies[index]}`}
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
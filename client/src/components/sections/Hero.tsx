import { Button } from "@/components/ui/button";
import jahmaalImage from "@/assets/jahmaal.png";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-[#FFA64D]/10 to-[#FF7A00]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="font-[Playfair_Display] text-4xl md:text-5xl lg:text-6xl font-bold italic text-gray-800 leading-tight mb-6 tracking-tight">
              MENTAL HEALTH AND WELLNESS PROGRAMS SERVING TECH EXECUTIVES
            </h1>
            <p className="text-lg md:text-xl mb-4 text-gray-600">
              Break free from stress, anxiety and perfectionism.
            </p>
            <p className="text-lg md:text-xl mb-8 text-[#FF7A00] font-semibold">
              Listen Then Speak because your voice matters.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-[#FF7A00] hover:bg-[#E56E00] text-white px-8 py-4 rounded-md font-semibold text-center transition-colors text-lg h-auto">
                <a href="https://calendly.com/listenthenspeak/30min" target="_blank" rel="noopener noreferrer">BOOK A FREE DISCOVERY SESSION!</a>
              </Button>
            </div>
          </motion.div>
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative overflow-hidden rounded-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF7A00]/20 to-transparent rounded-lg"></div>
              <img 
                src={jahmaalImage} 
                alt="Jahmaal Marshall - Professional Coach" 
                className="w-full h-auto rounded-lg shadow-xl object-cover" 
              />
            </div>
            <div className="absolute -bottom-5 -left-5 bg-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center">
                <div className="bg-[#FF7A00] text-white p-2 rounded-full mr-3">
                  <i className="fas fa-star"></i>
                </div>
                <div>
                  <p className="font-bold">Trusted by 100+ clients</p>
                  <p className="text-sm text-gray">5-star rated coaching</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

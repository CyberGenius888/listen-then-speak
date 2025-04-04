import { motion } from "framer-motion";

export default function StatsBanner() {
  return (
    <section className="bg-[#FF7A00] text-black py-8 md:py-10 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Years of Experience */}
          <motion.div 
            className="text-center mb-6 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-2">12+</h2>
            <p className="text-xl md:text-2xl">Years of sharing solutions</p>
          </motion.div>
          
          {/* Divider for mobile */}
          <div className="w-24 h-1 bg-black/20 rounded-full my-4 md:hidden"></div>
          
          {/* Vertical divider for desktop */}
          <div className="hidden md:block h-20 w-px bg-black/20 mx-8"></div>
          
          {/* Sessions Info */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Listen Then Speak<br />Sessions</h2>
            <p className="text-xl md:text-2xl">Increase Exponentially daily</p>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-white/10 rounded-full translate-x-1/3 translate-y-1/3"></div>
    </section>
  );
}
import { motion } from "framer-motion";

export default function Imagine() {
  // List of imagination items from the image
  const imagineItems = [
    {
      icon: "check",
      text: "Changing your unhealthy outlets that hinder your professional productivity and personal mental health to begin to level up."
    },
    {
      icon: "check",
      text: "Learning about your triggers, behavior patterns, specifically to harness them and use them for maximum productivity"
    },
    {
      icon: "check",
      text: "The ability to seek, find, develop your voice and create a life of impact and purpose."
    },
    {
      icon: "check",
      text: "Developing the emotional resilience to handle those challenges with confidence and clarity."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="font-[Playfair_Display] text-4xl md:text-5xl font-bold mb-4 uppercase">
            Let's Just Imagine<br />You?
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {imagineItems.map((item, index) => (
            <motion.div 
              key={index}
              className="bg-gradient-to-br from-[#FFA64D]/10 to-[#FF7A00]/5 p-6 rounded-lg border border-[#FF7A00]/20 flex items-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex-shrink-0 w-8 h-8 bg-[#FF7A00] text-white rounded-full flex items-center justify-center mr-4">
                <i className={`fas fa-${item.icon}`}></i>
              </div>
              <p className="text-gray-800 font-medium">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
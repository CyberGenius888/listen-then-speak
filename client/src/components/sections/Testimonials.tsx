import clayImagePath from "@/assets/testimonials/clay-sibert.png";
import mitaImagePath from "@/assets/testimonials/mita-mallick.png";
import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      content: "While coaching Jahmaal will focus intently on his clients, giving them every bit of his attention. During my time with Jahmaal, he showed an unending amount of patience, and he can listen attentively while analyzing the issue at hand. Because of this, he can hone into specifics and work with clients on creating a plan that will guide them to a resolution instead of a band-aid.",
      name: "Clay Sibert",
      position: "Business Analyst | Vendor Management & Accountability",
      image: clayImagePath
    },
    {
      content: "Working with Jahmaal Marshall has been a game changer for me. He coached me to find root causes of why I show up the way I do as a leader today. And we went back to experiences from my childhood that I am still working on healing from. He is attentive, customized each of our sessions, and provided impactful and engaging homework assignments that I was excited to dig into. As a result of working with Jahmaal, I am now clearer on my non-negotiables, holding onto my boundaries, and continuing to set myself up for success. Working with Jahmaal is one of the best professional investments you can make in yourself this year-trust me, you won't regret it!",
      name: "Mita Mallick",
      position: "Product Manager & Director",
      image: mitaImagePath
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-white to-[#FF7A00]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="font-[Playfair_Display] text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            What Are Others Saying
          </h2>
          <div className="w-20 h-1 bg-[#FF7A00] mx-auto rounded-full"></div>
        </div>
        
        <div className="flex flex-col space-y-12 md:space-y-16">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} 
                          gap-8 items-center bg-white p-10 rounded-xl shadow-xl`}
            >
              <div className="w-full md:w-1/3 flex-shrink-0">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#FF7A00]/20 rounded-xl transform rotate-3"></div>
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="relative w-full h-auto rounded-xl object-cover shadow-lg transform transition-transform duration-300 hover:scale-[1.02] z-10"
                  />
                </div>
              </div>
              
              <div className="w-full md:w-2/3 text-left flex flex-col">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex text-[#FF7A00] text-xl">
                    <i className="fas fa-quote-left text-3xl text-[#FF7A00]/30 mr-2"></i>
                  </div>
                  <div className="flex text-[#FF7A00]">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-6 text-lg italic leading-relaxed">
                  {testimonial.content}
                </p>
                
                <div className="mt-auto border-t border-gray-100 pt-4">
                  <h4 className="font-bold text-xl text-gray-900">{testimonial.name}</h4>
                  <p className="text-[#FF7A00] font-medium">{testimonial.position}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
import clayImagePath from "@/assets/testimonials/clay-sibert.png";
import mitaImagePath from "@/assets/testimonials/mita-mallick.png";

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
    <section id="testimonials" className="py-20 bg-[#FF7A00]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-[Playfair_Display] text-3xl md:text-4xl font-bold mb-4">What Are Others Saying</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-[0_4px_15px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="flex text-[#FF7A00] mb-4">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              
              <div className="flex flex-col md:flex-row items-start gap-6 mb-6">
                <div className="flex-shrink-0 w-full md:w-32">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-full h-auto rounded-lg object-cover aspect-square"
                  />
                </div>
                
                <div className="flex-1">
                  <h4 className="font-bold text-lg mb-1">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600 mb-4">{testimonial.position}</p>
                  <p className="text-gray-700">{testimonial.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
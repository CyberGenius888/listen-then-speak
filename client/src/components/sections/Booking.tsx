import { Button } from "@/components/ui/button";

export default function Booking() {
  const expectationItems = [
    {
      icon: "fas fa-clock",
      title: "45-Minute Consultation",
      description: "We'll discuss your current challenges and goals to see if we're a good fit."
    },
    {
      icon: "fas fa-comments",
      title: "Safe, Judgment-Free Space",
      description: "Share openly in a confidential environment focused on your needs."
    },
    {
      icon: "fas fa-map",
      title: "Clear Next Steps",
      description: "You'll leave with initial insights and a potential path forward."
    }
  ];

  return (
    <section id="book" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-[Playfair_Display] text-3xl md:text-4xl font-bold mb-4">Get Started Today</h2>
          <p className="text-lg text-gray max-w-3xl mx-auto">
            Take the first step toward freedom from feeling overwhelmed. Book your initial consultation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-[#FF7A00]/5 p-8 rounded-lg border border-[#FF7A00]/20">
            <h3 className="font-[Playfair_Display] text-2xl font-bold mb-6">What to Expect</h3>
            <div className="space-y-6">
              {expectationItems.map((item, index) => (
                <div key={index} className="flex">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#FF7A00]/10 text-[#FF7A00] rounded-full flex items-center justify-center mr-4">
                    <i className={item.icon}></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                    <p className="text-gray">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-4 bg-[#FF7A00]/10 rounded-lg">
              <p className="font-bold mb-1">Limited Availability</p>
              <p className="text-sm">I only take on a limited number of clients to ensure quality. Book your spot today.</p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <h3 className="font-[Playfair_Display] text-2xl font-bold mb-6">Book Your Consultation</h3>
            
            {/* Calendly inline widget */}
            <div id="calendly-widget" className="min-h-[500px]">
              {/* Using an iframe implementation for Calendly */}
              <iframe
                src="https://calendly.com/your-calendly-link"
                width="100%"
                height="600"
                frameBorder="0"
                title="Select a date and time for your appointment"
                className="rounded-lg"
              ></iframe>
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-gray">Prefer to reach out directly?</p>
              <p className="font-bold text-[#FF7A00]">contact@lifecoach.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

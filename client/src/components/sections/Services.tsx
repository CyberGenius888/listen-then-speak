export default function Services() {
  const services = [
    {
      icon: "fas fa-brain",
      title: "Mental Clarity",
      description: "Learn techniques to clear mental fog and gain perspective on what truly matters in your life."
    },
    {
      icon: "fas fa-balance-scale",
      title: "Life Balance",
      description: "Develop strategies to balance work, personal life, and self-care for greater fulfillment."
    },
    {
      icon: "fas fa-chart-line",
      title: "Growth Planning",
      description: "Create actionable plans that align with your values and move you toward your goals."
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-[Playfair_Display] text-3xl md:text-4xl font-bold mb-4">How I Can Help You</h2>
          <p className="text-lg text-gray max-w-3xl mx-auto">
            My proven coaching approach helps you break free from feeling overwhelmed so you can live with purpose and joy.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-[0_4px_15px_rgba(0,0,0,0.08)] hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#FF7A00]/10 text-[#FF7A00] rounded-full flex items-center justify-center mb-6">
                <i className={`${service.icon} text-2xl`}></i>
              </div>
              <h3 className="font-[Playfair_Display] text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gray-light rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <iframe 
                width="100%" 
                height="315" 
                src="https://www.youtube.com/embed/8Ha_q8WhZtA?si=e7_BSrnHghn_UesS" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
                className="rounded-lg shadow-md"
              ></iframe>
            </div>
            <div className="order-1 md:order-2">
              <h3 className="font-[Playfair_Display] text-2xl md:text-3xl font-bold mb-4">Reclaim your time and Reduce your stress</h3>
              <p className="text-gray-600 mb-4">
                Leadership often feels like walking tightrope balancing innovation, performance, and people management all while trying to shield yourself from the creeping shadows of stress and burnout.
              </p>
              <p className="text-gray-600 mb-4">
                Here's the truth: You don't have to choose between performance and well-being. When leaders are supported, both the top line and the bottom line grow stronger.
              </p>
              <p className="text-gray-600 mb-4">
                Burnout doesn't have to be the cost of success. If you are ready to change the narrative and take action let's get started.
              </p>
              <div className="mt-6">
                <a 
                  href="#ebook" 
                  className="inline-block bg-[#FF7A00] hover:bg-[#E56E00] text-white px-8 py-3 rounded-full font-bold transition-colors text-center"
                >
                  <div className="text-lg">TAKE ACTION!</div>
                  <div className="text-sm font-medium">BOOK A FREE DISCOVERY CALL</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

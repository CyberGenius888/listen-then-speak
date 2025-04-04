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
            <div>
              <h3 className="font-[Playfair_Display] text-2xl md:text-3xl font-bold mb-4">The Relief You're Looking For</h3>
              <p className="text-gray-600 mb-6">
                Many clients come to me feeling stuck, overwhelmed, and uncertain about their future. Through our work together, they discover clarity, purpose, and a renewed sense of direction.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="text-[#FF7A00] mr-3 mt-1"><i className="fas fa-check-circle"></i></div>
                  <p>Personalized strategies tailored to your unique situation</p>
                </div>
                <div className="flex items-start">
                  <div className="text-[#FF7A00] mr-3 mt-1"><i className="fas fa-check-circle"></i></div>
                  <p>Practical tools you can implement immediately</p>
                </div>
                <div className="flex items-start">
                  <div className="text-[#FF7A00] mr-3 mt-1"><i className="fas fa-check-circle"></i></div>
                  <p>Ongoing support between sessions</p>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1627483297886-49710ae1fc22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80" 
                alt="Person feeling relieved and unburdened" 
                className="rounded-lg shadow-md w-full h-auto" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

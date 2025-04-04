export default function Process() {
  const steps = [
    {
      number: 1,
      title: "Discovery Session",
      description: "We'll identify your unique challenges and goals, creating a foundation for our work together."
    },
    {
      number: 2,
      title: "Custom Strategy",
      description: "I'll develop personalized techniques to help you overcome your specific overwhelm triggers."
    },
    {
      number: 3,
      title: "Implementation",
      description: "We'll work together to implement these strategies and track your progress toward lasting change."
    }
  ];

  return (
    <section className="py-20 bg-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-[Playfair_Display] text-3xl md:text-4xl font-bold mb-4">My Coaching Process</h2>
          <p className="text-lg text-gray max-w-3xl mx-auto">
            A simple, effective approach to helping you find relief and clarity.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-lg p-8 shadow-md relative z-10">
                <div className="w-12 h-12 bg-[#FF7A00] text-white rounded-full flex items-center justify-center text-xl font-bold mb-6">
                  {step.number}
                </div>
                <h3 className="font-[Playfair_Display] text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 left-full w-12 h-2 bg-[#FF7A00]/30 -translate-y-1/2 -translate-x-4"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

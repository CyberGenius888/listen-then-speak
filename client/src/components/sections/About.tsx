import listenThenSpeakImage from "../../assets/listen_then_speak.png";

export default function About() {
  const stats = [
    { value: "100+", label: "Clients helped" },
    { value: "8+", label: "Years experience" },
    { value: "96%", label: "Client satisfaction" },
    { value: "5 Star", label: "Average rating" }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src={listenThenSpeakImage} 
              alt="Listen Then Speak - Why Not?" 
              className="rounded-lg shadow-lg w-full h-auto" 
            />
          </div>
          <div>
            <h2 className="font-[Playfair_Display] text-3xl md:text-4xl font-bold mb-6">About My Approach</h2>
            <p className="text-gray-600 mb-6">
              With over a decade of experience helping people overcome feeling overwhelmed, I've developed a unique coaching methodology focused on creating lasting change.
            </p>
            <p className="text-gray-600 mb-6">
              My approach combines practical strategies, mindfulness techniques, and accountability systems that help you move from feeling burdened to experiencing freedom and clarity.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="bg-[#FF7A00]/10 p-4 rounded-lg">
                  <div className="text-[#FF7A00] text-xl font-bold mb-2">{stat.value}</div>
                  <p className="text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import YoutubeEmbed from "@/components/YoutubeEmbed";

export default function Testimonials() {
  const testimonials = [
    {
      content: "The coaching sessions gave me practical tools to manage my stress and prioritize what truly matters. I feel lighter and more in control now.",
      name: "Jennifer L.",
      position: "Marketing Executive",
      initials: "JL"
    },
    {
      content: "I was skeptical at first, but the coaching process helped me identify patterns that were keeping me stuck. Now I have clarity and purpose.",
      name: "David P.",
      position: "Small Business Owner",
      initials: "DP"
    },
    {
      content: "The personalized approach made all the difference. My coach really listened and created strategies specific to my challenges. Life-changing!",
      name: "Amanda W.",
      position: "Healthcare Professional",
      initials: "AW"
    }
  ];

  const videos = [
    {
      id: "dQw4w9WgXcQ", // Would be replaced with actual YouTube video ID
      title: "Sarah's Transformation",
      description: "After feeling overwhelmed for years, I finally found the clarity I needed."
    },
    {
      id: "dQw4w9WgXcQ", // Would be replaced with actual YouTube video ID
      title: "Mark's Journey",
      description: "The strategies I learned helped me reclaim my time and reduce my anxiety."
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-[#FF7A00]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-[Playfair_Display] text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
          <p className="text-lg text-gray max-w-3xl mx-auto">
            Hear directly from clients who have transformed their lives through our coaching partnership.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Video Testimonials */}
          {videos.map((video, index) => (
            <div key={index} className="rounded-lg overflow-hidden shadow-lg">
              <YoutubeEmbed videoId={video.id} />
              <div className="p-6 bg-white">
                <h3 className="font-[Playfair_Display] text-xl font-bold mb-2">{video.title}</h3>
                <p className="text-gray">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {/* Written Testimonials */}
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-[0_4px_15px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="flex text-[#FF7A00] mb-4">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p className="italic mb-6">{testimonial.content}</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#FF7A00]/20 rounded-full flex items-center justify-center mr-4">
                  <span className="text-[#FF7A00] font-bold">{testimonial.initials}</span>
                </div>
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-gray">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

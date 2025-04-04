import { useState } from "react";
import YoutubeEmbed from "@/components/YoutubeEmbed";
import { Button } from "@/components/ui/button";
import { counselingVideos } from "@/lib/data";

export default function Counseling() {
  // We'll use the video IDs from our data file, but this would typically come from a real data source
  const counselingVideos = [
    {
      id: YOUTUBE_VIDEO_IDS.COUNSELING_1, // Replace with actual counseling video IDs
      title: "Understanding Anxiety",
      description: "Learn about common anxiety triggers and effective coping strategies."
    },
    {
      id: YOUTUBE_VIDEO_IDS.COUNSELING_2, // Replace with actual counseling video IDs
      title: "Overcoming Procrastination",
      description: "Practical techniques to break the cycle of procrastination and boost productivity."
    },
    {
      id: YOUTUBE_VIDEO_IDS.COUNSELING_3, // Replace with actual counseling video ID
      title: "Finding Your Purpose",
      description: "How to identify your core values and align them with your daily actions."
    }
  ];

  const [displayedVideos, setDisplayedVideos] = useState(2);

  const handleLoadMore = () => {
    setDisplayedVideos(Math.min(displayedVideos + 2, counselingVideos.length));
  };

  return (
    <section id="counseling" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-[Playfair_Display] text-3xl md:text-4xl font-bold mb-4">Counseling Videos</h2>
          <p className="text-lg text-gray max-w-3xl mx-auto">
            Browse my collection of educational videos covering various life challenges and growth strategies.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {counselingVideos.slice(0, displayedVideos).map((video, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2">
              <YoutubeEmbed videoId={video.id} />
              <div className="p-6">
                <h3 className="font-[Playfair_Display] text-xl font-bold mb-2">{video.title}</h3>
                <p className="text-gray-600 mb-4">{video.description}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <i className="far fa-clock mr-2"></i>
                  <span>15 min</span>
                  <i className="fas fa-tag ml-4 mr-2"></i>
                  <span>Self-Improvement</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {displayedVideos < counselingVideos.length && (
          <div className="text-center mt-12">
            <Button
              onClick={handleLoadMore}
              className="bg-[#FF7A00] hover:bg-[#E56E00] text-white px-8 py-3 rounded-md font-semibold transition-colors"
            >
              Load More Videos
            </Button>
          </div>
        )}
        
        <div className="mt-16 p-8 bg-[#FF7A00]/5 rounded-lg border border-[#FF7A00]/20">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="text-[#FF7A00] text-5xl">
              <i className="fas fa-youtube"></i>
            </div>
            <div className="flex-1">
              <h3 className="font-[Playfair_Display] text-2xl font-bold mb-2">Subscribe to My Channel</h3>
              <p className="text-gray-600">
                Get notified when I release new counseling videos by subscribing to my YouTube channel.
              </p>
            </div>
            <Button asChild variant="outline" className="border-2 border-[#FF7A00] text-[#FF7A00] hover:bg-[#FF7A00] hover:text-white px-8 py-3 rounded-md font-semibold transition-colors">
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-external-link-alt mr-2"></i>
                Visit Channel
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
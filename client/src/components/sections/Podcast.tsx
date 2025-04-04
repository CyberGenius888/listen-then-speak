import { Button } from "@/components/ui/button";
import podcastCover from "@/assets/podcast/podcast_cover_new.png";
import podcastButton from "@/assets/podcast_button.png";

export default function Podcast() {
  return (
    <section id="podcast" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Podcast Image */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Adding a glow effect behind the image */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF7A00] to-[#FF5500] blur-[40px] opacity-20 rounded-full -z-10"></div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-40 h-40 bg-[#FF7A00]/20 rounded-full -z-10"></div>
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-[#FF7A00]/30 rounded-full -z-10"></div>
              <div className="absolute top-1/2 right-0 w-24 h-24 bg-[#FF7A00]/10 rounded-full transform translate-x-1/2 -translate-y-1/2 -z-10"></div>
              
              {/* Main image with enhanced styling */}
              <img 
                src={podcastCover} 
                alt="Listen Then Speak Podcast with Jahmaal Marshall" 
                className="rounded-xl shadow-2xl max-w-full h-auto transform transition-all duration-500 hover:scale-105 border-4 border-[#FF7A00]/20"
                style={{ maxWidth: "480px", objectFit: "cover" }}
              />
              
              {/* Adding a subtle overlay effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
            </div>
          </div>

          {/* Right side - Podcast Info */}
          <div>
            <h2 className="font-[Playfair_Display] text-3xl md:text-4xl font-bold mb-4">
              Listen Then Speak Podcast with Jahmaal Marshall
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              On the Listen Then Speak podcast, I engage in real conversations with leaders who have faced fear, self-doubt, and uncertainty and came out stronger.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              I speak with great minds to unpack stories leaving the audience with practical and applicable advice.
            </p>

            <div className="bg-gradient-to-br from-[#FF7A00]/15 to-[#FF7A00]/5 border border-[#FF7A00]/20 p-8 rounded-2xl mb-8 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF7A00]/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#FF7A00]/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
              
              <h3 className="font-[Playfair_Display] text-2xl font-bold mb-5 border-b border-[#FF7A00]/30 pb-3 relative z-10">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF7A00] to-[#FF5500]">My goal for you is:</span>
              </h3>
              
              <ul className="space-y-4 relative z-10">
                <li className="flex items-center group transition-all duration-300 hover:translate-x-1">
                  <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-[#FF7A00] to-[#FF5500] text-white rounded-full flex items-center justify-center mr-3 shadow-md group-hover:shadow-lg">1</span>
                  <span className="text-lg font-medium">To challenge the way you think</span>
                </li>
                <li className="flex items-center group transition-all duration-300 hover:translate-x-1">
                  <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-[#FF7A00] to-[#FF5500] text-white rounded-full flex items-center justify-center mr-3 shadow-md group-hover:shadow-lg">2</span>
                  <span className="text-lg font-medium">Help you break free from what is holding you back</span>
                </li>
                <li className="flex items-center group transition-all duration-300 hover:translate-x-1">
                  <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-[#FF7A00] to-[#FF5500] text-white rounded-full flex items-center justify-center mr-3 shadow-md group-hover:shadow-lg">3</span>
                  <span className="text-lg font-medium">Drive you towards your purpose with confidence</span>
                </li>
              </ul>
            </div>

            <a 
              href="https://podcasts.apple.com/us/podcast/listen-then-speak/id1550684472" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block transition-transform duration-300 hover:scale-105"
            >
              <img 
                src={podcastButton} 
                alt="Listen Now On Apple Podcast" 
                className="h-auto max-w-full"
                style={{ maxWidth: "280px" }}
              />
            </a>
          </div>
        </div>

        <div className="mt-16 p-8 bg-gradient-to-r from-[#FF7A00]/10 to-[#FF7A00]/5 rounded-lg border border-[#FF7A00]/20">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="text-[#FF7A00] text-5xl">
              <i className="fas fa-podcast"></i>
            </div>
            <div className="flex-1">
              <h3 className="font-[Playfair_Display] text-2xl font-bold mb-2">Subscribe to the Podcast</h3>
              <p className="text-gray-600">
                Never miss an episode by subscribing to Listen Then Speak podcast on your favorite platform.
              </p>
            </div>
            <div className="flex gap-4">
              <Button asChild variant="outline" className="border-2 border-[#FF7A00] text-[#FF7A00] hover:bg-[#FF7A00] hover:text-white px-5 py-2 rounded-md font-semibold transition-colors">
                <a href="https://podcasts.apple.com/us/podcast/listen-then-speak/id1550684472" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-apple mr-2"></i>
                  Apple
                </a>
              </Button>
              <Button asChild variant="outline" className="border-2 border-[#FF7A00] text-[#FF7A00] hover:bg-[#FF7A00] hover:text-white px-5 py-2 rounded-md font-semibold transition-colors">
                <a href="https://open.spotify.com/show/listen-then-speak" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-spotify mr-2"></i>
                  Spotify
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
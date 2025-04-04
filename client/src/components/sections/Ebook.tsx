import { Button } from "@/components/ui/button";
import ebookCover from "../../assets/ebook/dear-tech-executives-new.png";

export default function Ebook() {
  return (
    <section id="ebook" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-[Playfair_Display] text-3xl md:text-4xl font-bold mb-4">Free Resource</h2>
          <p className="text-lg text-gray max-w-3xl mx-auto">
            Discover practical strategies to overcome burnout and reclaim your well-being
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="relative">
              {/* Adding a glow effect behind the image */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF7A00] to-[#FF5500] blur-[40px] opacity-20 rounded-full -z-10"></div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-40 h-40 bg-[#FF7A00]/20 rounded-full -z-10"></div>
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-[#FF7A00]/30 rounded-full -z-10"></div>
              
              {/* Main image with enhanced styling */}
              <img 
                src={ebookCover} 
                alt="Dear Tech Executives eBook by Jahmaal Marshall" 
                className="rounded-xl shadow-2xl max-w-full h-auto transform transition-all duration-500 hover:scale-105 border-4 border-[#FF7A00]/20"
                style={{ maxWidth: "350px", objectFit: "cover" }}
              />
              
              {/* Adding a subtle overlay effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <h3 className="font-[Playfair_Display] text-2xl font-bold mb-6">Dear Tech Executives</h3>
            <h4 className="text-xl font-semibold mb-4">3 Tips to Mitigate Burnout from the Inside Out</h4>
            
            <div className="space-y-6 mb-8">
              <div className="flex">
                <div className="flex-shrink-0 w-12 h-12 bg-[#FF7A00]/10 text-[#FF7A00] rounded-full flex items-center justify-center mr-4">
                  <i className="fas fa-lightbulb"></i>
                </div>
                <div>
                  <h5 className="font-bold text-lg mb-1">Practical Insights</h5>
                  <p className="text-gray-600">Discover actionable strategies tailored specifically for tech leaders facing unique pressures</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 w-12 h-12 bg-[#FF7A00]/10 text-[#FF7A00] rounded-full flex items-center justify-center mr-4">
                  <i className="fas fa-brain"></i>
                </div>
                <div>
                  <h5 className="font-bold text-lg mb-1">Psychological Approach</h5>
                  <p className="text-gray-600">Learn science-backed methods to transform your mindset and build resilience</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 w-12 h-12 bg-[#FF7A00]/10 text-[#FF7A00] rounded-full flex items-center justify-center mr-4">
                  <i className="fas fa-balance-scale"></i>
                </div>
                <div>
                  <h5 className="font-bold text-lg mb-1">Work-Life Balance</h5>
                  <p className="text-gray-600">Create sustainable success without sacrificing your health, relationships, or joy</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <Button className="bg-[#FF7A00] hover:bg-[#E56E00] text-white px-8 py-6 text-lg rounded-md shadow-lg transition-all hover:shadow-xl">
                Download Free eBook
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-[#FFA64D]/10 to-[#FF7A00]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-[Playfair_Display] text-4xl md:text-5xl lg:text-6xl font-bold text-gray-dark leading-tight mb-6">
              Find Relief From Feeling Overwhelmed
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-600">
              Are you looking for proven help to keep you from continually feeling overwhelmed and burdened by life? I can be that help for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-[#FF7A00] hover:bg-[#E56E00] text-white px-8 py-4 rounded-md font-semibold text-center transition-colors text-lg h-auto">
                <a href="#book">Get on my calendar today</a>
              </Button>
              <Button asChild variant="outline" className="border-2 border-[#FF7A00] text-[#FF7A00] hover:bg-[#FF7A00] hover:text-white px-8 py-4 rounded-md font-semibold text-center transition-colors text-lg h-auto">
                <a href="#services">Learn more</a>
              </Button>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1573497019418-b400bb3ab074?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="Professional coach helping client" 
              className="rounded-lg shadow-xl w-full h-auto" 
            />
            <div className="absolute -bottom-5 -left-5 bg-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center">
                <div className="bg-[#FF7A00] text-white p-2 rounded-full mr-3">
                  <i className="fas fa-star"></i>
                </div>
                <div>
                  <p className="font-bold">Trusted by 100+ clients</p>
                  <p className="text-sm text-gray">5-star rated coaching</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

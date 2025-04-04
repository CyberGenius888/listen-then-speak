import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="py-20 bg-[#FF7A00]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-[Playfair_Display] text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Transform Your Leadership?
        </h2>
        <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
          Stop letting burnout determine your success. Learn practical strategies to reclaim your time and reduce your stress.
        </p>
        <div className="flex flex-col items-center">
          <Button asChild variant="secondary" className="bg-white text-[#FF7A00] hover:bg-gray-100 px-12 py-6 rounded-md font-extrabold text-2xl tracking-wider transition-all hover:shadow-xl h-auto transform hover:scale-105">
            <a href="https://calendly.com/listenthenspeak/30min" target="_blank" rel="noopener noreferrer">Let's connect</a>
          </Button>
          <p className="mt-4 text-white font-semibold">BOOK A FREE DISCOVERY CALL</p>
        </div>
        
        <div className="mt-12">
          <Button asChild variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-md font-bold text-lg transition-colors h-auto">
            <a href="#ebook">Get Your Free eBook Now</a>
          </Button>
        </div>
      </div>
    </section>
  );
}

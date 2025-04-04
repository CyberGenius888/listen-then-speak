import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="py-20 bg-[#FF7A00]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-[Playfair_Display] text-3xl md:text-4xl font-bold text-white mb-6">
          Let's get results from the inside out
        </h2>
        <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
          Schedule Your Free Discovery Call Today
        </p>
        <div className="flex flex-col items-center">
          <Button asChild variant="secondary" className="bg-white text-[#FF7A00] hover:bg-gray-100 px-12 py-6 rounded-md font-extrabold text-2xl tracking-wider transition-all hover:shadow-xl h-auto transform hover:scale-105">
            <a href="https://calendly.com/listenthenspeak/30min" target="_blank" rel="noopener noreferrer">BOOK DISCOVERY SESSION</a>
          </Button>
        </div>
      </div>
    </section>
  );
}

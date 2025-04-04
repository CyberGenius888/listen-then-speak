import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="py-20 bg-[#FF7A00]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-[Playfair_Display] text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Transform Your Life?
        </h2>
        <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
          Stop letting overwhelm control your life. Take the first step toward clarity and purpose today.
        </p>
        <Button asChild variant="secondary" className="bg-white text-[#FF7A00] hover:bg-gray-100 px-8 py-4 rounded-md font-bold text-lg transition-colors h-auto">
          <a href="#book">Book Your Consultation Now</a>
        </Button>
      </div>
    </section>
  );
}

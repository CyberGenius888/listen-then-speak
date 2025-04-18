import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import logoPath from "@/assets/logo.png";

export default function Navbar() {
  return (
    <header className="bg-white py-5 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <img src={logoPath} alt="Listen Then Speak" className="h-16 cursor-pointer" />
            </Link>
          </div>

          {/* Navigation Links - Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-700 hover:text-[#FF7A00] font-medium transition-colors cursor-pointer">
              About
            </a>
            <a href="#podcast" className="text-gray-700 hover:text-[#FF7A00] font-medium transition-colors cursor-pointer">
              Podcast
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-[#FF7A00] font-medium transition-colors cursor-pointer">
              Testimonial
            </a>
            <a href="#newsletter" className="text-gray-700 hover:text-[#FF7A00] font-medium transition-colors cursor-pointer">
              Newsletter
            </a>
          </nav>

          {/* Connect Button */}
          <a href="https://calendly.com/listenthenspeak/30min" target="_blank" rel="noopener noreferrer">
            <div>
              <Button className="bg-[#FF7A00] hover:bg-[#E56E00] text-white">
                Let's connect
              </Button>
            </div>
          </a>
        </div>
      </div>
    </header>
  );
}
import { Link } from "wouter";
import logoPath from "@/assets/logo.png";
import cyberGeniusLogo from "@/assets/cybergenius-logo.png";

export default function Footer() {
  return (
    <footer className="bg-gray-50 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between gap-10 mb-12">
          {/* Logo and Short Description */}
          <div className="max-w-lg">
            <Link href="/">
              <div className="inline-block mb-5">
                <img src={logoPath} alt="Listen Then Speak" className="h-12 cursor-pointer" />
              </div>
            </Link>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Helping you navigate life's challenges with clarity and purpose. 
              Professional coaching that transforms overwhelm into focused action.
            </p>
            
            {/* Contact Information */}
            <div className="flex items-center mb-6 bg-white/50 p-3 rounded-lg border border-gray-100 shadow-sm">
              <i className="fas fa-envelope text-[#FF7A00] mr-3 text-lg"></i>
              <a href="mailto:Jahmaal@listenthenspeak.com" className="text-gray-700 hover:text-[#FF7A00] transition-colors">
                Jahmaal@listenthenspeak.com
              </a>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex gap-4">
              <a 
                href="https://www.facebook.com/jahmaal.marshall" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-sm border border-gray-100 text-gray-500 hover:text-white hover:bg-[#FF7A00] transition-all duration-300"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a 
                href="https://x.com/Listenthenspk" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-sm border border-gray-100 text-gray-500 hover:text-white hover:bg-[#FF7A00] transition-all duration-300"
                aria-label="X (Twitter)"
              >
                <span className="font-bold">𝕏</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/jahmaalmarshall" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-sm border border-gray-100 text-gray-500 hover:text-white hover:bg-[#FF7A00] transition-all duration-300"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright and Powered By */}
        <div className="border-t border-gray-200 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Listen Then Speak. All rights reserved.
            </p>
            <div className="flex items-center">
              <span className="text-gray-500 mr-2">Powered by</span>
              <img src={cyberGeniusLogo} alt="CyberGenius" className="h-8" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
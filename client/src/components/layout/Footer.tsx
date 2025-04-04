import { Link } from "wouter";
import logoPath from "@/assets/logo.png";
import cyberGeniusLogo from "@/assets/cybergenius-logo.png";

export default function Footer() {
  return (
    <footer className="bg-gray-50 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo and Short Description */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/">
              <div className="inline-block mb-6">
                <img src={logoPath} alt="Listen Then Speak" className="h-10 cursor-pointer" />
              </div>
            </Link>
            <p className="text-gray-600 mb-6 max-w-md">
              Helping you navigate life's challenges with clarity and purpose. 
              Professional coaching that transforms overwhelm into focused action.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#FF7A00]">
                <i className="fab fa-facebook-f text-xl"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#FF7A00]">
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#FF7A00]">
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#FF7A00]">
                <i className="fab fa-linkedin-in text-xl"></i>
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/#services">
                  <span className="text-gray-600 hover:text-[#FF7A00] cursor-pointer">Services</span>
                </Link>
              </li>
              <li>
                <Link href="/#about">
                  <span className="text-gray-600 hover:text-[#FF7A00] cursor-pointer">About</span>
                </Link>
              </li>
              <li>
                <Link href="/#testimonials">
                  <span className="text-gray-600 hover:text-[#FF7A00] cursor-pointer">Testimonials</span>
                </Link>
              </li>
              <li>
                <Link href="/#counseling">
                  <span className="text-gray-600 hover:text-[#FF7A00] cursor-pointer">Counseling</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <i className="fas fa-envelope text-[#FF7A00] mt-1 mr-3"></i>
                <span className="text-gray-600">Jahmaal@listenthenspeak.com</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt text-[#FF7A00] mt-1 mr-3"></i>
                <span className="text-gray-600">
                  123 Coaching Street<br />
                  Clarity City, CS 98765
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright and Powered By */}
        <div className="border-t border-gray-200 pt-8">
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
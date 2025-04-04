export default function Footer() {
  return (
    <footer className="bg-gray-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="font-[Playfair_Display] font-bold text-2xl text-[#FF7A00] mb-4">
              <i className="fas fa-seedling mr-2"></i>
              <span>Life Coach</span>
            </div>
            <p className="text-gray-400 mb-6">
              Helping you overcome overwhelm and live with purpose.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#FF7A00] transition-colors">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-[#FF7A00] transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-[#FF7A00] transition-colors">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-[#FF7A00] transition-colors">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-400 hover:text-[#FF7A00] transition-colors">Services</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-[#FF7A00] transition-colors">About</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-[#FF7A00] transition-colors">Testimonials</a></li>
              <li><a href="#book" className="text-gray-400 hover:text-[#FF7A00] transition-colors">Book a Session</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-[#FF7A00] transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#FF7A00] transition-colors">Podcast</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#FF7A00] transition-colors">Free Guides</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#FF7A00] transition-colors">Newsletter</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <i className="fas fa-envelope mr-2 text-[#FF7A00]"></i>
                contact@lifecoach.com
              </li>
              <li>
                <i className="fas fa-phone mr-2 text-[#FF7A00]"></i>
                (555) 123-4567
              </li>
              <li>
                <i className="fas fa-map-marker-alt mr-2 text-[#FF7A00]"></i>
                Virtual Sessions Worldwide
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Life Coach. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

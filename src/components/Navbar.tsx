import { Code2 } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo and Brand */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center">
            <img src="src\components\images\codenova_tech_solutions_logo.jpg" alt="" />
          </div>
          <span className="font-semibold text-gray-900">CodeNova Tech Solutions</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-gray-700 hover:text-emerald-500 transition-colors font-medium">
            Features
          </a>
          <a href="#programs" className="text-gray-700 hover:text-emerald-500 transition-colors font-medium">
            Programs
          </a>
          <a href="#about" className="text-gray-700 hover:text-emerald-500 transition-colors font-medium">
            About
          </a>
          <a href="#contact" className="text-gray-700 hover:text-emerald-500 transition-colors font-medium">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    return location.pathname === href;
  };

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-md border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 relative z-10">
            <Logo className="text-3xl" />
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 text-sm font-medium transition-all duration-200 relative ${
                    isActive(item.href)
                      ? "text-indigo-400"
                      : "text-foreground hover:text-indigo-400"
                  }`}
                >
                  {item.name}
                  {isActive(item.href) && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-400 rounded-lg"></div>
                  )}
                </Link>
              ))}
              <Link
                to="/contact"
                className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-4 sm:px-6 py-2 rounded-lg text-xs sm:text-sm font-medium hover:from-indigo-700 hover:to-blue-700 hover:shadow-lg transition-all duration-200 transform hover:scale-105 glow-border"
              >
                Book a Call
              </Link>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-indigo-400 transition-colors duration-200"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
        </div>
      </div>

        {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background/95 backdrop-blur-md border-t border-border">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 text-base font-medium transition-all duration-200 relative ${
                  isActive(item.href)
                      ? "text-indigo-400"
                      : "text-foreground hover:text-indigo-400"
                }`}
              >
                {item.name}
                  {isActive(item.href) && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-400 rounded-lg"></div>
                  )}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
                className="block mt-4 bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:from-indigo-700 hover:to-blue-700 hover:shadow-lg transition-all duration-200 transform hover:scale-105 glow-border text-center"
            >
              Book a Call
            </Link>
          </div>
        </div>
      )}
      </div>
    </nav>
  );
};

export default Navigation;

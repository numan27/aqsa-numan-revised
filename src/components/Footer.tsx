import { Link } from "react-router-dom";
import { Linkedin, Twitter, Instagram, Mail } from "lucide-react";
import Logo from "./Logo";

const Footer = () => {
  const footerLinks = {
    Services: [
      { name: "UI/UX Design", href: "/services" },
      { name: "Career Mentorship", href: "/services" },
      { name: "Job Placement", href: "/services" },
      { name: "B2B Collaboration", href: "/services" },
    ],
    Company: [
      { name: "About", href: "/about" },
      { name: "Portfolio", href: "/portfolio" },
      { name: "Services", href: "/services" },
      { name: "Contact", href: "/contact" },
    ],
    Resources: [
      { name: "Blog", href: "/" },
      { name: "Articles", href: "/" },
      { name: "Speaking", href: "/" },
      { name: "Podcasts", href: "/" },
    ],
  };

  const socialLinks = [
    { name: "LinkedIn", href: "#", icon: Linkedin },
    { name: "Twitter", href: "#", icon: Twitter },
    { name: "Instagram", href: "#", icon: Instagram },
    { name: "Email", href: "mailto:contact@aqsanuman.com", icon: Mail },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Logo variant="footer" />
            <p className="mt-6 text-gray-300 leading-relaxed">
              UI/UX Designer, Community Builder, and Mother of 3. Designing with
              purpose, leading with passion, inspiring through motherhood.
            </p>
            <div className="mt-8 flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-purple-400 hover:bg-gray-700 transition-all duration-200"
                  aria-label={link.name}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-lg font-semibold mb-6 text-white">
                {category}
              </h4>
              <ul className="space-y-4">
                {links.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Aqsa Numan. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a
                href="#"
                className="text-gray-400 hover:text-purple-400 text-sm transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-purple-400 text-sm transition-colors duration-200"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-purple-400 text-sm transition-colors duration-200"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

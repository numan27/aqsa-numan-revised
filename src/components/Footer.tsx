import { Link } from "react-router-dom";
import { Linkedin, Mail, Facebook, MessageCircle } from "lucide-react";
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
    {
      name: "Facebook",
      href: "https://www.facebook.com/share/1Dt1GVd7Qt/?mibextid=wwXIfr",
      icon: Facebook,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/aqsanuman-uxuidesigner?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      icon: Linkedin,
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/923224902181",
      icon: MessageCircle,
    },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="flex flex-col gap-3">
            <Logo variant="footer" className="mb-6" />
            <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">
              UI/UX designer, community builder, and mother of three. Creating
              meaningful digital experiences and empowering the next generation
              of tech professionals.
            </p>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-base sm:text-lg font-semibold text-foreground mb-4">
                {category}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-sm sm:text-base text-muted-foreground hover:text-indigo-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Social Links Section */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-foreground mb-4">
              Connect
            </h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-indigo-400 transition-colors duration-200"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm sm:text-base text-muted-foreground">
              © 2024 Aqsa Numan. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a
                href="#"
                className="text-gray-400 hover:text-indigo-400 text-sm transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-indigo-400 text-sm transition-colors duration-200"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-indigo-400 text-sm transition-colors duration-200"
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

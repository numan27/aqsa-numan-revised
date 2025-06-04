
import { Link } from 'react-router-dom';

const Footer = () => {
  const footerLinks = {
    "Services": [
      { name: "UI/UX Design", href: "/services" },
      { name: "Career Mentorship", href: "/services" }, 
      { name: "Job Placement", href: "/services" },
      { name: "B2B Collaboration", href: "/services" }
    ],
    "Company": [
      { name: "About", href: "/about" },
      { name: "Portfolio", href: "/portfolio" },
      { name: "Services", href: "/services" },
      { name: "Contact", href: "/contact" }
    ],
    "Resources": [
      { name: "Blog", href: "/" }, 
      { name: "Articles", href: "/" },
      { name: "Speaking", href: "/" },
      { name: "Podcasts", href: "/" }
    ]
  };

  const socialLinks = [
    { name: "LinkedIn", href: "#" },
    { name: "Twitter", href: "#" },
    { name: "Behance", href: "#" },
    { name: "Instagram", href: "#" }
  ];

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-1">
            <Link to="/" className="text-2xl font-display font-bold text-purple-400 mb-4 block hover:text-purple-300 transition-colors">
              Aqsa Numan
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed">
              UI/UX Designer, Community Builder, and Mother of 3. Designing with purpose, 
              leading with passion, inspiring through motherhood.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href} 
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-lg font-semibold mb-4 text-white">{category}</h4>
              <ul className="space-y-2">
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
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Aqsa Numan. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-purple-400 text-sm transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 text-sm transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 text-sm transition-colors duration-200">
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

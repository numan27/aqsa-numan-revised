
const Footer = () => {
  const footerLinks = {
    "Services": [
      "UI/UX Design",
      "Career Mentorship", 
      "Job Placement",
      "B2B Collaboration"
    ],
    "Communities": [
      "Tech CEO Hub",
      "92 Tech Talent",
      "IxDF Lahore",
      "Friends of Figma"
    ],
    "Resources": [
      "Blog", 
      "Articles",
      "Speaking",
      "Podcasts"
    ]
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold text-purple-400 mb-4">Aqsa Numan</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              UI/UX Designer, Community Builder, and Mother of 3. Designing with purpose, 
              leading with passion, inspiring through motherhood.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                Twitter
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                Behance
              </a>
            </div>
          </div>
          
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-lg font-semibold mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                      {link}
                    </a>
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
              <a href="#" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">
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

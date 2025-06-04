
import { Link } from 'react-router-dom';

const Hero = () => {
  const partnerLogos = [
    "Tech CEO Hub",
    "92 Tech Talent", 
    "IxDF Lahore",
    "Friends of Figma"
  ];

  return (
    <section className="pt-32 pb-16 bg-gradient-to-br from-purple-50 via-white to-pink-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-6 animate-fade-in">
            <span className="inline-block px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-medium mb-4">
              UI/UX Designer • Community Builder • Mother of 3
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold text-gray-900 mb-6 leading-tight animate-slide-up">
            Designing with
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 block">
              Purpose
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed animate-fade-in font-sans">
            Leading with Passion. Inspiring through Motherhood. I help working moms, designers, 
            and tech professionals thrive by blending creativity, community, and compassion.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-up">
            <Link 
              to="/contact"
              className="bg-purple-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Book a Strategy Call
            </Link>
            <Link 
              to="/portfolio"
              className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full text-lg font-medium hover:bg-purple-600 hover:text-white transition-all duration-200 transform hover:scale-105"
            >
              View My Work
            </Link>
          </div>
          
          <div className="mt-16 animate-fade-in">
            <p className="text-sm text-gray-500 mb-6 uppercase tracking-wider font-medium">Trusted by leading communities</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {partnerLogos.map((logo, index) => (
                <div key={index} className="text-gray-600 font-medium text-lg hover:opacity-80 transition-opacity">
                  {logo}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float animation-delay-2000"></div>
      </div>
    </section>
  );
};

export default Hero;

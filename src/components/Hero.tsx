
const Hero = () => {
  const partnerLogos = [
    "Tech CEO Hub",
    "92 Tech Talent", 
    "IxDF Lahore",
    "Friends of Figma"
  ];

  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-medium mb-4">
              UI/UX Designer • Community Builder • Mother of 3
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Designing with
            <span className="text-purple-600 block">Purpose</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Leading with Passion. Inspiring through Motherhood. I help working moms, designers, 
            and tech professionals thrive by blending creativity, community, and compassion.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="bg-purple-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-purple-700 transition-all duration-200 transform hover:scale-105">
              Book a Strategy Call
            </button>
            <button className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full text-lg font-medium hover:bg-purple-600 hover:text-white transition-all duration-200 transform hover:scale-105">
              View My Work
            </button>
          </div>
          
          <div className="mt-16">
            <p className="text-sm text-gray-500 mb-6 uppercase tracking-wider">Trusted by leading communities</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {partnerLogos.map((logo, index) => (
                <div key={index} className="text-gray-600 font-medium text-lg">
                  {logo}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

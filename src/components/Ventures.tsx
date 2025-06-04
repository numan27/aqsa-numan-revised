
const Ventures = () => {
  const ventures = [
    {
      title: "UI/UX Bootcamp Platform",
      description: "An innovative learning platform designed to transform beginners into job-ready UI/UX designers through hands-on projects and live mentorship.",
      status: "In Development",
      image: "photo-1518770660439-4636190af475"
    },
    {
      title: "Tech Talent Marketplace",
      description: "A curated platform connecting vetted tech professionals with startup opportunities, focusing on quality matches over quantity.",
      status: "Beta Testing",
      image: "photo-1486312338219-ce68d2c6f44d"
    },
    {
      title: "Working Mom's Design Studio",
      description: "A collective of talented mother-designers offering flexible, high-quality design services to startups and growing businesses.",
      status: "Planning Phase",
      image: "photo-1581091226825-a6a2a5aee158"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ventures I'm Building
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Innovative projects aimed at empowering the next generation of designers and tech professionals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ventures.map((venture, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="h-48 bg-gradient-to-br from-purple-400 to-pink-400 relative overflow-hidden">
                <img 
                  src={`https://images.unsplash.com/${venture.image}?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250&q=80`}
                  alt={venture.title}
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-white/90 text-purple-600 rounded-full text-sm font-medium">
                    {venture.status}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {venture.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {venture.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ventures;


const Speaking = () => {
  const speakingEngagements = [
    {
      title: "Design Systems for Startups",
      event: "ProductCon 2023",
      audience: "500+ Attendees",
      description: "How to build scalable design systems that grow with your startup"
    },
    {
      title: "Balancing Motherhood & Career",
      event: "Women in Tech Summit",
      audience: "300+ Attendees", 
      description: "Practical strategies for working mothers in demanding tech roles"
    },
    {
      title: "Community Building in Tech",
      event: "Startup Grind Lahore",
      audience: "200+ Attendees",
      description: "Building authentic communities that drive real business value"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Speaking & Talks
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sharing insights on design, leadership, and entrepreneurship at conferences 
            and events around the world.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {speakingEngagements.map((engagement, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {engagement.title}
              </h3>
              <p className="text-purple-600 font-medium mb-2">{engagement.event}</p>
              <p className="text-sm text-gray-500 mb-4">{engagement.audience}</p>
              <p className="text-gray-600 leading-relaxed">
                {engagement.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Book Me for Your Event
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            I speak on topics including UI/UX design, community building, entrepreneurship, 
            and work-life balance for working mothers in tech.
          </p>
          <button className="bg-purple-600 text-white px-8 py-3 rounded-full font-medium hover:bg-purple-700 transition-colors duration-200">
            Request Speaking
          </button>
        </div>
      </div>
    </section>
  );
};

export default Speaking;

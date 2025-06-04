
const Community = () => {
  const communities = [
    {
      title: "Tech CEO Hub",
      description: "A curated WhatsApp group for startup founders and tech leaders. Collaborate, share, and grow together.",
      members: "150+ CEOs",
      type: "Private Group",
      link: "Join Tech CEO Hub"
    },
    {
      title: "92 Tech Talent",
      description: "A job-focused community that helps tech professionals find real, vetted opportunities.",
      members: "2000+ Members",
      type: "Job Community",
      link: "Join Community"
    },
    {
      title: "IxDF Lahore",
      description: "Leading the Lahore chapter of the Interaction Design Foundation. Hosting events and collaborative design sessions.",
      members: "500+ Designers",
      type: "Local Chapter",
      link: "Join Chapter"
    }
  ];

  return (
    <section id="community" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Communities I Lead
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building bridges and creating opportunities through thoughtfully curated professional communities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {communities.map((community, index) => (
            <div key={index} className="p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="mb-4">
                <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-medium">
                  {community.type}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {community.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {community.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500 font-medium">
                  {community.members}
                </span>
                <button className="bg-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-purple-700 transition-colors duration-200">
                  {community.link}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Community;

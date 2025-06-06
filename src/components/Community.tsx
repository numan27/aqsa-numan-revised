
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
    <section id="community" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
            Communities I Lead
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light">
            Building bridges and creating opportunities through thoughtfully curated professional communities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {communities.map((community, index) => (
            <div key={index} className="animated-border rounded-md p-8 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group">
              <div className="mb-4">
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-md text-sm font-light border border-purple-500/30">
                  {community.type}
                </span>
              </div>
              <h3 className="text-2xl font-normal text-foreground mb-4 group-hover:text-purple-400 transition-colors">
                {community.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed font-light">
                {community.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground font-light">
                  {community.members}
                </span>
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-md text-sm font-light transition-all duration-200 transform hover:scale-105 glow-border">
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

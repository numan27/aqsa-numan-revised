const Podcasts = () => {
  const podcastAppearances = [
    {
      title: "Design Thinking for Startups",
      podcast: "The UX Podcast",
      duration: "45 min",
      topic: "How startups can implement user-centered design on a budget",
    },
    {
      title: "Building Tech Communities",
      podcast: "Startup Stories",
      duration: "30 min",
      topic: "Strategies for creating engaged professional communities",
    },
    {
      title: "Working Mom in Tech",
      podcast: "Women Who Code",
      duration: "40 min",
      topic: "Navigating career growth while raising three children",
    },
  ];

  return (
    <section className="py-8 sm:py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-foreground mb-6">
            Podcast Appearances
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto">
            Sharing insights and stories on design, leadership, and community
            building through podcast conversations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {podcastAppearances.map((appearance, index) => (
            <div
              key={index}
              className="animated-border rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-lg text-sm font-medium border border-indigo-500/30">
                  {appearance.duration}
                </span>
                <button className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-8 py-2 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 glow-border">
                  Listen Now
                </button>
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-foreground mb-2 group-hover:text-indigo-400 transition-colors">
                {appearance.title}
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground mb-4">
                {appearance.topic}
              </p>
            </div>
          ))}
        </div>

        {/* <div className="animated-border rounded-2xl p-8 text-center">
                          <h3 className="text-xl font-bold text-foreground mb-4">
            Invite Me to Your Podcast
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            I'd love to share my story and insights with your audience. Topics I
            discuss include design, entrepreneurship, community building, and
            work-life balance.
          </p>
          <button className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 glow-border">
            Podcast Inquiry
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default Podcasts;

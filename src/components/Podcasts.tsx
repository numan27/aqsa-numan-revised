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
    <section className="py-4 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Podcast Appearances
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Sharing my journey and insights on popular podcasts in the design
            and tech space.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {podcastAppearances.map((appearance, index) => (
            <div
              key={index}
              className="animated-border rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-lg text-sm font-medium border border-purple-500/30">
                  {appearance.duration}
                </span>
                <button className="text-purple-400 hover:text-purple-300 transition-colors">
                  ▶ Play
                </button>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-purple-400 transition-colors">
                {appearance.title}
              </h3>
              <p className="text-purple-400 font-medium mb-3">
                {appearance.podcast}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {appearance.topic}
              </p>
            </div>
          ))}
        </div>

        <div className="animated-border rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Invite Me to Your Podcast
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            I'd love to share my story and insights with your audience. Topics I
            discuss include design, entrepreneurship, community building, and
            work-life balance.
          </p>
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 glow-border">
            Podcast Inquiry
          </button>
        </div>
      </div>
    </section>
  );
};

export default Podcasts;

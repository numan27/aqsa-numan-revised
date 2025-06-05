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
    <section className="py-4 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Podcast Appearances
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sharing my journey and insights on popular podcasts in the design
            and tech space.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {podcastAppearances.map((appearance, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-medium">
                  {appearance.duration}
                </span>
                <button className="text-purple-600 hover:text-purple-700">
                  ▶ Play
                </button>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {appearance.title}
              </h3>
              <p className="text-purple-600 font-medium mb-3">
                {appearance.podcast}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {appearance.topic}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Invite Me to Your Podcast
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            I'd love to share my story and insights with your audience. Topics I
            discuss include design, entrepreneurship, community building, and
            work-life balance.
          </p>
          <button className="bg-purple-600 text-white px-8 py-3 rounded-full font-medium hover:bg-purple-700 transition-colors duration-200">
            Podcast Inquiry
          </button>
        </div>
      </div>
    </section>
  );
};

export default Podcasts;

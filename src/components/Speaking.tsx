const Speaking = () => {
  const speakingEngagements = [
    {
      title: "Community Building in Tech",
      event: "Startup Grind Lahore",
      audience: "200+ Attendees",
      description:
        "Building authentic communities that drive real business value",
      media: "author-video-1",
      type: "video",
    },
    {
      title: "UI/UX Design Fundamentals",
      event: "Design Week Pakistan",
      audience: "150+ Attendees",
      description:
        "Essential principles and practices for creating effective user interfaces",
      media: "author-img-1",
      type: "image",
    },
    {
      title: "Tech Career Navigation",
      event: "Tech Career Summit",
      audience: "300+ Attendees",
      description:
        "Strategies for building and advancing your career in the tech industry",
      media: "author-video-2",
      type: "video",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Speaking & Talks
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sharing insights on design, leadership, and entrepreneurship at
            conferences and events around the world.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 mb-12">
          {speakingEngagements.map((engagement, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Media Container */}
                <div className="relative aspect-video overflow-hidden bg-gray-100">
                  {engagement.type === "video" ? (
                    <div className="relative w-full h-full">
                      <video
                        className="w-full h-full object-cover"
                        src={`/${engagement.media}.mp4`}
                        controls
                        playsInline
                      />
                    </div>
                  ) : (
                    <img
                      src={`/${engagement.media}.jpeg`}
                      alt={engagement.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold text-gray-900">
                      {engagement.title}
                    </h3>
                    <p className="text-purple-600 font-medium">
                      {engagement.event}
                    </p>
                    <p className="text-sm text-gray-500">
                      {engagement.audience}
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      {engagement.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Video Section */}
        <div className="mt-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative aspect-video bg-gray-100">
              <video
                className="w-full h-full object-cover"
                src="/author-video-3.mp4"
                controls
                playsInline
              />
            </div>
            <div className="p-8 md:p-12 text-white">
              <h3 className="text-3xl font-bold mb-4">
                Featured Talk: Design Leadership
              </h3>
              <p className="text-lg text-purple-100 mb-6">
                Watch my keynote speech at the International Design Conference
                where I share insights on building and leading successful design
                teams.
              </p>
              <div className="flex items-center gap-4">
                <span className="px-4 py-2 bg-white/20 rounded-full text-sm">
                  45 min • Keynote
                </span>
                <span className="px-4 py-2 bg-white/20 rounded-full text-sm">
                  500+ Attendees
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Book Me for Your Event
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            I speak on topics including UI/UX design, community building, and
            entrepreneurship.
          </p>
          <button className="bg-purple-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Request Speaking
          </button>
        </div>
      </div>
    </section>
  );
};

export default Speaking;

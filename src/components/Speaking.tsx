const Speaking = () => {
  const speakingEngagements = [
    {
      title: "UI/UX Design Masterclass",
      event: "Design Week Pakistan",
      audience: "150+ Attendees",
      description:
        "A comprehensive workshop on modern UI/UX design principles and practical implementation strategies.",
      media: "author-video-1",
      type: "video",
      duration: "45 min",
    },
    {
      title: "Career Growth in Tech",
      event: "Tech Career Summit",
      audience: "300+ Attendees",
      description:
        "Insights on navigating career progression in the tech industry and building a sustainable professional path.",
      media: "author-img-1",
      type: "image",
      duration: "30 min",
    },
    {
      title: "Design Leadership",
      event: "International Design Conference",
      audience: "500+ Attendees",
      description:
        "Strategies for leading design teams effectively while maintaining work-life balance and team productivity.",
      media: "author-video-2",
      type: "video",
      duration: "60 min",
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Speaking & Talks
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Sharing expertise and insights on design, leadership, and career
            development at industry events and conferences.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 mb-12">
          {speakingEngagements.map((engagement, index) => (
            <div
              key={index}
              className="group animated-border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center p-1">
                {/* Media Container */}
                <div className="relative aspect-[9/16] md:aspect-[3/4] overflow-hidden bg-muted rounded-xl">
                  {engagement.type === "video" ? (
                    <div className="relative w-full h-full">
                      <video
                        className="w-full h-full object-cover"
                        src={`/${engagement.media}.mp4`}
                        controls
                        playsInline
                      />
                      <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-lg text-sm">
                        {engagement.duration}
                      </div>
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
                    <div className="flex items-center gap-3">
                      <h3 className="text-2xl font-semibold text-foreground group-hover:text-purple-400 transition-colors">
                        {engagement.title}
                      </h3>
                      {engagement.type === "video" && (
                        <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-lg text-sm border border-purple-500/30">
                          Video
                        </span>
                      )}
                    </div>
                    <p className="text-purple-400 font-medium">
                      {engagement.event}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {engagement.audience}
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      {engagement.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Video Section */}
        <div className="mt-20 animated-border rounded-3xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 items-center p-1">
            <div className="relative aspect-[9/16] md:aspect-[3/4] bg-muted rounded-2xl overflow-hidden">
              <video
                className="w-full h-full object-cover"
                src="/author-video-3.mp4"
                controls
                playsInline
              />
              <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-lg text-sm">
                45 min
              </div>
            </div>
            <div className="p-8 md:p-12 text-foreground">
              <h3 className="text-3xl font-bold mb-4">
                Featured Talk: Design Leadership
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Watch my keynote speech at the International Design Conference
                where I share insights on building and leading successful design
                teams.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <span className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-lg text-sm border border-purple-500/30">
                  45 min • Keynote
                </span>
                <span className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-lg text-sm border border-purple-500/30">
                  500+ Attendees
                </span>
                <span className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-lg text-sm border border-purple-500/30">
                  International Conference
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Invite Me to Speak
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm available for speaking engagements, workshops, and panel
            discussions on design, leadership, and career development.
          </p>
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 glow-border">
            Speaking Inquiry
          </button>
        </div>
      </div>
    </section>
  );
};

export default Speaking;

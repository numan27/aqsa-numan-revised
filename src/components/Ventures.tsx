const Ventures = () => {
  const ventures = [
    {
      title: "DevArtVentures",
      description:
        "A comprehensive web development agency specializing in custom websites, UI/UX design, and digital marketing solutions. We transform ideas into stunning web realities with cutting-edge technologies like React, Next.js, and WordPress.",
      status: "Active",
      image: "photo-1460925895917-afdab827c52f",
      link: "https://devartventures.com",
      ctaText: "Visit Website",
    },
    {
      title: "Training & Bootcamps",
      description:
        "Comprehensive UI/UX bootcamps and training programs designed to transform beginners into job-ready designers through hands-on projects, live mentorship, and real-world case studies.",
      status: "Coming Soon",
      image: "photo-1518770660439-4636190af475",
      link: "/contact",
      ctaText: "Get Early Access",
    },
    {
      title: "92 Talent Acquisition",
      description:
        "Professional talent acquisition and placement services connecting skilled tech professionals with relevant industry opportunities. We specialize in UI/UX designers, developers, and tech professionals across various sectors.",
      status: "Active",
      image: "photo-1486312338219-ce68d2c6f44d",
      link: "/contact",
      ctaText: "Hire Talent",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
            Ventures I'm Building
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light">
            Innovative projects aimed at empowering the next generation of
            designers and tech professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ventures.map((venture, index) => (
            <div
              key={index}
              className="animated-border rounded-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group flex flex-col h-full"
            >
              <div className="h-48 bg-gradient-to-br from-purple-400 to-pink-400 relative overflow-hidden">
                <img
                  src={`https://images.unsplash.com/${venture.image}?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250&q=80`}
                  alt={venture.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <span className="px-4 py-2 bg-purple-500/30 text-purple-200 rounded-lg text-base font-medium border border-purple-500/50 shadow-lg backdrop-blur-sm">
                    {venture.status}
                  </span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-normal text-foreground mb-3 group-hover:text-purple-400 transition-colors">
                  {venture.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed font-light mb-6 flex-grow">
                  {venture.description}
                </p>
                <a
                  href={venture.link}
                  target={venture.link.startsWith("http") ? "_blank" : "_self"}
                  rel={
                    venture.link.startsWith("http") ? "noopener noreferrer" : ""
                  }
                  className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl mt-auto"
                >
                  {venture.ctaText}
                  {venture.link.startsWith("http") && (
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  )}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ventures;

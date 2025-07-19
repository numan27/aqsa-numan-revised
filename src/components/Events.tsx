const Events = () => {
  const upcomingEvents = [
    {
      title: "Design Leadership Workshop",
      date: "March 15, 2024",
      type: "Workshop",
      location: "Lahore",
      description:
        "Learn how to lead design teams effectively while balancing work and life priorities.",
    },
    {
      title: "Tech CEO Networking Meetup",
      date: "March 22, 2024",
      type: "Networking",
      location: "Virtual",
      description:
        "Monthly gathering of startup founders and tech leaders for collaboration and growth.",
    },
    {
      title: "Women in Tech Panel",
      date: "April 5, 2024",
      type: "Panel Discussion",
      location: "Karachi",
      description:
        "Inspiring discussion on breaking barriers and building successful tech careers.",
    },
  ];

  return (
    <section id="events" className="py-8 sm:py-12 md:py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-foreground mb-6">
            Upcoming Events
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto">
            Join me at upcoming events, workshops, and speaking engagements
            where I share insights and connect with the community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {upcomingEvents.map((event, index) => (
            <div
              key={index}
              className="animated-border rounded-2xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-lg text-sm font-medium border border-indigo-500/30">
                  {event.type}
                </span>
                <span className="text-sm text-muted-foreground">
                  {event.location}
                </span>
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-foreground mb-2 group-hover:text-indigo-400 transition-colors">
                {event.title}
              </h3>
              <p className="text-indigo-400 font-medium mb-3">{event.date}</p>
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground mb-4 leading-relaxed">
                {event.description}
              </p>
              <button className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-8 py-2 rounded-lg font-medium hover:from-indigo-700 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-1">
                Register Now
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-8 py-2 rounded-lg font-medium hover:from-indigo-700 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-1">
            View All Events
          </button>
        </div>
      </div>
    </section>
  );
};

export default Events;

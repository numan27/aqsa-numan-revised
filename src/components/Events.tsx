
const Events = () => {
  const upcomingEvents = [
    {
      title: "Design Leadership Workshop",
      date: "March 15, 2024",
      type: "Workshop",
      location: "Lahore",
      description: "Learn how to lead design teams effectively while balancing work and life priorities."
    },
    {
      title: "Tech CEO Networking Meetup",
      date: "March 22, 2024", 
      type: "Networking",
      location: "Virtual",
      description: "Monthly gathering of startup founders and tech leaders for collaboration and growth."
    },
    {
      title: "Women in Tech Panel",
      date: "April 5, 2024",
      type: "Panel Discussion",
      location: "Karachi",
      description: "Inspiring discussion on breaking barriers and building successful tech careers."
    }
  ];

  return (
    <section id="events" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Upcoming Events
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join me at workshops, meetups, and speaking engagements designed to inspire 
            and empower the tech community.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {upcomingEvents.map((event, index) => (
            <div key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-medium">
                  {event.type}
                </span>
                <span className="text-sm text-gray-500">{event.location}</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {event.title}
              </h3>
              <p className="text-purple-600 font-medium mb-3">{event.date}</p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {event.description}
              </p>
              <button className="w-full bg-purple-600 text-white py-2 rounded-full font-medium hover:bg-purple-700 transition-colors duration-200">
                Register Now
              </button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-full font-medium hover:bg-purple-600 hover:text-white transition-all duration-200">
            View All Events
          </button>
        </div>
      </div>
    </section>
  );
};

export default Events;

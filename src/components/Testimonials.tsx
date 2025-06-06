
const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Ahmed",
      role: "UX Designer at Tech Startup",
      content: "Aqsa's mentorship was instrumental in helping me transition from marketing to UX design. Her practical guidance and industry connections made all the difference.",
      image: "photo-1582562124811-c09040d0a901"
    },
    {
      name: "Muhammad Ali",
      role: "Frontend Developer",
      content: "Through Aqsa's job placement program, I landed my dream role at a top tech company. Her support throughout the interview process was invaluable.",
      image: "photo-1721322800607-8c38375eef04" 
    },
    {
      name: "Fatima Khan",
      role: "Startup Founder",
      content: "The Tech CEO Hub community that Aqsa leads has been a game-changer for my startup. The connections and insights I've gained are priceless.",
      image: "photo-1649972904349-6e44c42644a7"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            What People Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real stories from professionals who've transformed their careers with my guidance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="animated-border rounded-2xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group">
              <div className="flex items-center mb-4">
                <img 
                  src={`https://images.unsplash.com/${testimonial.image}?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80`}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-foreground group-hover:text-purple-400 transition-colors">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed italic">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

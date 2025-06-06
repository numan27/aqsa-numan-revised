
const Services = () => {
  const services = [
    {
      title: "UI/UX Design Services",
      description: "User-first, conversion-driven designs that balance aesthetics with function — for startups, SaaS platforms, and mobile apps.",
      features: ["User Journey Mapping", "Pixel-Perfect UI Design", "Prototyping & Testing", "Design Systems"],
      price: "Custom Pricing",
      highlight: false
    },
    {
      title: "UI/UX Bootcamp",
      description: "A hands-on bootcamp built for beginners and career switchers. Learn UI/UX with real-world case studies and live mentorship.",
      features: ["Real-World Case Studies", "Live Mentorship", "Job-Ready Projects", "Portfolio Development"],
      price: "Coming Soon",
      highlight: true
    },
    {
      title: "Job Acquisition Support", 
      description: "Tailored support to help you secure jobs in the design and tech industry. You only pay when you win.",
      features: ["CV/Portfolio Review", "Interview Preparation", "Salary Negotiation", "Job Matching"],
      price: "Success-Based Fees",
      highlight: false
    },
    {
      title: "B2B Tech Collaboration",
      description: "I connect founders, tech teams, designers, and vendors based on market trends and real needs.",
      features: ["Partner Matching", "Vendor Selection", "Team Scaling", "Strategic Partnerships"],
      price: "Consultation Required",
      highlight: false
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Services I Offer
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From design to career guidance, I provide comprehensive support to help you 
            achieve your professional goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className={`animated-border rounded-2xl p-8 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group ${service.highlight ? 'bg-gradient-to-br from-purple-600 to-pink-600' : ''}`}>
              {service.highlight && (
                <div className="inline-block px-3 py-1 bg-white/20 text-white rounded-full text-sm font-medium mb-4">
                  Featured
                </div>
              )}
              <h3 className={`text-2xl font-bold mb-4 group-hover:text-purple-400 transition-colors ${service.highlight ? 'text-white' : 'text-foreground'}`}>
                {service.title}
              </h3>
              <p className={`mb-6 leading-relaxed ${service.highlight ? 'text-purple-100' : 'text-muted-foreground'}`}>
                {service.description}
              </p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className={`flex items-center ${service.highlight ? 'text-purple-100' : 'text-muted-foreground'}`}>
                    <span className={`w-2 h-2 rounded-full mr-3 ${service.highlight ? 'bg-white' : 'bg-purple-600'}`}></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-between">
                <span className={`font-semibold ${service.highlight ? 'text-white' : 'text-purple-400'}`}>
                  {service.price}
                </span>
                <button className={`px-6 py-2 rounded-full font-medium transition-all duration-200 glow-border ${service.highlight ? 'bg-white text-purple-600 hover:bg-gray-100' : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:scale-105'}`}>
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

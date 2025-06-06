
const CallToAction = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
          Ready to Build Something Beautiful?
        </h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto font-light">
          Whether you're designing a product, changing careers, building a company, or raising little humans — 
          you deserve support, clarity, and community. Let's build something beautiful... together.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="animated-border rounded-md p-6 hover:shadow-lg transition-all duration-300 group">
            <h3 className="text-lg font-normal text-foreground mb-2 group-hover:text-purple-400 transition-colors">Strategy Call</h3>
            <p className="text-muted-foreground text-sm mb-4 font-light">60-minute deep dive into your goals and challenges</p>
            <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-md font-light transition-all duration-200 transform hover:scale-105 glow-border">
              Book Now
            </button>
          </div>
          <div className="animated-border rounded-md p-6 hover:shadow-lg transition-all duration-300 group">
            <h3 className="text-lg font-normal text-foreground mb-2 group-hover:text-purple-400 transition-colors">Quick Chat</h3>
            <p className="text-muted-foreground text-sm mb-4 font-light">15-minute intro call to explore how I can help</p>
            <button className="w-full border-2 border-purple-600 text-purple-400 py-3 rounded-md font-light hover:bg-purple-600 hover:text-white transition-all duration-200">
              Schedule
            </button>
          </div>
          <div className="animated-border rounded-md p-6 hover:shadow-lg transition-all duration-300 group">
            <h3 className="text-lg font-normal text-foreground mb-2 group-hover:text-purple-400 transition-colors">WhatsApp</h3>
            <p className="text-muted-foreground text-sm mb-4 font-light">Send me a message directly for quick questions</p>
            <button className="w-full bg-green-600 text-white py-3 rounded-md font-light hover:bg-green-700 transition-colors duration-200">
              Chat Now
            </button>
          </div>
        </div>
        
        <div className="animated-border rounded-md p-8 hover:shadow-lg transition-all duration-300">
          <h3 className="text-2xl font-normal text-foreground mb-4">Get in Touch</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-muted-foreground font-light">Email</p>
              <p className="text-purple-400 font-light">hello@aqsanuman.com</p>
            </div>
            <div>
              <p className="text-muted-foreground font-light">Location</p>
              <p className="text-foreground font-light">Lahore — Available Globally</p>
            </div>
            <div>
              <p className="text-muted-foreground font-light">Response Time</p>
              <p className="text-foreground font-light">Within 24 hours</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;

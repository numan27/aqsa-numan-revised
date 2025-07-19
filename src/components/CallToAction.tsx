const CallToAction = () => {
  return (
    <section id="contact" className="py-8 sm:py-12 md:py-16 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light text-foreground mb-6">
          Ready to Elevate Your Design Journey?
        </h2>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto font-light">
          Whether you're looking to enhance your design skills, advance your
          career, or improve your digital products, I'm here to help you achieve
          your goals with expert guidance and support.
        </p>

        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="animated-border rounded-md p-6 hover:shadow-lg transition-all duration-300 group">
            <h3 className="text-lg font-normal text-foreground mb-2 group-hover:text-indigo-400 transition-colors">
              Design Consultation
            </h3>
            <p className="text-muted-foreground text-sm mb-4 font-light">
              60-minute session to discuss your design needs and goals
            </p>
            <button className="w-full bg-indigo-600 text-white py-3 rounded-md font-light transition-all duration-200 transform hover:scale-105 glow-border hover:bg-indigo-700">
              Book Now
            </button>
          </div>
          <div className="animated-border rounded-md p-6 hover:shadow-lg transition-all duration-300 group">
            <h3 className="text-lg font-normal text-foreground mb-2 group-hover:text-indigo-400 transition-colors">
              Career Guidance
            </h3>
            <p className="text-muted-foreground text-sm mb-4 font-light">
              30-minute session to explore your career development path
            </p>
            <button className="w-full border-2 border-indigo-600 text-indigo-400 py-3 rounded-md font-light hover:bg-indigo-600 hover:text-white transition-all duration-200">
              Schedule
            </button>
          </div>
          <div className="animated-border rounded-md p-6 hover:shadow-lg transition-all duration-300 group">
            <h3 className="text-lg font-normal text-foreground mb-2 group-hover:text-indigo-400 transition-colors">
              Quick Support
            </h3>
            <p className="text-muted-foreground text-sm mb-4 font-light">
              Get answers to your questions through our support channel
            </p>
            <button className="w-full bg-green-600 text-white py-3 rounded-md font-light hover:bg-green-700 transition-colors duration-200">
              Contact Support
            </button>
          </div>
        </div> */}

        <div className="animated-border rounded-md p-8 hover:shadow-lg transition-all duration-300">
          <h3 className="text-xl font-normal text-foreground mb-4">
            Get in Touch
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-muted-foreground font-light">Email</p>
              <a
                href="mailto:hello@aqsanuman.com"
                className="text-indigo-400 font-light hover:text-indigo-300 transition-colors"
              >
                hello@aqsanuman.com
              </a>
            </div>
            <div>
              <p className="text-muted-foreground font-light">Location</p>
              <p className="text-foreground font-light">
                Lahore — Available Globally
              </p>
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

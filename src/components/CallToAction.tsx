
const CallToAction = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Ready to Build Something Beautiful?
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Whether you're designing a product, changing careers, building a company, or raising little humans — 
          you deserve support, clarity, and community. Let's build something beautiful... together.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 bg-white rounded-2xl shadow-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Strategy Call</h3>
            <p className="text-gray-600 text-sm mb-4">60-minute deep dive into your goals and challenges</p>
            <button className="w-full bg-purple-600 text-white py-3 rounded-full font-medium hover:bg-purple-700 transition-colors duration-200">
              Book Now
            </button>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Quick Chat</h3>
            <p className="text-gray-600 text-sm mb-4">15-minute intro call to explore how I can help</p>
            <button className="w-full border-2 border-purple-600 text-purple-600 py-3 rounded-full font-medium hover:bg-purple-600 hover:text-white transition-all duration-200">
              Schedule
            </button>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">WhatsApp</h3>
            <p className="text-gray-600 text-sm mb-4">Send me a message directly for quick questions</p>
            <button className="w-full bg-green-600 text-white py-3 rounded-full font-medium hover:bg-green-700 transition-colors duration-200">
              Chat Now
            </button>
          </div>
        </div>
        
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Get in Touch</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-gray-600 font-medium">Email</p>
              <p className="text-purple-600">hello@aqsanuman.com</p>
            </div>
            <div>
              <p className="text-gray-600 font-medium">Location</p>
              <p className="text-gray-700">Lahore — Available Globally</p>
            </div>
            <div>
              <p className="text-gray-600 font-medium">Response Time</p>
              <p className="text-gray-700">Within 24 hours</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;

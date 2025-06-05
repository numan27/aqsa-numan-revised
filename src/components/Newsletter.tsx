const Newsletter = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-600 to-pink-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Stay Connected
        </h2>
        <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
          Get weekly insights on design, career growth, and building success in
          tech. Plus exclusive updates on my latest ventures and opportunities.
        </p>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 mb-8">
          <h3 className="text-2xl font-semibold text-white mb-4">
            What You'll Get:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            <ul className="space-y-2">
              <li className="flex items-center text-purple-100">
                <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                Weekly design tips and resources
              </li>
              <li className="flex items-center text-purple-100">
                <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                Career growth strategies
              </li>
              <li className="flex items-center text-purple-100">
                <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                Job opportunities and collaborations
              </li>
            </ul>
            <ul className="space-y-2">
              <li className="flex items-center text-purple-100">
                <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                Community event invitations
              </li>
              <li className="flex items-center text-purple-100">
                <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                Behind-the-scenes content
              </li>
              <li className="flex items-center text-purple-100">
                <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                Exclusive discounts and early access
              </li>
            </ul>
          </div>
        </div>

        <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 px-6 py-4 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <button
            type="submit"
            className="bg-white text-purple-600 px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105"
          >
            Subscribe
          </button>
        </form>

        <p className="text-purple-200 text-sm mt-4">
          Join 2,500+ professionals. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;

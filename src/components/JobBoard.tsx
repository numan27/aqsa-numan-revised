
const JobBoard = () => {
  const jobCategories = [
    { category: "UI/UX Design", count: "25+ Jobs", color: "bg-purple-100 text-purple-600" },
    { category: "Frontend Development", count: "30+ Jobs", color: "bg-blue-100 text-blue-600" },
    { category: "Product Management", count: "15+ Jobs", color: "bg-green-100 text-green-600" },
    { category: "Marketing", count: "20+ Jobs", color: "bg-pink-100 text-pink-600" }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Job Board
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Curated opportunities from vetted companies. Quality over quantity, 
            with personalized support to help you land the right role.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {jobCategories.map((category, index) => (
            <div key={index} className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-3 ${category.color}`}>
                {category.count}
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                {category.category}
              </h3>
            </div>
          ))}
        </div>
        
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Get Personalized Job Support
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our success-based fee structure means you only pay when you get hired. 
                I'm invested in your success, not just applications.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                  50% of first salary for roles above PKR 100K
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                  30% of first salary for roles PKR 50K–100K
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                  Free service for roles under PKR 50K
                </li>
              </ul>
            </div>
            <div className="text-center lg:text-right">
              <button className="bg-purple-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-purple-700 transition-all duration-200 transform hover:scale-105">
                Start Job Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobBoard;

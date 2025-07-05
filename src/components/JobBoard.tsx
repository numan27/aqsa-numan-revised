const JobBoard = () => {
  const jobCategories = [
    {
      category: "UI/UX Design",
      count: "25+ Jobs",
    },
    {
      category: "Frontend Development",
      count: "30+ Jobs",
    },
    {
      category: "Product Management",
      count: "15+ Jobs",
    },
    {
      category: "Marketing",
      count: "20+ Jobs",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Job Board
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Curated opportunities from vetted companies. Quality over quantity,
            with personalized support to help you land the right role.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {jobCategories.map((category, index) => (
            <div
              key={index}
              className="animated-border rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="inline-block px-3 py-1 rounded-full text-sm font-medium mb-3 border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                {category.count}
              </div>
              <h3 className="text-xl font-semibold text-foreground group-hover:text-gray-800 dark:group-hover:text-white transition-colors">
                {category.category}
              </h3>
            </div>
          ))}
        </div>

        <div className="animated-border rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Get Personalized Job Support
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our success-based fee structure means you only pay when you get
                hired. I'm invested in your success, not just applications.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-muted-foreground">
                  <span className="w-2 h-2 bg-gray-600 dark:bg-gray-400 rounded-lg mr-3"></span>
                  50% of first salary for roles above PKR 100K
                </li>
                <li className="flex items-center text-muted-foreground">
                  <span className="w-2 h-2 bg-gray-600 dark:bg-gray-400 rounded-lg mr-3"></span>
                  30% of first salary for roles PKR 50K–100K
                </li>
                <li className="flex items-center text-muted-foreground">
                  <span className="w-2 h-2 bg-gray-600 dark:bg-gray-400 rounded-lg mr-3"></span>
                  Free service for roles under PKR 50K
                </li>
              </ul>
            </div>
            <div className="text-center lg:text-right">
              <button className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-8 py-4 rounded-lg text-lg font-medium transition-all duration-200 transform hover:scale-105 hover:bg-gray-800 dark:hover:bg-gray-100">
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

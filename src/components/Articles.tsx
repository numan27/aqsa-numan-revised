const Articles = () => {
  const articles = [
    {
      title: "The Future of Remote Design Teams",
      publication: "UX Magazine",
      date: "January 2024",
      description:
        "How distributed design teams are reshaping the industry landscape.",
    },
    {
      title: "Design Thinking for Social Impact",
      publication: "Fast Company",
      date: "November 2023",
      description:
        "Using design methodologies to solve complex social challenges.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Published Articles
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Contributing to industry publications on topics of design,
            leadership, and social impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {article.title}
              </h3>
              <div className="flex items-center justify-between mb-3">
                <span className="text-purple-600 font-medium">
                  {article.publication}
                </span>
                <span className="text-sm text-gray-500">{article.date}</span>
              </div>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {article.description}
              </p>
              <button className="text-purple-600 font-medium hover:text-purple-700 transition-colors">
                Read Article →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;

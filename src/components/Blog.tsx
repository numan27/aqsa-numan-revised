
const Blog = () => {
  const blogPosts = [
    {
      title: "The Working Mother's Guide to UI/UX Career Growth",
      excerpt: "Practical strategies for advancing your design career while managing family responsibilities.",
      date: "February 15, 2024",
      readTime: "5 min read",
      category: "Career",
      image: "photo-1649972904349-6e44c42644a7"
    },
    {
      title: "Building Design Systems That Scale",
      excerpt: "How to create design systems that grow with your startup and maintain consistency.",
      date: "February 10, 2024",
      readTime: "8 min read", 
      category: "Design",
      image: "photo-1486312338219-ce68d2c6f44d"
    },
    {
      title: "Community Building for Tech Leaders",
      excerpt: "Lessons learned from growing multiple tech communities from zero to thousands of members.",
      date: "February 5, 2024",
      readTime: "6 min read",
      category: "Leadership",
      image: "photo-1500673922987-e212871fec22"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Latest Blog Posts
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Insights on design, career growth, and building sustainable success as a working mother in tech.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <article key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="h-48 overflow-hidden">
                <img 
                  src={`https://images.unsplash.com/${post.image}?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250&q=80`}
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 hover:text-purple-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <button className="text-purple-600 font-medium hover:text-purple-700 transition-colors">
                    Read More →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        <div className="text-center">
          <button className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-full font-medium hover:bg-purple-600 hover:text-white transition-all duration-200">
            View All Posts
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;

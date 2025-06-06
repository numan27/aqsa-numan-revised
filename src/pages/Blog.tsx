import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  const posts = [
    {
      title: "The Future of UI/UX Design in 2024",
      excerpt:
        "Exploring the latest trends and technologies shaping the future of user interface and experience design.",
      image: "/blog/future-ui-ux.jpg",
      category: "Design Trends",
      date: "Mar 15, 2024",
      readTime: "5 min read",
      slug: "future-of-ui-ux-design-2024",
    },
    {
      title: "Building Inclusive Design Systems",
      excerpt:
        "A comprehensive guide to creating design systems that work for everyone, regardless of abilities or background.",
      image: "/blog/inclusive-design.jpg",
      category: "Design Systems",
      date: "Mar 10, 2024",
      readTime: "8 min read",
      slug: "building-inclusive-design-systems",
    },
    {
      title: "From Designer to Community Leader",
      excerpt:
        "My journey of building and growing tech communities while maintaining a successful design career.",
      image: "/blog/community-leader.jpg",
      category: "Career Growth",
      date: "Mar 5, 2024",
      readTime: "6 min read",
      slug: "designer-to-community-leader",
    },
  ];

  const categories = [
    "All Posts",
    "Design Trends",
    "Design Systems",
    "Career Growth",
    "Community Building",
    "UI/UX Tips",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-background to-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>

          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-6 leading-tight">
              Blog & Insights
            </h1>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Thoughts, insights, and lessons learned from my journey in design,
              community building, and personal growth.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-8 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className="px-4 py-2 rounded-lg bg-purple-500/20 text-purple-300 hover:bg-purple-500/30 transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <article key={index} className="group">
                <div className="animated-border rounded-2xl overflow-hidden">
                  <div className="relative aspect-video">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                    </div>

                    <h2 className="text-xl font-semibold text-foreground mb-3 group-hover:text-purple-400 transition-colors">
                      {post.title}
                    </h2>

                    <p className="text-muted-foreground mb-4">{post.excerpt}</p>

                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-1 text-sm text-purple-400">
                        <Tag className="w-4 h-4" />
                        {post.category}
                      </span>
                      <Link
                        to={`/blog/${post.slug}`}
                        className="text-purple-400 hover:text-purple-300 transition-colors"
                      >
                        Read More →
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-display font-bold text-foreground mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Subscribe to my newsletter for the latest insights and updates.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button
              type="submit"
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:-translate-y-1"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;

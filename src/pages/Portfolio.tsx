import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("all");

  const projects = [
    {
      title: "FinTech Dashboard Redesign",
      category: "UI/UX Design",
      description:
        "Complete redesign of a financial dashboard focusing on data visualization and user experience improvements.",
      image: "photo-1486312338219-ce68d2c6f44d",
      tags: ["UI Design", "UX Research", "Prototyping"],
      results:
        "40% increase in user engagement, 25% reduction in task completion time",
    },
    {
      title: "E-commerce Mobile App",
      category: "Mobile Design",
      description:
        "End-to-end design of a fashion e-commerce app with focus on seamless shopping experience.",
      image: "photo-1581091226825-a6a2a5aee158",
      tags: ["Mobile UI", "User Journey", "Conversion Optimization"],
      results: "30% increase in mobile conversions, 4.8 app store rating",
    },
    {
      title: "SaaS Platform Interface",
      category: "Web Application",
      description:
        "Comprehensive design system and interface for a project management SaaS platform.",
      image: "photo-1488590528505-98d2b5aba04b",
      tags: ["Design System", "Component Library", "User Testing"],
      results: "50% reduction in development time, improved design consistency",
    },
    {
      title: "Healthcare Portal",
      category: "Healthcare Tech",
      description:
        "Patient portal design focusing on accessibility and ease of use for all age groups.",
      image: "photo-1649972904349-6e44c42644a7",
      tags: ["Accessibility", "Healthcare UX", "Information Architecture"],
      results: "95% user satisfaction score, WCAG 2.1 AA compliance",
    },
    {
      title: "Startup Landing Pages",
      category: "Marketing Design",
      description:
        "High-converting landing pages for various tech startups focusing on clear messaging and CTAs.",
      image: "photo-1526374965328-7f61d4dc18c5",
      tags: ["Conversion Design", "A/B Testing", "Marketing"],
      results: "Average 35% increase in conversion rates across all projects",
    },
    {
      title: "Design System Library",
      category: "Design Systems",
      description:
        "Comprehensive design system for a multi-product company ensuring consistency across platforms.",
      image: "photo-1487058792275-0ad4aaf24ca7",
      tags: ["Design Tokens", "Component Design", "Documentation"],
      results:
        "80% faster design-to-development handoff, unified brand experience",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Product Manager at TechFlow",
      content:
        "Aqsa's design work transformed our user experience completely. The attention to detail and user-centric approach resulted in significant improvements in our metrics.",
      project: "SaaS Platform Interface",
    },
    {
      name: "Ahmed Khan",
      role: "CEO at RetailNext",
      content:
        "The mobile app design exceeded our expectations. Aqsa understood our vision and delivered a solution that our users absolutely love.",
      project: "E-commerce Mobile App",
    },
  ];

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "UI/UX Design", label: "UI/UX Design" },
    { id: "Mobile Design", label: "Mobile Design" },
    { id: "Design Systems", label: "Design Systems" },
  ];

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((project) => project.category === activeTab);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-purple-50 via-white to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>

          <div className="text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900 mb-6 leading-tight">
              My Work
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              A collection of projects that showcase my approach to
              user-centered design, from concept to implementation.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 transform hover:scale-105 ${
                    activeTab === category.id
                      ? "bg-purple-600 text-white shadow-lg"
                      : "bg-gray-100 text-gray-600 hover:bg-purple-100 hover:text-purple-600"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                No projects found
              </h3>
              <p className="text-gray-600">
                Try selecting a different category
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {filteredProjects.map((project, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-2xl mb-6 bg-gray-100">
                    <img
                      src={`https://images.unsplash.com/${project.image}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80`}
                      alt={project.title}
                      className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-purple-600/0 group-hover:bg-purple-600/20 transition-all duration-300"></div>
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex gap-2">
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-50 transition-colors">
                          <ExternalLink className="w-4 h-4 text-gray-600" />
                        </div>
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-50 transition-colors">
                          <Github className="w-4 h-4 text-gray-600" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-medium">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="p-4 bg-green-50 rounded-lg">
                      <div className="text-sm text-green-600 font-medium mb-1">
                        Results
                      </div>
                      <div className="text-sm text-green-700">
                        {project.results}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              Client Testimonials
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              What clients say about working with me.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                <p className="text-gray-700 leading-relaxed mb-6 italic text-lg">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.role}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-purple-600 font-medium">
                      Project
                    </div>
                    <div className="text-sm text-gray-700">
                      {testimonial.project}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Let's Create Something Amazing
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it and discuss how we
            can bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-100 transition-all duration-200 transform hover:scale-105">
              Start a Project
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white hover:text-purple-600 transition-all duration-200 transform hover:scale-105">
              Download Case Studies
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;

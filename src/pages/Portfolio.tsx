import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Filter,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Design" },
    { id: "mobile", label: "Mobile Apps" },
    { id: "community", label: "Community" },
    { id: "education", label: "Education" },
  ];

  const projects = [
    {
      title: "Tech CEO Hub",
      description:
        "A community platform for tech CEOs and founders to connect, learn, and grow together.",
      image: "/portfolio/tech-ceo-hub.jpg",
      tags: ["UI/UX Design", "Community Platform", "Web App"],
      link: "https://techceohub.com",
      github: "https://github.com/techceohub",
      category: "community",
      year: "2024",
      client: "Tech CEO Hub",
      role: "Lead Designer & Founder",
    },
    {
      title: "92 Tech Talent",
      description:
        "A job board and talent marketplace connecting Pakistani tech professionals with global opportunities.",
      image: "/portfolio/92-tech-talent.jpg",
      tags: ["UI/UX Design", "Job Board", "Web App"],
      link: "https://92techtalent.com",
      github: "https://github.com/92techtalent",
      category: "web",
      year: "2023",
      client: "92 Tech Talent",
      role: "UI/UX Designer",
    },
    {
      title: "UI/UX Bootcamp",
      description:
        "A comprehensive learning platform for aspiring UI/UX designers.",
      image: "/portfolio/bootcamp.jpg",
      tags: ["UI/UX Design", "Education", "Web App"],
      link: "https://bootcamp.aqsanuman.com",
      github: "https://github.com/aqsanuman/bootcamp",
      category: "education",
      year: "2023",
      client: "Self",
      role: "Lead Designer & Instructor",
    },
    {
      title: "Design System Pro",
      description: "A comprehensive design system for modern web applications.",
      image: "/portfolio/design-system.jpg",
      tags: ["Design System", "UI Components", "Documentation"],
      link: "https://designsystem.aqsanuman.com",
      github: "https://github.com/aqsanuman/design-system",
      category: "web",
      year: "2024",
      client: "Open Source",
      role: "Lead Designer",
    },
    {
      title: "Community App",
      description: "A mobile app for managing and growing tech communities.",
      image: "/portfolio/community-app.jpg",
      tags: ["Mobile App", "Community", "UI/UX Design"],
      link: "https://community.aqsanuman.com",
      github: "https://github.com/aqsanuman/community-app",
      category: "mobile",
      year: "2023",
      client: "Community Partners",
      role: "UI/UX Designer",
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

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-background to-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="inline-flex items-center text-indigo-400 hover:text-indigo-300 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>

          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-foreground mb-6 leading-tight">
              My Portfolio
            </h1>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground mb-12 leading-relaxed">
              A curated collection of my design work, community projects, and
              strategic initiatives that showcase my approach to creating
              impactful digital experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-card sticky top-0 z-10 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-indigo-400" />
              <span className="text-foreground font-medium">Filter by:</span>
            </div>
            <div className="flex flex-wrap gap-4">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeFilter === filter.id
                      ? "bg-indigo-500 text-white"
                      : "bg-indigo-500/20 text-indigo-300 hover:bg-indigo-500/30"
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-8 sm:py-12 md:py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className="relative aspect-video rounded-2xl overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>{project.year}</span>
                      <span>•</span>
                      <span>{project.client}</span>
                    </div>

                    <h3 className="text-base sm:text-lg md:text-xl font-semibold text-foreground mb-2 group-hover:text-indigo-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-muted-foreground mb-4">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 text-sm bg-indigo-500/20 text-indigo-300 rounded-lg"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-6">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-colors"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Source Code
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 sm:py-12 md:py-16 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's work together to create something amazing.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-medium hover:from-indigo-700 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-1"
          >
            Get in Touch
            <ChevronRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;

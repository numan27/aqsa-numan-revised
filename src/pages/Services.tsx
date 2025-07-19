import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  ArrowLeft,
  ExternalLink,
  Palette,
  Users,
  GraduationCap,
  Briefcase,
  Layout,
  Code,
  Layers,
  Zap,
  Target,
  Rocket,
  Lightbulb,
  BarChart,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      title: "UI/UX Design",
      description:
        "Creating beautiful and functional user experiences that delight users and drive business growth.",
      icon: Palette,
      color: "from-purple-500 to-pink-500",
      features: [
        "User Journey Mapping",
        "Pixel-Perfect UI Design",
        "Prototyping & Testing",
        "Design Systems",
      ],
      price: "Custom Pricing",
      link: "/contact",
      featureIcons: [Layout, Code, Layers, Zap],
    },
    {
      title: "UI/UX Bootcamp",
      description:
        "Comprehensive training program to help you master UI/UX design and launch your career.",
      icon: GraduationCap,
      color: "from-blue-500 to-purple-500",
      features: [
        "Real-World Case Studies",
        "Live Mentorship",
        "Job-Ready Projects",
        "Portfolio Development",
      ],
      price: "Coming Soon",
      comingSoon: true,
      link: "/contact",
      featureIcons: [Target, Users, Rocket, Lightbulb],
    },
    {
      title: "B2B Collaboration",
      description:
        "Strategic partnerships and collaborations to help businesses scale and achieve their goals.",
      icon: Users,
      color: "from-pink-500 to-orange-500",
      features: [
        "Partner Matching",
        "Vendor Selection",
        "Team Scaling",
        "Strategic Partnerships",
      ],
      price: "Consultation Required",
      link: "/contact",
      featureIcons: [Users, Briefcase, BarChart, Target],
    },
    {
      title: "Professional Talent Acquisition",
      description:
        "Expert recruitment and talent placement services for design and tech professionals.",
      icon: Briefcase,
      color: "from-green-500 to-teal-500",
      features: [
        "CV/Portfolio Review",
        "Interview Preparation",
        "Salary Negotiation",
        "Job Matching",
      ],
      price: "Success-Based Fees",
      link: "/contact",
      featureIcons: [Briefcase, Target, BarChart, Users],
    },
  ];

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
              My Services
            </h1>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground mb-12 leading-relaxed">
              From strategic design consultation to community building and
              career guidance, I offer comprehensive services to help you
              achieve your goals in the tech industry.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-8 sm:py-12 md:py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-8">
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center`}
                      >
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <div className="flex items-center gap-3">
                          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-foreground">
                            {service.title}
                          </h3>
                          {service.comingSoon && (
                            <span className="px-3 py-1 text-sm bg-indigo-500/20 text-indigo-300 rounded-lg">
                              Coming Soon
                            </span>
                          )}
                        </div>
                        <span className="text-xs sm:text-sm md:text-base text-muted-foreground mt-2">
                          {service.price}
                        </span>
                      </div>
                    </div>

                    <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>

                    <ul className="space-y-4">
                      {service.features.map((feature, idx) => {
                        const FeatureIcon = service.featureIcons[idx];
                        return (
                          <li key={idx} className="flex items-start gap-3">
                            <div
                              className={`w-8 h-8 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center flex-shrink-0`}
                            >
                              <FeatureIcon className="w-4 h-4 text-white" />
                            </div>
                            <span className="text-foreground">{feature}</span>
                          </li>
                        );
                      })}
                    </ul>

                    <Link
                      to={service.link}
                      className="inline-flex items-center justify-center px-8 py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-medium hover:from-indigo-700 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-1"
                    >
                      Get Started
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Link>
                  </div>

                  <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-background to-card p-8">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-blue-500/10" />
                    <div className="relative h-full flex items-center justify-center">
                      <div className="grid grid-cols-2 gap-8">
                        {service.features.map((_, idx) => {
                          const FeatureIcon = service.featureIcons[idx];
                          return (
                            <div
                              key={idx}
                              className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center transform hover:scale-110 transition-transform duration-300`}
                            >
                              <FeatureIcon className="w-8 h-8 text-white" />
                            </div>
                          );
                        })}
                      </div>
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
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground mb-8">
            Ready to take your design or career to the next level? Let's discuss
            how I can help you achieve your goals.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-medium hover:from-indigo-700 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-1"
          >
            Contact Me
            <ExternalLink className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;

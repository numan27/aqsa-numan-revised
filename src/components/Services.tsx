import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Palette,
  Users,
  GraduationCap,
  Briefcase,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "UI/UX Design",
      description:
        "Create intuitive and engaging digital experiences that drive user satisfaction and business growth through expert UI/UX design solutions.",
      icon: Palette,
      color: "from-purple-500 to-pink-500",
      link: "/services#ui-ux-design",
    },
    {
      title: "Career Mentorship",
      description:
        "Personalized guidance and support to help you navigate your design career path, from skill development to job placement.",
      icon: GraduationCap,
      color: "from-blue-500 to-purple-500",
      link: "/services#mentorship",
    },
    {
      title: "Design Workshops",
      description:
        "Interactive workshops and training sessions to enhance your design skills and stay current with industry best practices.",
      icon: Users,
      color: "from-pink-500 to-orange-500",
      link: "/services#workshops",
    },
    {
      title: "Design Consultation",
      description:
        "Expert consultation services to help businesses optimize their digital products and improve user experience.",
      icon: Briefcase,
      color: "from-green-500 to-teal-500",
      link: "/services#consultation",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6"
          >
            Professional Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground"
          >
            Comprehensive design and career development solutions tailored to
            your needs
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative z-10 bg-card rounded-2xl p-8 h-full flex flex-col">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6`}
                >
                  <service.icon className="w-6 h-6 text-white" />
                </div>

                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-2xl font-semibold text-foreground">
                    {service.title}
                  </h3>
                </div>

                <p className="text-muted-foreground mb-6 flex-grow">
                  {service.description}
                </p>

                <Link
                  to={service.link}
                  className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors group-hover:translate-x-1 duration-300"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>

              {/* Animated border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl group-hover:blur-2xl transition-all duration-300 -z-10" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-16"
        >
          <Link
            to="/services"
            className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:-translate-y-1"
          >
            View All Services
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

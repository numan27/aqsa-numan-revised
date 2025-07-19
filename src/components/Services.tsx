import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Palette,
  Users,
  GraduationCap,
  Briefcase,
  Network,
  Building,
  Calendar,
  Megaphone,
  UserCheck,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "UI/UX Design",
      description:
        "Complete UI/UX audits, redesigns, and new product designs for websites, mobile apps, and SaaS platforms.",
      icon: Palette,
      link: "/services#ui-ux-design",
    },
    {
      title: "UI/UX Bootcamps & Trainings",
      description:
        "Hands-on learning experiences for beginners and professionals to upskill in design.",
      icon: GraduationCap,
      link: "/services#ui-ux-bootcamps",
    },
    {
      title: "Talent Network & Job Matchmaking",
      description:
        "Helping tech talent get hired and connecting companies with skilled UI/UX and tech professionals.",
      icon: UserCheck,
      link: "/services#talent-network",
    },
    {
      title: "Tech CEO Collaboration & PR",
      description:
        "Helping tech leaders build strategic partnerships, co-create digital impact, and build strong digital visibility through PR and personal branding across social media, press, and online platforms.",
      icon: Building,
      link: "/services#ceo-support",
    },
    {
      title: "Startup Incubation Advisory",
      description:
        "Guiding startups to the right incubators, mentorship opportunities, and funding resources.",
      icon: Briefcase,
      link: "/services#startup-advisory",
    },
    {
      title: "Tech Event Engagement & Promotion",
      description:
        "Helping event organizers reach the right tech audience and grow their community presence.",
      icon: Calendar,
      link: "/services#event-promotion",
    },
  ];

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-foreground mb-6"
          >
            Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground"
          >
            Here's how I help individuals, teams, and companies grow.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative z-10 animated-border rounded-2xl p-8 h-full flex flex-col">
                <div className="w-10 h-10 rounded-lg border border-indigo-200 dark:border-indigo-700 flex items-center justify-center mb-6 group-hover:bg-gradient-to-br group-hover:from-indigo-50 group-hover:to-blue-50 dark:group-hover:from-indigo-900/20 dark:group-hover:to-blue-900/20 group-hover:border-indigo-300 dark:group-hover:border-indigo-600 group-hover:shadow-sm transition-all duration-300">
                  <service.icon className="w-5 h-5 text-indigo-300 dark:text-indigo-500 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-all duration-300" />
                </div>

                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-all duration-300">
                    {service.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground">
                  Comprehensive design and strategic services to help you create
                  impactful digital experiences and grow your business.
                </p>

                <Link
                  to={service.link}
                  className="inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-colors text-sm sm:text-base group"
                >
                  <span className="border-b border-indigo-400 group-hover:border-indigo-300 transition-colors">
                    Learn More
                  </span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Animated border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-gray-200/20 to-gray-300/20 dark:from-gray-700/20 dark:to-gray-600/20 blur-xl group-hover:blur-2xl transition-all duration-300 -z-10" />
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
            className="inline-flex items-center justify-center px-8 py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-medium hover:from-indigo-700 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-1"
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

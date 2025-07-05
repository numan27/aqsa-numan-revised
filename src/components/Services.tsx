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
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6"
          >
            💼 Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground"
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
              <div className="relative z-10 bg-card rounded-2xl p-8 h-full flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center mb-6 group-hover:bg-gray-200 dark:group-hover:bg-gray-700 transition-colors">
                  <service.icon className="w-6 h-6 text-gray-600 dark:text-gray-300" />
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
                  className="inline-flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors group-hover:translate-x-1 duration-300"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
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
            className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1"
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

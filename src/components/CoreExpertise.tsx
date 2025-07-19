import { motion } from "framer-motion";
import { Palette, Users, Heart, Target, Network } from "lucide-react";

const CoreExpertise = () => {
  const expertise = [
    {
      title: "UI/UX Design",
      description:
        "Creating intuitive, user-centered web and mobile experiences that drive engagement and solve real problems.",
      icon: Palette,
    },
    {
      title: "Community Leadership",
      description:
        "Leading large-scale design and tech communities like Friends of Figma Lahore and IxDF Lahore to foster growth and opportunity.",
      icon: Users,
    },
    {
      title: "Women Empowerment & Mentorship",
      description:
        "Inspiring and mentoring women — especially mothers — to step into tech, balance life, and lead with confidence.",
      icon: Heart,
    },
    {
      title: "Design Strategy & Problem Solving",
      description:
        "Aligning business goals with user needs through strategic thinking and user-centered design principles.",
      icon: Target,
    },
    {
      title: "Tech Ecosystem Building",
      description:
        "Connecting the dots between startups, talent, tech CEOs, and incubators to build stronger digital ecosystems.",
      icon: Network,
    },
  ];

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-gradient-to-b from-card to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-4">
            Core Expertise
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto">
            I specialize in creating intuitive, accessible, and scalable design
            solutions that drive user engagement and business growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {expertise.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="animated-border rounded-2xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 w-full group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 border border-indigo-200 dark:border-indigo-700 rounded-lg flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-indigo-50 group-hover:to-blue-50 dark:group-hover:from-indigo-900/20 dark:group-hover:to-blue-900/20 group-hover:border-indigo-300 dark:group-hover:border-indigo-600 group-hover:shadow-sm transition-all duration-300">
                    <IconComponent className="w-5 h-5 text-indigo-300 dark:text-indigo-500 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-all duration-300" />
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-foreground">
                    {item.title}
                  </h3>
                </div>
                <p className="mt-4 text-xs sm:text-sm md:text-base text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CoreExpertise;

import { motion } from "framer-motion";

const CoreExpertise = () => {
  const skills = [
    "UI/UX Design",
    "Community Building",
    "Leadership",
    "Mentorship",
    "Strategic Planning",
    "Brand Development",
    "Design Systems",
    "User Research",
    "Workshop Facilitation",
    "Team Management",
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-card to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Core Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Specialized skills and areas of excellence that drive my work and
            impact in the design community.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="animated-border rounded-2xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-2xl text-purple-400">✦</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {skill}
                </h3>
              </div>
              <p className="mt-4 text-muted-foreground">
                Leveraging {skill.toLowerCase()} to create impactful solutions
                and drive meaningful change in the design industry.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreExpertise;

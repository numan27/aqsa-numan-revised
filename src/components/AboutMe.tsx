
import { motion } from "framer-motion";

const AboutMe = () => {
  const stats = [
    { number: "500+", label: "Designs Created" },
    { number: "50+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "3", label: "Beautiful Children" },
  ];

  const skills = [
    "UI/UX Design",
    "Community Building",
    "Leadership",
    "Mentorship",
    "Strategic Planning",
    "Brand Development",
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden animated-border p-1">
              <img
                src="/author-img-2.jpeg"
                alt="Aqsa Numan"
                className="w-full h-[600px] object-cover rounded-3xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl" />
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
                About Me
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  I'm Aqsa Numan, a passionate UI/UX designer and community builder 
                  who believes in the power of design to create meaningful connections 
                  and drive positive change.
                </p>
                <p>
                  As a mother of three beautiful children, I understand the delicate 
                  balance between pursuing your passion and nurturing what matters most. 
                  This experience has shaped my approach to both design and leadership.
                </p>
                <p>
                  Through my work, I've helped countless designers break into the tech 
                  industry, built thriving communities, and created user experiences 
                  that make a real difference in people's lives.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="animated-border rounded-2xl p-6 text-center"
                >
                  <div className="text-3xl font-bold text-purple-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Core Expertise
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium border border-purple-500/30 glow-border"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

import { motion } from "framer-motion";

const CoreExpertise = () => {
  const expertise = [
    {
      title: "UI/UX Design",
      description:
        "Creating intuitive and engaging user experiences through research-driven design methodologies and modern design tools.",
    },
    {
      title: "Career Development",
      description:
        "Guiding professionals through career transitions and growth with personalized mentorship and strategic planning.",
    },
    {
      title: "Design Workshops",
      description:
        "Conducting interactive workshops to enhance design skills and implement industry best practices in real-world projects.",
    },
    {
      title: "Product Strategy",
      description:
        "Developing comprehensive product strategies that align business goals with user needs and market opportunities.",
    },
    {
      title: "Design Systems",
      description:
        "Building scalable design systems that ensure consistency and efficiency across digital products and teams.",
    },
    {
      title: "Professional Mentorship",
      description:
        "Providing one-on-one guidance to help designers and tech professionals advance their careers and achieve their goals.",
    },
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
            Specialized skills and professional expertise that drive exceptional
            results in design and career development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertise.map((item, index) => (
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
                  {item.title}
                </h3>
              </div>
              <p className="mt-4 text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreExpertise;

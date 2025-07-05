import { motion } from "framer-motion";

const AboutMe = () => {
  const stats = [
    { number: "500+", label: "Designs Created" },
    { number: "50+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "3", label: "Beautiful Children" },
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
            <div className="relative rounded-xl overflow-hidden">
              <img
                src="/author-img-2.jpeg"
                alt="Aqsa Numan"
                className="w-full h-[600px] object-cover rounded-xl"
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
          >
            <h2 className="text-3xl font-bold text-foreground mb-6">
              About Me
            </h2>
            <p className="text-base text-justify text-muted-foreground mb-5 leading-relaxed">
              I'm Aqsa — a UI/UX designer, creative strategist, and tech
              community leader with 5+ years of experience crafting user-first
              digital experiences. I blend problem-solving with empathy and
              inclusive design.
            </p>
            <p className="text-base text-justify text-muted-foreground mb-5 leading-relaxed">
              As Country Manager Pakistan at IxDF (the biggest design
              community), I mentor designers and foster growth-focused
              communities.
            </p>
            <p className="text-base text-justify text-muted-foreground mb-5 leading-relaxed">
              Beyond design, I'm a proud mother of three — proving that
              leadership and motherhood can thrive together. I advocate for
              women to pursue both ambition and family without compromise.
            </p>
            <p className="text-base text-justify text-muted-foreground mb-5 leading-relaxed">
              <strong>How I help others thrive in tech:</strong>
            </p>
            <ul className="text-base text-justify text-muted-foreground mb-5 leading-relaxed space-y-2">
              <li>
                • Connect talent with career support and job opportunities
              </li>
              <li>• Help tech CEOs build partnerships and manage PR</li>
              <li>• Onboard startups to incubation platforms and networks</li>
              <li>• Support event organizers in audience outreach</li>
              <li>• Train youth through mentorship programs</li>
            </ul>
            <p className="text-base text-justify text-muted-foreground mb-8 leading-relaxed">
              Through design, mentorship, and storytelling, I champion the
              harmony of passion, purpose, and parenthood.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-pink-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/portfolio"
                className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:-translate-y-1"
              >
                View Portfolio
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 rounded-lg border-2 border-purple-500 text-purple-300 font-medium hover:bg-purple-500 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
              >
                Get in Touch
              </a>
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

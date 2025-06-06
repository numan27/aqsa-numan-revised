import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  const partnerLogos = [
    "Tech CEO Hub",
    "92 Tech Talent",
    "IxDF Lahore",
    "Friends of Figma",
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-20 w-32 h-32 bg-purple-500/20 rounded-lg blur-xl animate-float"></div>
        <div
          className="absolute bottom-1/4 left-20 w-40 h-40 bg-pink-500/20 rounded-lg blur-xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-blue-500/10 rounded-lg blur-xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <span className="inline-flex items-center px-6 py-1.5 bg-purple-500/20 text-purple-300 rounded-lg text-sm font-medium backdrop-blur-sm border border-purple-500/30 glow-border">
            <span className="w-2 h-2 bg-purple-400 rounded-lg mr-3 animate-pulse"></span>
            UI/UX Design Expert • Career Mentor • Design Educator
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-5xl sm:text-6xl md:text-7xl font-heading font-bold text-white mb-8 leading-tight"
        >
          Crafting Digital
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 mt-2">
            Excellence
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto font-body"
        >
          Transforming ideas into exceptional digital experiences. From UI/UX
          design to career mentorship, I help you create impactful solutions
          that drive success in the digital world.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
        >
          <Link
            to="/services"
            className="group relative bg-gradient-to-r from-purple-600 to-pink-600 text-white px-10 py-3 rounded-lg text-lg font-medium overflow-hidden glow-border transition-all duration-300 transform hover:-translate-y-1 text-center font-body"
          >
            <span className="relative z-10">View Services</span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
          <Link
            to="/contact"
            className="group relative border-2 border-purple-500 text-purple-300 px-10 py-3 rounded-lg text-lg font-medium overflow-hidden backdrop-blur-sm hover:text-white transition-all duration-300 transform hover:-translate-y-1 text-center font-body glow-border"
          >
            <span className="relative z-10">Book a Consultation</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
        </motion.div>

        {/* Partner Logos */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-16"
        >
          <p className="text-sm text-gray-400 mb-8 uppercase tracking-wider font-medium font-body">
            Trusted by leading communities
          </p>
          <div className="flex flex-wrap gap-8 justify-center opacity-60">
            {partnerLogos.map((logo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.1 }}
                className="text-gray-300 font-medium text-lg hover:opacity-100 transition-opacity hover:text-purple-400 font-body"
              >
                {logo}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

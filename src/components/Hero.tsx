import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PartnerCards from "./PartnerCards";

const Hero = () => {
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
        {/* Bottom blur overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/80 via-black/40 to-transparent backdrop-blur-sm"></div>
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

      <div className="relative z-10 px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-4"
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
          className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white mb-4"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 mt-2">
            Designing{" "}
          </span>
          Seamless Experiences.
          <br />
        </motion.h1>{" "}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white mb-8"
        >
          Leading {""}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 mt-2">
            Tech Connections.
          </span>
        </motion.h1>
        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto font-body"
        >
          UI/UX design is my craft, and community-building is my mission. With
          5+ years of experience, I deliver intuitive digital solutions, lead
          thriving tech communities, connect startups with the right partners,
          and help top talent find their place in the tech world.
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
        {/* Partner Cards */}
        <PartnerCards />
      </div>
    </section>
  );
};

export default Hero;

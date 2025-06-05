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
    <section className="relative min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 overflow-hidden pt-20 md:pt-32">
      {/* Enhanced Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -right-20 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float"></div>
        <div className="absolute bottom-1/4 -left-20 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-float animation-delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 relative">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-6 md:mb-10"
            >
              <span className="inline-flex items-center px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-600 rounded-full text-sm font-medium shadow-sm font-body">
                <span className="w-2 h-2 bg-purple-600 rounded-full mr-2 animate-pulse"></span>
                UI/UX Designer • Community Builder
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-gray-900 mb-6 md:mb-8 leading-tight tracking-tight"
            >
              Designing with
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 block mt-2">
                Purpose & Passion
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 md:mb-10 leading-relaxed max-w-2xl font-body"
            >
              Leading with Passion. Inspiring through Design. I help designers
              and tech professionals thrive by blending creativity, community,
              and compassion.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 md:gap-6 mb-12 md:mb-16"
            >
              <Link
                to="/contact"
                className="group relative bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 md:px-10 py-4 md:py-5 rounded-full text-base md:text-lg font-medium overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center font-body"
              >
                <span className="relative z-10">Book a Strategy Call</span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              <Link
                to="/portfolio"
                className="group relative border-2 border-purple-600 text-purple-600 px-6 md:px-10 py-4 md:py-5 rounded-full text-base md:text-lg font-medium overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center font-body"
              >
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                  View My Work
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-12 md:mt-16"
            >
              <p className="text-sm text-gray-500 mb-6 md:mb-8 uppercase tracking-wider font-medium font-body">
                Trusted by leading communities
              </p>
              <div className="flex flex-wrap gap-6 md:gap-10 opacity-60">
                {partnerLogos.map((logo, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 + index * 0.1 }}
                    className="text-gray-600 font-medium text-base md:text-lg hover:opacity-100 transition-opacity hover:text-purple-600 font-body"
                  >
                    {logo}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/author-img-2.jpeg"
                alt="Aqsa Numan - UI/UX Designer & Community Builder"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import { motion } from "framer-motion";

const BrandSlider = () => {
  const partners = [
    "92 Talent Hub",
    "92 Startup",
    "WeHost Club",
    "Tech CEO Hub",
    "IxDF Lahore Chapter",
    "IxDF Pakistan",
  ];

  const duplicatedPartners = [...partners, ...partners];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
      className="mt-16 w-full brand-slider"
    >
      <p className="text-sm text-gray-400 mb-8 uppercase tracking-wider font-medium font-body text-center">
        Trusted by leading communities
      </p>

      {/* Background container with dark theme - WIDER FOR FADE EFFECTS */}
      <div className="relative mx-8 sm:mx-12 lg:mx-20 xl:mx-28">
        {/* Dark background */}
        <div className="absolute inset-0 bg-black/80 backdrop-blur-md rounded-2xl border border-gray-700/50"></div>

        {/* FADE EFFECTS OUTSIDE THE CONTAINER */}
        <div className="fade-outside-left"></div>
        <div className="fade-outside-right"></div>

        {/* Content container */}
        <div className="relative py-8 px-4 overflow-hidden">
          {/* INNER FADE EFFECTS */}
          <div className="absolute left-0 top-0 w-48 h-full bg-gradient-to-r from-black via-black/80 to-transparent z-50 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-48 h-full bg-gradient-to-l from-black via-black/80 to-transparent z-50 pointer-events-none"></div>

          {/* Scrolling container */}
          <div className="flex animate-scroll">
            {duplicatedPartners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.1 }}
                className="flex-shrink-0 mx-6"
              >
                <div className="group relative">
                  {/* Subtle glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-600/20 to-gray-500/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Main box with dark theme */}
                  <div className="relative px-8 py-4 bg-gradient-to-br from-gray-800/80 via-gray-700/60 to-gray-800/80 backdrop-blur-sm border border-gray-600/40 rounded-xl hover:border-gray-500/60 transition-all duration-300 group-hover:scale-105 shadow-lg hover:shadow-gray-500/20">
                    {/* Inner subtle glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-600/10 to-gray-500/10 rounded-xl"></div>

                    {/* Content */}
                    <div className="relative z-10">
                      <span className="text-gray-100 font-semibold text-lg group-hover:text-white transition-colors duration-300 font-body whitespace-nowrap">
                        {partner}
                      </span>
                    </div>

                    {/* Subtle animated border */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-gray-600/30 via-gray-500/30 to-gray-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BrandSlider;

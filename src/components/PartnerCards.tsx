import { motion } from "framer-motion";

const PartnerCards = () => {
  const partners = [
    "92 Talent Hub",
    "92 Startup",
    "WeHost Club",
    "Tech CEO Hub",
    "IxDF Pakistan",
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
      className="mt-16 w-full"
    >
      <p className="text-sm text-gray-400 mb-8 uppercase tracking-wider font-medium text-center">
        Trusted by leading communities
      </p>

      {/* Partner cards in single row */}
      <div className="flex flex-wrap justify-center items-center lg:gap-8 md:gap-6 gap-4 max-w-5xl mx-auto">
        {partners.map((partner, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 + index * 0.1 }}
            className="group"
          >
            <div className="px-3 py-2 text-center">
              <span className="text-gray-200 font-semibold text-lg md:text-xl group-hover:text-white group-hover:scale-105 transition-all duration-300 tracking-wide">
                {partner}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default PartnerCards;

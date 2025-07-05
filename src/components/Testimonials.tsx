import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  image: string;
  rating: number;
}

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      quote:
        "Aqsa's UI/UX bootcamp transformed my career. Her teaching style is engaging, and the community she's built is incredibly supportive.",
      author: "Sarah Ahmed",
      role: "UI Designer at TechCorp",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      rating: 5,
    },
    {
      quote:
        "Working with Aqsa on our product redesign was a game-changer. Her attention to detail and user-centered approach delivered exceptional results.",
      author: "Usman Khan",
      role: "Product Manager at StartupX",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
    },
    {
      quote:
        "The mentorship I received from Aqsa helped me land my dream job. Her guidance on portfolio building and interview preparation was invaluable.",
      author: "Fatima Zahra",
      role: "UX Designer at DesignHub",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
    },
    {
      quote:
        "Aqsa's expertise in user experience design is unmatched. She helped us create a product that truly resonates with our users.",
      author: "Ahmed Hassan",
      role: "Founder at InnovateLab",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
    },
    {
      quote:
        "The design system Aqsa created for us has streamlined our entire development process. It's been a game-changer for our team.",
      author: "Zara Malik",
      role: "Lead Developer at CodeCraft",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      rating: 5,
    },
    {
      quote:
        "Aqsa's workshops are incredibly practical and hands-on. I learned more in one session than I did in months of self-study.",
      author: "Omar Farooq",
      role: "Junior Designer at CreativeStudio",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
    },
    {
      quote:
        "Her attention to accessibility and inclusive design principles sets her apart. Our app is now usable by everyone.",
      author: "Layla Ibrahim",
      role: "Accessibility Specialist at IncluTech",
      image:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
      rating: 5,
    },
    {
      quote:
        "Aqsa's strategic approach to UX research helped us understand our users better than ever before. Sales increased by 40%.",
      author: "Yusuf Ali",
      role: "Marketing Director at GrowthCo",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
    },
    {
      quote:
        "The portfolio review session with Aqsa was eye-opening. Her feedback was constructive and actionable.",
      author: "Aisha Khan",
      role: "Freelance Designer",
      image:
        "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face",
      rating: 5,
    },
    {
      quote:
        "Aqsa's design thinking workshop revolutionized how we approach problem-solving. Our team collaboration has never been better.",
      author: "Hassan Rizvi",
      role: "Team Lead at AgileCorp",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face",
      rating: 5,
    },
    {
      quote:
        "Her expertise in mobile app design is exceptional. Our app's user engagement metrics have improved dramatically.",
      author: "Nadia Ahmed",
      role: "Product Owner at MobileFirst",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
      rating: 5,
    },
    {
      quote:
        "Aqsa's mentorship program gave me the confidence and skills to transition into UX design. I'm now working at my dream company.",
      author: "Bilal Khan",
      role: "UX Designer at TechGiant",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
    },
  ];

  // Split testimonials into two rows
  const firstRow = testimonials.slice(0, 6);
  const secondRow = testimonials.slice(6, 12);

  const renderStars = (rating: number) => {
    return Array.from({ length: rating }, (_, i) => (
      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
    ));
  };

  const TestimonialCard = ({
    testimonial,
    index,
  }: {
    testimonial: Testimonial;
    index: number;
  }) => (
    <div className="flex-shrink-0 w-64 mx-3">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: index * 0.1 }}
        viewport={{ once: true }}
        className="bg-card text-card-foreground rounded-lg p-4 shadow-lg hover:shadow-xl transition-all duration-300 border h-full"
      >
        <div className="flex items-center gap-1 mb-3">
          {renderStars(testimonial.rating)}
        </div>
        <Quote className="w-5 h-5 text-muted-foreground mb-3" />
        <p className="text-muted-foreground text-xs leading-relaxed mb-4 line-clamp-3">
          "{testimonial.quote}"
        </p>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full overflow-hidden">
            <img
              src={testimonial.image}
              alt={testimonial.author}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="font-semibold text-foreground text-xs">
              {testimonial.author}
            </div>
            <div className="text-xs text-muted-foreground">
              {testimonial.role}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );

  return (
    <div className="py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
          What People Say
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Hear from the amazing people I've had the pleasure of working with and
          mentoring.
        </p>
      </div>

      {/* First Row - Slides Left */}
      <div className="mb-6 overflow-hidden">
        <motion.div
          className="flex"
          animate={{
            x: [0, -800],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            },
          }}
        >
          {firstRow.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              testimonial={testimonial}
              index={index}
            />
          ))}
          {/* Duplicate for seamless loop */}
          {firstRow.map((testimonial, index) => (
            <TestimonialCard
              key={`duplicate-${index}`}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </motion.div>
      </div>

      {/* Second Row - Slides Right */}
      <div className="overflow-hidden">
        <motion.div
          className="flex"
          animate={{
            x: [-800, 0],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {secondRow.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              testimonial={testimonial}
              index={index}
            />
          ))}
          {/* Duplicate for seamless loop */}
          {secondRow.map((testimonial, index) => (
            <TestimonialCard
              key={`duplicate-${index}`}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;

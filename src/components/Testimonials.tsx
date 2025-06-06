import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "Aqsa's UI/UX bootcamp transformed my career. Her teaching style is engaging, and the community she's built is incredibly supportive.",
      author: "Sarah Ahmed",
      role: "UI Designer at TechCorp",
      image: "/testimonials/sarah.jpg",
    },
    {
      quote:
        "Working with Aqsa on our product redesign was a game-changer. Her attention to detail and user-centered approach delivered exceptional results.",
      author: "Usman Khan",
      role: "Product Manager at StartupX",
      image: "/testimonials/usman.jpg",
    },
    {
      quote:
        "The mentorship I received from Aqsa helped me land my dream job. Her guidance on portfolio building and interview preparation was invaluable.",
      author: "Fatima Zahra",
      role: "UX Designer at DesignHub",
      image: "/testimonials/fatima.jpg",
    },
  ];

  return (
    <div className="py-10">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
          What People Say
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Hear from the amazing people I've had the pleasure of working with and
          mentoring.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="animated-border rounded-2xl p-8 h-full">
              <Quote className="w-8 h-8 text-purple-400 mb-6" />
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {testimonial.quote}
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;

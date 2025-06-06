const Benefits = () => {
  const benefits = [
    {
      title: "Industry Expertise",
      description:
        "Over a decade of experience in UI/UX design and digital product development, delivering proven results for clients across industries.",
    },
    {
      title: "Proven Methodology",
      description:
        "A structured approach to design and career development that has helped numerous professionals and businesses achieve their goals.",
    },
    {
      title: "Personalized Solutions",
      description:
        "Tailored strategies and solutions that address your specific needs, challenges, and objectives in design and career development.",
    },
    {
      title: "Professional Network",
      description:
        "Access to a curated network of design professionals, industry leaders, and potential employers to support your growth.",
    },
    {
      title: "Comprehensive Support",
      description:
        "End-to-end guidance from initial consultation to implementation, ensuring your success at every step of the process.",
    },
    {
      title: "Continuous Learning",
      description:
        "Stay current with industry trends and best practices through regular updates, workshops, and professional development opportunities.",
    },
  ];

  return (
    <section id="about" className="py-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why Work With Me?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I bring a unique blend of design expertise, community leadership,
            and real-world experience to help you achieve your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="animated-border rounded-2xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group"
            >
              <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-purple-400 transition-colors">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;

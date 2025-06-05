const Benefits = () => {
  const benefits = [
    {
      title: "Authentic Leadership",
      description:
        "Real experience in tech leadership and community building. I understand your challenges because I've faced them too.",
    },
    {
      title: "Proven Results",
      description:
        "From founding communities to placing professionals in top tech roles, my track record speaks for itself.",
    },
    {
      title: "Holistic Approach",
      description:
        "I don't just focus on your career - I help you create a sustainable life that honors all your priorities.",
    },
    {
      title: "Strong Network",
      description:
        "Access to my curated communities of founders, designers, and tech leaders across multiple industries.",
    },
    {
      title: "Personalized Support",
      description:
        "Every solution is tailored to your unique situation, goals, and timeline. No cookie-cutter approaches.",
    },
    {
      title: "Ongoing Mentorship",
      description:
        "Dedicated guidance for junior designers and those struggling to break into the industry. I monitor progress, provide feedback, and help navigate the challenging early stages of a design career.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Work With Me?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I bring a unique blend of design expertise, community leadership,
            and real-world experience to help you achieve your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
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

import { Palette, Handshake, Globe, TrendingUp, Users } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Palette,
      title: "Deep Expertise in UI/UX Design",
      description:
        'With over 5 years of hands-on experience, I specialize in crafting seamless, user-centered web and mobile interfaces. I go beyond just "making things look good" — I design for function, flow, and user delight.',
      services: [
        "User research and persona development",
        "Wireframes, user flows, and prototypes",
        "Visual design with accessibility and responsiveness",
        "UI audits and experience improvement strategies",
        "Design systems for scalable product growth",
      ],
      closing:
        "Each design is driven by research, aligned with business goals, and created to enhance usability and engagement.",
    },
    {
      icon: Handshake,
      title: "Strategic Collaborator, Not Just a Designer",
      description:
        "I don't just deliver files — I partner with you to solve problems. I understand the startup mindset, stakeholder needs, and iterative product development cycles. My designs contribute to product strategy, team alignment, and long-term growth.",
    },
    {
      icon: Globe,
      title: "Community-Backed Leadership",
      description:
        "As the Country Manager Pakistan at IxDF and former Management Lead at Friends of Figma Lahore, I've mentored hundreds of professionals across multiple leading communities. I've organized impactful events that connect learning with real opportunities, spanning design, tech, entrepreneurship, and professional development. Working with me means plugging into a broader network of talent, thought leadership, and innovation across diverse communities.",
    },
    {
      icon: TrendingUp,
      title: "Growth-Oriented Mindset",
      description: "Design is only one part of the equation. I also support:",
      services: [
        "Tech founders & CEOs in building B2B collaborations and visibility",
        "Startups in finding the right incubation and growth environments",
        "Tech professionals in career transitions through job support",
        "Event organizers in curating engagement strategies for the right audience",
        "Individuals and brands in strengthening their digital presence through PR and personal branding",
      ],
    },
    {
      icon: Users,
      title: "A Voice for Balance & Empowerment",
      description:
        "As a mother of three, I know what it means to juggle ambition and responsibility. I bring empathy, time management, and a solutions-first approach to every project — and I aim to inspire other women that they, too, can lead, design, and build impactful careers without compromising on family or identity.",
    },
  ];

  return (
    <section id="about" className="py-8 sm:py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-foreground mb-6">
            Why Work With Me
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            I bring a unique combination of design expertise, community
            leadership, and strategic thinking to help you achieve your goals.
          </p>
        </div>

        <div className="space-y-12">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                className="animated-border rounded-2xl p-8 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group"
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:space-x-4">
                  <div className="w-10 h-10 border border-indigo-200 dark:border-indigo-700 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-gradient-to-br group-hover:from-indigo-50 group-hover:to-blue-50 dark:group-hover:from-indigo-900/20 dark:group-hover:to-blue-900/20 group-hover:border-indigo-300 dark:group-hover:border-indigo-600 group-hover:shadow-sm transition-all duration-300 self-start">
                    <IconComponent className="w-5 h-5 text-indigo-300 dark:text-indigo-500 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-all duration-300" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold text-foreground mb-4 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-all duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
                      {benefit.description}
                    </p>

                    {benefit.services && (
                      <div className="mb-4">
                        <ul className="space-y-2">
                          {benefit.services.map((service, serviceIndex) => (
                            <li
                              key={serviceIndex}
                              className="flex items-start space-x-2"
                            >
                              <span className="text-gray-600 dark:text-gray-300 mt-1">
                                •
                              </span>
                              <span className="text-muted-foreground">
                                {service}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {benefit.closing && (
                      <p className="text-muted-foreground leading-relaxed italic">
                        {benefit.closing}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;

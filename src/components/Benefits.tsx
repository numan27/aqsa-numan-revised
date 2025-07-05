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
        "As the current Chapter Leader of IxDF Lahore and former Management Lead at Friends of Figma Lahore, I've mentored hundreds of designers and organized impactful events that connect learning with real opportunities. Working with me means plugging into a broader network of talent, thought leadership, and innovation.",
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
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            💡 Why Work With Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Choosing the right collaborator for your digital journey is
            critical. Here's why professionals, startups, and tech leaders trust
            me with their design and growth needs:
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
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-gray-200 dark:group-hover:bg-gray-700 transition-colors">
                    <IconComponent className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-foreground mb-4 group-hover:text-gray-400 dark:group-hover:text-white transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
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

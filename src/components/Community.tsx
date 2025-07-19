import { ExternalLink } from "lucide-react";

const Community = () => {
  const communities = [
    {
      title: "92 Talent Hub",
      description:
        "A comprehensive talent marketplace connecting Pakistani tech professionals with global opportunities. We focus on quality matches and career growth for designers, developers, and tech leaders.",
      members: "2000+ Members",
      type: "Talent Network",
      link: "Join Talent Hub",
      url: "https://chat.whatsapp.com/H3JNr28lxHb3DfguFn7CVz?mode=r_t",
    },
    {
      title: "92 Startup",
      description:
        "A vibrant ecosystem for Pakistani startups to connect, collaborate, and grow. We provide mentorship, networking opportunities, and access to funding resources.",
      members: "500+ Startups",
      type: "Startup Ecosystem",
      link: "Join Startup Hub",
      url: "https://chat.whatsapp.com/L6VFrfnbD4NKqW2p9aG0Se?mode=r_t",
    },
    {
      title: "WeHost Club",
      description:
        "A creator-powered community for podcast hosts, YouTubers, and content creators. Connect with like-minded voices and unlock collaboration opportunities for growth and visibility.",
      members: "800+ Members",
      type: "Creator Network",
      link: "Join WeHost Club",
      url: "https://chat.whatsapp.com/Lf8M1vyOJSxHn3tYxna0YG?mode=r_t",
    },
    {
      title: "Tech CEO Hub",
      description:
        "A curated WhatsApp group for startup founders and tech leaders. Collaborate, share insights, and build strategic partnerships in a trusted environment.",
      members: "150+ CEOs",
      type: "Private Group",
      link: "Join Tech CEO Hub",
      url: "https://chat.whatsapp.com/LtaSRQehbDbCTPoSimp2BP?mode=r_t",
    },
    {
      title: "IxDF Pakistan",
      description:
        "Leading the Pakistan chapter of the Interaction Design Foundation. Hosting events, workshops, and collaborative design sessions to foster design excellence.",
      members: "1000+ Designers",
      type: "Design Community",
      link: "Join IxDF Pakistan",
      url: "https://chat.whatsapp.com/BU8C3jcqER88LZWhfYv2vB?mode=r_t",
    },
  ];

  return (
    <section id="community" className="py-8 sm:py-12 md:py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-foreground mb-6">
            Communities I Lead
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto">
            Building and nurturing tech communities that empower professionals
            and drive innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {communities.map((community, index) => (
            <div
              key={index}
              className="animated-border rounded-md p-8 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group flex flex-col h-full"
            >
              <div className="mb-4">
                <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-md text-sm font-light border border-indigo-500/30">
                  {community.type}
                </span>
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-foreground mb-2 group-hover:text-indigo-400 transition-colors">
                {community.title}
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground mb-4">
                {community.description}
              </p>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-sm text-muted-foreground font-light">
                  {community.members}
                </span>
                <a
                  href={community.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-3 py-2 rounded-md text-sm font-light transition-all duration-200 transform hover:scale-105 glow-border hover:from-indigo-700 hover:to-blue-700"
                >
                  {community.link}
                  <ExternalLink className="w-3 h-3 ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Community;

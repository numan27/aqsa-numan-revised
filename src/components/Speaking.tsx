import { motion } from "framer-motion";
import { Play, Users, Clock, Calendar } from "lucide-react";

interface SpeakingEngagement {
  title: string;
  event: string;
  audience: string;
  description: string;
  media: string;
  type: "video" | "image";
  duration: string;
  date: string;
}

const Speaking = () => {
  const speakingEngagements: SpeakingEngagement[] = [
    {
      title: "UI/UX Design Masterclass",
      event: "Design Week Pakistan",
      audience: "150+ Attendees",
      description:
        "A comprehensive workshop on modern UI/UX design principles and practical implementation strategies.",
      media: "author-video-1",
      type: "video",
      duration: "45 min",
      date: "2024",
    },
    {
      title: "Career Growth in Tech",
      event: "Tech Career Summit",
      audience: "300+ Attendees",
      description:
        "Insights on navigating career progression in the tech industry and building a sustainable professional path.",
      media: "author-img-1",
      type: "image",
      duration: "30 min",
      date: "2024",
    },
    {
      title: "Design Leadership",
      event: "International Design Conference",
      audience: "500+ Attendees",
      description:
        "Strategies for leading design teams effectively while maintaining work-life balance and team productivity.",
      media: "author-video-2",
      type: "video",
      duration: "60 min",
      date: "2023",
    },
    {
      title: "User-Centered Design",
      event: "UX Design Summit",
      audience: "200+ Attendees",
      description:
        "Deep dive into user research methodologies and how to create products that truly serve user needs.",
      media: "author-img-2",
      type: "image",
      duration: "40 min",
      date: "2023",
    },
    {
      title: "Design Systems Workshop",
      event: "Design Systems Conference",
      audience: "250+ Attendees",
      description:
        "Building scalable design systems that improve team collaboration and product consistency.",
      media: "author-video-3",
      type: "video",
      duration: "90 min",
      date: "2023",
    },
    {
      title: "Women in Tech Leadership",
      event: "Women Tech Leaders Summit",
      audience: "400+ Attendees",
      description:
        "Empowering women to take leadership roles in technology and design industries.",
      media: "author-img-3",
      type: "image",
      duration: "35 min",
      date: "2023",
    },
    {
      title: "Product Design Strategy",
      event: "Product Design Forum",
      audience: "180+ Attendees",
      description:
        "Strategic approaches to product design that align business goals with user experience.",
      media: "author-video-4",
      type: "video",
      duration: "50 min",
      date: "2022",
    },
    {
      title: "Design Thinking in Practice",
      event: "Innovation Conference",
      audience: "320+ Attendees",
      description:
        "Practical applications of design thinking methodology in real-world business scenarios.",
      media: "author-img-4",
      type: "image",
      duration: "55 min",
      date: "2022",
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Speaking & Talks
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Sharing expertise and insights on design, leadership, and career
            development at industry events and conferences.
          </p>
        </div>

        {/* Multi-Column Grid */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {speakingEngagements.map((engagement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-card text-card-foreground rounded-lg p-4 shadow-lg hover:shadow-xl transition-all duration-300 border h-full">
                  {/* Media Container */}
                  <div className="relative aspect-[9/16] overflow-hidden bg-muted rounded-lg mb-4">
                    {engagement.type === "video" ? (
                      <div className="relative w-full h-full">
                        <video
                          className="w-full h-full object-cover"
                          src={`/${engagement.media}.mp4`}
                          controls
                          playsInline
                        />
                        <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs flex items-center gap-1">
                          <Play className="w-3 h-3" />
                          {engagement.duration}
                        </div>
                      </div>
                    ) : (
                      <img
                        src={`/${engagement.media}.jpeg`}
                        alt={engagement.title}
                        className="w-full h-full object-cover"
                      />
                    )}
                    {engagement.type === "video" && (
                      <div className="absolute top-2 left-2 px-2 py-1 bg-purple-500/90 text-white rounded text-xs">
                        Video
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="font-semibold text-foreground text-sm leading-tight line-clamp-2">
                      {engagement.title}
                    </h3>
                    <p className="text-purple-400 font-medium text-xs">
                      {engagement.event}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        {engagement.audience}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {engagement.duration}
                      </div>
                    </div>
                    <p className="text-muted-foreground text-xs leading-relaxed line-clamp-3">
                      {engagement.description}
                    </p>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      {engagement.date}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Featured Video Section */}
        <div className="mt-20 animated-border rounded-3xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 items-center p-1">
            <div className="relative aspect-[9/16] md:aspect-[3/4] bg-muted rounded-2xl overflow-hidden">
              <video
                className="w-full h-full object-cover"
                src="/author-video-3.mp4"
                controls
                playsInline
              />
              <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-lg text-sm">
                45 min
              </div>
            </div>
            <div className="p-8 md:p-12 text-foreground">
              <h3 className="text-3xl font-bold mb-4">
                Featured Talk: Design Leadership
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Watch my keynote speech at the International Design Conference
                where I share insights on building and leading successful design
                teams.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <span className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-lg text-sm border border-purple-500/30">
                  45 min • Keynote
                </span>
                <span className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-lg text-sm border border-purple-500/30">
                  500+ Attendees
                </span>
                <span className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-lg text-sm border border-purple-500/30">
                  International Conference
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Invite Me to Speak
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm available for speaking engagements, workshops, and panel
            discussions on design, leadership, and career development.
          </p>
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 glow-border">
            Speaking Inquiry
          </button>
        </div>
      </div>
    </section>
  );
};

export default Speaking;

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const Achievements = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Recognition
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Professional Achievements
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Celebrating milestones and recognition in my journey of advancing
            design excellence
          </p>
        </div>

        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Text Content */}
              <div className="p-6 md:p-8 lg:p-12 flex flex-col justify-center order-2 lg:order-1">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                      Pakistan's Country Manager
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Officially Recognized as Pakistan's Country Manager for
                      the{" "}
                      <span className="font-semibold text-foreground">
                        Interaction Design Foundation (IxDF)
                      </span>{" "}
                      – The World's Leading Design Education Platform
                    </p>
                  </div>

                  <div>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      This prestigious appointment reflects my decade-long
                      dedication to advancing UX/UI design excellence and
                      community building in Pakistan's tech ecosystem.
                    </p>
                  </div>

                  <div className="pt-6">
                    <button
                      className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 glow-border"
                      onClick={() =>
                        window.open(
                          "https://www.interaction-design.org/courses/build-a-standout-ux-ui-portfolio-land-your-dream-job?r=aqsa-nauman",
                          "_blank"
                        )
                      }
                    >
                      Join IxDF Community
                    </button>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="relative order-1 lg:order-2">
                <img
                  src="/achievements.jpeg"
                  alt="Achievement recognition as Pakistan's Country Manager for IxDF"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Achievements;

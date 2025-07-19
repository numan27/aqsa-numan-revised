import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeft, Heart, Star, Users } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const stats = [
    { icon: Users, value: "2500+", label: "Community Members" },
    { icon: Star, value: "150+", label: "Projects Completed" },
    { icon: Heart, value: "3", label: "Beautiful Children" },
    { icon: Users, value: "5+", label: "Years Experience" },
  ];

  const values = [
    {
      title: "Purpose-Driven Design",
      description:
        "Every pixel serves a purpose, every interaction tells a story. I believe design should solve real problems while creating beautiful experiences.",
    },
    {
      title: "Community First",
      description:
        "Building bridges between people, creating spaces where professionals can thrive, collaborate, and grow together.",
    },
    {
      title: "Authentic Leadership",
      description:
        "Leading by example as a working mother, showing that you can build a successful career while raising a family.",
    },
    {
      title: "Continuous Learning",
      description:
        "The tech world evolves rapidly, and so do I. Always learning, always growing, always sharing knowledge with others.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-background to-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="inline-flex items-center text-indigo-400 hover:text-indigo-300 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-foreground mb-6 leading-tight">
                My Story
              </h1>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground mb-8 leading-relaxed">
                From a passionate design student to a community leader and
                mother of three, my journey has been about finding balance,
                creating impact, and inspiring others to pursue their dreams
                without compromise.
              </p>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <stat.icon className="w-6 h-6 text-indigo-400 mx-auto mb-2" />
                    <div className="text-base sm:text-lg md:text-xl font-bold text-foreground">
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="animate-slide-up">
              <div className="relative rounded-2xl overflow-hidden animated-border p-1">
                <img
                  src="/author-img-2.jpeg"
                  alt="Aqsa Numan"
                  className="w-full rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-8 sm:py-12 md:py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-foreground mb-6">
              What Drives Me
            </h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto">
              These core values shape everything I do, from the communities I
              build to the designs I create.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="animated-border rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-foreground mb-4">
                  {value.title}
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-8 sm:py-12 md:py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-foreground mb-6">
              My Journey
            </h2>
          </div>

          <div className="space-y-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3">
                <div className="text-base sm:text-lg md:text-xl font-bold text-indigo-400 mb-2">
                  2018
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-foreground mb-2">
                  The Beginning
                </h3>
              </div>
              <div className="md:w-2/3">
                <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
                  Started my journey in UI/UX design while managing family
                  responsibilities. Discovered my passion for creating
                  user-centered designs that solve real problems.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3">
                <div className="text-base sm:text-lg md:text-xl font-bold text-indigo-400 mb-2">
                  2020
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-foreground mb-2">
                  Community Building
                </h3>
              </div>
              <div className="md:w-2/3">
                <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
                  Founded my first tech community, realizing the power of
                  bringing like-minded professionals together. Started building
                  bridges in the Pakistani tech ecosystem.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3">
                <div className="text-base sm:text-lg md:text-xl font-bold text-indigo-400 mb-2">
                  2022
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-foreground mb-2">
                  Scaling Impact
                </h3>
              </div>
              <div className="md:w-2/3">
                <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
                  Launched multiple communities including Tech CEO Hub and 92
                  Tech Talent. Started helping professionals find their dream
                  jobs in tech.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3">
                <div className="text-base sm:text-lg md:text-xl font-bold text-indigo-400 mb-2">
                  2024
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-foreground mb-2">
                  Building the Future
                </h3>
              </div>
              <div className="md:w-2/3">
                <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
                  Developing innovative platforms and bootcamps to empower the
                  next generation of designers and tech professionals. Focusing
                  on sustainable growth and impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;

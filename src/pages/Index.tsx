import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Ventures from "@/components/Ventures";
import Community from "@/components/Community";
import JobBoard from "@/components/JobBoard";
import Events from "@/components/Events";
import Speaking from "@/components/Speaking";
import Podcasts from "@/components/Podcasts";
import Blog from "@/components/Blog";
import Articles from "@/components/Articles";
import Newsletter from "@/components/Newsletter";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <Hero />

      {/* Main Content Sections */}
      <main className="relative">
        {/* Services & Benefits */}
        <section className="relative py-20 md:py-32 bg-gradient-to-b from-white to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Benefits />
            <div className="mt-20 md:mt-32">
              <Services />
            </div>
          </div>
        </section>

        {/* Community & Ventures */}
        <section className="relative py-20 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Community />
            <div className="mt-20 md:mt-32">
              <Ventures />
            </div>
          </div>
        </section>

        {/* Testimonials & Job Board */}
        <section className="relative py-20 md:py-32 bg-gradient-to-b from-white to-pink-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Testimonials />
            <div className="mt-20 md:mt-32">
              <JobBoard />
            </div>
          </div>
        </section>

        {/* Events & Speaking */}
        <section className="relative py-20 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Events />
            <div className="mt-20 md:mt-32">
              <Speaking />
            </div>
          </div>
        </section>

        {/* Media & Content */}
        <section className="relative py-20 md:py-32 bg-gradient-to-b from-white to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Podcasts />
            <div className="mt-20 md:mt-32">
              <Blog />
            </div>
            <div className="mt-20 md:mt-32">
              <Articles />
            </div>
          </div>
        </section>

        {/* Newsletter & CTA */}
        <section className="relative py-20 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Newsletter />
            <div className="mt-20 md:mt-32">
              <CallToAction />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;

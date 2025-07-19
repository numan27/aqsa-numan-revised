import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import CoreExpertise from "@/components/CoreExpertise";
import Benefits from "@/components/Benefits";
import Services from "@/components/Services";
import Achievements from "@/components/Achievements";
import Testimonials from "@/components/Testimonials";
import Ventures from "@/components/Ventures";
import Community from "@/components/Community";
import Speaking from "@/components/Speaking";
import Gallery from "@/components/Gallery";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <Hero />

      <AboutMe />

      <CoreExpertise />
      <Services />
      <Achievements />

      <main className="relative">
        <section className="relative bg-gradient-to-b from-background to-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Benefits />
            <div className="mt-8 md:mt-12"></div>
          </div>
        </section>

        {/* Community & Ventures */}
        <section className="relative py-10 md:py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Community />
            <div className="">
              <Ventures />
            </div>
          </div>
        </section>

        {/* Testimonials & Job Board */}
        <section className="relative pb-20 md:pb-32 bg-gradient-to-b from-background to-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Testimonials />
            {/* <div className="mt-20 md:mt-32">
              <JobBoard />
            </div> */}
          </div>
        </section>

        {/* Events & Speaking */}
        <section className="relative py-10 md:py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* <Events /> */}
            <div className="">
              <Speaking />
            </div>
          </div>
        </section>

        {/* Gallery */}
        <Gallery />

        {/* Media & Content */}
        {/* <section className="relative bg-gradient-to-b from-background to-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Podcasts />
            <div className="mt-20 md:mt-32">
              <Articles />
            </div>
          </div>
        </section> */}

        {/* Newsletter & CTA */}
        <section className="relative bg-background">
          {/* <Newsletter /> */}
          <div className="mt-20">
            <CallToAction />
          </div>
        </section>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;

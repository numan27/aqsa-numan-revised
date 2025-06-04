
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Benefits from '@/components/Benefits';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import Ventures from '@/components/Ventures';
import Community from '@/components/Community';
import JobBoard from '@/components/JobBoard';
import Events from '@/components/Events';
import Speaking from '@/components/Speaking';
import Podcasts from '@/components/Podcasts';
import Blog from '@/components/Blog';
import Articles from '@/components/Articles';
import Newsletter from '@/components/Newsletter';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Benefits />
      <Services />
      <Testimonials />
      <Ventures />
      <Community />
      <JobBoard />
      <Events />
      <Speaking />
      <Podcasts />
      <Blog />
      <Articles />
      <Newsletter />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;

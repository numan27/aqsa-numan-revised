
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowLeft, Check, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: "UI/UX Design Services",
      description: "User-first, conversion-driven designs that balance aesthetics with function — for startups, SaaS platforms, and mobile apps.",
      features: [
        "User Journey Mapping",
        "Wireframing & Prototyping", 
        "Pixel-Perfect UI Design",
        "Design Systems & Style Guides",
        "Usability Testing",
        "Mobile-First Design"
      ],
      pricing: "Starting from $2,500",
      timeline: "2-4 weeks",
      highlight: false,
      image: "photo-1486312338219-ce68d2c6f44d"
    },
    {
      title: "UI/UX Bootcamp",
      description: "A comprehensive hands-on bootcamp built for beginners and career switchers. Learn UI/UX with real-world case studies and live mentorship.",
      features: [
        "12-Week Intensive Program",
        "Real-World Case Studies",
        "Live Mentorship Sessions",
        "Job-Ready Portfolio",
        "Industry Tools Training",
        "Job Placement Support"
      ],
      pricing: "Early Bird: $1,200",
      timeline: "12 weeks",
      highlight: true,
      image: "photo-1581091226825-a6a2a5aee158"
    },
    {
      title: "Career Mentorship",
      description: "One-on-one guidance to accelerate your design career. Perfect for working mothers and professionals seeking strategic career growth.",
      features: [
        "Monthly 1-on-1 Sessions",
        "Portfolio Review & Optimization",
        "Interview Preparation",
        "Salary Negotiation Guidance",
        "Network Building Support",
        "Work-Life Balance Strategies"
      ],
      pricing: "$200/month",
      timeline: "3-6 months",
      highlight: false,
      image: "photo-1649972904349-6e44c42644a7"
    },
    {
      title: "Job Placement Support",
      description: "Tailored support to help you secure jobs in the design and tech industry. Success-based pricing means you only pay when you win.",
      features: [
        "CV & Portfolio Optimization",
        "Job Matching & Applications",
        "Interview Coaching",
        "Salary Negotiation",
        "Company Research",
        "Ongoing Support"
      ],
      pricing: "Success-based fees only",
      timeline: "1-3 months",
      highlight: false,
      image: "photo-1488590528505-98d2b5aba04b"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery Call",
      description: "We start with a detailed discussion about your goals, challenges, and timeline."
    },
    {
      step: "02", 
      title: "Strategy & Planning",
      description: "I create a customized plan tailored to your specific needs and objectives."
    },
    {
      step: "03",
      title: "Execution",
      description: "Whether it's design, mentorship, or job support, I deliver results with regular check-ins."
    },
    {
      step: "04",
      title: "Success & Growth",
      description: "We measure success and plan for continued growth and improvement."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-purple-50 via-white to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900 mb-6 leading-tight">
              Services & Programs
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              From design services to career mentorship, I provide comprehensive support 
              to help you achieve your professional goals with authenticity and purpose.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className={`relative overflow-hidden rounded-3xl ${service.highlight ? 'bg-gradient-to-br from-purple-600 to-purple-700 text-white' : 'bg-white border border-gray-200'} shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1`}>
                {service.highlight && (
                  <div className="absolute top-6 right-6">
                    <div className="flex items-center bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium">
                      <Star className="w-4 h-4 mr-1" />
                      Featured
                    </div>
                  </div>
                )}
                
                <div className="h-48 overflow-hidden">
                  <img 
                    src={`https://images.unsplash.com/${service.image}?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300&q=80`}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="p-8">
                  <h3 className={`text-2xl font-bold mb-4 ${service.highlight ? 'text-white' : 'text-gray-900'}`}>
                    {service.title}
                  </h3>
                  <p className={`mb-6 leading-relaxed ${service.highlight ? 'text-purple-100' : 'text-gray-600'}`}>
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className={`flex items-center ${service.highlight ? 'text-purple-100' : 'text-gray-600'}`}>
                        <Check className={`w-4 h-4 mr-3 ${service.highlight ? 'text-white' : 'text-purple-600'}`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <div className={`text-sm ${service.highlight ? 'text-purple-200' : 'text-gray-500'}`}>Starting at</div>
                      <div className={`text-xl font-bold ${service.highlight ? 'text-white' : 'text-purple-600'}`}>
                        {service.pricing}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`text-sm ${service.highlight ? 'text-purple-200' : 'text-gray-500'}`}>Timeline</div>
                      <div className={`font-semibold ${service.highlight ? 'text-white' : 'text-gray-900'}`}>
                        {service.timeline}
                      </div>
                    </div>
                  </div>
                  
                  <button className={`w-full py-3 px-6 rounded-full font-medium transition-all duration-200 transform hover:scale-105 ${service.highlight ? 'bg-white text-purple-600 hover:bg-gray-100' : 'bg-purple-600 text-white hover:bg-purple-700'}`}>
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              How I Work
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven process that ensures we achieve your goals efficiently and effectively.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how I can help you achieve your goals. Book a free consultation 
            to explore the best path forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-100 transition-all duration-200 transform hover:scale-105">
              Book Free Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white hover:text-purple-600 transition-all duration-200 transform hover:scale-105">
              View Portfolio
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;

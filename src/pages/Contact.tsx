import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeft, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "hello@aqsanuman.com",
      link: "mailto:hello@aqsanuman.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+92 322 490 2181",
      link: "tel:+923224902181",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Lahore, Pakistan",
      link: "https://maps.google.com/?q=Lahore,Pakistan",
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

          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-foreground mb-6 leading-tight">
              Get in Touch
            </h1>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground mb-12 leading-relaxed">
              Ready to start a conversation? Whether you have a project in mind,
              need career guidance, or want to collaborate, I'd love to hear
              from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-8 sm:py-12 md:py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="animated-border rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300">
                  <div className="w-10 h-10 border border-indigo-200 dark:border-indigo-700 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-gradient-to-br group-hover:from-indigo-50 group-hover:to-blue-50 dark:group-hover:from-indigo-900/20 dark:group-hover:to-blue-900/20 group-hover:border-indigo-300 dark:group-hover:border-indigo-600 group-hover:shadow-sm transition-all duration-300">
                    <info.icon className="w-5 h-5 text-indigo-300 dark:text-indigo-500 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 group-hover:scale-110 transition-all duration-300" />
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-foreground mb-4">
                    {info.title}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
                    {info.value}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-8 sm:py-12 md:py-16 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl p-8 border border-border bg-card">
            <h2 className="text-base sm:text-lg md:text-xl font-bold text-foreground mb-8 text-center">
              Let's Start a Conversation
            </h2>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-muted-foreground mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 cursor-text"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-muted-foreground mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 cursor-text"
                    placeholder="Your email"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-muted-foreground mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 cursor-text"
                  placeholder="Subject"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-muted-foreground mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 cursor-text resize-none"
                  placeholder="Your message"
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-medium hover:from-indigo-700 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;

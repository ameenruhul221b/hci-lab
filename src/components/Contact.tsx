import { MapPin, Mail, Phone, Globe, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      details: ["Department of Computer Science and Engineering", "University of Rajshahi", "Rajshahi, Bangladesh"]
    },
    {
      icon: Mail,
      title: "Email",
      details: ["hci.lab@ru.ac.bd", "research@hci-ru.edu.bd"]
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+880-721-750041", "+880-721-711110"]
    },
    {
      icon: Globe,
      title: "Website",
      details: ["www.ru.ac.bd/cse", "hci-lab.ru.ac.bd"]
    }
  ];

  const opportunities = [
    {
      title: "Research Partnerships",
      description: "Opportunities for joint research projects and funding applications"
    },
    {
      title: "Industry Collaboration",
      description: "Consulting and development partnerships with technology companies"
    },
    {
      title: "International Exchange",
      description: "Student and faculty exchange programs with partner institutions"
    },
    {
      title: "Facility Tours",
      description: "Regular tours for prospective students, collaborators, and visitors"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Contact & Collaboration
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Connect with our research team to explore collaboration opportunities, 
              visit our facilities, or learn more about our innovative HCI research programs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8">Get in Touch</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div 
                    key={index}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="flex items-start">
                      <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-3 mr-4 flex-shrink-0">
                        <info.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-2">{info.title}</h4>
                        <div className="space-y-1">
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-white/70 text-sm">{detail}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Visit Information */}
              <div className="mt-8 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-6">
                <h4 className="text-white font-bold mb-4">Visit Our Lab</h4>
                <p className="text-white/70 text-sm leading-relaxed mb-4">
                  We welcome visitors interested in our research. Facility tours are available 
                  for prospective students, collaborators, and members of the academic community.
                </p>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  Schedule a Visit
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Collaboration Opportunities */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8">Collaboration Opportunities</h3>
              <div className="space-y-6">
                {opportunities.map((opportunity, index) => (
                  <div 
                    key={index}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all duration-300"
                  >
                    <h4 className="text-white font-semibold mb-3">{opportunity.title}</h4>
                    <p className="text-white/70 text-sm leading-relaxed">{opportunity.description}</p>
                  </div>
                ))}
              </div>

              {/* Research Areas */}
              <div className="mt-8 bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <h4 className="text-white font-bold mb-4">Research Collaboration Areas</h4>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "Brain-Computer Interfaces",
                    "Virtual Reality",
                    "Assistive Technology", 
                    "Medical Training Systems",
                    "Cognitive Analysis",
                    "Signal Processing"
                  ].map((area, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-white/40 rounded-full mr-3"></div>
                      <span className="text-white/70 text-sm">{area}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Responsibility */}
              <div className="mt-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <h4 className="text-white font-semibold mb-3">Community Engagement</h4>
                <p className="text-white/70 text-sm leading-relaxed">
                  We actively participate in outreach programs, science fairs, and community 
                  workshops to promote digital literacy and accessibility awareness.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Shape the Future of Human-Computer Interaction
              </h3>
              <p className="text-white/70 mb-6 max-w-2xl mx-auto leading-relaxed">
                Join us in advancing HCI research through innovative solutions that improve lives 
                and bridge the gap between human needs and technological capabilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-white text-black hover:bg-white/90 font-semibold"
                >
                  Start Collaboration
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
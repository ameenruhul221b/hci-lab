import { Brain, Mail, MapPin, ExternalLink } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Research", href: "#research" },
    { label: "Projects", href: "#projects" },
    { label: "Facilities", href: "#facilities" },
    { label: "Team", href: "#team" },
    { label: "Contact", href: "#contact" }
  ];

  const researchAreas = [
    "Brain-Computer Interfaces",
    "Virtual Reality Research",
    "Assistive Technology",
    "Medical Training Systems",
    "Cognitive Analysis",
    "Signal Processing"
  ];

  return (
    <footer className="bg-gray-950 border-t border-white/10">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Lab Information */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-white/10 backdrop-blur-sm p-2 rounded-lg border border-white/20">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-white font-bold text-lg">HCI Lab</div>
                  <div className="text-white/70 text-sm">University of Rajshahi</div>
                </div>
              </div>
              <p className="text-white/70 text-sm leading-relaxed mb-6 max-w-md">
                Advancing the field of human-computer interaction through cutting-edge research, 
                innovative applications, and practical solutions that improve how people interact 
                with technology in their daily lives.
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-white/60 text-sm">
                  <MapPin className="h-4 w-4 mr-3 flex-shrink-0" />
                  <span>Department of CSE, University of Rajshahi, Bangladesh</span>
                </div>
                <div className="flex items-center text-white/60 text-sm">
                  <Mail className="h-4 w-4 mr-3 flex-shrink-0" />
                  <span>hci.lab@ru.ac.bd</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-6">Quick Links</h4>
              <div className="space-y-3">
                {quickLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="block text-white/70 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Research Areas */}
            <div>
              <h4 className="text-white font-semibold mb-6">Research Areas</h4>
              <div className="space-y-3">
                {researchAreas.map((area, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-white/40 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span className="text-white/70 text-sm">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="border-t border-white/10 mt-12 pt-8">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
              <p className="text-white/80 font-medium italic">
                "Where Human Experience Meets Technological Innovation"
              </p>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-white/60 text-sm mb-4 md:mb-0">
              © 2024 Human Computer Interaction Lab, University of Rajshahi. All rights reserved.
            </div>
            <div className="flex items-center space-x-6">
              <a
                href="https://ru.ac.bd"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors duration-200 text-sm flex items-center"
              >
                University Website
                <ExternalLink className="ml-1 h-3 w-3" />
              </a>
              <a
                href="https://ru.ac.bd/cse"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors duration-200 text-sm flex items-center"
              >
                CSE Department
                <ExternalLink className="ml-1 h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
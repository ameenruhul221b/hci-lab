import { ExternalLink, Github, Award, Users, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const featuredProjects = [
    {
      title: "Tap-Typing vs. Gesture-Typing vs. Tap-Gesture-Combo in Virtual Reality",
      subtitle: "An Empirical Study in Search of a Fast Text-Entry Technique",
      investigators: ["Md. Tanvir Hossain", "Mohd Ruhul Ameen"],
      year: "2024",
      description: "This comprehensive study addresses one of the most pressing challenges in VR interface design: efficient text entry. Our research systematically evaluates three primary text entry methods to identify optimal solutions for different VR applications.",
      highlights: [
        "Comparative analysis of VR text entry methods",
        "User studies with diverse demographics",
        "Performance metrics and ergonomic assessment",
        "Design guidelines for VR interfaces"
      ],
      impact: "Directly influences development of user-friendly VR interfaces for productivity applications",
      type: "Research Study"
    },
    {
      title: "Analysis of Bangla Alphabet Recognition Using EEG Signal and Deep Learning",
      investigators: ["Md. Safaiat Hossain", "Mohd. Ruhul Ameen"],
      year: "2024",
      description: "Pioneering work representing the first comprehensive study of Bangla alphabet recognition through brain-computer interface technology, opening new possibilities for assistive communication devices for Bengali speakers.",
      highlights: [
        "EEG signal processing and feature extraction",
        "Deep learning models for neural data",
        "Language-specific BCI adaptations",
        "Real-time alphabet recognition system"
      ],
      impact: "Makes BCI technology accessible to Bengali-speaking populations worldwide",
      type: "Research Study"
    },
    {
      title: "Beyond Screen Time: Analyzing Teenage Cognitive Engagement",
      subtitle: "EEG-BCI Technology for Digital Media Analysis",
      investigators: ["Mohd. Ruhul Ameen"],
      year: "2023",
      description: "Understanding the neurological impact of digital media consumption among teenagers through real-time brain activity measurement and cognitive engagement analysis.",
      highlights: [
        "Real-time EEG monitoring during video consumption",
        "Quantitative engagement metrics",
        "Content-brain response correlation analysis",
        "Educational implications for digital wellness"
      ],
      impact: "Provides evidence-based insights for educational content creation and digital wellness",
      type: "Masters Thesis"
    }
  ];

  const developmentProjects = [
    {
      title: "Heal Over Virtual Reality",
      subtitle: "AR and VR based Medical Training and Simulation System",
      team: ["Md Fatin Ishmam", "Srikanto Rajbongshi", "Md Mustafizur Rahman"],
      description: "Comprehensive medical education platform combining VR, AR, and traditional learning methods for immersive medical training experiences.",
      features: [
        "Surgical procedure simulations",
        "Interactive 3D anatomy models",
        "Haptic feedback systems",
        "Collaborative learning environments"
      ],
      type: "Development Project"
    },
    {
      title: "Low-Cost Prosthetic Hand",
      subtitle: "3D Printing, Arduino and EMG Sensors",
      team: ["Umme Farha Mahzabin"],
      studentId: "Roll: 16 12 37 61 15",
      description: "Addressing the need for affordable prosthetic devices using 3D printing technology, Arduino microcontrollers, and EMG sensors.",
      features: [
        "Custom 3D printed components",
        "EMG sensor integration",
        "Arduino control system",
        "Open source design"
      ],
      impact: "Dramatically reduced cost compared to commercial prosthetics",
      type: "BSC Project"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-950">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Featured Research Projects
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Our groundbreaking research projects are advancing the field of human-computer 
              interaction and creating practical solutions for real-world challenges.
            </p>
          </div>

          {/* Featured Research Projects */}
          <div className="space-y-12 mb-20">
            <h3 className="text-2xl font-bold text-white mb-8">Research Studies</h3>
            {featuredProjects.map((project, index) => (
              <div 
                key={index}
                className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-500"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    {/* Project Header */}
                    <div className="mb-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1 text-xs font-medium text-white">
                          {project.type}
                        </span>
                        <span className="text-white/60 text-sm flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {project.year}
                        </span>
                      </div>
                      <h4 className="text-xl font-bold text-white mb-2">
                        {project.title}
                      </h4>
                      {project.subtitle && (
                        <p className="text-white/70 text-lg mb-3">{project.subtitle}</p>
                      )}
                      <div className="flex items-center text-white/60 text-sm">
                        <Users className="h-4 w-4 mr-2" />
                        {project.investigators.join(", ")}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-white/80 leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Impact */}
                    {project.impact && (
                      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 mb-6">
                        <div className="flex items-center mb-2">
                          <Award className="h-5 w-5 text-white mr-2" />
                          <span className="text-white font-medium">Impact</span>
                        </div>
                        <p className="text-white/70 text-sm">{project.impact}</p>
                      </div>
                    )}
                  </div>

                  <div>
                    {/* Highlights */}
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                      <h5 className="text-white font-semibold mb-4">Key Highlights</h5>
                      <div className="space-y-3">
                        {project.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-start">
                            <div className="w-2 h-2 bg-white/40 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                            <span className="text-white/70 text-sm">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Development Projects */}
          <div className="space-y-12">
            <h3 className="text-2xl font-bold text-white mb-8">Major Development Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {developmentProjects.map((project, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-500"
                >
                  {/* Project Header */}
                  <div className="mb-6">
                    <span className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1 text-xs font-medium text-white mb-3 inline-block">
                      {project.type}
                    </span>
                    <h4 className="text-xl font-bold text-white mb-2">
                      {project.title}
                    </h4>
                    {project.subtitle && (
                      <p className="text-white/70 mb-3">{project.subtitle}</p>
                    )}
                    <div className="flex items-center text-white/60 text-sm">
                      <Users className="h-4 w-4 mr-2" />
                      {project.team.join(", ")}
                    </div>
                    {project.studentId && (
                      <p className="text-white/50 text-xs mt-1">{project.studentId}</p>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-white/80 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-white/40 rounded-full mr-3"></div>
                        <span className="text-white/70 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Impact */}
                  {project.impact && (
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4">
                      <p className="text-white/70 text-sm">{project.impact}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
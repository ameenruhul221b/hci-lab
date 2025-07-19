import { Brain, Eye, Cpu, Heart, Zap, Activity } from 'lucide-react';

const Research = () => {
  const researchAreas = [
    {
      icon: Brain,
      title: "Brain-Computer Interface & Neurological Computing",
      description: "EEG-Based Cognitive Analysis",
      details: "Our lab pioneers the use of electroencephalography (EEG) to understand cognitive processes during human-computer interaction. We analyze brain signals to assess mental workload, attention levels, and emotional states during various computing tasks.",
      highlights: [
        "Bangla Alphabet Recognition Through Neural Signals",
        "Teenage Cognitive Engagement Studies",
        "Real-time Brain Signal Processing"
      ]
    },
    {
      icon: Eye,
      title: "Virtual and Augmented Reality Research",
      description: "Text Entry in Virtual Environments",
      details: "Our groundbreaking research compares different text input methods in VR environments, analyzing the efficiency and user experience of tap-typing, gesture-typing, and hybrid approaches.",
      highlights: [
        "Immersive Medical Training Systems",
        "Spatial Computing Interfaces",
        "VR Text Input Optimization"
      ]
    },
    {
      icon: Cpu,
      title: "Assistive Technology Innovation",
      description: "Low-Cost Prosthetic Solutions",
      details: "We combine 3D printing technology with Arduino microcontrollers and EMG sensors to create affordable prosthetic hands, making advanced assistive technology accessible to underserved communities.",
      highlights: [
        "3D Printed Prosthetic Hands",
        "EMG Sensor Integration",
        "Accessibility-Focused Design"
      ]
    }
  ];

  return (
    <section id="research" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Research Excellence
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Our interdisciplinary research spans brain-computer interfaces, virtual reality, 
              and assistive technology, pushing the boundaries of human-computer interaction.
            </p>
          </div>

          {/* Research Areas */}
          <div className="space-y-12">
            {researchAreas.map((area, index) => (
              <div 
                key={index}
                className="group bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-500"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                  {/* Icon and Title */}
                  <div className="lg:col-span-1">
                    <div className="flex items-center mb-4">
                      <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 mr-4 group-hover:bg-white/20 transition-all duration-300">
                        <area.icon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-white transition-colors duration-300">
                          {area.title}
                        </h3>
                        <p className="text-white/60 text-sm mt-1">{area.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="lg:col-span-2">
                    <p className="text-white/80 leading-relaxed mb-6">
                      {area.details}
                    </p>
                    
                    {/* Highlights */}
                    <div className="space-y-3">
                      {area.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center">
                          <div className="w-2 h-2 bg-white/40 rounded-full mr-3"></div>
                          <span className="text-white/70 font-medium">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {[
              { icon: Zap, value: "50+", label: "Research Projects" },
              { icon: Heart, value: "20+", label: "Publications" },
              { icon: Activity, value: "15+", label: "Patents Filed" },
              { icon: Brain, value: "100+", label: "Students Trained" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                  <stat.icon className="h-8 w-8 text-white mx-auto mb-4" />
                  <div className="text-2xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-white/60 text-sm">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;
import { Cpu, Eye, Brain, Activity, Zap, Settings } from 'lucide-react';

const Facilities = () => {
  const facilities = [
    {
      icon: Brain,
      title: "EEG Laboratory",
      description: "Advanced neurological signal processing and analysis",
      equipment: [
        "64-channel and 128-channel EEG recording equipment",
        "Signal processing workstations",
        "Shielded recording environment",
        "Synchronized audio-visual presentation systems"
      ]
    },
    {
      icon: Eye,
      title: "Virtual Reality Development Suite",
      description: "Cutting-edge VR/AR development and testing",
      equipment: [
        "Latest generation Oculus, HTC Vive, and Varjo systems",
        "Haptic devices for tactile experiences",
        "Full-body tracking systems",
        "High-end VR-capable workstations"
      ]
    },
    {
      icon: Settings,
      title: "Assistive Technology Workshop",
      description: "Rapid prototyping and device development",
      equipment: [
        "Multi-material 3D printers",
        "Arduino and Raspberry Pi development kits",
        "EMG and physiological sensors",
        "Electronics prototyping equipment"
      ]
    },
    {
      icon: Activity,
      title: "Biometric Monitoring Systems",
      description: "Comprehensive physiological data collection",
      equipment: [
        "Heart rate and skin conductance monitors",
        "Eye tracking equipment",
        "Multi-channel data acquisition systems",
        "Advanced statistical analysis software"
      ]
    }
  ];

  const capabilities = [
    {
      icon: Cpu,
      title: "High-Performance Computing",
      description: "Advanced processing power for complex simulations and data analysis"
    },
    {
      icon: Zap,
      title: "Real-Time Processing",
      description: "Low-latency systems for live brain-computer interface applications"
    },
    {
      icon: Brain,
      title: "Multi-Modal Integration",
      description: "Synchronized data collection from multiple sensing modalities"
    }
  ];

  return (
    <section id="facilities" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Laboratory Facilities
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Our state-of-the-art research infrastructure enables cutting-edge investigations 
              in human-computer interaction, brain-computer interfaces, and assistive technology.
            </p>
          </div>

          {/* Main Facilities */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {facilities.map((facility, index) => (
              <div 
                key={index}
                className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-500"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 mr-4">
                    <facility.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{facility.title}</h3>
                    <p className="text-white/60 text-sm mt-1">{facility.description}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {facility.equipment.map((item, idx) => (
                    <div key={idx} className="flex items-start">
                      <div className="w-2 h-2 bg-white/40 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-white/70 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Capabilities */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Research Capabilities</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {capabilities.map((capability, index) => (
                <div 
                  key={index}
                  className="text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                    <capability.icon className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-4">{capability.title}</h4>
                  <p className="text-white/70 text-sm leading-relaxed">{capability.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Infrastructure Highlights</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "128", label: "Channel EEG", unit: "Max" },
                { value: "10+", label: "VR Headsets", unit: "Latest Gen" },
                { value: "24/7", label: "Lab Access", unit: "Availability" },
                { value: "50+", label: "Workstations", unit: "High-Performance" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-white/70 text-sm">{stat.label}</div>
                  <div className="text-white/50 text-xs mt-1">{stat.unit}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facilities;
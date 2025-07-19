import { Target, Lightbulb, Users, Globe } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-950">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              About Our Lab
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              The Human Computer Interaction Lab represents a convergence of computer science, 
              psychology, design, and neuroscience. Our interdisciplinary approach focuses on 
              understanding human behavior, cognitive processes, and physiological responses.
            </p>
          </div>

          {/* Mission Card */}
          <div className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-12">
            <div className="flex items-center mb-6">
              <Target className="h-8 w-8 text-white mr-4" />
              <h3 className="text-2xl font-bold text-white">Our Mission</h3>
            </div>
            <p className="text-lg text-white/80 leading-relaxed">
              To advance the field of human-computer interaction through cutting-edge research, 
              innovative applications, and practical solutions that improve how people interact 
              with technology in their daily lives.
            </p>
          </div>

          {/* Research Focus Areas */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Research Focus Areas</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                'Virtual and Augmented Reality Interfaces',
                'Brain-Computer Interface (BCI) Technology',
                'Neurological Signal Processing',
                'Medical Training and Simulation Systems',
                'Assistive Technology Development',
                'Text Entry and Input Methods',
                'Cognitive Load Assessment',
                'Physiological Computing'
              ].map((area, index) => (
                <div 
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group"
                >
                  <p className="text-white/80 font-medium group-hover:text-white transition-colors duration-300">
                    {area}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-white mb-4">Innovation</h4>
              <p className="text-white/70 leading-relaxed">
                Pioneering new approaches to human-computer interaction through 
                cutting-edge research and development.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-white mb-4">Collaboration</h4>
              <p className="text-white/70 leading-relaxed">
                Interdisciplinary approach combining computer science, psychology, 
                design, and neuroscience expertise.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-white mb-4">Impact</h4>
              <p className="text-white/70 leading-relaxed">
                Creating practical solutions that improve lives and advance 
                our understanding of human-technology interaction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
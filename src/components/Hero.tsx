import { ArrowDown, Zap, Brain, Eye, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 animate-pulse">
          <div className="w-2 h-2 bg-white/30 rounded-full"></div>
        </div>
        <div className="absolute top-40 right-20 animate-pulse delay-1000">
          <div className="w-1 h-1 bg-white/40 rounded-full"></div>
        </div>
        <div className="absolute bottom-40 left-20 animate-pulse delay-2000">
          <div className="w-1.5 h-1.5 bg-white/25 rounded-full"></div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
            <Zap className="h-4 w-4 text-white" />
            <span className="text-white/90 text-sm font-medium">Bridging Human Experience and Digital Innovation</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Human Computer
            <span className="block bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Interaction Lab
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/70 mb-8 leading-relaxed max-w-3xl mx-auto">
            Department of Computer Science and Engineering
            <span className="block text-lg md:text-xl text-white/60 mt-2">
              University of Rajshahi
            </span>
          </p>

          {/* Description */}
          <p className="text-lg text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed">
            We are at the forefront of research and development in human-centered technology, 
            exploring how humans interact with computers and designing innovative solutions 
            that enhance user experience across digital platforms.
          </p>

          {/* Research Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
              <Brain className="h-8 w-8 text-white mb-4 mx-auto" />
              <h3 className="text-white font-semibold mb-2">Brain-Computer Interface</h3>
              <p className="text-white/60 text-sm">EEG-based cognitive analysis and neural signal processing</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
              <Eye className="h-8 w-8 text-white mb-4 mx-auto" />
              <h3 className="text-white font-semibold mb-2">VR/AR Research</h3>
              <p className="text-white/60 text-sm">Immersive interfaces and medical training systems</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
              <Cpu className="h-8 w-8 text-white mb-4 mx-auto" />
              <h3 className="text-white font-semibold mb-2">Assistive Technology</h3>
              <p className="text-white/60 text-sm">Low-cost prosthetics and accessibility solutions</p>
            </div>
          </div>

          {/* CTA Button */}
          <Button 
            onClick={scrollToAbout}
            size="lg"
            className="bg-white text-black hover:bg-white/90 transition-all duration-300 font-semibold px-8 py-3 rounded-full"
          >
            Explore Our Research
            <ArrowDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/30 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
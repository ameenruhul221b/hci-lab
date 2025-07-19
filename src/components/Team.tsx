import { Users, GraduationCap, Award, Globe } from 'lucide-react';

const Team = () => {
  const teamCategories = [
    {
      icon: Users,
      title: "Faculty Leadership",
      description: "Leading researchers with international recognition",
      members: ["Principal Investigators", "Senior Research Faculty", "Visiting Professors"]
    },
    {
      icon: GraduationCap,
      title: "Graduate Students",
      description: "Masters and PhD candidates conducting cutting-edge research",
      members: ["PhD Candidates", "Masters Students", "Research Assistants"]
    },
    {
      icon: Award,
      title: "Undergraduate Researchers",
      description: "Talented students gaining hands-on research experience",
      members: ["BSc Project Students", "Research Interns", "Student Volunteers"]
    },
    {
      icon: Globe,
      title: "Collaborative Network",
      description: "International partnerships and visiting scholars",
      members: ["Visiting Scholars", "Industry Partners", "International Collaborators"]
    }
  ];

  const achievements = [
    {
      title: "Research Excellence",
      description: "Our students regularly win awards at national and international research competitions"
    },
    {
      title: "Industry Placement",
      description: "Graduates secure positions at leading technology companies and research institutions"
    },
    {
      title: "Academic Success",
      description: "Many graduates pursue advanced degrees at prestigious universities worldwide"
    },
    {
      title: "Entrepreneurship",
      description: "Alumni have started successful companies based on their research innovations"
    }
  ];

  return (
    <section id="team" className="py-20 bg-gray-950">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Research Team
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Our diverse and talented team brings together expertise from multiple disciplines 
              to advance the field of human-computer interaction through collaborative research.
            </p>
          </div>

          {/* Team Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {teamCategories.map((category, index) => (
              <div 
                key={index}
                className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-500"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 mr-4">
                    <category.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{category.title}</h3>
                    <p className="text-white/60 text-sm mt-1">{category.description}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {category.members.map((member, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className="w-2 h-2 bg-white/40 rounded-full mr-3"></div>
                      <span className="text-white/70 font-medium">{member}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Collaborative Networks */}
          <div className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-16">
            <h3 className="text-2xl font-bold text-white mb-6">Collaborative Networks</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "International Partnerships",
                "Industry Connections", 
                "Interdisciplinary Teams",
                "Student Organizations"
              ].map((network, index) => (
                <div key={index} className="text-center">
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 mb-3">
                    <Globe className="h-6 w-6 text-white mx-auto" />
                  </div>
                  <span className="text-white/80 text-sm font-medium">{network}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Student Success Stories */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Student Success Stories</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
                >
                  <h4 className="text-lg font-bold text-white mb-3">{achievement.title}</h4>
                  <p className="text-white/70 text-sm leading-relaxed">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Join Our Research Team</h3>
              <p className="text-white/70 mb-6 max-w-2xl mx-auto">
                We welcome passionate researchers, students, and collaborators who share our vision 
                of advancing human-computer interaction through innovative research and development.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-6 py-3">
                  <span className="text-white font-medium">Student Inquiries</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-6 py-3">
                  <span className="text-white font-medium">Research Collaborations</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
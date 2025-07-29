import React from 'react';
import { Code, Palette, Rocket } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8 text-blue-600" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code following best practices."
    },
    {
      icon: <Palette className="w-8 h-8 text-blue-600" />,
      title: "User-Centered Design",
      description: "Creating intuitive interfaces that prioritize user experience and accessibility."
    },
    {
      icon: <Rocket className="w-8 h-8 text-blue-600" />,
      title: "Performance Focused",
      description: "Optimizing applications for speed, SEO, and superior user engagement."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-slate-800 mb-6">
              Crafting Digital Experiences That Matter
            </h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              With over 5 years of experience in web development, I specialize in creating 
              robust applications using modern technologies. My journey began with a curiosity 
              about how things work on the web, and it has evolved into a passion for building 
              solutions that solve real-world problems.
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed">
              I believe in the power of collaboration, continuous learning, and staying 
              updated with the latest industry trends. When I'm not coding, you'll find me 
              exploring new technologies, contributing to open source projects, or mentoring 
              aspiring developers.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-slate-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-blue-600 mb-1">50+</div>
                <div className="text-slate-600">Projects Completed</div>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-blue-600 mb-1">5+</div>
                <div className="text-slate-600">Years Experience</div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            {highlights.map((item, index) => (
              <div 
                key={index} 
                className="flex items-start space-x-4 p-6 bg-slate-50 rounded-xl hover:shadow-lg transition-shadow duration-200"
              >
                <div className="flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-slate-800 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      period: "2022 - Present",
      description: [
        "Led development of scalable web applications serving 100K+ users",
        "Architected and implemented microservices using Node.js and Docker",
        "Mentored junior developers and conducted code reviews",
        "Improved application performance by 40% through optimization"
      ],
      technologies: ["React", "Node.js", "TypeScript", "AWS", "PostgreSQL"]
    },
    {
      title: "Full Stack Developer",
      company: "Digital Innovations Inc",
      location: "New York, NY",
      period: "2020 - 2022",
      description: [
        "Developed responsive web applications using React and Express.js",
        "Collaborated with UX/UI designers to implement pixel-perfect designs",
        "Integrated third-party APIs and payment gateways",
        "Participated in agile development cycles and sprint planning"
      ],
      technologies: ["React", "Express.js", "MongoDB", "Stripe API", "Jest"]
    },
    {
      title: "Frontend Developer",
      company: "StartupHub",
      location: "Austin, TX",
      period: "2019 - 2020",
      description: [
        "Built modern, responsive user interfaces using React and CSS",
        "Worked closely with backend developers to integrate APIs",
        "Optimized applications for performance and accessibility",
        "Contributed to company's design system and component library"
      ],
      technologies: ["React", "JavaScript", "Sass", "Webpack", "Git"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Work Experience</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            My professional journey and the impact I've made at various organizations
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-blue-200"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                
                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}>
                  <div className="bg-slate-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <h3 className="text-xl font-bold text-slate-800 mb-2 sm:mb-0">
                        {exp.title}
                      </h3>
                      <div className="flex items-center text-slate-500 text-sm">
                        <Calendar size={16} className="mr-1" />
                        {exp.period}
                      </div>
                    </div>
                    
                    <div className="flex items-center text-blue-600 font-semibold mb-2">
                      <span>{exp.company}</span>
                    </div>
                    
                    <div className="flex items-center text-slate-500 text-sm mb-4">
                      <MapPin size={16} className="mr-1" />
                      {exp.location}
                    </div>
                    
                    <ul className="space-y-2 mb-6">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="text-slate-600 flex items-start">
                          <span className="text-blue-600 mr-2 font-bold">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
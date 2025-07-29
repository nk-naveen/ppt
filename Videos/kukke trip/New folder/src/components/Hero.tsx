import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-4xl font-bold shadow-2xl">
            JD
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent">
          John Doe
        </h1>
        
        <p className="text-xl md:text-2xl text-blue-200 mb-8 font-light">
          Full Stack Developer & UI/UX Designer
        </p>
        
        <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-12 leading-relaxed">
          Passionate about creating beautiful, functional, and user-centered digital experiences. 
          I combine technical expertise with creative design to build applications that make a difference.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg">
            View My Work
          </button>
          <button className="border-2 border-white hover:bg-white hover:text-slate-900 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200">
            Get In Touch
          </button>
        </div>
        
        <div className="flex justify-center space-x-6 mb-16">
          <a href="#" className="text-slate-300 hover:text-white transition-colors duration-200 transform hover:scale-110">
            <Github size={24} />
          </a>
          <a href="#" className="text-slate-300 hover:text-white transition-colors duration-200 transform hover:scale-110">
            <Linkedin size={24} />
          </a>
          <a href="#" className="text-slate-300 hover:text-white transition-colors duration-200 transform hover:scale-110">
            <Mail size={24} />
          </a>
        </div>
        
        <button 
          onClick={scrollToAbout}
          className="animate-bounce text-slate-300 hover:text-white transition-colors duration-200"
        >
          <ArrowDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
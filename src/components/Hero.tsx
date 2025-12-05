import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold">
              <span className="block text-gray-300">Hi, I'm Bhumika</span>
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                Full Stack Developer
              </span>
            </h1>
            <p className="text-xl sm:text-xl text-gray-400 max-w-2xl mx-auto">
              I code. I deploy. I own what I create. <br></br>
            
            <span className="text-xl sm:text-2xl text-gray-400 max-w-2xl mx-auto">
              Building scalable web applications with modern technologies and creative solutions </span>
            </p>
          </div>

          <div className="flex items-center justify-center gap-6">
            <a
              href="https://github.com/Bhumika611"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 rounded-full hover:bg-slate-700 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/20"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/macharla-bhumika-4232922a4/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 rounded-full hover:bg-slate-700 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/20"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:bhumikamacharla@gmail.com"
              className="p-3 bg-slate-800 rounded-full hover:bg-slate-700 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/20"
            >
              <Mail size={24} />
            </a>
          </div>

          <div className="flex items-center justify-center gap-4 pt-8">
            <button
              onClick={scrollToContact}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full font-medium hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </button>
            <a
              href="/Macharla_Bhumika.pdf"
              target="C:\Users\bhumi\OneDrive\bhumi"
              className="px-8 py-3 border-2 border-cyan-500 rounded-full font-medium hover:bg-cyan-500/10 transition-all duration-300 hover:scale-105"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-cyan-400" size={32} />
      </div>
    </section>
  );
}
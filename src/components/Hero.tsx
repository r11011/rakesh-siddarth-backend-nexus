
import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center pt-16 px-4 md:px-6">
      <div className="max-w-4xl">
        <p className="text-portfolio-green mb-5 opacity-0 animate-fadeIn" style={{ animationDelay: '100ms' }}>
          Hi, my name is
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-portfolio-lightestSlate mb-4 opacity-0 animate-fadeIn" style={{ animationDelay: '200ms' }}>
          Rakesh Siddarth.
        </h1>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-portfolio-slate mb-6 opacity-0 animate-fadeIn" style={{ animationDelay: '300ms' }}>
          I build backend systems that solve business problems.
        </h2>
        <p className="text-portfolio-slate max-w-xl text-lg mb-12 opacity-0 animate-fadeIn" style={{ animationDelay: '400ms' }}>
          I'm a backend engineer with a finance background and a founder's mindset. I specialize in 
          building scalable APIs, automation systems, and dashboards that solve real business problems — 
          particularly in FinTech, Retail, and Crypto.
        </p>
        <div className="opacity-0 animate-fadeIn" style={{ animationDelay: '500ms' }}>
          <a 
            href="#projects"
            className="inline-block border-2 border-portfolio-green text-portfolio-green px-6 py-3 rounded text-lg font-medium hover:bg-portfolio-green/10 transition-colors"
          >
            View My Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;


import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 md:px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="section-heading">About Me</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <p className="mb-4">
              I'm a backend engineer with a unique blend of technical expertise and business acumen. 
              With experience in finance and a founder's mindset, I don't just write code — I build 
              solutions that directly address business challenges.
            </p>
            
            <p className="mb-4">
              My work focuses on creating robust backend systems, APIs, and data pipelines that power 
              critical business operations. I'm particularly passionate about financial technology, 
              retail systems, and cryptocurrency infrastructure.
            </p>
            
            <p className="mb-4">
              I take pride in translating complex business requirements into elegant, efficient technical 
              solutions. Whether it's automating financial reporting, streamlining retail operations, or 
              building cryptocurrency analytics tools, I bring both technical skill and business insight to every project.
            </p>
          </div>
          
          <div className="relative group">
            <div className="bg-portfolio-navy w-full h-80 rounded-lg flex items-center justify-center overflow-hidden border-2 border-portfolio-green/30">
              <img 
                src="/lovable-uploads/e918617a-5385-4859-8881-3b66b6385b4f.png" 
                alt="Rakesh Siddarth" 
                className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

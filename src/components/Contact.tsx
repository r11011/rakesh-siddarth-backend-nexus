
import React from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Linkedin, Github, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 md:px-6">
      <div className="container mx-auto max-w-2xl text-center">
        <h2 className="text-portfolio-green text-lg font-medium mb-2">What's Next?</h2>
        <h3 className="text-4xl font-bold text-portfolio-lightestSlate mb-6">Let's Connect</h3>
        
        <p className="text-portfolio-slate mb-10 mx-auto">
          I'm open to collaborations, API work, and backend contracts where business and tech meet. 
          Whether you need help with a specific project or want to discuss potential collaborations,
          I'm just a message away.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
          <Button 
            className="bg-transparent text-portfolio-green border border-portfolio-green hover:bg-portfolio-green/10 py-6 px-8 space-x-2 w-full sm:w-auto"
            variant="outline"
            asChild
          >
            <a href="mailto:agrowdynamics@gmail.com">
              <Mail className="h-5 w-5 mr-2" />
              Send Email
            </a>
          </Button>
          
          <Button 
            className="bg-transparent text-portfolio-green border border-portfolio-green hover:bg-portfolio-green/10 py-6 px-8 space-x-2 w-full sm:w-auto"
            variant="outline"
            asChild
          >
            <a href="https://www.linkedin.com/in/srrakesh/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5 mr-2" />
              LinkedIn
            </a>
          </Button>
          
          <Button 
            className="bg-transparent text-portfolio-green border border-portfolio-green hover:bg-portfolio-green/10 py-6 px-8 space-x-2 w-full sm:w-auto"
            variant="outline"
            asChild
          >
            <a href="https://github.com/r11011/" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5 mr-2" />
              GitHub
            </a>
          </Button>
          
          <Button 
            className="bg-transparent text-portfolio-green border border-portfolio-green hover:bg-portfolio-green/10 py-6 px-8 space-x-2 w-full sm:w-auto"
            variant="outline"
            asChild
          >
            <a href="tel:+919620447336">
              <Phone className="h-5 w-5 mr-2" />
              Call
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;

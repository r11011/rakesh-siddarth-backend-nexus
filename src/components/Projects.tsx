
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Database, BarChart, Server } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Smart Retail Financial Dashboard",
      description: "Live dashboard for multi-store retail client tracking inventory, vendor compliance, and tax metrics.",
      tech: ["Power BI", "Node.js", "REST API"],
      icon: <BarChart className="w-10 h-10 text-portfolio-green" />,
      outcome: "Reduced manual reporting by 80%, improved decision turnaround time by 2x.",
      github: "#"
    },
    {
      title: "Expense Tracker API",
      description: "Backend API with user authentication, transaction CRUD operations, and role-based access control.",
      tech: ["Node.js", "Express", "MongoDB", "JWT"],
      icon: <Server className="w-10 h-10 text-portfolio-green" />,
      outcome: "Used by a founder-led finance tool startup as MVP backend.",
      github: "#"
    },
    {
      title: "Crypto Signal Engine",
      description: "Aggregates sentiment from Twitter + Telegram to identify early token trends.",
      tech: ["Python", "Flask", "Pandas", "MongoDB"],
      icon: <Database className="w-10 h-10 text-portfolio-green" />,
      outcome: "Helped early-stage crypto founders test launch timing based on live sentiment data.",
      github: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 md:px-6 bg-portfolio-lightNavy/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="section-heading">Featured Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="project-card border-portfolio-lightestNavy bg-portfolio-lightNavy">
              <CardContent className="p-6">
                <div className="mb-4 flex justify-between items-start">
                  <div>{project.icon}</div>
                  <a href={project.github} className="text-portfolio-lightSlate hover:text-portfolio-green">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
                
                <h3 className="text-xl font-semibold text-portfolio-lightestSlate mb-3">{project.title}</h3>
                <p className="text-portfolio-slate mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <Badge key={i} variant="outline" className="bg-portfolio-navy text-portfolio-green border-portfolio-green/20">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="mt-auto">
                  <p className="text-sm italic text-portfolio-lightSlate">{project.outcome}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 text-center">
          <h3 className="text-xl font-semibold text-portfolio-lightestSlate mb-4">Projects in Progress</h3>
          
          <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <div className="p-4 border border-dashed border-portfolio-lightestNavy rounded-lg">
              <h4 className="font-medium text-portfolio-lightestSlate">B2B Service Ops Engine</h4>
              <p className="text-sm text-portfolio-slate">Workflow + billing backend for service businesses (Node.js + Postgres)</p>
            </div>
            
            <div className="p-4 border border-dashed border-portfolio-lightestNavy rounded-lg">
              <h4 className="font-medium text-portfolio-lightestSlate">Xygenix Tech Launch Tools</h4>
              <p className="text-sm text-portfolio-slate">Internal templates for API-first product builds (repo coming soon)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

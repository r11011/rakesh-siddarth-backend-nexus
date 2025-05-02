
import React from 'react';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      name: "Backend Engineering",
      skills: ["Node.js", "Express", "REST APIs", "MongoDB", "Postgres", "Python", "Flask", "API Design", "Microservices"]
    },
    {
      name: "Data & Visualization",
      skills: ["Power BI", "Pandas", "Data Pipelines", "ETL", "SQL", "NoSQL", "MongoDB Aggregations"]
    },
    {
      name: "Auth & Security",
      skills: ["JWT", "OAuth", "Role-based permissions", "API Security", "Data Encryption"]
    },
    {
      name: "Financial Workflows",
      skills: ["Reconciliation", "Tax", "Reporting Automation", "Financial Modeling", "Payment Processing"]
    },
    {
      name: "Product Strategy",
      skills: ["MVP Design", "Founder Collaboration", "Lean Systems", "Technical Architecture", "System Design"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 md:px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="section-heading">Skills Demonstrated</h2>
        
        <div className="space-y-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl text-portfolio-lightestSlate font-medium mb-3">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <Badge key={i} className="bg-portfolio-lightNavy hover:bg-portfolio-lightestNavy text-portfolio-lightestSlate border-none py-1.5">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 p-6 border border-portfolio-lightestNavy rounded-lg bg-portfolio-lightNavy/50">
          <h3 className="text-xl text-portfolio-lightestSlate font-medium mb-3">My Development Philosophy</h3>
          <p className="text-portfolio-slate">
            I believe that the best technical solutions are those that directly solve business problems. 
            My approach combines technical excellence with business acumen, ensuring that every line of code 
            contributes to your organization's goals and delivers measurable value.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;

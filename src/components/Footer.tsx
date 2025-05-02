
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-6 px-4 text-center text-portfolio-slate text-sm border-t border-portfolio-lightestNavy">
      <div className="container mx-auto">
        <p>© {new Date().getFullYear()} Rakesh Siddarth. All Rights Reserved.</p>
        <p className="mt-2 text-xs text-portfolio-slate/70">
          Built with React, Tailwind CSS, and ShadCN UI components
        </p>
      </div>
    </footer>
  );
};

export default Footer;

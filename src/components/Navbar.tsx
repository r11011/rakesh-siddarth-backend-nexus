
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-portfolio-navy/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
      )}
    >
      <nav className="container mx-auto flex items-center justify-between px-4 md:px-6">
        <a href="#" className="text-portfolio-green text-xl md:text-2xl font-bold tracking-wider">
          RS<span className="text-portfolio-white">.</span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <li key={link.name} className="opacity-0 animate-fadeIn" style={{ animationDelay: `${index * 100}ms` }}>
              <a
                href={link.href}
                className="text-portfolio-lightSlate hover:text-portfolio-green transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
          <li className="opacity-0 animate-fadeIn" style={{ animationDelay: `${navLinks.length * 100}ms` }}>
            <a
              href="mailto:agrowdynamics@gmail.com"
              className="border border-portfolio-green text-portfolio-green px-4 py-2 rounded hover:bg-portfolio-green/10 transition-colors"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-portfolio-lightSlate"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-portfolio-lightNavy p-4 shadow-lg">
          <ul className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="block text-portfolio-lightSlate hover:text-portfolio-green transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <a
                href="mailto:agrowdynamics@gmail.com"
                className="inline-block border border-portfolio-green text-portfolio-green px-4 py-2 rounded hover:bg-portfolio-green/10 transition-colors"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;

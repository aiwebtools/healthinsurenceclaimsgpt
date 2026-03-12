import React, { useState, useEffect, useCallback } from 'react';
import Logo from './Logo';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  const navLinks = [
    {
      href: "https://chatgpt.com/g/g-67d9e1c7099881918c9c42b9571f9c9e-health-insurance-claims-gpt",
      label: "Health Insurance Claims GPT",
      gradient: "from-yellow-300 to-amber-500 hover:from-yellow-400 hover:to-amber-600",
      external: true,
    },
    {
      href: "https://insuranceclaimsgpt.lovable.app/?via=aiwebtools",
      label: "Auto Insurance Claims GPT",
      gradient: "from-gray-300 to-gray-500 hover:from-gray-400 hover:to-gray-600",
      external: true,
    },
    {
      href: "https://medicalbillinggpt.lovable.app/?via=aiwebtools",
      label: "Medical Billing & Coding GPT",
      gradient: "from-cyan-300 to-blue-500 hover:from-cyan-400 hover:to-blue-600",
      external: true,
    },
    { href: "#faq", label: "FAQ", external: false },
    { href: "#disclaimer", label: "Disclaimer", external: false },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-2 sm:py-3 bg-cyber-dark/80 backdrop-blur-md shadow-md' 
          : 'py-3 sm:py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
        <a href="/" className="z-50 shrink-0">
          <Logo />
        </a>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden z-50 p-2 -mr-2 touch-manipulation"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-white" />
          ) : (
            <Menu className="h-6 w-6 text-white" />
          )}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={
                link.gradient
                  ? `text-xs lg:text-sm transition-colors duration-200 bg-gradient-to-r ${link.gradient} bg-clip-text text-transparent font-semibold hover:scale-105 transform`
                  : "text-xs lg:text-sm text-white/80 hover:text-white transition-colors duration-200"
              }
              {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              {link.label}
            </a>
          ))}
          <a 
            href="https://aiwebtools.lovable.app/?via=aiwebtools" 
            className="cyber-button-filled text-xs lg:text-sm whitespace-nowrap"
            target="_blank"
            rel="noopener noreferrer"
          >
            More AI Tools
          </a>
        </nav>

        {/* Mobile Navigation Overlay */}
        <div 
          className={`fixed inset-0 bg-cyber-dark/95 backdrop-blur-lg flex flex-col items-center justify-center transition-opacity duration-200 md:hidden ${
            isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
          style={{ zIndex: 40 }}
        >
          <nav className="flex flex-col items-center space-y-6 w-full px-8 max-w-sm">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={
                  link.gradient
                    ? `text-base sm:text-lg bg-gradient-to-r ${link.gradient} bg-clip-text text-transparent font-semibold hover:scale-105 transform text-center`
                    : "text-base sm:text-lg text-white/80 hover:text-white transition-colors duration-200 text-center"
                }
                onClick={closeMenu}
                {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                {link.label}
              </a>
            ))}
            <a 
              href="https://aiwebtools.lovable.app/?via=aiwebtools" 
              className="cyber-button-filled w-full max-w-xs text-center"
              onClick={closeMenu}
              target="_blank"
              rel="noopener noreferrer"
            >
              More AI Tools
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

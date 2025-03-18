
import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { Menu, X } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-3 bg-cyber-dark/80 backdrop-blur-md shadow-md' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="z-50">
          <a href="/">
            <Logo />
          </a>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden z-50"
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
        <nav className="hidden md:flex items-center space-x-6">
          <a 
            href="https://chatgpt.com/g/g-67d9e1c7099881918c9c42b9571f9c9e-health-insurance-claims-gpt" 
            className="text-sm transition-colors duration-200 bg-gradient-to-r from-yellow-300 to-amber-500 bg-clip-text text-transparent font-semibold hover:from-yellow-400 hover:to-amber-600 hover:scale-105 transform"
            target="_blank"
            rel="noopener noreferrer"
          >
            Health Insurance Claims GPT
          </a>
          <a 
            href="https://insuranceclaimsgpt.lovable.app/?via=aiwebtools" 
            className="text-sm transition-colors duration-200 bg-gradient-to-r from-gray-300 to-gray-500 bg-clip-text text-transparent font-semibold hover:from-gray-400 hover:to-gray-600 hover:scale-105 transform"
            target="_blank"
            rel="noopener noreferrer"
          >
            Auto Insurance Claims GPT
          </a>
          <a 
            href="#faq" 
            className="text-sm text-white/80 hover:text-white transition-colors duration-200"
          >
            FAQ
          </a>
          <a 
            href="#disclaimer" 
            className="text-sm text-white/80 hover:text-white transition-colors duration-200"
          >
            Disclaimer
          </a>
          <a 
            href="https://www.aiwebtools.ai" 
            className="cyber-button-filled"
            target="_blank"
            rel="noopener noreferrer"
          >
            More AI Tools
          </a>
        </nav>

        {/* Mobile Navigation */}
        <div 
          className={`fixed inset-0 bg-cyber-dark/95 backdrop-blur-lg flex flex-col items-center justify-center transition-all duration-300 ${
            isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        >
          <nav className="flex flex-col items-center space-y-8 w-full px-6">
            <a 
              href="https://chatgpt.com/g/g-67d9e1c7099881918c9c42b9571f9c9e-health-insurance-claims-gpt" 
              className="text-lg bg-gradient-to-r from-yellow-300 to-amber-500 bg-clip-text text-transparent font-semibold hover:from-yellow-400 hover:to-amber-600 hover:scale-105 transform py-3 px-4 w-full text-center rounded-md bg-black/40 backdrop-blur-sm"
              onClick={() => setIsMenuOpen(false)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Health Insurance Claims GPT
            </a>
            <a 
              href="https://insuranceclaimsgpt.lovable.app/?via=aiwebtools" 
              className="text-lg bg-gradient-to-r from-gray-300 to-gray-500 bg-clip-text text-transparent font-semibold hover:from-gray-400 hover:to-gray-600 hover:scale-105 transform py-3 px-4 w-full text-center rounded-md bg-black/40 backdrop-blur-sm"
              onClick={() => setIsMenuOpen(false)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Auto Insurance Claims GPT
            </a>
            <a 
              href="#faq" 
              className="text-lg text-white hover:text-white transition-colors duration-200 py-3 px-4 w-full text-center rounded-md bg-black/40 backdrop-blur-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </a>
            <a 
              href="#disclaimer" 
              className="text-lg text-white hover:text-white transition-colors duration-200 py-3 px-4 w-full text-center rounded-md bg-black/40 backdrop-blur-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              Disclaimer
            </a>
            <a 
              href="https://www.aiwebtools.ai" 
              className="cyber-button-filled w-full justify-center py-3"
              onClick={() => setIsMenuOpen(false)}
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

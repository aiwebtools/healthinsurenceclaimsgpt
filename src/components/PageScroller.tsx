
import React, { useEffect, useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

const PageScroller: React.FC = () => {
  const [showScroller, setShowScroller] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      const scrolled = window.scrollY > 200;
      setShowScroller(scrolled);
    };

    // Initial check
    checkScroll();
    
    // Add scroll event listener
    window.addEventListener('scroll', checkScroll);
    
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollDown = () => {
    window.scrollTo({
      top: window.scrollY + 300,
      behavior: 'smooth'
    });
  };

  return (
    <div className={`fixed right-6 bottom-20 z-50 flex flex-col gap-2 transition-opacity duration-300 ${showScroller ? 'opacity-100' : 'opacity-0'}`}>
      <button 
        onClick={scrollToTop}
        className="p-2 rounded-full neo-blur hover:bg-cyber-purple/20 transition-all cyber-border"
        aria-label="Scroll to top"
      >
        <ChevronUp className="w-6 h-6 text-white" />
      </button>
      <button 
        onClick={scrollDown}
        className="p-2 rounded-full neo-blur hover:bg-cyber-purple/20 transition-all cyber-border"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-6 h-6 text-white" />
      </button>
    </div>
  );
};

export default PageScroller;


import React, { useState, useEffect } from 'react';
import { AlertTriangle, X } from 'lucide-react';

const ConsentModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  useEffect(() => {
    // Check if user has already agreed
    const hasAgreed = localStorage.getItem('disclaimerAgreed');
    
    if (!hasAgreed) {
      // Show modal after a short delay
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, []);
  
  const handleAgree = () => {
    localStorage.setItem('disclaimerAgreed', 'true');
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-md animate-scale-up glassmorphism border border-white/10 rounded-xl overflow-hidden">
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center">
              <AlertTriangle className="text-yellow-400 w-6 h-6 mr-2" />
              <h3 className="text-xl font-bold text-white">Disclaimer</h3>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white/60 hover:text-white transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="text-white/80 text-sm mb-6 space-y-3">
            <p>
              Health Insurance Claims GPT is provided for informational purposes only and is not a substitute for professional medical, legal, or financial advice.
            </p>
            <p>
              By continuing to use this website, you acknowledge that you have read and understood our full disclaimer, privacy policy, and terms of service.
            </p>
          </div>
          
          <div className="flex justify-end">
            <button 
              onClick={handleAgree}
              className="cyber-button-filled"
            >
              I Agree
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsentModal;

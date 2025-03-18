
import React from 'react';
import { Mail, Phone, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 md:py-16 relative overflow-hidden bg-black/50 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Health Insurance Claims GPT</h3>
            <p className="text-white/60 text-sm mb-6">
              AI-powered assistant for maximizing your health insurance claims, generating professional reports, and providing accurate cost estimates.
            </p>
            <div className="flex space-x-4">
              <a 
                href="mailto:Contact@ai-webtools.com" 
                className="text-white/60 hover:text-cyber-blue transition-colors duration-200"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a 
                href="tel:+14758008096" 
                className="text-white/60 hover:text-cyber-blue transition-colors duration-200"
                aria-label="Phone"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="https://chatgpt.com/g/g-67d9e1c7099881918c9c42b9571f9c9e-health-insurance-claims-gpt" 
                  className="text-white/60 hover:text-white transition-colors duration-200 flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Health Insurance Claims GPT
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </li>
              <li>
                <a 
                  href="https://insuranceclaimsgpt.lovable.app/?via=aiwebtools" 
                  className="text-white/60 hover:text-white transition-colors duration-200 flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Auto Insurance Claims GPT
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </li>
              <li>
                <a 
                  href="#faq" 
                  className="text-white/60 hover:text-white transition-colors duration-200"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a 
                  href="#disclaimer" 
                  className="text-white/60 hover:text-white transition-colors duration-200"
                >
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <Phone className="w-4 h-4 text-cyber-blue mr-2 mt-0.5" />
                <a 
                  href="tel:+14758008096" 
                  className="text-white/60 hover:text-white transition-colors duration-200"
                >
                  (475) 800-8096
                </a>
              </li>
              <li className="flex items-start">
                <Mail className="w-4 h-4 text-cyber-blue mr-2 mt-0.5" />
                <a 
                  href="mailto:Contact@ai-webtools.com" 
                  className="text-white/60 hover:text-white transition-colors duration-200"
                >
                  Contact@ai-webtools.com
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="https://openai.com/policies/privacy-policy/" 
                  className="text-white/60 hover:text-white transition-colors duration-200 flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy Policy
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </li>
              <li>
                <a 
                  href="https://aiwebtools.ai/terms-of-services" 
                  className="text-white/60 hover:text-white transition-colors duration-200 flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Terms of Service
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/40 text-sm mb-4 md:mb-0">
            © 2025 <a href="https://www.aiwebtools.ai" className="hover:text-white transition-colors duration-200">AI WEB TOOLS LLC</a> All rights reserved.
          </p>
          
          <a 
            href="https://www.aiwebtools.ai" 
            className="cyber-button inline-flex items-center rounded-full"
            target="_blank"
            rel="noopener noreferrer"
          >
            More AI Tools
            <ExternalLink className="w-3 h-3 ml-1" />
          </a>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -top-40 right-0 w-96 h-96 bg-cyber-purple/10 rounded-full filter blur-[120px] -z-10"></div>
    </footer>
  );
};

export default Footer;

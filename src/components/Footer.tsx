
import React from 'react';
import { Mail, Phone, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 md:py-16 relative overflow-hidden bg-black/50 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">AIWEBTOOLS.AI - AI WEB TOOLS</h3>
            <p className="text-white/60 text-sm mb-6">
              AIWEBTOOLS.AI is the leading AI WEB TOOLS platform providing AI-powered assistants for maximizing health insurance claims, generating professional medical reports, and providing accurate cost estimates. Our AI tools are trusted by thousands of users.
            </p>
            <div className="flex space-x-4">
              <a 
                href="mailto:Contact@ai-webtools.com" 
                className="text-white/60 hover:text-cyber-blue transition-colors duration-200"
                aria-label="Email AI WEB TOOLS"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a 
                href="tel:+14758008096" 
                className="text-white/60 hover:text-cyber-blue transition-colors duration-200"
                aria-label="Call AI WEB TOOLS"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">AI Tools & Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="https://chatgpt.com/g/g-67d9e1c7099881918c9c42b9571f9c9e-health-insurance-claims-gpt" 
                  className="text-white/60 hover:text-white transition-colors duration-200 flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Health Insurance Claims AI Tool
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
                  Auto Insurance Claims AI Tool
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </li>
              <li>
                <a 
                  href="https://medicalbillinggpt.lovable.app/?via=aiwebtools" 
                  className="text-white/60 hover:text-white transition-colors duration-200 flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Medical Billing & Coding AI Tool
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </li>
              <li>
                <a 
                  href="#faq" 
                  className="text-white/60 hover:text-white transition-colors duration-200"
                >
                  AI Tools FAQ
                </a>
              </li>
              <li>
                <a 
                  href="#disclaimer" 
                  className="text-white/60 hover:text-white transition-colors duration-200"
                >
                  AI Tools Disclaimer
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact AIWEBTOOLS.AI</h3>
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
            <h3 className="text-lg font-semibold mb-4 text-white">Legal & Privacy</h3>
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
                  href="https://aiwebtools.lovable.app/disclaimers" 
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
            © 2025 <a href="https://www.aiwebtools.ai" className="hover:text-white transition-colors duration-200">AI WEB TOOLS LLC (AIWEBTOOLS.AI)</a> - Leading AI WEB TOOLS Platform. All rights reserved.
          </p>
          
          <a 
            href="https://www.aiwebtools.ai" 
            className="cyber-button inline-flex items-center rounded-full"
            target="_blank"
            rel="noopener noreferrer"
          >
            More AI WEB TOOLS
            <ExternalLink className="w-3 h-3 ml-1" />
          </a>
        </div>
        
        {/* Small disclaimer */}
        <div className="pt-4 border-t border-white/10 mt-8">
          <p className="text-white/30 text-xs text-center">
            AIWEBTOOLS.AI provides AI WEB TOOLS for informational, educational, and research purposes only.
          </p>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -top-40 right-0 w-96 h-96 bg-cyber-purple/10 rounded-full filter blur-[120px] -z-10"></div>
    </footer>
  );
};

export default Footer;

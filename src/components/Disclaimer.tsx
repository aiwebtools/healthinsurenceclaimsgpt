import React from 'react';
import { AlertTriangle } from 'lucide-react';

const Disclaimer: React.FC = () => {
  return (
    <section className="section-padding relative overflow-hidden bg-cyber-dark/50" id="disclaimer">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <AlertTriangle className="text-yellow-400 w-8 h-8 mr-3" />
            <h2 className="text-3xl font-bold text-white">Legal Disclaimer</h2>
          </div>
          
          <div className="glassmorphism rounded-xl p-8 border border-white/10">
            <div className="bg-yellow-400/10 border border-yellow-400/30 rounded-lg p-4 mb-6">
              <p className="text-yellow-200 text-sm font-medium">
                ⚠️ This tool is provided for informational, educational, and research purposes only.
              </p>
            </div>
            
            <h3 className="text-xl font-semibold mb-4 text-white">Health Insurance Claims GPT Disclaimer</h3>
            
            <div className="space-y-4 text-white/80 text-sm leading-relaxed">
              <p>
                Health Insurance Claims GPT is an AI-powered tool designed to assist with health insurance claims processing and is provided for informational purposes only. This tool does not replace professional medical, legal, or financial advice.
              </p>
              
              <h4 className="text-lg font-medium text-white mt-6">No Professional Advice</h4>
              <p>
                The information provided by Health Insurance Claims GPT is not intended to be a substitute for professional advice. Users should consult with qualified healthcare professionals, insurance experts, or legal advisors regarding specific insurance claims, medical treatments, or financial decisions.
              </p>
              
              <h4 className="text-lg font-medium text-white mt-6">Accuracy of Information</h4>
              <p>
                While we strive to provide accurate and up-to-date information, AI WEB TOOLS LLC makes no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information, products, services, or related graphics provided through Health Insurance Claims GPT.
              </p>
              
              <h4 className="text-lg font-medium text-white mt-6">Data Privacy</h4>
              <p>
                Users of Health Insurance Claims GPT should be aware that any information shared with the tool may be processed in accordance with our Privacy Policy. While we implement measures to ensure HIPAA compliance, users should exercise caution when sharing sensitive personal health information.
              </p>
              
              <h4 className="text-lg font-medium text-white mt-6">No Guarantee of Results</h4>
              <p>
                AI WEB TOOLS LLC does not guarantee that use of Health Insurance Claims GPT will result in successful insurance claims, reimbursements, or appeals. Insurance claim outcomes depend on numerous factors beyond the control of this tool, including individual policy terms, insurer decisions, and applicable laws and regulations.
              </p>
              
              <h4 className="text-lg font-medium text-white mt-6">Limitation of Liability</h4>
              <p>
                To the maximum extent permitted by applicable law, AI WEB TOOLS LLC shall not be liable for any direct, indirect, incidental, consequential, or punitive damages, or any damages whatsoever, whether in an action of contract, negligence, or other tortious action, arising out of or in connection with the use or performance of information available through Health Insurance Claims GPT.
              </p>
              
              <h4 className="text-lg font-medium text-white mt-6">Third-Party Links</h4>
              <p>
                Health Insurance Claims GPT may contain links to external websites or resources. AI WEB TOOLS LLC has no control over the content and nature of these sites and resources and does not endorse or assume any responsibility for the content of any linked website.
              </p>
              
              <h4 className="text-lg font-medium text-white mt-6">Updates to Disclaimer</h4>
              <p>
                AI WEB TOOLS LLC reserves the right to update or modify this disclaimer at any time without prior notice. By using Health Insurance Claims GPT, you acknowledge and agree that you are responsible for reviewing this disclaimer periodically to become aware of any modifications.
              </p>
              
              <p className="mt-6">
                By using Health Insurance Claims GPT, you acknowledge that you have read, understood, and agree to be bound by this disclaimer.
              </p>
              
              <p className="text-xs text-white/50 mt-8">
                Last updated: June 15, 2023
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Disclaimer;

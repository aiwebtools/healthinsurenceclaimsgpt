
import React from 'react';
import { FileText, Database, Search, ClipboardCheck, Code, MessageSquare, FileDown, ShieldCheck } from 'lucide-react';

const Features: React.FC = () => {
  const featuresList = [
    {
      icon: <FileText className="w-6 h-6 text-cyber-blue" />,
      title: "AI Document Generation",
      description: "AIWEBTOOLS.AI automatically creates professional documents for claim submissions, appeals, and reimbursement calculations using advanced AI technology."
    },
    {
      icon: <Database className="w-6 h-6 text-cyber-purple" />,
      title: "AI Data Analysis Tools",
      description: "Process complex medical billing data with our AI WEB TOOLS to identify coding errors and maximize claim approvals."
    },
    {
      icon: <Search className="w-6 h-6 text-cyber-blue" />,
      title: "Real-time AI Search",
      description: "Our AI tools leverage real-time data from insurance databases, Medicare fee schedules, and policy guidelines for accurate results."
    },
    {
      icon: <ClipboardCheck className="w-6 h-6 text-cyber-purple" />,
      title: "AI Claim Verification",
      description: "AIWEBTOOLS.AI thoroughly validates claims against insurance policy requirements using sophisticated AI algorithms."
    },
    {
      icon: <Code className="w-6 h-6 text-cyber-blue" />,
      title: "Medical AI Coding",
      description: "Our AI WEB TOOLS accurately identify ICD-10, CPT, and HCPCS codes for proper claim submission and billing."
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-cyber-purple" />,
      title: "AI Appeals Automation",
      description: "Generate legally-sound appeal letters with proper medical justification using AIWEBTOOLS.AI advanced algorithms."
    },
    {
      icon: <FileDown className="w-6 h-6 text-cyber-blue" />,
      title: "AI Policy Lookup Tools",
      description: "Search and interpret coverage rules from major insurance providers with our intelligent AI WEB TOOLS platform."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-cyber-purple" />,
      title: "AI Cost Estimation",
      description: "Calculate expected reimbursements and out-of-pocket costs with high accuracy using AIWEBTOOLS.AI technology."
    }
  ];

  return (
    <section className="section-padding relative overflow-hidden" id="how-it-works">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-cyber-blue/10 border border-cyber-blue/30 text-cyber-blue text-xs font-medium">
            AIWEBTOOLS.AI - Leading AI WEB TOOLS
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            How AI WEB TOOLS from AIWEBTOOLS.AI Work
          </h2>
          <p className="text-white/70 text-lg">
            Our AI WEB TOOLS platform combines advanced AI technologies to simplify the complex world of health insurance claims, medical billing, and auto insurance processing.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresList.map((feature, index) => (
            <div 
              key={index} 
              className="glassmorphism rounded-xl p-6 flex flex-col h-full animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="rounded-full w-12 h-12 flex items-center justify-center bg-white/5 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-white/60 flex-grow">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="https://chatgpt.com/g/g-67d9e1c7099881918c9c42b9571f9c9e-health-insurance-claims-gpt" 
            className="cyber-button-filled"
            target="_blank"
            rel="noopener noreferrer"
          >
            Access AIWEBTOOLS.AI Platform
          </a>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-cyber-purple/10 rounded-full filter blur-[100px] -z-10"></div>
      <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-cyber-blue/10 rounded-full filter blur-[100px] -z-10"></div>
    </section>
  );
};

export default Features;

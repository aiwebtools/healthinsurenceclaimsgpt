
import React from 'react';
import { FileText, Database, Search, ClipboardCheck, Code, MessageSquare, FileDown, ShieldCheck } from 'lucide-react';

const Features: React.FC = () => {
  const featuresList = [
    {
      icon: <FileText className="w-6 h-6 text-cyber-blue" />,
      title: "Document Generation",
      description: "Automatically create professional documents for claim submissions, appeals, and reimbursement calculations."
    },
    {
      icon: <Database className="w-6 h-6 text-cyber-purple" />,
      title: "Data Analysis",
      description: "Process complex medical billing data to identify coding errors and maximize claim approvals."
    },
    {
      icon: <Search className="w-6 h-6 text-cyber-blue" />,
      title: "Web Search Capabilities",
      description: "Leverages real-time data from insurance databases, Medicare fee schedules, and policy guidelines."
    },
    {
      icon: <ClipboardCheck className="w-6 h-6 text-cyber-purple" />,
      title: "Claim Verification",
      description: "Thoroughly validates claims against insurance policy requirements to ensure approval."
    },
    {
      icon: <Code className="w-6 h-6 text-cyber-blue" />,
      title: "Medical Billing Code Identification",
      description: "Accurately identifies ICD-10, CPT, and HCPCS codes for proper claim submission."
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-cyber-purple" />,
      title: "Appeals Automation",
      description: "Generates legally-sound appeal letters with proper medical justification and references."
    },
    {
      icon: <FileDown className="w-6 h-6 text-cyber-blue" />,
      title: "Insurance Policy Lookup",
      description: "Searches and interprets coverage rules from major insurance providers."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-cyber-purple" />,
      title: "Automated Cost Estimation",
      description: "Calculates expected reimbursements and out-of-pocket costs with high accuracy."
    }
  ];

  return (
    <section className="section-padding relative overflow-hidden" id="how-it-works">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-cyber-blue/10 border border-cyber-blue/30 text-cyber-blue text-xs font-medium">
            Powerful Capabilities
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            How Health Insurance Claims GPT Works
          </h2>
          <p className="text-white/70 text-lg">
            Our AI assistant combines advanced technologies to simplify the complex world of health insurance claims.
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
            Try Health Insurance Claims GPT
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

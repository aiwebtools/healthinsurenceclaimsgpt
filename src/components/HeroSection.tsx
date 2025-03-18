
import React from 'react';
import { ArrowRight, Shield, FileCheck, Search, Calculator } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-cyber-purple/10 border border-cyber-purple/30 text-cyber-purple text-xs font-medium">
            AI-Powered Health Insurance Assistant
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/80">
            Maximize Your Health Insurance Claims With AI
          </h1>
          
          <p className="text-lg md:text-xl text-white/70 mb-8 max-w-3xl mx-auto">
            Health Insurance Claims GPT expertly handles assessments, calculates costs, and generates accurate reports to ensure you get the maximum reimbursement for all your healthcare expenses.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <a 
              href="https://chatgpt.com/g/g-67d9e1c7099881918c9c42b9571f9c9e-health-insurance-claims-gpt" 
              className="cyber-button-filled group"
              target="_blank"
              rel="noopener noreferrer"
            >
              Try Health Insurance Claims GPT
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#how-it-works" 
              className="cyber-button"
            >
              Learn How It Works
            </a>
          </div>
        </div>
        
        {/* Feature highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {[
            {
              icon: <Shield className="w-5 h-5 text-cyber-blue" />,
              title: "HIPAA Compliant",
              description: "Your health data is secure with full HIPAA and legal compliance."
            },
            {
              icon: <FileCheck className="w-5 h-5 text-cyber-purple" />,
              title: "Professional Reports",
              description: "Generate downloadable claim documents and appeal letters."
            },
            {
              icon: <Search className="w-5 h-5 text-cyber-blue" />,
              title: "Policy Analysis",
              description: "Automatic search for updated policy guidelines and rules."
            },
            {
              icon: <Calculator className="w-5 h-5 text-cyber-purple" />,
              title: "Cost Estimation",
              description: "Accurate medical cost calculations with specialized data."
            }
          ].map((feature, index) => (
            <div 
              key={index} 
              className="glassmorphism rounded-xl p-6 backdrop-blur-lg border border-white/5 hover:border-white/10 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="rounded-full w-10 h-10 flex items-center justify-center bg-white/5 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-white/60 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-cyber-purple/20 rounded-full filter blur-[80px] -z-10"></div>
      <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-cyber-blue/20 rounded-full filter blur-[80px] -z-10"></div>
    </section>
  );
};

export default HeroSection;

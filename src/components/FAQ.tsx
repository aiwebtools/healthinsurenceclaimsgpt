
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is Health Insurance Claims GPT?",
      answer: "Health Insurance Claims GPT is an AI assistant designed to help with health insurance claim assessments, medical billing coding, coverage verification, and reimbursement calculations. It can generate professional documents for claim submission and appeals, search for up-to-date insurance policy information, and provide accurate cost estimates for medical procedures."
    },
    {
      question: "Is my personal health information secure with this tool?",
      answer: "Yes, Health Insurance Claims GPT is designed with HIPAA compliance in mind. It does not store your personal health information. The tool processes your information only to assist with your insurance claims and follows strict data protection protocols in accordance with healthcare privacy regulations."
    },
    {
      question: "How accurate are the cost estimates provided?",
      answer: "Health Insurance Claims GPT provides highly accurate cost estimates by referencing current Medicare fee schedules, private insurance rate data, and medical coding databases. It uses ICD-10, CPT, and HCPCS codes to calculate costs based on the specific procedure, service, or treatment required."
    },
    {
      question: "Can Health Insurance Claims GPT help with denied claims?",
      answer: "Absolutely. One of the key features is generating professional appeal letters for wrongfully denied claims. The AI includes proper medical justifications and legal references to support your appeal, significantly increasing the chances of a successful reconsideration by your insurer."
    },
    {
      question: "Does the tool work with all types of health insurance?",
      answer: "Yes, Health Insurance Claims GPT works with all major health insurance types, including Medicare, Medicaid, private insurance, PPOs, HMOs, and ACA marketplace plans. It can analyze specific policy details and provide guidance tailored to your unique coverage situation."
    },
    {
      question: "What documents can Health Insurance Claims GPT generate?",
      answer: "The AI can generate a variety of professional documents, including claim submission forms, appeal letters, reimbursement calculations, patient medical expense reports, pre-authorization requests, and detailed breakdowns of medical bills, claim denials, insurer payments, and out-of-pocket costs."
    },
    {
      question: "How does the tool stay updated with insurance policies?",
      answer: "Health Insurance Claims GPT automatically initiates web searches for updated insurance policy guidelines, CMS Medicare rates, private insurance coverage rules, and healthcare coding databases before providing information, ensuring that the data used is current and accurate."
    }
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="section-padding relative overflow-hidden" id="faq">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-cyber-blue/10 border border-cyber-blue/30 text-cyber-blue text-xs font-medium">
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Everything You Need to Know
          </h2>
          <p className="text-white/70 text-lg">
            Get answers to common questions about Health Insurance Claims GPT.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto divide-y divide-white/10">
          {faqs.map((faq, index) => (
            <div key={index} className="py-5">
              <button
                className="flex justify-between items-center w-full text-left"
                onClick={() => toggleAccordion(index)}
              >
                <h3 className="text-lg font-medium text-white">{faq.question}</h3>
                <ChevronDown 
                  className={`w-5 h-5 text-cyber-purple transition-transform ${activeIndex === index ? 'rotate-180' : ''}`}
                />
              </button>
              
              <div 
                className={`mt-3 text-white/70 transition-all duration-300 overflow-hidden ${
                  activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-white/60 mb-4">Still have questions?</p>
          <a 
            href="mailto:Contact@ai-webtools.com" 
            className="cyber-button"
          >
            Contact Support
          </a>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-cyber-purple/10 rounded-full filter blur-[80px] -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-cyber-blue/10 rounded-full filter blur-[80px] -z-10"></div>
    </section>
  );
};

export default FAQ;


import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative flex items-center">
        <div className="absolute -inset-1 bg-cyber-gradient blur opacity-30 rounded-full"></div>
        <div className="relative flex items-center font-bold tracking-tight text-xl text-white">
          <span className="mr-2 bg-white rounded-full w-8 h-8 flex items-center justify-center">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="url(#gradient)" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="w-5 h-5"
            >
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#33C3F0" />
                  <stop offset="100%" stopColor="#8B5CF6" />
                </linearGradient>
              </defs>
              <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
              <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
              <path d="M9 14l2 2 4-4"></path>
            </svg>
          </span>
          Health Insurance Claims GPT
        </div>
      </div>
      <div className="mt-1 text-[10px] text-gray-400 tracking-wide">
        Presented by <a href="https://www.aiwebtools.ai" className="text-cyber-blue hover:underline transition-all duration-200">AiWebTools.Ai</a>
      </div>
    </div>
  );
};

export default Logo;


import React, { useEffect, useRef } from 'react';

const VideoSection: React.FC = () => {
  const videoRef = useRef<HTMLIFrameElement>(null);
  
  useEffect(() => {
    // Create a Intersection Observer to lazy load the video
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && videoRef.current) {
          // Only set src when the component is in view
          videoRef.current.src = "https://www.youtube.com/embed/KxELTw8BAj4?autoplay=1&mute=0&controls=1&rel=0&showinfo=0&hd=1";
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    if (videoRef.current) {
      observer.observe(videoRef.current);
    }
    
    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <section className="section-padding relative overflow-hidden" id="demo-video">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            See Health Insurance Claims GPT In Action
          </h2>
          <p className="text-white/70 text-lg">
            Watch how our AI assistant handles complex insurance claims and helps maximize your reimbursements.
          </p>
        </div>
        
        <div className="relative rounded-2xl overflow-hidden cyber-border">
          <div className="aspect-w-16 aspect-h-9 w-full">
            <iframe
              ref={videoRef}
              title="Health Insurance Claims GPT Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
              loading="lazy"
            ></iframe>
          </div>
          
          {/* Placeholder while video loads */}
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-cyber-dark to-cyber-gray pointer-events-none">
            <div className="animate-pulse rounded-full bg-white/10 p-6">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 text-white">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-cyber-blue/20 rounded-full filter blur-[100px] -z-10"></div>
    </section>
  );
};

export default VideoSection;

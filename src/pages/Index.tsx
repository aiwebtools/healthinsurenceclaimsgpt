
import React, { useEffect } from 'react';
import Header from '../components/Header';
import AnimatedBackground from '../components/AnimatedBackground';
import HeroSection from '../components/HeroSection';
import VideoSection from '../components/VideoSection';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Disclaimer from '../components/Disclaimer';
import Footer from '../components/Footer';
import ConsentModal from '../components/ConsentModal';
import PageScroller from '../components/PageScroller';

const Index = () => {
  useEffect(() => {
    // Update document title
    document.title = "Health Insurance Claims GPT | AI-Powered Insurance Assistant";
    
    // Smooth scroll for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.hash && anchor.hash.length > 1 && anchor.hostname === window.location.hostname) {
        e.preventDefault();
        
        const targetElement = document.querySelector(anchor.hash);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.getBoundingClientRect().top + window.scrollY - 100,
            behavior: 'smooth'
          });
          
          // Update URL without reloading
          history.pushState(null, '', anchor.hash);
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <div className="min-h-screen relative">
      {/* Background elements */}
      <AnimatedBackground />
      
      {/* Header */}
      <Header />
      
      {/* Page content */}
      <main>
        <HeroSection />
        <VideoSection />
        <Features />
        <Testimonials />
        <FAQ />
        <Disclaimer />
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Consent modal */}
      <ConsentModal />
      
      {/* Page scroller */}
      <PageScroller />
    </div>
  );
};

export default Index;

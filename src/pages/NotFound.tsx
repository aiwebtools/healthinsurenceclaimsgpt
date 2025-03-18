
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    // Update document title
    document.title = "Page Not Found | Health Insurance Claims GPT";
    
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-cyber-dark px-6">
      <div className="relative glassmorphism rounded-xl p-8 md:p-12 max-w-md w-full text-center">
        <div className="absolute -inset-0.5 bg-cyber-gradient opacity-30 blur-sm rounded-xl -z-10"></div>
        
        <h1 className="text-6xl font-bold mb-4 bg-cyber-gradient bg-clip-text text-transparent">404</h1>
        <p className="text-xl text-white/80 mb-6">Oops! Page not found</p>
        <p className="text-white/60 mb-8">The page you're looking for doesn't exist or has been moved.</p>
        
        <a 
          href="/" 
          className="cyber-button-filled inline-flex items-center"
        >
          <Home className="w-4 h-4 mr-2" />
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;

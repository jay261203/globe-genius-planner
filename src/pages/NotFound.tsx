import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home, Search } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-background">
      <div className="text-center space-y-8 max-w-md animate-fade-in">
        <div className="space-y-4">
          <div className="w-24 h-24 rounded-full bg-gradient-primary/20 flex items-center justify-center mx-auto mb-6">
            <Search className="w-12 h-12 text-primary" />
          </div>
          <h1 className="text-6xl md:text-7xl font-bold gradient-text">404</h1>
          <h2 className="text-3xl md:text-4xl font-bold">Page Not Found</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Oops! We couldn't find the destination you're looking for. Let's get you back on track.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            variant="outline" 
            onClick={() => navigate(-1)} 
            className="gap-2 hover-lift"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </Button>
          <Button 
            onClick={() => navigate("/")} 
            className="bg-gradient-primary hover:opacity-90 gap-2 hover-lift"
          >
            <Home className="w-4 h-4" />
            Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

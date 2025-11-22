import { Button } from "@/components/ui/button";
import { ArrowLeft, Home } from 'lucide-react';
import { useNavigate } from "react-router-dom";

export const NotFoundComponent = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-background">
      <div className="text-center space-y-8 max-w-md animate-fade-in">
        <div className="space-y-4">
          <h1 className="text-7xl font-bold gradient-text">404</h1>
          <h2 className="text-4xl font-bold">Page Not Found</h2>
          <p className="text-lg text-muted-foreground">
            Oops! We couldn't find the destination you're looking for. Let's get you back on track.
          </p>
        </div>

        <div className="flex gap-4 justify-center">
          <Button variant="outline" onClick={() => navigate(-1)} className="gap-2 hover-lift">
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </Button>
          <Button onClick={() => navigate("/")} className="bg-gradient-primary hover:opacity-90 gap-2 hover-lift">
            <Home className="w-4 h-4" />
            Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundComponent;

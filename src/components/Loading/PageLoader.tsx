import { useEffect, useState } from "react";

export const PageLoader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background/50 backdrop-blur-sm z-50 animate-fade-in">
      <div className="space-y-4 text-center">
        <div className="flex justify-center gap-2">
          <div className="w-2 h-2 rounded-full bg-primary animate-bounce" />
          <div className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: "0.2s" }} />
          <div className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: "0.4s" }} />
        </div>
        <p className="text-sm text-muted-foreground">Loading...</p>
      </div>
    </div>
  );
};

export default PageLoader;

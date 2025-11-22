import { useEffect, useState } from "react";
import { ChevronUp } from 'lucide-react';
import { Button } from "@/components/ui/button";

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return isVisible ? (
    <Button
      onClick={scrollToTop}
      size="icon"
      className="fixed bottom-8 right-8 z-40 bg-gradient-primary hover:opacity-90 rounded-full shadow-lg hover-lift animate-fade-in"
      title="Scroll to top"
    >
      <ChevronUp className="w-5 h-5" />
    </Button>
  ) : null;
};

export default ScrollToTop;

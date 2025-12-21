import { ArrowRight, Compass } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center pt-16 overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-gradient-subtle" />

      {/* Content */}
      <div className="container relative z-10 px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Heading - Clear value proposition */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground tracking-tight leading-[1.1]">
              AI plans your entire trip
              <span className="block text-muted-foreground mt-2">in minutes</span>
            </h1>
          </div>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Get personalized itineraries tailored to your budget, preferences, and travel style. No more hours of research.
          </p>

          {/* CTA Buttons - Clear hierarchy */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
            <Link to="/signup">
              <Button size="lg" className="h-12 px-8 text-base font-medium btn-press w-full sm:w-auto">
                Start Planning
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link to="/explore">
              <Button size="lg" variant="outline" className="h-12 px-8 text-base btn-press w-full sm:w-auto">
                <Compass className="w-4 h-4 mr-2" />
                Explore Destinations
              </Button>
            </Link>
          </div>

          {/* Trust indicators - minimal */}
          <div className="pt-8 flex flex-wrap items-center justify-center gap-6 md:gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-foreground">50,000+</span>
              <span>trips planned</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-border" />
            <div className="flex items-center gap-2">
              <span className="font-semibold text-foreground">4.9★</span>
              <span>rating</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-border" />
            <div className="flex items-center gap-2">
              <span className="font-semibold text-foreground">120+</span>
              <span>countries</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

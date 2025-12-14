import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import TripPlanningForm from "./TripPlanningForm";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-16 bg-gradient-hero">
      {/* Subtle gradient mesh */}
      <div className="absolute inset-0 bg-gradient-subtle opacity-80" />

      {/* Content */}
      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">
              AI-Powered Travel Planning
            </span>
          </div>

          {/* Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground tracking-tight leading-[1.1]">
              Plan your perfect trip
              <span className="block text-muted-foreground mt-2">in minutes, not hours</span>
            </h1>
          </div>

          {/* Subheading */}
          <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Let AI create personalized travel itineraries tailored to your preferences, 
            budget, and travel style. Start your next adventure today.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Button size="lg" className="h-12 px-8 btn-press">
              Start Planning
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 btn-press">
              See How It Works
            </Button>
          </div>

          {/* Trip Planning Form */}
          <div className="pt-12 max-w-2xl mx-auto">
            <TripPlanningForm />
          </div>

          {/* Trust indicators */}
          <div className="pt-8 flex items-center justify-center gap-8 text-sm text-muted-foreground">
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

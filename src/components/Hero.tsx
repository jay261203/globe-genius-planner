import { Sparkles, ArrowRight } from 'lucide-react';
import heroImage from "@/assets/hero-nature.jpg";
import TripPlanningForm from "./TripPlanningForm";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background/80" />
      </div>

      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-hero opacity-40 animate-pulse" style={{ animationDuration: '4s' }} />

      {/* Floating Orbs - Enhanced */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-[100px] animate-float mix-blend-multiply" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/25 rounded-full blur-[120px] animate-float mix-blend-multiply" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-accent/25 rounded-full blur-[80px] animate-float mix-blend-multiply" style={{ animationDelay: '2s' }} />

      {/* Content */}
      <div className="container relative z-10 px-4 py-20 animate-fade-in">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full animate-scale-in hover-glow cursor-default">
            <Sparkles className="w-4 h-4 text-accent animate-pulse" />
            <span className="text-sm font-semibold bg-gradient-primary bg-clip-text text-transparent">
              AI-Powered Travel Planning
            </span>
          </div>

          {/* Heading */}
          <div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter animate-slide-up mb-4" style={{ animationDelay: '0.1s' }}>
              Plan Your Perfect
              <span className="block gradient-text mt-2 leading-tight">Adventure</span>
            </h1>
          </div>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Let our AI create personalized travel itineraries tailored to your dreams. Explore the world, one trip at a time.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <Button size="lg" className="bg-gradient-primary hover:opacity-90 gap-2 hover-lift text-base px-8">
              <Sparkles className="w-5 h-5" />
              Start Planning
            </Button>
            <Button size="lg" variant="outline" className="gap-2 hover-lift text-base px-8">
              Learn More
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Trip Planning Form */}
          <div className="pt-8 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <TripPlanningForm />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow z-20">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-foreground/40 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

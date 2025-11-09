import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-nature.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/80" />
      </div>

      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-hero opacity-60 animate-pulse" style={{ animationDuration: '4s' }} />

      {/* Floating Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-accent/20 rounded-full blur-[80px] animate-float" style={{ animationDelay: '2s' }} />

      {/* Content */}
      <div className="container relative z-10 px-4 py-20 animate-fade-in">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full animate-scale-in hover-glow">
            <Sparkles className="w-4 h-4 text-accent animate-pulse" />
            <span className="text-sm font-medium bg-gradient-primary bg-clip-text text-transparent">AI-Powered Travel Planning</span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Plan Your Perfect
            <span className="block gradient-text mt-2">Adventure</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Let AI create personalized travel itineraries tailored to your dreams.
            Explore the world, one trip at a time.
          </p>

          {/* Trip Planning Card */}
          <div className="glass-card p-8 rounded-3xl max-w-2xl mx-auto animate-slide-up hover-lift hover-glow" style={{ animationDelay: '0.3s' }}>
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                {/* Destination Input */}
                <div className="relative group">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                  <input
                    type="text"
                    placeholder="Where to?"
                    className="w-full pl-11 pr-4 py-3 rounded-xl bg-background border border-border 
                             focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary/50
                             transition-all duration-300 hover:border-border/80"
                  />
                </div>

                {/* Date Input */}
                <div className="relative group">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                  <input
                    type="text"
                    placeholder="When?"
                    className="w-full pl-11 pr-4 py-3 rounded-xl bg-background border border-border 
                             focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary/50
                             transition-all duration-300 hover:border-border/80"
                  />
                </div>
              </div>

              <Button 
                size="lg" 
                className="w-full bg-gradient-primary hover:opacity-90 transition-all hover:scale-105 
                         shadow-lg hover:shadow-xl group relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                               translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                <Sparkles className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                <span className="relative">Plan My Trip</span>
              </Button>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-secondary" />
              <span>AI-Powered</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <span>Personalized</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span>Free to Start</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/20 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-foreground/40 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

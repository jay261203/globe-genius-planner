import { Bot, Map, Heart, Zap } from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "AI-Powered Planning",
    description: "Smart itineraries crafted by advanced AI that understands your travel style and preferences.",
  },
  {
    icon: Map,
    title: "Interactive Maps",
    description: "Visualize your journey with beautiful maps showing routes, attractions, and hidden gems.",
  },
  {
    icon: Heart,
    title: "Personalized Experience",
    description: "Every trip is unique. Get recommendations tailored to your interests and budget.",
  },
  {
    icon: Zap,
    title: "Instant Generation",
    description: "Create complete travel itineraries in seconds. No more hours of research.",
  },
];

const Features = () => {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Features
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Why Choose <span className="gradient-text">Trippy?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The smartest way to plan your travels with cutting-edge AI technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="glass-card p-6 rounded-2xl hover-lift hover-glow group cursor-pointer
                         relative overflow-hidden"
                style={{
                  animation: 'slide-up 0.6s ease-out forwards',
                  animationDelay: `${index * 0.1}s`,
                  opacity: 0,
                }}
              >
                {/* Gradient hover overlay */}
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
                
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 
                                group-hover:scale-110 group-hover:rotate-6 transition-all duration-300
                                shadow-lg group-hover:shadow-xl group-hover:shadow-primary/30">
                    <Icon className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors">
                    {feature.description}
                  </p>
                </div>

                {/* Animated border */}
                <div className="absolute inset-0 rounded-2xl border border-primary/0 group-hover:border-primary/20 transition-colors duration-300" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;

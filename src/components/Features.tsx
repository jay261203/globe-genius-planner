import { Bot, Map, Heart, Zap } from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "AI-Powered Planning",
    description: "Smart itineraries crafted by advanced AI that understands your travel style.",
  },
  {
    icon: Map,
    title: "Interactive Maps",
    description: "Visualize your journey with beautiful maps showing routes and attractions.",
  },
  {
    icon: Heart,
    title: "Personalized Experience",
    description: "Every trip is unique. Get recommendations tailored to your interests.",
  },
  {
    icon: Zap,
    title: "Instant Generation",
    description: "Create complete travel itineraries in seconds, not hours.",
  },
];

const Features = () => {
  return (
    <section className="py-20 md:py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 md:mb-16 space-y-3">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
            Why choose Trippy?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            The smartest way to plan your travels with cutting-edge AI
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-xl bg-card border border-border/60 hover:border-border hover:shadow-md transition-all duration-300 group"
                style={{
                  animation: 'slide-up 0.5s ease-out forwards',
                  animationDelay: `${index * 0.1}s`,
                  opacity: 0,
                }}
              >
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-base font-semibold mb-2 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;

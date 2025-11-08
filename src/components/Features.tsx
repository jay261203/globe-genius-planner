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
          <h2 className="text-4xl md:text-5xl font-bold">
            Why Choose <span className="gradient-text">Trippy?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The smartest way to plan your travels with cutting-edge AI technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="glass-card p-6 rounded-2xl hover:scale-[1.02] transition-all duration-300 group"
                style={{
                  animation: 'slide-up 0.6s ease-out forwards',
                  animationDelay: `${index * 0.1}s`,
                  opacity: 0,
                }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;

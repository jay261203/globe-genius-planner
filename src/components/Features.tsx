import { Bot, Map, Heart, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

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

const FeatureCard = ({ feature, index }: { feature: typeof features[0]; index: number }) => {
  const Icon = feature.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: [0.4, 0, 0.2, 1]
      }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="p-6 rounded-xl bg-card border border-border/60 hover:border-border hover:shadow-lg transition-shadow duration-300 group"
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
    </motion.div>
  );
};

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          className="text-center mb-12 md:mb-16 space-y-3"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
            Why choose Trippy?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            The smartest way to plan your travels with cutting-edge AI
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

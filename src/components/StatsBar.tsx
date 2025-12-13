const stats = [
  { value: "50K+", label: "Trips Planned" },
  { value: "120+", label: "Countries" },
  { value: "4.9", label: "User Rating" },
  { value: "98%", label: "Satisfaction" },
];

const StatsBar = () => {
  return (
    <section className="py-16 px-4 border-y border-border/50 bg-muted/30">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="space-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text font-display">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;

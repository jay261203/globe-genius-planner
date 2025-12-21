import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Travel Blogger",
    avatar: "SM",
    content: "Trippy transformed how I plan my trips. The AI suggestions are incredibly accurate and save me hours.",
    rating: 5,
  },
  {
    name: "James Rodriguez",
    role: "Digital Nomad",
    avatar: "JR",
    content: "Best travel planning tool I've ever used. The itineraries cover all the hidden gems.",
    rating: 5,
  },
  {
    name: "Emily Chen",
    role: "Adventure Seeker",
    avatar: "EC",
    content: "From budget tracking to weather updates, everything I need is in one place.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 md:py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 md:mb-16 space-y-3">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
            Loved by travelers
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            See what our community has to say about their experience
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-card border border-border/60 hover:border-border transition-all duration-300"
              style={{
                animation: "slide-up 0.5s ease-out forwards",
                animationDelay: `${index * 0.1}s`,
                opacity: 0,
              }}
            >
              {/* Rating */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground/80 mb-5 leading-relaxed text-sm">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium text-sm">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-medium text-sm text-foreground">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

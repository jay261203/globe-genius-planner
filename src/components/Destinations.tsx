import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const popularDestinations = [
  {
    name: "Bali, Indonesia",
    category: "Beaches & Culture",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    name: "Tokyo, Japan",
    category: "Urban Adventure",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    name: "Paris, France",
    category: "Romance & Art",
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    name: "Iceland",
    category: "Nature & Adventure",
    gradient: "from-emerald-500 to-teal-500",
  },
];

const Destinations = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Popular <span className="gradient-text">Destinations</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover trending places loved by travelers worldwide
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {popularDestinations.map((destination, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl aspect-[3/4] cursor-pointer"
              style={{
                animation: 'scale-in 0.5s ease-out forwards',
                animationDelay: `${index * 0.1}s`,
                opacity: 0,
              }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${destination.gradient} group-hover:scale-110 transition-transform duration-500`} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-sm opacity-90 mb-1">{destination.category}</p>
                  <h3 className="text-2xl font-bold mb-3">{destination.name}</h3>
                  <Button 
                    size="sm" 
                    variant="secondary"
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    Plan Trip
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" className="group">
            Explore All Destinations
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Destinations;

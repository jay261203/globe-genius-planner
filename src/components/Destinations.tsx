import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const popularDestinations = [
  {
    name: "Bali, Indonesia",
    category: "Beaches & Culture",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600",
  },
  {
    name: "Tokyo, Japan",
    category: "Urban Adventure",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600",
  },
  {
    name: "Paris, France",
    category: "Romance & Art",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600",
  },
  {
    name: "Iceland",
    category: "Nature & Adventure",
    image: "https://images.unsplash.com/photo-1520769669658-f07657f5a307?w=600",
  },
];

const Destinations = () => {
  return (
    <section className="py-20 md:py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 md:mb-16 space-y-3">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
            Popular destinations
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Discover trending places loved by travelers worldwide
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {popularDestinations.map((destination, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl aspect-[3/4] cursor-pointer"
              style={{
                animation: 'scale-in 0.4s ease-out forwards',
                animationDelay: `${index * 0.1}s`,
                opacity: 0,
              }}
            >
              {/* Image */}
              <img
                src={destination.image}
                alt={destination.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <p className="text-sm opacity-80 mb-1">
                  {destination.category}
                </p>
                <h3 className="text-lg font-semibold">
                  {destination.name}
                </h3>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/explore">
            <Button variant="outline" size="lg" className="group btn-press">
              Explore All Destinations
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Destinations;

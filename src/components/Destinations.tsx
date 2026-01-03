import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

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

const DestinationCard = ({ destination, index }: { destination: typeof popularDestinations[0]; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: [0.4, 0, 0.2, 1]
      }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="group relative overflow-hidden rounded-xl aspect-[3/4] cursor-pointer"
    >
      {/* Image */}
      <motion.img
        src={destination.image}
        alt={destination.name}
        className="absolute inset-0 w-full h-full object-cover"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
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
    </motion.div>
  );
};

const Destinations = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          className="text-center mb-12 md:mb-16 space-y-3"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
            Popular destinations
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Discover trending places loved by travelers worldwide
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {popularDestinations.map((destination, index) => (
            <DestinationCard key={index} destination={destination} index={index} />
          ))}
        </div>

        <motion.div 
          className="text-center mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <Link to="/explore">
            <Button 
              variant="outline" 
              size="lg" 
              className="group transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              Explore All Destinations
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Destinations;

import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, Heart, Lightbulb } from 'lucide-react';

const categories = [
  { name: "Beaches", icon: "🏖️" },
  { name: "Mountains", icon: "⛰️" },
  { name: "Cities", icon: "🏙️" },
  { name: "Adventure", icon: "🎒" },
  { name: "Cultural", icon: "🏛️" },
  { name: "Romantic", icon: "💑" },
];

const communityTrips = [
  {
    destination: "Bali Adventure",
    author: "Sarah K.",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800",
    days: 7,
    budget: "$$",
    tags: ["Adventure", "Beach", "Culture"],
  },
  {
    destination: "Tokyo Explorer",
    author: "Mike Chen",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800",
    days: 10,
    budget: "$$$",
    tags: ["Food", "Culture", "City"],
  },
  {
    destination: "Paris Romance",
    author: "Emma L.",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800",
    days: 5,
    budget: "$$$$",
    tags: ["Romantic", "Culture", "Food"],
  },
];

const trendingDestinations = [
  { name: "Bali", image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400" },
  { name: "Tokyo", image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400" },
  { name: "Paris", image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400" },
  { name: "Dubai", image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400" },
];

const Explore = () => {
  return (
    <div className="w-full min-h-screen pb-16">
      {/* Hero Search Section */}
      <section className="py-16 md:py-20 px-4 bg-gradient-hero">
        <Container className="animate-fade-in">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground">
              Find your inspiration
            </h1>
            <p className="text-muted-foreground text-lg">
              Discover destinations and get inspired for your next adventure
            </p>
            
            <div className="flex gap-2 max-w-xl mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search destinations..."
                  className="pl-10 h-12 bg-background"
                />
              </div>
              <Button size="lg" className="h-12 px-6 btn-press">
                Search
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Categories Section */}
      <section className="py-12 md:py-16 px-4">
        <Container>
          <h2 className="text-xl font-semibold text-foreground mb-6">Browse by category</h2>
          
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
            {categories.map((category, index) => (
              <button
                key={index}
                className="p-4 rounded-xl bg-card border border-border/60 hover:border-border hover:shadow-sm transition-all group"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <span className="text-sm font-medium text-foreground">{category.name}</span>
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* Community Trips Section */}
      <section className="py-12 md:py-16 px-4">
        <Container>
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-xl font-semibold text-foreground">Community trips</h2>
              <p className="text-sm text-muted-foreground mt-1">Itineraries from travelers worldwide</p>
            </div>
            <Button variant="outline" size="sm" className="btn-press">
              View All
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {communityTrips.map((trip, idx) => (
              <Card
                key={idx}
                className="overflow-hidden border-border/60 hover:border-border hover:shadow-md transition-all duration-300 group"
                style={{ 
                  animation: 'slide-up 0.5s ease-out forwards',
                  animationDelay: `${idx * 0.1}s`,
                  opacity: 0
                }}
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={trip.image || "/placeholder.svg"}
                    alt={trip.destination}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  
                  {/* Like Button */}
                  <button className="absolute top-3 right-3 p-2 rounded-full bg-black/20 hover:bg-black/40 backdrop-blur-sm text-white transition-colors">
                    <Heart className="w-4 h-4" />
                  </button>

                  {/* Trip Info Overlay */}
                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="text-white font-semibold text-lg">{trip.destination}</h3>
                    <p className="text-white/80 text-sm">by {trip.author}</p>
                  </div>
                </div>

                {/* Card Content */}
                <CardContent className="p-4">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {trip.tags.map((tag, tagIdx) => (
                      <Badge key={tagIdx} variant="secondary" className="text-xs font-normal">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Trip Details */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <span>{trip.days} days</span>
                      <span className="text-primary font-medium">{trip.budget}</span>
                    </div>
                    <Button size="sm" variant="ghost" className="gap-1.5 text-primary hover:text-primary">
                      <Lightbulb className="w-3.5 h-3.5" />
                      Use as inspiration
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Trending Destinations Section */}
      <section className="py-12 md:py-16 px-4 bg-muted/30">
        <Container>
          <h2 className="text-xl font-semibold text-foreground mb-6">Trending destinations</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {trendingDestinations.map((dest, idx) => (
              <div
                key={idx}
                className="relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer group"
                style={{ 
                  animation: 'scale-in 0.4s ease-out forwards',
                  animationDelay: `${idx * 0.1}s`,
                  opacity: 0
                }}
              >
                <img
                  src={dest.image || "/placeholder.svg"}
                  alt={dest.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                <div className="absolute bottom-3 left-3">
                  <h4 className="text-white font-semibold">{dest.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Explore;

import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search, MapPin, TrendingUp, Users, DollarSign, Calendar, Sparkles, Heart, Star, Share2, Copy } from "lucide-react";

const categories = [
  { name: "Beaches", icon: "🏖️", count: 156 },
  { name: "Mountains", icon: "⛰️", count: 98 },
  { name: "Cities", icon: "🏙️", count: 234 },
  { name: "Adventure", icon: "🎒", count: 187 },
  { name: "Cultural", icon: "🏛️", count: 145 },
  { name: "Romantic", icon: "💑", count: 123 },
];

const Explore = () => {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      
      <main className="flex-1 ml-64 pt-8 pb-12">{/* Keep rest of content */}
        {/* Hero Search */}
        <section className="py-16 gradient-mesh">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold animate-fade-in">
                Explore <span className="gradient-text">Amazing</span> Destinations
              </h1>
              <p className="text-xl text-muted-foreground animate-slide-up" style={{ animationDelay: "0.1s" }}>
                Discover your next adventure from thousands of destinations worldwide
              </p>
              
              <div className="flex gap-2 max-w-2xl mx-auto animate-scale-in" style={{ animationDelay: "0.2s" }}>
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    placeholder="Search destinations, cities, countries..."
                    className="pl-10 h-12"
                  />
                </div>
                <Button size="lg" className="bg-gradient-primary hover:opacity-90 px-8 hover-lift">
                  Search
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-12 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8">Browse by Category</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className="p-6 rounded-2xl glass-card border-border/50 hover:bg-muted/50 transition-all hover-lift group animate-scale-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                    {category.icon}
                  </div>
                  <h3 className="font-semibold mb-1">{category.name}</h3>
                  <p className="text-xs text-muted-foreground">{category.count} places</p>
                </button>
              ))}
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4">
          {/* Public Trip Feed */}
          <div className="mb-16">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-3xl font-bold mb-2">Community Trips</h2>
                <p className="text-muted-foreground">Discover amazing itineraries from travelers worldwide</p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" className="gap-2">
                  <TrendingUp className="w-4 h-4" />
                  Trending
                </Button>
                <Button variant="outline">View All</Button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  destination: "Bali Adventure",
                  author: "Sarah K.",
                  avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
                  image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800",
                  days: 7,
                  budget: "$$",
                  likes: 234,
                  saves: 89,
                  tags: ["Adventure", "Beach", "Culture"],
                },
                {
                  destination: "Tokyo Explorer",
                  author: "Mike Chen",
                  avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=mike",
                  image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800",
                  days: 10,
                  budget: "$$$",
                  likes: 567,
                  saves: 234,
                  tags: ["Food", "Culture", "City"],
                },
                {
                  destination: "Paris Romance",
                  author: "Emma L.",
                  avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=emma",
                  image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800",
                  days: 5,
                  budget: "$$$$",
                  likes: 432,
                  saves: 167,
                  tags: ["Romantic", "Culture", "Food"],
                },
              ].map((trip, idx) => (
                <Card
                  key={idx}
                  className="glass-card border-border/50 overflow-hidden hover-lift interactive-card animate-slide-up group"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={trip.image}
                      alt={trip.destination}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute top-3 right-3 flex gap-2">
                      <Button
                        size="icon"
                        variant="ghost"
                        className="bg-black/20 hover:bg-black/40 backdrop-blur-sm text-white hover-lift"
                      >
                        <Heart className="w-4 h-4" />
                      </Button>
                      <Button
                        size="icon"
                        variant="ghost"
                        className="bg-black/20 hover:bg-black/40 backdrop-blur-sm text-white hover-lift"
                      >
                        <Share2 className="w-4 h-4" />
                      </Button>
                    </div>
                    <div className="absolute bottom-3 left-3 right-3">
                      <h3 className="text-white font-bold text-lg mb-1">{trip.destination}</h3>
                      <div className="flex items-center gap-2 text-white/90 text-xs">
                        <Avatar className="w-5 h-5 border border-white/20">
                          <AvatarImage src={trip.avatar} />
                          <AvatarFallback>{trip.author[0]}</AvatarFallback>
                        </Avatar>
                        <span>{trip.author}</span>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {trip.tags.map((tag, tagIdx) => (
                        <Badge key={tagIdx} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                      <div className="flex items-center gap-3">
                        <span>{trip.days} days</span>
                        <span>{trip.budget}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Heart className="w-4 h-4" />
                          <span>{trip.likes}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4" />
                          <span>{trip.saves}</span>
                        </div>
                      </div>
                      <Button size="sm" variant="ghost" className="gap-2 hover-lift">
                        <Copy className="w-3 h-3" />
                        Clone
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Trending Destinations */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-3xl font-bold mb-2">Trending Destinations</h2>
                <p className="text-muted-foreground">Most visited places this month</p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: "Bali", count: "2.3K trips", image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400" },
                { name: "Tokyo", count: "1.8K trips", image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400" },
                { name: "Paris", count: "3.1K trips", image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400" },
                { name: "Dubai", count: "1.5K trips", image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400" },
              ].map((dest, idx) => (
                <Card
                  key={idx}
                  className="glass-card border-border/50 overflow-hidden hover-lift interactive-card animate-scale-in group cursor-pointer"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="relative h-32 overflow-hidden">
                    <img
                      src={dest.image}
                      alt={dest.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-2 left-2 right-2">
                      <h4 className="text-white font-bold">{dest.name}</h4>
                      <p className="text-white/80 text-xs">{dest.count}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Explore;

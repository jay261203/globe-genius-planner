import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Destinations from "@/components/Destinations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, TrendingUp, MapPin, Star } from "lucide-react";

const categories = [
  { name: "Beaches", icon: "🏖️", count: 156 },
  { name: "Mountains", icon: "⛰️", count: 98 },
  { name: "Cities", icon: "🏙️", count: 234 },
  { name: "Adventure", icon: "🎒", count: 187 },
  { name: "Cultural", icon: "🏛️", count: 145 },
  { name: "Romantic", icon: "💑", count: 123 },
];

const trending = [
  { name: "Santorini, Greece", rating: 4.9, trips: "2.3k" },
  { name: "Machu Picchu, Peru", rating: 4.8, trips: "1.8k" },
  { name: "Maldives", rating: 4.9, trips: "3.1k" },
  { name: "Swiss Alps", rating: 4.7, trips: "1.5k" },
];

const Explore = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24 pb-12">
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
                <Button size="lg" className="bg-gradient-primary hover:opacity-90 px-8">
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
                  className="p-6 rounded-2xl glass-card border-border/50 hover:bg-muted/50 transition-all hover:scale-105 group animate-scale-in"
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

        {/* Trending */}
        <section className="py-12 px-4 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <TrendingUp className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold">Trending Now</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {trending.map((place, index) => (
                <div
                  key={index}
                  className="glass-card p-6 rounded-2xl hover:bg-muted/50 transition-all cursor-pointer group hover:scale-105 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <MapPin className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                    <div className="flex items-center gap-1 text-sm">
                      <Star className="w-4 h-4 fill-accent text-accent" />
                      <span className="font-semibold">{place.rating}</span>
                    </div>
                  </div>
                  <h3 className="font-bold text-lg mb-2">{place.name}</h3>
                  <p className="text-sm text-muted-foreground">{place.trips} trips planned</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Destinations */}
        <Destinations />
      </main>

      <Footer />
    </div>
  );
};

export default Explore;

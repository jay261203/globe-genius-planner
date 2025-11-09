import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Navigation, Coffee, Camera, UtensilsCrossed, Building, Waves, Mountain, Filter, Play } from "lucide-react";
import { cn } from "@/lib/utils";

interface Location {
  id: string;
  day: number;
  time: string;
  title: string;
  category: "food" | "nature" | "culture" | "nightlife" | "adventure";
  lat: number;
  lng: number;
  rating: number;
  image: string;
  description: string;
  travelTime?: string;
}

const categoryIcons = {
  food: UtensilsCrossed,
  nature: Waves,
  culture: Building,
  nightlife: Coffee,
  adventure: Mountain,
};

const categories = [
  { id: "all", label: "All", icon: MapPin },
  { id: "food", label: "Food", icon: UtensilsCrossed },
  { id: "nature", label: "Nature", icon: Waves },
  { id: "culture", label: "Culture", icon: Building },
  { id: "nightlife", label: "Nightlife", icon: Coffee },
  { id: "adventure", label: "Adventure", icon: Mountain },
];

const mockLocations: Location[] = [
  {
    id: "1",
    day: 1,
    time: "12:00 PM",
    title: "Warung Local",
    category: "food",
    lat: -8.65,
    lng: 115.22,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400",
    description: "Authentic Balinese cuisine",
    travelTime: "15 min from airport",
  },
  {
    id: "2",
    day: 1,
    time: "4:00 PM",
    title: "Seminyak Beach",
    category: "nature",
    lat: -8.69,
    lng: 115.16,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400",
    description: "Stunning sunset views",
    travelTime: "20 min drive",
  },
  {
    id: "3",
    day: 2,
    time: "8:00 AM",
    title: "Tanah Lot Temple",
    category: "culture",
    lat: -8.62,
    lng: 115.09,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400",
    description: "Ancient sea temple",
    travelTime: "45 min drive",
  },
];

const InteractiveMap = () => {
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const filteredLocations = mockLocations.filter(
    (loc) =>
      (selectedDay === null || loc.day === selectedDay) &&
      (selectedCategory === "all" || loc.category === selectedCategory)
  );

  const handleAnimateRoute = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 3000);
  };

  return (
    <div className="space-y-4">
      {/* Controls */}
      <div className="flex flex-wrap gap-3">
        <div className="flex gap-2">
          <Button
            variant={selectedDay === null ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedDay(null)}
            className="animate-slide-right"
          >
            All Days
          </Button>
          {[1, 2, 3, 4, 5, 6, 7].map((day) => (
            <Button
              key={day}
              variant={selectedDay === day ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedDay(day)}
              className="animate-slide-right"
              style={{ animationDelay: `${day * 0.05}s` }}
            >
              Day {day}
            </Button>
          ))}
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={handleAnimateRoute}
          className="gap-2 animate-slide-right ml-auto"
        >
          <Play className="w-4 h-4" />
          Animate Route
        </Button>
      </div>

      {/* Category Filters */}
      <div className="flex gap-2 animate-slide-up">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={cn(
              "flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300",
              "hover-lift glass-card",
              selectedCategory === cat.id
                ? "bg-gradient-primary text-white"
                : "hover:bg-muted/50"
            )}
          >
            <cat.icon className="w-4 h-4" />
            <span className="text-sm font-medium">{cat.label}</span>
          </button>
        ))}
      </div>

      {/* Map Container */}
      <Card className="glass-card overflow-hidden animate-scale-in">
        <CardContent className="p-0">
          <div className="relative h-[500px] bg-gradient-to-br from-secondary/10 to-primary/10 gradient-mesh">
            {/* Map Grid */}
            <div className="absolute inset-0 opacity-10">
              <svg width="100%" height="100%">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>

            {/* Route Lines */}
            {isAnimating && (
              <svg className="absolute inset-0 pointer-events-none">
                {filteredLocations.map((loc, idx) => {
                  if (idx === filteredLocations.length - 1) return null;
                  const next = filteredLocations[idx + 1];
                  return (
                    <line
                      key={`line-${idx}`}
                      x1={`${loc.lng * 5}%`}
                      y1={`${loc.lat * 10}%`}
                      x2={`${next.lng * 5}%`}
                      y2={`${next.lat * 10}%`}
                      stroke="url(#gradient-line)"
                      strokeWidth="3"
                      strokeDasharray="10,5"
                      className="animate-shimmer"
                      style={{ animationDelay: `${idx * 0.3}s` }}
                    />
                  );
                })}
                <defs>
                  <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: "hsl(var(--primary))", stopOpacity: 0.8 }} />
                    <stop offset="100%" style={{ stopColor: "hsl(var(--secondary))", stopOpacity: 0.8 }} />
                  </linearGradient>
                </defs>
              </svg>
            )}

            {/* Location Pins */}
            {filteredLocations.map((location, idx) => {
              const Icon = categoryIcons[location.category];
              return (
                <button
                  key={location.id}
                  className={cn(
                    "absolute w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300",
                    "hover:scale-125 hover-glow cursor-pointer animate-bounce-slow",
                    "bg-gradient-primary text-white shadow-elevated"
                  )}
                  style={{
                    left: `${location.lng * 5}%`,
                    top: `${location.lat * 10}%`,
                    animationDelay: `${idx * 0.2}s`,
                  }}
                  onClick={() => setSelectedLocation(location)}
                >
                  <Icon className="w-6 h-6" />
                  <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-accent text-[10px] font-bold flex items-center justify-center">
                    {location.day}
                  </div>
                </button>
              );
            })}

            {/* Selected Location Card */}
            {selectedLocation && (
              <Card
                className="absolute bottom-4 left-4 right-4 glass-card border-border/50 animate-slide-up shadow-elevated"
                onClick={(e) => e.stopPropagation()}
              >
                <CardContent className="p-4">
                  <div className="flex gap-4">
                    <img
                      src={selectedLocation.image}
                      alt={selectedLocation.title}
                      className="w-24 h-24 rounded-lg object-cover animate-scale-in"
                    />
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h4 className="font-bold text-lg">{selectedLocation.title}</h4>
                          <p className="text-sm text-muted-foreground">{selectedLocation.description}</p>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setSelectedLocation(null)}
                        >
                          ×
                        </Button>
                      </div>
                      <div className="flex items-center gap-4 text-sm">
                        <Badge variant="secondary" className="gap-1">
                          <Camera className="w-3 h-3" />
                          {selectedLocation.rating}
                        </Badge>
                        <span className="text-muted-foreground">{selectedLocation.time}</span>
                        {selectedLocation.travelTime && (
                          <span className="text-muted-foreground flex items-center gap-1">
                            <Navigation className="w-3 h-3" />
                            {selectedLocation.travelTime}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default InteractiveMap;

import { Button } from "@/components/ui/button";
import { MapPin, Calendar, DollarSign, Users, Hotel, Car, Sparkles } from "lucide-react";
import { useState } from "react";

const TripPlanningForm = () => {
  const [travelStyle, setTravelStyle] = useState<string[]>([]);

  const travelStyles = [
    "Nature", "Adventure", "Luxury", "Budget", 
    "Food lover", "History", "Nightlife", "Photography", "Family-friendly"
  ];

  const toggleStyle = (style: string) => {
    setTravelStyle(prev => 
      prev.includes(style) 
        ? prev.filter(s => s !== style)
        : [...prev, style]
    );
  };

  return (
    <div className="glass-card p-8 rounded-3xl max-w-4xl mx-auto animate-slide-up hover-lift" style={{ animationDelay: '0.3s' }}>
      <div className="space-y-6">
        {/* Destination */}
        <div className="relative group">
          <label className="block text-sm font-medium mb-2 text-foreground">Destination</label>
          <MapPin className="absolute left-3 top-[42px] w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
          <input
            type="text"
            placeholder="Japan or Tokyo"
            className="w-full pl-11 pr-4 py-3 rounded-xl glass-input
                     focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-white/30
                     transition-all duration-300 hover:border-white/30"
          />
        </div>

        {/* Date Range */}
        <div className="grid md:grid-cols-2 gap-4">
          <div className="relative group">
            <label className="block text-sm font-medium mb-2 text-foreground">Start Date</label>
            <Calendar className="absolute left-3 top-[42px] w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
            <input
              type="date"
              className="w-full pl-11 pr-4 py-3 rounded-xl glass-input
                       focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-white/30
                       transition-all duration-300 hover:border-white/30"
            />
          </div>

          <div className="relative group">
            <label className="block text-sm font-medium mb-2 text-foreground">End Date</label>
            <Calendar className="absolute left-3 top-[42px] w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
            <input
              type="date"
              className="w-full pl-11 pr-4 py-3 rounded-xl glass-input
                       focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-white/30
                       transition-all duration-300 hover:border-white/30"
            />
          </div>
        </div>

        {/* Budget */}
        <div className="relative group">
          <label className="block text-sm font-medium mb-2 text-foreground">Budget (Optional)</label>
          <DollarSign className="absolute left-3 top-[42px] w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
          <select
            className="w-full pl-11 pr-4 py-3 rounded-xl glass-input
                     focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-white/30
                     transition-all duration-300 hover:border-white/30"
          >
            <option value="">Select budget range</option>
            <option value="low">Low (Budget Travel)</option>
            <option value="medium">Medium (Comfortable)</option>
            <option value="high">High (Luxury)</option>
          </select>
        </div>

        {/* Travel Style */}
        <div>
          <label className="block text-sm font-medium mb-3 text-foreground">Travel Style & Preferences</label>
          <div className="flex flex-wrap gap-2">
            {travelStyles.map((style) => (
              <button
                key={style}
                onClick={() => toggleStyle(style)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all hover:scale-105
                  ${travelStyle.includes(style) 
                    ? 'bg-gradient-primary text-white shadow-glow' 
                    : 'glass-input text-muted-foreground hover:text-foreground'
                  }`}
              >
                {style}
              </button>
            ))}
          </div>
        </div>

        {/* Travel Party */}
        <div className="grid md:grid-cols-2 gap-4">
          <div className="relative group">
            <label className="block text-sm font-medium mb-2 text-foreground">Adults</label>
            <Users className="absolute left-3 top-[42px] w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
            <input
              type="number"
              min="1"
              defaultValue="2"
              className="w-full pl-11 pr-4 py-3 rounded-xl glass-input
                       focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-white/30
                       transition-all duration-300 hover:border-white/30"
            />
          </div>

          <div className="relative group">
            <label className="block text-sm font-medium mb-2 text-foreground">Children</label>
            <Users className="absolute left-3 top-[42px] w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
            <input
              type="number"
              min="0"
              defaultValue="0"
              className="w-full pl-11 pr-4 py-3 rounded-xl glass-input
                       focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-white/30
                       transition-all duration-300 hover:border-white/30"
            />
          </div>
        </div>

        {/* Hotel Preference */}
        <div className="relative group">
          <label className="block text-sm font-medium mb-2 text-foreground">Hotel Preference (Optional)</label>
          <Hotel className="absolute left-3 top-[42px] w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
          <select
            className="w-full pl-11 pr-4 py-3 rounded-xl glass-input
                     focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-white/30
                     transition-all duration-300 hover:border-white/30"
          >
            <option value="">Select hotel preference</option>
            <option value="budget">Budget hostel</option>
            <option value="3star">3-star hotel</option>
            <option value="4star">4-star hotel</option>
            <option value="luxury">Luxury resort</option>
            <option value="center">Nearby city center</option>
          </select>
        </div>

        {/* Mobility Preference */}
        <div className="relative group">
          <label className="block text-sm font-medium mb-2 text-foreground">Mobility Preference</label>
          <Car className="absolute left-3 top-[42px] w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
          <select
            className="w-full pl-11 pr-4 py-3 rounded-xl glass-input
                     focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-white/30
                     transition-all duration-300 hover:border-white/30"
          >
            <option value="">Select mobility preference</option>
            <option value="public">Public transport</option>
            <option value="car">Car rental</option>
            <option value="walkable">Walkable</option>
            <option value="mixed">Mixed (flexible)</option>
          </select>
        </div>

        {/* Generate Button */}
        <Button 
          size="lg" 
          className="w-full bg-gradient-primary hover:opacity-90 transition-all hover:scale-105 
                   text-white font-semibold shadow-glow h-14 text-lg rounded-xl"
        >
          <Sparkles className="mr-2 h-5 w-5 animate-pulse" />
          Generate My Perfect Trip
        </Button>
      </div>
    </div>
  );
};

export default TripPlanningForm;

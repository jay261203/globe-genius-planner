import { Button } from "@/components/ui/button";
import { MapPin, Calendar, DollarSign, Sparkles, Users, Train, Hotel, Loader2 } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { generateItinerary, GeneratedItinerary, TripFormData } from "@/services/api";
import ItineraryDisplay from "./ItineraryDisplay";
import { toast } from "sonner";

const TripPlanningForm = () => {
  const [formData, setFormData] = useState<TripFormData>({
    destination: "",
    start_date: "",
    end_date: "",
    budget_level: "",
    travel_style: [],
    travel_group: { adults: 2, children: 0 },
    mobility: "",
    hotel_preference: "",
  });
  const [isGenerating, setIsGenerating] = useState(false);
  const [itinerary, setItinerary] = useState<GeneratedItinerary | null>(null);

  const travelStyles = [
    { id: "nature", label: "🌿 Nature" },
    { id: "adventure", label: "🏔️ Adventure" },
    { id: "luxury", label: "✨ Luxury" },
    { id: "budget", label: "💰 Budget" },
    { id: "food", label: "🍜 Food" },
    { id: "culture", label: "🏛️ Culture" },
    { id: "nightlife", label: "🌙 Nightlife" },
    { id: "family", label: "👨‍👩‍👧 Family" },
  ];

  const toggleStyle = (styleId: string) => {
    setFormData(prev => ({
      ...prev,
      travel_style: prev.travel_style.includes(styleId)
        ? prev.travel_style.filter(s => s !== styleId)
        : [...prev.travel_style, styleId]
    }));
  };

  const handleGenerate = async () => {
    if (!formData.destination || !formData.start_date || !formData.end_date) {
      toast.error("Please fill in destination and dates");
      return;
    }
    
    setIsGenerating(true);
    try {
      const result = await generateItinerary(formData);
      setItinerary(result);
      toast.success("Itinerary generated!");
    } catch (error) {
      console.error("Generation error:", error);
      toast.error("Failed to generate itinerary. Make sure your backend is running.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <motion.div 
      className="bg-card border border-border/60 p-6 md:p-8 rounded-xl max-w-xl w-full mx-auto shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="space-y-5">
        {/* Destination */}
        <div>
          <label className="flex items-center gap-2 text-sm font-medium mb-2 text-foreground">
            <MapPin className="w-4 h-4 text-primary" />
            Destination
          </label>
          <input
            type="text"
            placeholder="Enter city or country"
            value={formData.destination}
            onChange={(e) => setFormData(prev => ({ ...prev, destination: e.target.value }))}
            className="w-full px-4 h-12 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
          />
        </div>

        {/* Date Range */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="flex items-center gap-2 text-sm font-medium mb-2 text-foreground">
              <Calendar className="w-4 h-4 text-primary" />
              Start Date
            </label>
            <input
              type="date"
              value={formData.start_date}
              onChange={(e) => setFormData(prev => ({ ...prev, start_date: e.target.value }))}
              className="w-full px-4 h-12 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
            />
          </div>
          <div>
            <label className="flex items-center gap-2 text-sm font-medium mb-2 text-foreground">
              <Calendar className="w-4 h-4 text-primary" />
              End Date
            </label>
            <input
              type="date"
              value={formData.end_date}
              onChange={(e) => setFormData(prev => ({ ...prev, end_date: e.target.value }))}
              className="w-full px-4 h-12 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
            />
          </div>
        </div>

        {/* Budget Level */}
        <div>
          <label className="flex items-center gap-2 text-sm font-medium mb-2 text-foreground">
            <DollarSign className="w-4 h-4 text-primary" />
            Budget Level
          </label>
          <select
            value={formData.budget_level}
            onChange={(e) => setFormData(prev => ({ ...prev, budget_level: e.target.value }))}
            className="w-full px-4 h-12 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all appearance-none cursor-pointer"
          >
            <option value="">Select budget</option>
            <option value="low">Budget-friendly</option>
            <option value="medium">Moderate</option>
            <option value="high">Luxury</option>
          </select>
        </div>

        {/* Travel Group */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="flex items-center gap-2 text-sm font-medium mb-2 text-foreground">
              <Users className="w-4 h-4 text-primary" />
              Adults
            </label>
            <select
              value={formData.travel_group.adults}
              onChange={(e) => setFormData(prev => ({ 
                ...prev, 
                travel_group: { ...prev.travel_group, adults: parseInt(e.target.value) }
              }))}
              className="w-full px-4 h-12 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all appearance-none cursor-pointer"
            >
              {[1, 2, 3, 4, 5, 6].map(n => (
                <option key={n} value={n}>{n} adult{n > 1 ? 's' : ''}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="flex items-center gap-2 text-sm font-medium mb-2 text-foreground">
              <Users className="w-4 h-4 text-primary" />
              Children
            </label>
            <select
              value={formData.travel_group.children}
              onChange={(e) => setFormData(prev => ({ 
                ...prev, 
                travel_group: { ...prev.travel_group, children: parseInt(e.target.value) }
              }))}
              className="w-full px-4 h-12 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all appearance-none cursor-pointer"
            >
              {[0, 1, 2, 3, 4].map(n => (
                <option key={n} value={n}>{n} child{n !== 1 ? 'ren' : ''}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Mobility */}
        <div>
          <label className="flex items-center gap-2 text-sm font-medium mb-2 text-foreground">
            <Train className="w-4 h-4 text-primary" />
            Mobility Preference
          </label>
          <select
            value={formData.mobility}
            onChange={(e) => setFormData(prev => ({ ...prev, mobility: e.target.value }))}
            className="w-full px-4 h-12 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all appearance-none cursor-pointer"
          >
            <option value="">Select preference</option>
            <option value="public transport">Public Transport</option>
            <option value="car rental">Car Rental</option>
            <option value="walkable">Walkable</option>
          </select>
        </div>

        {/* Hotel Preference */}
        <div>
          <label className="flex items-center gap-2 text-sm font-medium mb-2 text-foreground">
            <Hotel className="w-4 h-4 text-primary" />
            Hotel Preference
          </label>
          <select
            value={formData.hotel_preference}
            onChange={(e) => setFormData(prev => ({ ...prev, hotel_preference: e.target.value }))}
            className="w-full px-4 h-12 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all appearance-none cursor-pointer"
          >
            <option value="">Select preference</option>
            <option value="budget hostel">Budget Hostel</option>
            <option value="3-star">3-Star Hotel</option>
            <option value="4-star">4-Star Hotel</option>
            <option value="5-star">5-Star Luxury</option>
          </select>
        </div>

        {/* Travel Style */}
        <div>
          <label className="text-sm font-medium mb-3 text-foreground block">
            Travel Style <span className="text-muted-foreground font-normal">(select all that apply)</span>
          </label>
          <div className="flex flex-wrap gap-2">
            {travelStyles.map((style) => (
              <motion.button
                key={style.id}
                type="button"
                onClick={() => toggleStyle(style.id)}
                className={`px-3.5 py-2 rounded-full text-sm font-medium border transition-all ${
                  formData.travel_style.includes(style.id)
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'bg-muted/50 text-muted-foreground border-transparent hover:bg-muted'
                }`}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                {style.label}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Generate Button */}
        <Button 
          size="lg" 
          className="w-full h-12 text-base font-medium mt-2 transition-all duration-200 hover:shadow-md"
          onClick={handleGenerate}
          disabled={isGenerating}
        >
          <AnimatePresence mode="wait">
            {isGenerating ? (
              <motion.span
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-2"
              >
                <Loader2 className="w-4 h-4 animate-spin" />
                Generating...
              </motion.span>
            ) : (
              <motion.span
                key="idle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                Generate Trip
              </motion.span>
            )}
          </AnimatePresence>
        </Button>
      </div>

      {/* Loading State */}
      <AnimatePresence>
        {isGenerating && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-6 pt-6 border-t border-border"
          >
            <div className="space-y-3">
              <div className="h-4 bg-muted rounded-full shimmer w-full" />
              <div className="h-4 bg-muted rounded-full shimmer w-4/5" />
              <div className="h-4 bg-muted rounded-full shimmer w-3/5" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Generated Itinerary */}
      <AnimatePresence>
        {itinerary && !isGenerating && (
          <ItineraryDisplay 
            itinerary={itinerary} 
            onUpdate={setItinerary}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default TripPlanningForm;

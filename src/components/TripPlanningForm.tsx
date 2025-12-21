import { Button } from "@/components/ui/button";
import { MapPin, Calendar, DollarSign, Sparkles, Check } from "lucide-react";
import { useState } from "react";

const TripPlanningForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [travelStyle, setTravelStyle] = useState<string[]>([]);

  const steps = [
    { num: 1, label: "Destination" },
    { num: 2, label: "Dates" },
    { num: 3, label: "Preferences" },
  ];

  const travelStyles = ["Nature", "Adventure", "Luxury", "Budget", "Food", "Culture", "Nightlife", "Family"];

  const toggleStyle = (style: string) => {
    setTravelStyle(prev => 
      prev.includes(style) ? prev.filter(s => s !== style) : [...prev, style]
    );
  };

  return (
    <div className="bg-card border border-border/60 p-6 md:p-8 rounded-xl max-w-xl w-full mx-auto animate-fade-in">
      {/* Progress Indicator */}
      <div className="flex items-center justify-between mb-8">
        {steps.map((step, idx) => (
          <div key={step.num} className="flex items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
              currentStep >= step.num 
                ? 'bg-primary text-primary-foreground' 
                : 'bg-muted text-muted-foreground'
            }`}>
              {currentStep > step.num ? <Check className="w-4 h-4" /> : step.num}
            </div>
            <span className={`ml-2 text-sm hidden sm:inline ${
              currentStep >= step.num ? 'text-foreground' : 'text-muted-foreground'
            }`}>{step.label}</span>
            {idx < steps.length - 1 && (
              <div className={`w-8 md:w-16 h-px mx-3 ${
                currentStep > step.num ? 'bg-primary' : 'bg-border'
              }`} />
            )}
          </div>
        ))}
      </div>

      <div className="space-y-5">
        {/* Destination */}
        <div>
          <label className="block text-sm font-medium mb-2 text-foreground">Where to?</label>
          <div className="relative">
            <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Enter destination"
              className="w-full pl-10 pr-4 h-12 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
              onFocus={() => setCurrentStep(1)}
            />
          </div>
        </div>

        {/* Date Range */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-sm font-medium mb-2 text-foreground">Start</label>
            <div className="relative">
              <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="date"
                className="w-full pl-10 pr-3 h-12 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                onFocus={() => setCurrentStep(2)}
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 text-foreground">End</label>
            <div className="relative">
              <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="date"
                className="w-full pl-10 pr-3 h-12 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                onFocus={() => setCurrentStep(2)}
              />
            </div>
          </div>
        </div>

        {/* Budget */}
        <div>
          <label className="block text-sm font-medium mb-2 text-foreground">Budget</label>
          <div className="relative">
            <DollarSign className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <select
              className="w-full pl-10 pr-4 h-12 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all appearance-none"
              onFocus={() => setCurrentStep(3)}
            >
              <option value="">Select budget</option>
              <option value="low">Budget</option>
              <option value="medium">Moderate</option>
              <option value="high">Luxury</option>
            </select>
          </div>
        </div>

        {/* Travel Style */}
        <div>
          <label className="block text-sm font-medium mb-3 text-foreground">Travel style</label>
          <div className="flex flex-wrap gap-2">
            {travelStyles.map((style) => (
              <button
                key={style}
                onClick={() => { toggleStyle(style); setCurrentStep(3); }}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                  travelStyle.includes(style) 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                {style}
              </button>
            ))}
          </div>
        </div>

        {/* Generate Button */}
        <Button size="lg" className="w-full h-12 text-base font-medium btn-press mt-2">
          <Sparkles className="w-4 h-4 mr-2" />
          Generate Trip
        </Button>
      </div>
    </div>
  );
};

export default TripPlanningForm;

import { Button } from "@/components/ui/button";
import { MapPin, Calendar, DollarSign, Sparkles, Check, Users, Loader2 } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TripPlanningForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [travelStyle, setTravelStyle] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);

  const steps = [
    { num: 1, label: "Destination" },
    { num: 2, label: "Dates" },
    { num: 3, label: "Preferences" },
  ];

  const travelStyles = [
    { id: "nature", label: "🌿 Nature", color: "bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20" },
    { id: "adventure", label: "🏔️ Adventure", color: "bg-orange-500/10 text-orange-700 dark:text-orange-400 border-orange-500/20" },
    { id: "luxury", label: "✨ Luxury", color: "bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-500/20" },
    { id: "budget", label: "💰 Budget", color: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20" },
    { id: "food", label: "🍜 Food", color: "bg-red-500/10 text-red-700 dark:text-red-400 border-red-500/20" },
    { id: "culture", label: "🏛️ Culture", color: "bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20" },
    { id: "nightlife", label: "🌙 Nightlife", color: "bg-pink-500/10 text-pink-700 dark:text-pink-400 border-pink-500/20" },
    { id: "family", label: "👨‍👩‍👧 Family", color: "bg-sky-500/10 text-sky-700 dark:text-sky-400 border-sky-500/20" },
  ];

  const toggleStyle = (styleId: string) => {
    setTravelStyle(prev => 
      prev.includes(styleId) ? prev.filter(s => s !== styleId) : [...prev, styleId]
    );
    setCurrentStep(3);
  };

  const handleGenerate = () => {
    setIsGenerating(true);
    // Simulate generation - in real app this would call API
    setTimeout(() => setIsGenerating(false), 3000);
  };

  const inputVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        ease: "easeOut" as const
      }
    })
  };

  return (
    <motion.div 
      className="bg-card border border-border/60 p-6 md:p-8 rounded-xl max-w-xl w-full mx-auto shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
    >
      {/* Progress Indicator */}
      <div className="flex items-center justify-between mb-8">
        {steps.map((step, idx) => (
          <div key={step.num} className="flex items-center">
            <motion.div 
              className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300 ${
                currentStep >= step.num 
                  ? 'bg-primary text-primary-foreground shadow-sm' 
                  : 'bg-muted text-muted-foreground'
              }`}
              initial={{ scale: 0.8 }}
              animate={{ scale: currentStep === step.num ? 1.05 : 1 }}
              transition={{ duration: 0.2 }}
            >
              {currentStep > step.num ? <Check className="w-4 h-4" /> : step.num}
            </motion.div>
            <span className={`ml-2 text-sm hidden sm:inline font-medium transition-colors ${
              currentStep >= step.num ? 'text-foreground' : 'text-muted-foreground'
            }`}>{step.label}</span>
            {idx < steps.length - 1 && (
              <div className={`w-8 md:w-16 h-0.5 mx-3 rounded-full transition-colors duration-300 ${
                currentStep > step.num ? 'bg-primary' : 'bg-border'
              }`} />
            )}
          </div>
        ))}
      </div>

      <div className="space-y-6">
        {/* Destination */}
        <motion.div
          custom={0}
          variants={inputVariants}
          initial="hidden"
          animate="visible"
        >
          <label className="flex items-center gap-2 text-sm font-medium mb-2.5 text-foreground">
            <MapPin className="w-4 h-4 text-primary" />
            Where to?
          </label>
          <input
            type="text"
            placeholder="Enter city, country, or region"
            className="w-full px-4 h-12 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary transition-all"
            onFocus={() => setCurrentStep(1)}
          />
        </motion.div>

        {/* Date Range */}
        <motion.div 
          className="grid grid-cols-2 gap-4"
          custom={1}
          variants={inputVariants}
          initial="hidden"
          animate="visible"
        >
          <div>
            <label className="flex items-center gap-2 text-sm font-medium mb-2.5 text-foreground">
              <Calendar className="w-4 h-4 text-primary" />
              Start date
            </label>
            <input
              type="date"
              className="w-full px-4 h-12 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary transition-all"
              onFocus={() => setCurrentStep(2)}
            />
          </div>
          <div>
            <label className="flex items-center gap-2 text-sm font-medium mb-2.5 text-foreground">
              <Calendar className="w-4 h-4 text-primary" />
              End date
            </label>
            <input
              type="date"
              className="w-full px-4 h-12 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary transition-all"
              onFocus={() => setCurrentStep(2)}
            />
          </div>
        </motion.div>

        {/* Budget & Travelers Row */}
        <motion.div 
          className="grid grid-cols-2 gap-4"
          custom={2}
          variants={inputVariants}
          initial="hidden"
          animate="visible"
        >
          <div>
            <label className="flex items-center gap-2 text-sm font-medium mb-2.5 text-foreground">
              <DollarSign className="w-4 h-4 text-primary" />
              Budget
            </label>
            <select
              className="w-full px-4 h-12 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary transition-all appearance-none cursor-pointer"
              onFocus={() => setCurrentStep(3)}
            >
              <option value="">Select budget</option>
              <option value="low">Budget-friendly</option>
              <option value="medium">Moderate</option>
              <option value="high">Luxury</option>
            </select>
          </div>
          <div>
            <label className="flex items-center gap-2 text-sm font-medium mb-2.5 text-foreground">
              <Users className="w-4 h-4 text-primary" />
              Travelers
            </label>
            <select
              className="w-full px-4 h-12 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary transition-all appearance-none cursor-pointer"
              onFocus={() => setCurrentStep(3)}
            >
              <option value="1">1 traveler</option>
              <option value="2">2 travelers</option>
              <option value="3">3 travelers</option>
              <option value="4">4 travelers</option>
              <option value="5">5+ travelers</option>
            </select>
          </div>
        </motion.div>

        {/* Travel Style - Tag Multi-Select */}
        <motion.div
          custom={3}
          variants={inputVariants}
          initial="hidden"
          animate="visible"
        >
          <label className="text-sm font-medium mb-3 text-foreground block">
            Travel style <span className="text-muted-foreground font-normal">(select all that apply)</span>
          </label>
          <div className="flex flex-wrap gap-2">
            {travelStyles.map((style) => (
              <motion.button
                key={style.id}
                onClick={() => toggleStyle(style.id)}
                className={`px-3.5 py-2 rounded-full text-sm font-medium border transition-all ${
                  travelStyle.includes(style.id) 
                    ? `${style.color} border-current` 
                    : 'bg-muted/50 text-muted-foreground border-transparent hover:bg-muted'
                }`}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                {style.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Generate Button */}
        <motion.div
          custom={4}
          variants={inputVariants}
          initial="hidden"
          animate="visible"
        >
          <Button 
            size="lg" 
            className="w-full h-12 text-base font-medium mt-2 transition-all duration-200 hover:scale-[1.01] hover:shadow-md active:scale-[0.99]"
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
                  Generating your trip...
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
        </motion.div>
      </div>

      {/* Loading Skeleton State */}
      <AnimatePresence>
        {isGenerating && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-6 pt-6 border-t border-border"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-primary/20 animate-pulse" />
                <p className="text-sm text-muted-foreground">Analyzing your preferences...</p>
              </div>
              <div className="space-y-3">
                <div className="h-4 bg-muted rounded-full shimmer w-full" />
                <div className="h-4 bg-muted rounded-full shimmer w-4/5" />
                <div className="h-4 bg-muted rounded-full shimmer w-3/5" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default TripPlanningForm;

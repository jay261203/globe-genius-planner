import { motion } from "framer-motion";
import TripPlanningForm from "@/components/TripPlanningForm";

const Plan = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        className="w-full max-w-xl"
      >
        <div className="text-center mb-8">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="text-3xl md:text-4xl font-semibold text-foreground mb-3"
          >
            Plan Your Trip
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="text-muted-foreground"
          >
            Tell us about your dream destination and we'll create the perfect itinerary
          </motion.p>
        </div>
        
        <TripPlanningForm />
      </motion.div>
    </div>
  );
};

export default Plan;

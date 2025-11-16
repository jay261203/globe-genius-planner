import { ChevronDown } from "lucide-react";

interface TripHeroCardProps {
  destination: string;
  greeting: string;
  subtitle: string;
  backgroundImage: string;
}

const TripHeroCard = ({ destination, greeting, subtitle, backgroundImage }: TripHeroCardProps) => {
  return (
    <div className="relative h-[280px] rounded-3xl overflow-hidden glass-card hover-lift">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/30 to-black/60" />
      </div>
      
      <div className="relative h-full p-6 flex flex-col justify-between text-white">
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium uppercase tracking-wider opacity-90">Your Trip</span>
          <button className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all">
            <span className="text-sm font-medium">📍 {destination}</span>
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold mb-1">{greeting}</h2>
          <h3 className="text-3xl font-bold mb-2">Welcome To Your {destination}</h3>
          <h3 className="text-3xl font-bold mb-3">Adventure!</h3>
          <p className="text-sm opacity-80">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default TripHeroCard;

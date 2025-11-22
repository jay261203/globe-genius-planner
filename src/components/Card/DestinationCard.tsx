import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface DestinationCardProps {
  name: string;
  category: string;
  gradient: string;
  onPlanTrip?: () => void;
  className?: string;
}

export const DestinationCard = ({
  name,
  category,
  gradient,
  onPlanTrip,
  className = ''
}: DestinationCardProps) => (
  <div className={`group relative overflow-hidden rounded-2xl aspect-[3/4] cursor-pointer
                shadow-lg hover:shadow-2xl transition-shadow duration-500 ${className}`}>
    {/* Gradient Background */}
    <div className={`absolute inset-0 bg-gradient-to-br ${gradient} 
                   group-hover:scale-110 transition-transform duration-700 ease-out`} />
    
    {/* Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent 
                  group-hover:from-black/70 transition-colors duration-500" />
    
    {/* Shimmer effect on hover */}
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/0 to-transparent
                  group-hover:via-white/20 translate-x-[-200%] group-hover:translate-x-[200%]
                  transition-transform duration-1000 ease-in-out" />
    
    {/* Content */}
    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
      <div className="transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
        <p className="text-sm opacity-90 mb-1 transform translate-y-4 group-hover:translate-y-0
                    transition-transform duration-500 delay-75">
          {category}
        </p>
        <h3 className="text-2xl font-bold mb-3 transform translate-y-4 group-hover:translate-y-0
                     transition-transform duration-500 delay-100">
          {name}
        </h3>
        <Button 
          size="sm" 
          variant="secondary"
          onClick={onPlanTrip}
          className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0
                   transition-all duration-500 delay-150 hover:scale-105"
        >
          Plan Trip
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </div>

    {/* Animated border glow */}
    <div className="absolute inset-0 rounded-2xl border-2 border-white/0 group-hover:border-white/30
                  transition-colors duration-500" />
  </div>
);

export default DestinationCard;

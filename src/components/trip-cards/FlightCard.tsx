import { Plane, MoreHorizontal } from "lucide-react";

interface Flight {
  date: string;
  time: string;
  from: string;
  to: string;
}

interface FlightCardProps {
  outbound: Flight;
  return: Flight;
}

const FlightCard = ({ outbound, return: returnFlight }: FlightCardProps) => {
  return (
    <div className="glass-card rounded-3xl p-6 hover-lift h-full" style={{ backgroundColor: 'hsl(280 60% 40% / 0.3)' }}>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-background/50 flex items-center justify-center">
            ✈️
          </div>
          <h3 className="font-bold text-white">FLIGHT</h3>
        </div>
        <button className="p-1 hover:bg-white/10 rounded-lg transition-colors">
          <MoreHorizontal className="w-5 h-5 text-white" />
        </button>
      </div>

      <div className="space-y-4 text-white">
        <div className="space-y-2">
          <div className="text-xs opacity-80">{outbound.date}, {outbound.time}</div>
          <div className="flex items-center gap-3">
            <span className="font-semibold">{outbound.from}</span>
            <Plane className="w-4 h-4" />
            <span className="font-semibold">{outbound.to}</span>
          </div>
        </div>

        <div className="h-px bg-white/20" />

        <div className="space-y-2">
          <div className="text-xs opacity-80">{returnFlight.date}, {returnFlight.time}</div>
          <div className="flex items-center gap-3">
            <span className="font-semibold">{returnFlight.from}</span>
            <Plane className="w-4 h-4 rotate-180" />
            <span className="font-semibold">{returnFlight.to}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightCard;

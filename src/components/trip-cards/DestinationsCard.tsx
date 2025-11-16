import { Search, MoreHorizontal } from "lucide-react";

interface Destination {
  id: number;
  name: string;
  position: { x: number; y: number };
}

interface DestinationsCardProps {
  destinations: Destination[];
}

const DestinationsCard = ({ destinations }: DestinationsCardProps) => {
  return (
    <div className="glass-card rounded-3xl p-6 hover-lift h-full">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-foreground text-background flex items-center justify-center">
            🗺️
          </div>
          <h3 className="font-bold">DESTINATIONS</h3>
        </div>
        <button className="p-2 hover:bg-muted/50 rounded-lg transition-colors">
          <Search className="w-4 h-4" />
        </button>
      </div>

      {/* Simplified map visualization */}
      <div className="relative h-64 bg-muted/30 rounded-2xl mb-4 overflow-hidden">
        {/* Route path */}
        <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
          {destinations.map((dest, idx) => {
            if (idx === destinations.length - 1) return null;
            const next = destinations[idx + 1];
            return (
              <line
                key={`line-${dest.id}`}
                x1={`${dest.position.x}%`}
                y1={`${dest.position.y}%`}
                x2={`${next.position.x}%`}
                y2={`${next.position.y}%`}
                stroke="hsl(180 70% 40%)"
                strokeWidth="3"
                strokeDasharray="5,5"
              />
            );
          })}
        </svg>

        {/* Destination points */}
        {destinations.map((dest, idx) => (
          <div
            key={dest.id}
            className="absolute w-4 h-4 rounded-full bg-primary border-2 border-background shadow-lg"
            style={{
              left: `${dest.position.x}%`,
              top: `${dest.position.y}%`,
              transform: 'translate(-50%, -50%)',
              zIndex: 2
            }}
          />
        ))}
      </div>

      {/* Destination list */}
      <div className="space-y-2">
        {destinations.map((dest) => (
          <div key={dest.id} className="flex items-center gap-2 text-sm">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <span className="font-medium">{dest.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DestinationsCard;

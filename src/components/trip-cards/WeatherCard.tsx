import { Cloud, Thermometer, MoreHorizontal } from "lucide-react";

interface WeatherCardProps {
  location: string;
  temperature: number;
  condition: string;
  high: number;
  low: number;
}

const WeatherCard = ({ location, temperature, condition, high, low }: WeatherCardProps) => {
  return (
    <div className="glass-card rounded-3xl p-6 hover-lift h-full" style={{ backgroundColor: 'hsl(220 70% 75% / 0.3)' }}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-background/50 flex items-center justify-center">
            📍
          </div>
          <h3 className="font-bold">{location.toUpperCase()}</h3>
        </div>
        <button className="p-1 hover:bg-muted/50 rounded-lg transition-colors">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>

      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-lg bg-background/50 flex items-center justify-center">
            <Thermometer className="w-5 h-5 text-red-500" />
          </div>
          <div>
            <div className="text-xs text-muted-foreground mb-0.5">Temperature</div>
            <div className="text-sm font-medium">H{high}° L{low}°C</div>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-lg bg-background/50 flex items-center justify-center">
            <Cloud className="w-5 h-5 text-blue-500" />
          </div>
          <div>
            <div className="text-xs text-muted-foreground mb-0.5">Weather</div>
            <div className="text-sm font-medium">{condition}</div>
          </div>
        </div>

        <div className="text-center pt-4">
          <div className="text-5xl font-bold">{temperature}°</div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;

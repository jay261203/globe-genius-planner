import { MoreHorizontal } from "lucide-react";

interface ReadinessCardProps {
  daysLeft: number;
}

const ReadinessCard = ({ daysLeft }: ReadinessCardProps) => {
  const percentage = 75; // You can calculate this based on completed tasks

  return (
    <div className="glass-card rounded-3xl p-6 hover-lift h-full" style={{ backgroundColor: 'hsl(45 85% 75% / 0.3)' }}>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-foreground text-background flex items-center justify-center">
            ⏱️
          </div>
          <h3 className="font-bold">READINESS</h3>
        </div>
        <button className="p-1 hover:bg-muted/50 rounded-lg transition-colors">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>

      <div className="flex items-center justify-center">
        <div className="relative w-48 h-48">
          <svg className="transform -rotate-90" viewBox="0 0 100 100">
            {/* Background circle */}
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="hsl(45 40% 60%)"
              strokeWidth="8"
              opacity="0.2"
            />
            {/* Progress circle */}
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="hsl(180 70% 35%)"
              strokeWidth="8"
              strokeDasharray={`${percentage * 2.51} ${251 - percentage * 2.51}`}
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="text-xs font-medium text-muted-foreground mb-1">Days left</div>
            <div className="text-5xl font-bold">{daysLeft}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadinessCard;

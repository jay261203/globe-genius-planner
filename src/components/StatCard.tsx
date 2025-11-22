import { type LucideIcon } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

interface StatCardProps {
  label: string;
  value: string | number;
  change?: string;
  icon: LucideIcon;
  color: string;
  className?: string;
}

export const StatCard = ({
  label,
  value,
  change,
  icon: Icon,
  color,
  className = ""
}: StatCardProps) => (
  <Card className={`glass-card border-border/50 hover-lift transition-all ${className}`}>
    <CardContent className="p-6">
      <div className="flex items-center justify-between mb-4">
        <Icon className={`w-6 h-6 ${color}`} />
        {change && (
          <span className="text-xs font-semibold px-2 py-1 rounded-full bg-green-500/10 text-green-600">
            {change}
          </span>
        )}
      </div>
      <h3 className="text-sm text-muted-foreground mb-1">{label}</h3>
      <p className="text-3xl font-bold">{value}</p>
    </CardContent>
  </Card>
);

export default StatCard;

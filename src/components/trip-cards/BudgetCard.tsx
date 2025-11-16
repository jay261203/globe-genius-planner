import { MoreHorizontal } from "lucide-react";

interface BudgetCardProps {
  total: number;
  spent: number;
}

const BudgetCard = ({ total, spent }: BudgetCardProps) => {
  const remaining = total - spent;
  const spentPercentage = Math.round((spent / total) * 100);
  const remainingPercentage = 100 - spentPercentage;

  return (
    <div className="glass-card rounded-3xl p-6 hover-lift h-full">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-foreground text-background flex items-center justify-center">
            💰
          </div>
          <h3 className="font-bold">BUDGET</h3>
        </div>
        <button className="p-1 hover:bg-muted/50 rounded-lg transition-colors">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>

      <div className="flex items-center justify-between mb-4">
        <div className="text-sm text-muted-foreground">max. ${total}</div>
      </div>

      <div className="relative w-40 h-40 mx-auto mb-4">
        <svg className="transform -rotate-90" viewBox="0 0 100 100">
          {/* Background circle */}
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="hsl(var(--muted))"
            strokeWidth="10"
          />
          {/* Spent segment (teal) */}
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="hsl(180 70% 40%)"
            strokeWidth="10"
            strokeDasharray={`${spentPercentage * 2.51} ${251 - spentPercentage * 2.51}`}
            strokeLinecap="round"
          />
          {/* Remaining segment (yellow) */}
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="hsl(45 90% 60%)"
            strokeWidth="10"
            strokeDasharray={`${remainingPercentage * 2.51} ${251 - remainingPercentage * 2.51}`}
            strokeDashoffset={-spentPercentage * 2.51}
            strokeLinecap="round"
          />
          {/* White center circle */}
          <circle cx="50" cy="50" r="25" fill="hsl(var(--background))" />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-xs text-muted-foreground">
              {spentPercentage}%
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 text-xs">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'hsl(180 70% 40%)' }} />
          <span className="text-muted-foreground">Budget</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'hsl(45 90% 60%)' }} />
          <span className="text-muted-foreground">Spend</span>
        </div>
      </div>
    </div>
  );
};

export default BudgetCard;

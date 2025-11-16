import { Plane, Car, UtensilsCrossed, ShoppingBag, Plus, MoreHorizontal } from "lucide-react";

interface Expense {
  id: number;
  name: string;
  amount: number;
  icon: string;
}

interface ExpensesCardProps {
  expenses: Expense[];
}

const ExpensesCard = ({ expenses }: ExpensesCardProps) => {
  const iconMap: Record<string, any> = {
    plane: Plane,
    car: Car,
    food: UtensilsCrossed,
    shopping: ShoppingBag,
  };

  return (
    <div className="glass-card rounded-3xl p-6 hover-lift h-full">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-foreground text-background flex items-center justify-center">
            📋
          </div>
          <h3 className="font-bold">EXPENSES</h3>
        </div>
        <button className="p-1 hover:bg-muted/50 rounded-lg transition-colors">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>

      <div className="space-y-3 mb-4">
        {expenses.map((expense) => {
          const IconComponent = iconMap[expense.icon];
          return (
            <div key={expense.id} className="flex items-center justify-between py-2">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 text-muted-foreground">
                  {IconComponent ? <IconComponent className="w-5 h-5" /> : <ShoppingBag className="w-5 h-5" />}
                </div>
                <span className="text-sm">{expense.name}</span>
              </div>
              <span className="font-semibold">${expense.amount}</span>
            </div>
          );
        })}
      </div>

      <button className="w-full py-3 rounded-xl bg-muted/50 hover:bg-muted transition-colors flex items-center justify-center gap-2 text-sm font-medium">
        <Plus className="w-4 h-4" />
        Record
      </button>
    </div>
  );
};

export default ExpensesCard;

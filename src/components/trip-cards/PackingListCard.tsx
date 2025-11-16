import { Plus, MoreHorizontal, Circle, CheckCircle2 } from "lucide-react";
import { useState } from "react";

interface PackingItem {
  id: number;
  name: string;
  completed: boolean;
  note?: string;
}

interface PackingListCardProps {
  items: PackingItem[];
}

const PackingListCard = ({ items: initialItems }: PackingListCardProps) => {
  const [items, setItems] = useState(initialItems);

  const toggleItem = (id: number) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, completed: !item.completed } : item
    ));
  };

  return (
    <div className="glass-card rounded-3xl p-6 hover-lift h-full" style={{ backgroundColor: 'hsl(0 0% 10% / 0.4)' }}>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-background/20 flex items-center justify-center">
            📦
          </div>
          <h3 className="font-bold text-white">PACKING LIST</h3>
        </div>
        <button className="p-1 hover:bg-white/10 rounded-lg transition-colors">
          <MoreHorizontal className="w-5 h-5 text-white" />
        </button>
      </div>

      <div className="space-y-3 mb-4">
        {items.map((item) => (
          <div 
            key={item.id} 
            className="flex items-start gap-3 cursor-pointer group"
            onClick={() => toggleItem(item.id)}
          >
            <button className="mt-0.5">
              {item.completed ? (
                <CheckCircle2 className="w-5 h-5 text-primary" />
              ) : (
                <Circle className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              )}
            </button>
            <div className="flex-1">
              <div className={`text-sm ${item.completed ? 'line-through text-muted-foreground' : 'text-white'}`}>
                {item.name}
              </div>
              {item.note && (
                <div className="text-xs text-muted-foreground mt-0.5">{item.note}</div>
              )}
            </div>
          </div>
        ))}
      </div>

      <button className="w-full py-3 rounded-xl bg-background/20 hover:bg-background/30 transition-colors flex items-center justify-center gap-2 text-sm font-medium text-white">
        <Plus className="w-4 h-4" />
        New Reminder
      </button>
    </div>
  );
};

export default PackingListCard;

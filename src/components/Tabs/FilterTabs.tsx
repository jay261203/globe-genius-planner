import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Tab {
  id: string;
  label: string;
  icon?: React.ReactNode;
}

interface FilterTabsProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
  className?: string;
}

export const FilterTabs = ({
  tabs,
  activeTab,
  onTabChange,
  className = "",
}: FilterTabsProps) => (
  <div className={cn("flex flex-wrap gap-2", className)}>
    {tabs.map((tab) => (
      <Button
        key={tab.id}
        onClick={() => onTabChange(tab.id)}
        variant={activeTab === tab.id ? "default" : "outline"}
        className={cn(
          "gap-2 transition-all duration-300 hover-lift",
          activeTab === tab.id && "bg-gradient-primary hover:opacity-90"
        )}
      >
        {tab.icon}
        {tab.label}
      </Button>
    ))}
  </div>
);

export default FilterTabs;

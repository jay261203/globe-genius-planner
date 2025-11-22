import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Info } from 'lucide-react';

interface InfoTooltipProps {
  content: string;
  side?: "top" | "right" | "bottom" | "left";
  className?: string;
}

export const InfoTooltip = ({
  content,
  side = "top",
  className = "",
}: InfoTooltipProps) => (
  <Tooltip>
    <TooltipTrigger asChild>
      <Info className={`w-4 h-4 text-muted-foreground hover:text-foreground cursor-help transition-colors ${className}`} />
    </TooltipTrigger>
    <TooltipContent side={side} className="glass-card border-border/50">
      {content}
    </TooltipContent>
  </Tooltip>
);

export default InfoTooltip;

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Edit, Copy, Share2, Trash2, MoreVertical } from 'lucide-react';

interface TripCardProps {
  id: number;
  destination: string;
  dates: string;
  image: string;
  status: "upcoming" | "planning" | "saved" | "completed";
  days: number;
  onEdit?: () => void;
  onDuplicate?: () => void;
  onShare?: () => void;
  onDelete?: () => void;
}

export const TripCard = ({
  destination,
  dates,
  image,
  status,
  days,
  onEdit,
  onDuplicate,
  onShare,
  onDelete,
}: TripCardProps) => {
  const statusConfig = {
    upcoming: { bg: "bg-gradient-primary", label: "Upcoming" },
    planning: { bg: "bg-gradient-secondary", label: "Planning" },
    saved: { bg: "bg-muted", label: "Saved" },
    completed: { bg: "bg-green-500", label: "Completed" },
  };

  const config = statusConfig[status];

  return (
    <Card className="glass-card border-border/50 overflow-hidden hover-lift interactive-card group animate-scale-in">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={destination}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        
        {/* Status Badge */}
        <Badge className={`absolute top-3 left-3 ${config.bg} border-0`}>
          {config.label}
        </Badge>

        {/* Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-3 right-3 bg-black/20 hover:bg-black/40 backdrop-blur-sm text-white"
            >
              <MoreVertical className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="glass-card border-border/50">
            {onEdit && (
              <DropdownMenuItem className="gap-2 cursor-pointer" onClick={onEdit}>
                <Edit className="w-4 h-4" />
                Edit Trip
              </DropdownMenuItem>
            )}
            {onDuplicate && (
              <DropdownMenuItem className="gap-2 cursor-pointer" onClick={onDuplicate}>
                <Copy className="w-4 h-4" />
                Duplicate
              </DropdownMenuItem>
            )}
            {onShare && (
              <DropdownMenuItem className="gap-2 cursor-pointer" onClick={onShare}>
                <Share2 className="w-4 h-4" />
                Share
              </DropdownMenuItem>
            )}
            {onDelete && (
              <>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="gap-2 cursor-pointer text-destructive focus:text-destructive" onClick={onDelete}>
                  <Trash2 className="w-4 h-4" />
                  Delete
                </DropdownMenuItem>
              </>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Content */}
      <CardContent className="p-4">
        <h3 className="font-bold text-lg mb-1">{destination}</h3>
        <p className="text-sm text-muted-foreground mb-4">{dates}</p>
        
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-muted-foreground">{days} days</span>
          <Button variant="ghost" size="sm" className="hover-lift">
            View Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default TripCard;

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  avatar?: string;
  rating?: number;
  className?: string;
}

export const TestimonialCard = ({
  name,
  role,
  content,
  avatar,
  rating = 5,
  className = ''
}: TestimonialCardProps) => (
  <Card className={`glass-card p-6 hover-lift group ${className}`}>
    {/* Rating */}
    <div className="flex gap-1 mb-4">
      {[...Array(rating)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      ))}
    </div>

    {/* Content */}
    <p className="text-muted-foreground mb-6 leading-relaxed italic">
      "{content}"
    </p>

    {/* Author */}
    <div className="flex items-center gap-3 pt-4 border-t border-border/50">
      <Avatar className="h-10 w-10">
        <AvatarImage src={avatar || "/placeholder.svg"} alt={name} />
        <AvatarFallback>{name.charAt(0)}</AvatarFallback>
      </Avatar>
      <div>
        <p className="text-sm font-semibold">{name}</p>
        <p className="text-xs text-muted-foreground">{role}</p>
      </div>
    </div>
  </Card>
);

export default TestimonialCard;

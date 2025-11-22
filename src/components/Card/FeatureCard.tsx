import { Type as type, LucideIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

export const FeatureCard = ({
  icon: Icon,
  title,
  description,
  className = ''
}: FeatureCardProps) => (
  <Card className={`glass-card p-6 rounded-2xl hover-lift hover-glow group cursor-pointer relative overflow-hidden ${className}`}>
    <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
    
    <div className="relative">
      <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 
                    group-hover:scale-110 group-hover:rotate-6 transition-all duration-300
                    shadow-lg group-hover:shadow-xl group-hover:shadow-primary/30">
        <Icon className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
      </div>
      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors">
        {description}
      </p>
    </div>

    <div className="absolute inset-0 rounded-2xl border border-primary/0 group-hover:border-primary/20 transition-colors duration-300" />
  </Card>
);

export default FeatureCard;

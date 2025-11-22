import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface PricingCardProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  onSelect?: () => void;
  className?: string;
}

export const PricingCard = ({
  name,
  price,
  description,
  features,
  highlighted = false,
  onSelect,
  className = ''
}: PricingCardProps) => (
  <Card className={`glass-card p-8 flex flex-col hover-lift transition-all ${highlighted ? 'ring-2 ring-primary scale-105' : ''} ${className}`}>
    <div className="flex-1">
      <h3 className="text-2xl font-bold mb-2">{name}</h3>
      <p className="text-muted-foreground text-sm mb-6">{description}</p>

      {/* Price */}
      <div className="mb-8">
        <span className="text-4xl font-bold">{price}</span>
        {price !== 'Custom' && <span className="text-muted-foreground">/month</span>}
      </div>

      {/* Features */}
      <ul className="space-y-4 flex-1">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-center gap-3">
            <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
              <Check className="w-3 h-3 text-primary" />
            </div>
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>
    </div>

    {/* Button */}
    <Button
      onClick={onSelect}
      className={`w-full mt-8 ${highlighted ? 'bg-gradient-primary hover:opacity-90' : 'bg-muted hover:bg-muted/80'}`}
    >
      Get Started
    </Button>
  </Card>
);

export default PricingCard;

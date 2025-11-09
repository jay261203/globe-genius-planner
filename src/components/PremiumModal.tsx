import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Check, Zap, Crown, Sparkles } from "lucide-react";

const features = [
  "Fast AI generation with priority processing",
  "Unlimited trip saves and version history",
  "AI concierge - live chat assistant",
  "Offline itinerary download (PDF, iCal)",
  "Advanced map features with route optimization",
  "Collaborative planning with team members",
  "Early access to new features",
  "Remove all ads and branding",
];

export function PremiumModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-gradient-to-r from-amber-500 to-orange-500 hover:opacity-90 gap-2 hover-lift shadow-elevated">
          <Crown className="w-4 h-4" />
          Upgrade to Premium
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] glass-card border-border/50">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center animate-glow">
              <Crown className="w-6 h-6 text-white" />
            </div>
            <div>
              <DialogTitle className="text-2xl flex items-center gap-2">
                Premium Plan
                <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 border-0">
                  <Sparkles className="w-3 h-3 mr-1" />
                  Popular
                </Badge>
              </DialogTitle>
              <DialogDescription>
                Unlock the full power of AI-powered trip planning
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Pricing */}
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/20">
            <div className="flex items-baseline justify-center gap-2 mb-2">
              <span className="text-5xl font-bold gradient-text">$9.99</span>
              <span className="text-muted-foreground">/month</span>
            </div>
            <p className="text-sm text-muted-foreground">
              or $99/year (save 17%)
            </p>
          </div>

          {/* Features */}
          <div className="space-y-3">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors animate-slide-right"
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                <div className="w-5 h-5 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="space-y-3">
            <Button className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:opacity-90 gap-2 h-12 text-base hover-lift">
              <Zap className="w-5 h-5" />
              Upgrade Now
            </Button>
            <p className="text-xs text-center text-muted-foreground">
              30-day money-back guarantee • Cancel anytime
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

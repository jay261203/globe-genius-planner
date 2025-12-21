import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-20 md:py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center space-y-6 animate-fade-in">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground">
            Ready to plan your next trip?
          </h2>

          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Join thousands of travelers who plan smarter with AI. Your perfect itinerary is just a few clicks away.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
            <Link to="/signup">
              <Button size="lg" className="h-12 px-8 text-base font-medium btn-press w-full sm:w-auto">
                Get Started Free
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>

          {/* Trust Badge */}
          <p className="text-sm text-muted-foreground pt-2">
            No credit card required • Free forever plan
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

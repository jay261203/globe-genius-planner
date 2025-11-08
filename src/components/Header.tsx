import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Menu, X, Sparkles, User, LayoutDashboard } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-card border-0 border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold gradient-text">Trippy</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-foreground/80 hover:text-foreground transition-colors">
              Home
            </Link>
            <Link to="/explore" className="text-foreground/80 hover:text-foreground transition-colors">
              Explore
            </Link>
            <Link to="/dashboard" className="text-foreground/80 hover:text-foreground transition-colors flex items-center gap-2">
              <LayoutDashboard className="w-4 h-4" />
              Dashboard
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="sm" className="gap-2">
              <User className="w-4 h-4" />
              Sign In
            </Button>
            <Button size="sm" className="bg-gradient-primary hover:opacity-90 gap-2">
              <Sparkles className="w-4 h-4" />
              Start Planning
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 animate-slide-down">
            <Link to="/" className="block py-2 text-foreground/80 hover:text-foreground transition-colors">
              Home
            </Link>
            <Link to="/explore" className="block py-2 text-foreground/80 hover:text-foreground transition-colors">
              Explore
            </Link>
            <Link to="/dashboard" className="block py-2 text-foreground/80 hover:text-foreground transition-colors">
              Dashboard
            </Link>
            <div className="flex flex-col gap-2 pt-2">
              <Button variant="outline" size="sm" className="w-full gap-2">
                <User className="w-4 h-4" />
                Sign In
              </Button>
              <Button size="sm" className="w-full bg-gradient-primary hover:opacity-90 gap-2">
                <Sparkles className="w-4 h-4" />
                Start Planning
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

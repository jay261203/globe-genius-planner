import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Menu, Sparkles, User, LayoutDashboard, Settings, Receipt, Image as ImageIcon } from 'lucide-react';
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = ({ onToggleSidebar }: { onToggleSidebar?: () => void }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-card border-0 border-b border-border/50 backdrop-blur-xl">
      <div className="px-4 h-16">
        <div className="flex items-center justify-between h-full max-w-full">
          {/* Left - Logo (full left) */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform hover-lift">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold gradient-text">Trippy</span>
            </Link>
          </div>

          {/* Center - Desktop Navigation with icons */}
          <nav className="hidden md:flex items-center gap-8 flex-1 justify-center">
            <Link to="/explore" className="text-foreground/80 hover:text-foreground transition-colors duration-200 font-medium whitespace-nowrap">
              Explore
            </Link>

            <Link to="/trip-dashboard" className="text-foreground/80 hover:text-foreground transition-colors duration-200 font-medium flex items-center gap-2 whitespace-nowrap">
              <MapPin className="w-4 h-4" />
              Trips
            </Link>

            <Link to="/dashboard" className="text-foreground/80 hover:text-foreground transition-colors duration-200 font-medium flex items-center gap-2 whitespace-nowrap">
              <LayoutDashboard className="w-4 h-4" />
              My Trips
            </Link>

            <Link to="/receipts" className="text-foreground/80 hover:text-foreground transition-colors duration-200 font-medium flex items-center gap-2 whitespace-nowrap">
              <Receipt className="w-4 h-4" />
              Receipts
            </Link>

            <Link to="/photos" className="text-foreground/80 hover:text-foreground transition-colors duration-200 font-medium flex items-center gap-2 whitespace-nowrap">
              <ImageIcon className="w-4 h-4" />
              Photos
            </Link>
          </nav>

          {/* Right - CTA Button / Mobile toggle (full right) */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <div className="hidden md:flex items-center gap-3">
              <ThemeToggle />
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="gap-2 hover-lift">
                    <User className="w-4 h-4" />
                    Account
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="glass-card border-border/50 w-48">
                  <DropdownMenuItem asChild>
                    <Link to="/login" className="flex items-center">
                      <User className="w-4 h-4 mr-2" />
                      Sign In
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/signup" className="flex items-center">
                      <Sparkles className="w-4 h-4 mr-2" />
                      Sign Up
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to="/settings" className="flex items-center">
                      <Settings className="w-4 h-4 mr-2" />
                      Settings
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <Link to="/" className="hidden md:inline-block">
              <Button size="sm" className="bg-gradient-primary hover:opacity-90 gap-2 hover-lift whitespace-nowrap">
                <Sparkles className="w-4 h-4" />
                Start Planning
              </Button>
            </Link>

            {/* Mobile Menu Button - toggles sidebar on small screens */}
            <button
              onClick={() => onToggleSidebar?.()}
              className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
              aria-label="Toggle sidebar"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

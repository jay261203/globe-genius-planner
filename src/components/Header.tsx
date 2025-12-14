import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Menu, User, LayoutDashboard, Settings, Receipt, Image as ImageIcon, ChevronDown } from 'lucide-react';
import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = ({ onToggleSidebar }: { onToggleSidebar?: () => void }) => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { to: "/explore", label: "Explore" },
    { to: "/dashboard", label: "My Trips", icon: LayoutDashboard },
    { to: "/receipts", label: "Receipts", icon: Receipt },
    { to: "/photos", label: "Photos", icon: ImageIcon },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-header">
      <div className="container-padding h-16">
        <div className="flex items-center justify-between h-full max-w-7xl mx-auto">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center transition-transform group-hover:scale-105">
              <MapPin className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-lg font-semibold text-foreground">Trippy</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(link.to)
                    ? "text-foreground bg-accent"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            <div className="hidden md:flex items-center gap-2">
              <ThemeToggle />
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="gap-1.5 text-muted-foreground hover:text-foreground">
                    <div className="w-7 h-7 rounded-full bg-muted flex items-center justify-center">
                      <User className="w-4 h-4" />
                    </div>
                    <ChevronDown className="w-3.5 h-3.5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuItem asChild>
                    <Link to="/login" className="flex items-center cursor-pointer">
                      <User className="w-4 h-4 mr-2" />
                      Sign In
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/signup" className="flex items-center cursor-pointer">
                      Create Account
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to="/settings" className="flex items-center cursor-pointer">
                      <Settings className="w-4 h-4 mr-2" />
                      Settings
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Button size="sm" className="btn-press ml-2">
                Start Planning
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => onToggleSidebar?.()}
              className="md:hidden p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
              aria-label="Toggle sidebar"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

import { Link, useLocation } from 'react-router-dom';
import { Bell, Plus, MapPin, Menu } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useState } from 'react';

const Navbar = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { to: '/explore', label: 'Explore' },
    { to: '/dashboard', label: 'My Trips' },
    { to: '/receipts', label: 'Receipts' },
    { to: '/photos', label: 'Photos' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="flex items-center justify-between px-4 md:px-6 py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <MapPin className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className="font-semibold text-foreground hidden sm:inline">Trippy</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map(link => (
            <Link key={link.to} to={link.to}>
              <Button 
                variant="ghost" 
                size="sm"
                className={`font-medium ${isActive(link.to) ? 'text-primary bg-primary/5' : 'text-muted-foreground'}`}
              >
                {link.label}
              </Button>
            </Link>
          ))}
        </nav>
        
        {/* Actions */}
        <div className="flex items-center gap-2">
          <Link to="/plan" className="hidden sm:block">
            <Button size="sm" className="gap-1.5 btn-press">
              <Plus className="w-4 h-4" />
              New Trip
            </Button>
          </Link>
          <button className="p-2 rounded-lg hover:bg-muted transition-colors relative">
            <Bell className="w-5 h-5 text-muted-foreground" />
          </button>
          <Link to="/profile">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium text-sm">
              JD
            </div>
          </Link>
          <button 
            className="p-2 rounded-lg hover:bg-muted transition-colors md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background p-4 space-y-2 animate-fade-in">
          {navLinks.map(link => (
            <Link key={link.to} to={link.to} onClick={() => setMobileMenuOpen(false)}>
              <Button 
                variant="ghost" 
                className={`w-full justify-start ${isActive(link.to) ? 'text-primary bg-primary/5' : ''}`}
              >
                {link.label}
              </Button>
            </Link>
          ))}
          <Link to="/plan" onClick={() => setMobileMenuOpen(false)}>
            <Button className="w-full gap-2 mt-2">
              <Plus className="w-4 h-4" />
              New Trip
            </Button>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;

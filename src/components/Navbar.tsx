import { Bell, Mail, Plus } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-30 glass-sidebar border-b border-border/50 backdrop-blur-xl">
      <div className="flex items-center justify-between px-4 md:px-8 py-4">
        <nav className="flex items-center gap-2 md:gap-4 flex-wrap">
          <NavLink to="/explore">
            <Button variant="ghost" className="font-medium text-sm md:text-base">
              Discover
            </Button>
          </NavLink>
          <NavLink to="/dashboard">
            <Button variant="ghost" className="font-medium text-sm md:text-base">
              My Trips
            </Button>
          </NavLink>
          <NavLink to="/receipts">
            <Button variant="ghost" className="font-medium text-sm md:text-base hidden sm:inline-flex">
              Receipts
            </Button>
          </NavLink>
          <NavLink to="/photos">
            <Button variant="ghost" className="font-medium text-sm md:text-base hidden sm:inline-flex">
              Photos
            </Button>
          </NavLink>
          <Button className="bg-gradient-primary hover:opacity-90 gap-2 text-sm md:text-base">
            <Plus className="w-4 h-4" />
            <span className="hidden sm:inline">New Trip</span>
          </Button>
        </nav>
        
        <div className="flex items-center gap-2">
          <button className="p-2 rounded-xl hover:bg-muted/50 transition-colors">
            <Bell className="w-5 h-5" />
          </button>
          <button className="p-2 rounded-xl hover:bg-muted/50 transition-colors hidden sm:block">
            <Mail className="w-5 h-5" />
          </button>
          <NavLink to="/profile">
            <button className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold text-sm">
              JD
            </button>
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

import { MapPin, Receipt, Image, Plus } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { Button } from "@/components/ui/button";

const Sidebar = () => {
  return (
    <aside className="fixed left-0 top-0 h-screen w-64 glass-sidebar z-40 flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-white/10">
        <div className="flex items-center gap-2">
          <MapPin className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold gradient-text">Trippy</span>
        </div>
      </div>

      {/* New Trip Button */}
      <div className="p-4">
        <Button className="w-full bg-gradient-primary hover:opacity-90 transition-all hover:scale-105">
          <Plus className="mr-2 h-4 w-4" />
          New Trip
        </Button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        <NavLink
          to="/trip-dashboard"
          className="flex items-center gap-3 px-4 py-3 rounded-xl text-muted-foreground hover:text-foreground hover:bg-white/5 transition-all group"
          activeClassName="bg-white/10 text-foreground"
        >
          <MapPin className="h-5 w-5 group-hover:scale-110 transition-transform" />
          <span className="font-medium">Trip Dashboard</span>
        </NavLink>

        <NavLink
          to="/dashboard"
          className="flex items-center gap-3 px-4 py-3 rounded-xl text-muted-foreground hover:text-foreground hover:bg-white/5 transition-all group"
          activeClassName="bg-white/10 text-foreground"
        >
          <MapPin className="h-5 w-5 group-hover:scale-110 transition-transform" />
          <span className="font-medium">My Trips</span>
        </NavLink>

        <NavLink
          to="/receipts"
          className="flex items-center gap-3 px-4 py-3 rounded-xl text-muted-foreground hover:text-foreground hover:bg-white/5 transition-all group"
          activeClassName="bg-white/10 text-foreground"
        >
          <Receipt className="h-5 w-5 group-hover:scale-110 transition-transform" />
          <span className="font-medium">Receipts</span>
        </NavLink>

        <NavLink
          to="/photos"
          className="flex items-center gap-3 px-4 py-3 rounded-xl text-muted-foreground hover:text-foreground hover:bg-white/5 transition-all group"
          activeClassName="bg-white/10 text-foreground"
        >
          <Image className="h-5 w-5 group-hover:scale-110 transition-transform" />
          <span className="font-medium">Photos</span>
        </NavLink>
      </nav>

      {/* User Profile Section */}
      <div className="p-4 border-t border-white/10">
        <NavLink
          to="/profile"
          className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 transition-all"
        >
          <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold">
            JD
          </div>
          <div className="flex-1">
            <p className="font-medium text-sm">John Doe</p>
            <p className="text-xs text-muted-foreground">View Profile</p>
          </div>
        </NavLink>
      </div>
    </aside>
  );
};

export default Sidebar;

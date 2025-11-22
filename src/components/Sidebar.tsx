import { MapPin, Receipt, Image, Plus, LogOut, Settings, X } from 'lucide-react';
import { NavLink } from "@/components/NavLink";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const Sidebar = ({ isOpen = false, onClose }: SidebarProps) => {
  return (
    <>
      {/* Overlay for mobile when sidebar is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={onClose}
          aria-hidden
        />
      )}

      {/* Mobile-only sliding sidebar. Hidden on md+ where header/nav handles routing. */}
      <aside className={`fixed left-0 top-0 h-screen w-64 glass-sidebar z-50 flex flex-col overflow-y-auto transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden`}>
        {/* Close button for mobile */}
        <div className="md:hidden absolute top-4 right-4 z-60">
          <button onClick={onClose} className="p-2 rounded-lg hover:bg-muted">
            <X className="w-5 h-5" />
          </button>
        </div>
      {/* Logo Section */}
      <div className="p-6 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
            <MapPin className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold gradient-text">Trippy</h1>
            <p className="text-xs text-muted-foreground">Travel Planner</p>
          </div>
        </div>
      </div>

      {/* New Trip Button */}
      <div className="p-4">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button className="w-full bg-gradient-primary hover:opacity-90 transition-all hover-lift gap-2">
              <Plus className="h-4 w-4" />
              <span className="hidden sm:inline">New Trip</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent side="right">Create a new trip</TooltipContent>
        </Tooltip>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 p-4 space-y-2">
        <Tooltip>
          <TooltipTrigger asChild>
            <NavLink
              to="/trip-dashboard"
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-muted-foreground hover:text-foreground hover:bg-white/5 transition-all group"
              activeClassName="bg-white/10 text-foreground border-l-4 border-primary"
              onClick={onClose}
            >
              <MapPin className="h-5 w-5 group-hover:scale-110 transition-transform" />
              <span className="font-medium">Trip Dashboard</span>
            </NavLink>
          </TooltipTrigger>
          <TooltipContent side="right">View your trip dashboard</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <NavLink
              to="/dashboard"
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-muted-foreground hover:text-foreground hover:bg-white/5 transition-all group"
              activeClassName="bg-white/10 text-foreground border-l-4 border-primary"
              onClick={onClose}
            >
              <MapPin className="h-5 w-5 group-hover:scale-110 transition-transform" />
              <span className="font-medium">My Trips</span>
            </NavLink>
          </TooltipTrigger>
          <TooltipContent side="right">View all your trips</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <NavLink
              to="/receipts"
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-muted-foreground hover:text-foreground hover:bg-white/5 transition-all group"
              activeClassName="bg-white/10 text-foreground border-l-4 border-primary"
              onClick={onClose}
            >
              <Receipt className="h-5 w-5 group-hover:scale-110 transition-transform" />
              <span className="font-medium">Receipts</span>
            </NavLink>
          </TooltipTrigger>
          <TooltipContent side="right">Manage receipts</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <NavLink
              to="/photos"
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-muted-foreground hover:text-foreground hover:bg-white/5 transition-all group"
              activeClassName="bg-white/10 text-foreground border-l-4 border-primary"
              onClick={onClose}
            >
              <Image className="h-5 w-5 group-hover:scale-110 transition-transform" />
              <span className="font-medium">Photos</span>
            </NavLink>
          </TooltipTrigger>
          <TooltipContent side="right">View trip photos</TooltipContent>
        </Tooltip>
      </nav>

      {/* Settings Section */}
      <div className="p-4 border-t border-white/10 space-y-2">
        <Tooltip>
          <TooltipTrigger asChild>
            <NavLink
              to="/settings"
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 transition-all text-muted-foreground hover:text-foreground group"
              activeClassName="bg-white/10 text-foreground border-l-4 border-primary"
            >
              <Settings className="h-5 w-5 group-hover:scale-110 transition-transform" />
              <span className="font-medium text-sm">Settings</span>
            </NavLink>
          </TooltipTrigger>
          <TooltipContent side="right">App settings</TooltipContent>
        </Tooltip>
      </div>

      {/* User Profile Section */}
      <div className="p-4 border-t border-white/10">
        <NavLink
          to="/profile"
          className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 transition-all group"
          onClick={onClose}
        >
          <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 transition-transform">
            JD
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-medium text-sm truncate">John Doe</p>
            <p className="text-xs text-muted-foreground">View Profile</p>
          </div>
        </NavLink>
        <Tooltip>
          <TooltipTrigger asChild>
            <button className="w-full mt-2 flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors">
              <LogOut className="h-4 w-4" />
              Logout
            </button>
          </TooltipTrigger>
          <TooltipContent side="right">Sign out</TooltipContent>
        </Tooltip>
      </div>
    </aside>
    </>
  );
};

export default Sidebar;

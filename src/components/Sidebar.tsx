import { MapPin, Receipt, Image, Plus, LogOut, Settings, X, User, Compass } from 'lucide-react';
import { NavLink } from "@/components/NavLink";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "sonner";
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
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      toast.success("Logged out successfully");
      navigate("/");
      onClose?.();
    } catch (error) {
      toast.error("Failed to logout");
    }
  };

  const handleNewTrip = () => {
    if (isAuthenticated) {
      navigate("/plan");
    } else {
      navigate("/login");
    }
    onClose?.();
  };

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
          <Link to="/" onClick={onClose} className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
              <MapPin className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold gradient-text">Trippy</h1>
              <p className="text-xs text-muted-foreground">Travel Planner</p>
            </div>
          </Link>
        </div>

        {/* New Trip Button */}
        <div className="p-4">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button 
                onClick={handleNewTrip}
                className="w-full bg-gradient-primary hover:opacity-90 transition-all hover-lift gap-2"
              >
                <Plus className="h-4 w-4" />
                <span>New Trip</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right">Create a new trip</TooltipContent>
          </Tooltip>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 p-4 space-y-2">
          {/* Explore - always visible */}
          <Tooltip>
            <TooltipTrigger asChild>
              <NavLink
                to="/explore"
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-muted-foreground hover:text-foreground hover:bg-white/5 transition-all group"
                activeClassName="bg-white/10 text-foreground border-l-4 border-primary"
                onClick={onClose}
              >
                <Compass className="h-5 w-5 group-hover:scale-110 transition-transform" />
                <span className="font-medium">Explore</span>
              </NavLink>
            </TooltipTrigger>
            <TooltipContent side="right">Discover destinations</TooltipContent>
          </Tooltip>

          {/* Protected routes - only show when authenticated */}
          {isAuthenticated ? (
            <>
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
            </>
          ) : (
            <div className="px-4 py-6 text-center">
              <p className="text-sm text-muted-foreground mb-4">
                Sign in to access your trips, photos, and receipts
              </p>
              <Link to="/login" onClick={onClose}>
                <Button variant="outline" className="w-full">
                  Sign In
                </Button>
              </Link>
            </div>
          )}
        </nav>

        {/* Settings Section */}
        {isAuthenticated && (
          <div className="p-4 border-t border-white/10 space-y-2">
            <Tooltip>
              <TooltipTrigger asChild>
                <NavLink
                  to="/settings"
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 transition-all text-muted-foreground hover:text-foreground group"
                  activeClassName="bg-white/10 text-foreground border-l-4 border-primary"
                  onClick={onClose}
                >
                  <Settings className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  <span className="font-medium text-sm">Settings</span>
                </NavLink>
              </TooltipTrigger>
              <TooltipContent side="right">App settings</TooltipContent>
            </Tooltip>
          </div>
        )}

        {/* User Profile Section */}
        <div className="p-4 border-t border-white/10">
          {isAuthenticated && user ? (
            <>
              <NavLink
                to="/profile"
                className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 transition-all group"
                onClick={onClose}
              >
                <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 transition-transform">
                  {user.name.charAt(0).toUpperCase()}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm truncate">{user.name}</p>
                  <p className="text-xs text-muted-foreground">View Profile</p>
                </div>
              </NavLink>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button 
                    onClick={handleLogout}
                    className="w-full mt-2 flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors"
                  >
                    <LogOut className="h-4 w-4" />
                    Logout
                  </button>
                </TooltipTrigger>
                <TooltipContent side="right">Sign out</TooltipContent>
              </Tooltip>
            </>
          ) : (
            <div className="space-y-2">
              <Link to="/login" onClick={onClose}>
                <Button variant="outline" className="w-full gap-2">
                  <User className="h-4 w-4" />
                  Sign In
                </Button>
              </Link>
              <Link to="/signup" onClick={onClose}>
                <Button className="w-full bg-gradient-primary">
                  Create Account
                </Button>
              </Link>
            </div>
          )}
        </div>
      </aside>
    </>
  );
};

export default Sidebar;

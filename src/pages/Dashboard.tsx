import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import { PremiumModal } from "@/components/PremiumModal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, MapPin, Calendar, TrendingUp, Globe, Sparkles, Clock, Users, MoreVertical, Share2, Copy, Trash2, Edit, DollarSign, Star, Cloud } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const stats = [
  { label: "Total Trips", value: "12", change: "+2 this month", icon: MapPin, color: "text-primary" },
  { label: "Upcoming", value: "3", change: "Next: Bali", icon: Calendar, color: "text-secondary" },
  { label: "Days Traveled", value: "87", change: "This year", icon: Clock, color: "text-accent" },
  { label: "Countries", value: "8", change: "+3 new", icon: Globe, color: "text-primary" },
];

const trips = [
  {
    id: 1,
    destination: "Bali, Indonesia",
    dates: "Jun 15 - 22, 2024",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800",
    status: "upcoming",
    days: 7,
  },
  {
    id: 2,
    destination: "Tokyo, Japan",
    dates: "Aug 1 - 10, 2024",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800",
    status: "planning",
    days: 10,
  },
  {
    id: 3,
    destination: "Paris, France",
    dates: "Oct 5 - 12, 2024",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800",
    status: "saved",
    days: 5,
  },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      
      <main className="flex-1 ml-64 pt-8 pb-12 gradient-mesh">
        <div className="container mx-auto px-4">{/* Keep rest of content */}
          {/* Header */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-12 animate-slide-down">
            <div>
              <h1 className="text-4xl font-bold mb-2">Welcome back, Sarah! 👋</h1>
              <p className="text-muted-foreground">Ready to plan your next adventure?</p>
            </div>
            <div className="flex gap-3">
              <PremiumModal />
              <Button className="bg-gradient-primary hover:opacity-90 gap-2 hover-lift">
                <Plus className="w-4 h-4" />
                New Trip
              </Button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {stats.map((stat, idx) => (
              <Card key={idx} className="glass-card border-border/50 animate-slide-up hover-lift" style={{ animationDelay: `${idx * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <stat.icon className={`w-5 h-5 ${stat.color}`} />
                    <TrendingUp className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <div className="text-3xl font-bold mb-1">{stat.value}</div>
                  <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                  <p className="text-xs text-muted-foreground">{stat.change}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* My Trips Section */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-3xl font-bold mb-1">My Trips</h2>
                <p className="text-muted-foreground">Manage your travel plans</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {trips.map((trip, idx) => (
                <Card
                  key={trip.id}
                  className="glass-card border-border/50 overflow-hidden hover-lift interactive-card animate-slide-up group"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={trip.image}
                      alt={trip.destination}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <Badge
                      className={`absolute top-3 left-3 ${
                        trip.status === "upcoming"
                          ? "bg-gradient-primary"
                          : trip.status === "planning"
                          ? "bg-gradient-secondary"
                          : "bg-muted"
                      } border-0`}
                    >
                      {trip.status}
                    </Badge>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="absolute top-3 right-3 bg-black/20 hover:bg-black/40 backdrop-blur-sm text-white"
                        >
                          <MoreVertical className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="glass-card border-border/50">
                        <DropdownMenuItem className="gap-2 cursor-pointer">
                          <Edit className="w-4 h-4" />
                          Edit Trip
                        </DropdownMenuItem>
                        <DropdownMenuItem className="gap-2 cursor-pointer">
                          <Copy className="w-4 h-4" />
                          Duplicate
                        </DropdownMenuItem>
                        <DropdownMenuItem className="gap-2 cursor-pointer">
                          <Share2 className="w-4 h-4" />
                          Share
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="gap-2 cursor-pointer text-destructive focus:text-destructive">
                          <Trash2 className="w-4 h-4" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-bold text-lg mb-1">{trip.destination}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{trip.dates}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{trip.days} days</span>
                      <Button variant="ghost" size="sm" className="hover-lift">
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* AI Recommendations */}
          <Card className="glass-card border-border/50 animate-fade-in">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center animate-glow">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">AI Recommendations</h3>
                  <p className="text-sm text-muted-foreground">Based on your travel history and preferences</p>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { name: "Iceland", desc: "Perfect for adventure seekers", icon: "🏔️" },
                  { name: "New Zealand", desc: "Nature and scenic beauty", icon: "🌄" },
                  { name: "Costa Rica", desc: "Beaches and wildlife", icon: "🏖️" },
                ].map((destination, idx) => (
                  <button
                    key={idx}
                    className="p-6 rounded-xl glass-card hover:bg-muted/50 transition-all text-left group hover-lift animate-scale-in"
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                    <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">{destination.icon}</div>
                    <h4 className="font-semibold mb-1">{destination.name}</h4>
                    <p className="text-sm text-muted-foreground">{destination.desc}</p>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;

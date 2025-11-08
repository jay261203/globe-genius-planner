import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Calendar, Clock, TrendingUp, Plus, Sparkles } from "lucide-react";

const trips = [
  {
    id: 1,
    destination: "Bali, Indonesia",
    dates: "Jun 15 - 22, 2024",
    image: "from-cyan-500 to-blue-500",
    status: "upcoming",
  },
  {
    id: 2,
    destination: "Tokyo, Japan",
    dates: "Aug 1 - 10, 2024",
    image: "from-pink-500 to-rose-500",
    status: "planning",
  },
  {
    id: 3,
    destination: "Paris, France",
    dates: "Oct 5 - 12, 2024",
    image: "from-purple-500 to-indigo-500",
    status: "saved",
  },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24 pb-12 gradient-mesh">
        <div className="container mx-auto px-4">
          {/* Welcome Section */}
          <div className="mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Welcome back, <span className="gradient-text">Traveler</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Your next adventure awaits. Let's continue planning!
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <Card className="glass-card border-border/50 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Total Trips</CardTitle>
                <MapPin className="w-4 h-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">12</div>
                <p className="text-xs text-muted-foreground mt-1">+2 this month</p>
              </CardContent>
            </Card>

            <Card className="glass-card border-border/50 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Upcoming</CardTitle>
                <Calendar className="w-4 h-4 text-secondary" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">3</div>
                <p className="text-xs text-muted-foreground mt-1">Next: Bali</p>
              </CardContent>
            </Card>

            <Card className="glass-card border-border/50 animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Days Traveled</CardTitle>
                <Clock className="w-4 h-4 text-accent" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">87</div>
                <p className="text-xs text-muted-foreground mt-1">This year</p>
              </CardContent>
            </Card>

            <Card className="glass-card border-border/50 animate-slide-up" style={{ animationDelay: "0.4s" }}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Countries</CardTitle>
                <TrendingUp className="w-4 h-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">8</div>
                <p className="text-xs text-muted-foreground mt-1">+3 new</p>
              </CardContent>
            </Card>
          </div>

          {/* My Trips Section */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold">My Trips</h2>
              <Button className="bg-gradient-primary hover:opacity-90 gap-2">
                <Plus className="w-4 h-4" />
                New Trip
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {trips.map((trip, index) => (
                <Card
                  key={trip.id}
                  className="glass-card border-border/50 overflow-hidden group cursor-pointer hover:scale-[1.02] transition-transform animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`h-48 bg-gradient-to-br ${trip.image} relative`}>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/20 backdrop-blur-sm text-white">
                        {trip.status}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{trip.destination}</h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <Calendar className="w-4 h-4" />
                      {trip.dates}
                    </div>
                    <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* AI Recommendations */}
          <Card className="glass-card border-border/50 animate-fade-in">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div>
                  <CardTitle>AI Recommendations</CardTitle>
                  <p className="text-sm text-muted-foreground mt-1">
                    Based on your travel history and preferences
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                {["Iceland", "New Zealand", "Costa Rica"].map((destination, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-xl glass-card hover:bg-muted/50 transition-colors cursor-pointer group"
                  >
                    <MapPin className="w-5 h-5 text-primary mb-2 group-hover:scale-110 transition-transform" />
                    <h4 className="font-semibold mb-1">{destination}</h4>
                    <p className="text-sm text-muted-foreground">Perfect for adventure seekers</p>
                  </div>
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

import AIChat from "@/components/AIChat";
import InteractiveMap from "@/components/InteractiveMap";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Users, DollarSign, Map, Share2, Download, Edit, Clock, Star, Coffee, Camera, Cloud, History, Copy, Trash2 } from "lucide-react";

const itinerary = [
  {
    day: 1,
    title: "Arrival & Beach Sunset",
    activities: [
      { time: "10:00 AM", icon: MapPin, title: "Arrival at Ngurah Rai Airport", description: "Pick up rental car" },
      { time: "12:00 PM", icon: Coffee, title: "Lunch at Warung Local", description: "Try authentic Nasi Goreng", rating: 4.8 },
      { time: "4:00 PM", icon: Camera, title: "Seminyak Beach", description: "Watch stunning sunset", rating: 4.9 },
    ],
  },
  {
    day: 2,
    title: "Temple & Rice Terraces",
    activities: [
      { time: "8:00 AM", icon: MapPin, title: "Tanah Lot Temple", description: "Ancient sea temple", rating: 4.7 },
      { time: "12:00 PM", icon: Coffee, title: "Lunch with a View", description: "Tegallalang Cafe", rating: 4.6 },
      { time: "3:00 PM", icon: Camera, title: "Tegallalang Rice Terraces", description: "Photo opportunity", rating: 4.8 },
    ],
  },
];

const TripDetails = () => {
  return (
    <div className="pt-8 pb-12">
      <div className="container mx-auto px-4">{/* Keep rest of content */}
          {/* Hero Section */}
          <div className="relative h-[400px] rounded-3xl overflow-hidden mb-8 animate-scale-in">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h1 className="text-5xl font-bold mb-4">Bali, Indonesia</h1>
              <div className="flex flex-wrap gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>Jun 15 - 22, 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>7 Days</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>2 Travelers</span>
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign className="w-4 h-4" />
                  <span>$2,400 Budget</span>
                </div>
              </div>
            </div>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <Card className="glass-card border-border/50 animate-slide-up hover-lift">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
                    <DollarSign className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Total Budget</p>
                    <p className="text-xl font-bold">$2,400</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="glass-card border-border/50 animate-slide-up hover-lift" style={{ animationDelay: "0.1s" }}>
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-secondary flex items-center justify-center">
                    <Cloud className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Weather</p>
                    <p className="text-xl font-bold">28°C</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="glass-card border-border/50 animate-slide-up hover-lift" style={{ animationDelay: "0.2s" }}>
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Activities</p>
                    <p className="text-xl font-bold">18</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="glass-card border-border/50 animate-slide-up hover-lift" style={{ animationDelay: "0.3s" }}>
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-secondary flex items-center justify-center">
                    <Star className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Quality Score</p>
                    <p className="text-xl font-bold">9.2</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Actions Bar */}
          <div className="flex flex-wrap gap-3 mb-8 animate-slide-up">
            <Button className="bg-gradient-primary hover:opacity-90 gap-2 hover-lift">
              <Map className="w-4 h-4" />
              View on Map
            </Button>
            <Button variant="outline" className="gap-2 hover-lift">
              <Edit className="w-4 h-4" />
              Edit Trip
            </Button>
            <Button variant="outline" className="gap-2 hover-lift">
              <Share2 className="w-4 h-4" />
              Share Link
            </Button>
            <Button variant="outline" className="gap-2 hover-lift">
              <Download className="w-4 h-4" />
              Export PDF
            </Button>
            <Button variant="outline" className="gap-2 hover-lift">
              <History className="w-4 h-4" />
              Version History
            </Button>
            <Button variant="outline" className="gap-2 hover-lift">
              <Copy className="w-4 h-4" />
              Duplicate
            </Button>
            <Button variant="outline" className="gap-2 hover-lift text-destructive hover:text-destructive">
              <Trash2 className="w-4 h-4" />
              Delete
            </Button>
          </div>

          {/* Interactive Map */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-6">Interactive Route Map</h2>
            <InteractiveMap />
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Itinerary */}
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-3xl font-bold mb-6">Day-by-Day Itinerary</h2>
              
              {itinerary.map((day, dayIndex) => (
                <Card key={dayIndex} className="glass-card border-border/50 animate-slide-up" style={{ animationDelay: `${dayIndex * 0.1}s` }}>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold">
                        {day.day}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">Day {day.day}</h3>
                        <p className="text-muted-foreground">{day.title}</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {day.activities.map((activity, actIndex) => (
                        <div key={actIndex} className="flex gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors">
                          <div className="text-sm font-medium text-muted-foreground w-20 flex-shrink-0">
                            {activity.time}
                          </div>
                          <div className="w-10 h-10 rounded-lg bg-gradient-secondary flex items-center justify-center flex-shrink-0">
                            <activity.icon className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-start justify-between">
                              <h4 className="font-semibold mb-1">{activity.title}</h4>
                              {activity.rating && (
                                <div className="flex items-center gap-1 text-sm">
                                  <Star className="w-4 h-4 fill-accent text-accent" />
                                  <span className="font-semibold">{activity.rating}</span>
                                </div>
                              )}
                            </div>
                            <p className="text-sm text-muted-foreground">{activity.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* AI Chat Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <Card className="glass-card border-border/50 animate-slide-right">
                  <CardContent className="p-0">
                    <div className="p-4 border-b border-border">
                      <h3 className="font-bold text-lg">AI Travel Assistant</h3>
                      <p className="text-sm text-muted-foreground">Refine your itinerary</p>
                    </div>
                    <AIChat />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default TripDetails;

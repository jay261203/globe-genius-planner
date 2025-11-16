import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MapPin, Star, Globe, Camera, Award, Users, Heart, Share2, Settings } from "lucide-react";

const trips = [
  {
    id: 1,
    destination: "Bali, Indonesia",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800",
    days: 7,
    likes: 234,
    saves: 89,
    isPublic: true,
  },
  {
    id: 2,
    destination: "Tokyo, Japan",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800",
    days: 10,
    likes: 567,
    saves: 234,
    isPublic: true,
  },
  {
    id: 3,
    destination: "Paris, France",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800",
    days: 5,
    likes: 432,
    saves: 167,
    isPublic: true,
  },
];

const badges = [
  { id: 1, name: "Explorer", icon: Globe, color: "from-cyan-500 to-blue-500" },
  { id: 2, name: "Foodie", icon: Camera, color: "from-orange-500 to-red-500" },
  { id: 3, name: "Adventurer", icon: Award, color: "from-purple-500 to-pink-500" },
];

const Profile = () => {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      
      <main className="flex-1 ml-64 pt-8 pb-12">
        <div className="container mx-auto px-4">{/* Keep rest of content */}
          {/* Profile Header */}
          <Card className="glass-card border-border/50 mb-8 animate-scale-in overflow-hidden">
            <div className="h-32 bg-gradient-primary" />
            <CardContent className="p-8 -mt-16">
              <div className="flex flex-col md:flex-row items-start md:items-end gap-6">
                <Avatar className="w-32 h-32 border-4 border-background shadow-elevated">
                  <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=traveler" />
                  <AvatarFallback>TR</AvatarFallback>
                </Avatar>
                
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h1 className="text-3xl font-bold mb-1">Sarah Anderson</h1>
                      <p className="text-muted-foreground">@sarahtravels</p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="gap-2 hover-lift">
                        <Share2 className="w-4 h-4" />
                        Share Profile
                      </Button>
                      <Button variant="outline" size="sm" className="gap-2 hover-lift">
                        <Settings className="w-4 h-4" />
                        Edit Profile
                      </Button>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 max-w-2xl">
                    Passionate traveler exploring the world one destination at a time. 
                    Love finding hidden gems and authentic local experiences.
                  </p>
                  
                  <div className="flex flex-wrap gap-6 mb-4">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span className="font-semibold">23</span>
                      <span className="text-muted-foreground">Countries</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-primary" />
                      <span className="font-semibold">1.2K</span>
                      <span className="text-muted-foreground">Followers</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Heart className="w-4 h-4 text-primary" />
                      <span className="font-semibold">2.5K</span>
                      <span className="text-muted-foreground">Total Likes</span>
                    </div>
                  </div>

                  {/* Travel Badges */}
                  <div className="flex gap-3">
                    {badges.map((badge, idx) => (
                      <div
                        key={badge.id}
                        className="flex items-center gap-2 px-4 py-2 rounded-full glass-card hover-lift animate-slide-right"
                        style={{ animationDelay: `${idx * 0.1}s` }}
                      >
                        <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${badge.color} flex items-center justify-center`}>
                          <badge.icon className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-sm font-medium">{badge.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Shared Trips */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold">Shared Trips</h2>
              <Badge variant="secondary" className="gap-2">
                <Globe className="w-3 h-3" />
                {trips.length} Public Trips
              </Badge>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                    <Badge className="absolute top-3 right-3 bg-gradient-primary border-0">
                      Public
                    </Badge>
                    <div className="absolute bottom-3 left-3 right-3">
                      <h3 className="text-white font-bold text-lg mb-1">{trip.destination}</h3>
                      <p className="text-white/80 text-sm">{trip.days} days</p>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Heart className="w-4 h-4" />
                          <span>{trip.likes}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4" />
                          <span>{trip.saves}</span>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" className="hover-lift">
                        View Trip
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Profile;

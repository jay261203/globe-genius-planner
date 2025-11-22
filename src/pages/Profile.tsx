import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MapPin, Star, Globe, Camera, Award, Users, Heart, Share2, Settings } from 'lucide-react';

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
    <div className="pb-12">
      <Container className="mt-8">
          <Card className="glass-card border-border/50 mb-12 animate-scale-in overflow-hidden">
            <div className="h-40 bg-gradient-hero" />
            <CardContent className="p-8 -mt-20">
              <div className="flex flex-col md:flex-row items-start md:items-end gap-8">
                <Avatar className="w-40 h-40 border-4 border-background shadow-elevated hover-lift transition-transform">
                  <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=traveler" alt="Sarah Anderson" />
                  <AvatarFallback>SA</AvatarFallback>
                </Avatar>
                
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-6">
                    <div>
                      <h1 className="text-4xl font-bold mb-2">Sarah Anderson</h1>
                      <p className="text-lg text-muted-foreground">@sarahtravels</p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="gap-2 hover-lift">
                        <Share2 className="w-4 h-4" />
                        Share
                      </Button>
                      <Button size="sm" className="bg-gradient-primary hover:opacity-90 gap-2 hover-lift">
                        <Settings className="w-4 h-4" />
                        Edit
                      </Button>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 max-w-2xl leading-relaxed">
                    Passionate traveler exploring the world one destination at a time. 
                    Love finding hidden gems and authentic local experiences.
                  </p>
                  
                  <div className="grid grid-cols-3 gap-6 mb-6 py-6 border-y border-border/50">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-bold text-lg">23</p>
                        <p className="text-xs text-muted-foreground">Countries</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                        <Users className="w-5 h-5 text-secondary" />
                      </div>
                      <div>
                        <p className="font-bold text-lg">1.2K</p>
                        <p className="text-xs text-muted-foreground">Followers</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                        <Heart className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <p className="font-bold text-lg">2.5K</p>
                        <p className="text-xs text-muted-foreground">Likes</p>
                      </div>
                    </div>
                  </div>

                  {/* Travel Badges */}
                  <div className="flex flex-wrap gap-3">
                    {badges.map((badge, idx) => (
                      <div
                        key={badge.id}
                        className="flex items-center gap-2 px-4 py-2 rounded-full glass-card hover-lift animate-slide-right cursor-default"
                        style={{ animationDelay: `${idx * 0.1}s` }}
                      >
                        <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${badge.color} flex items-center justify-center flex-shrink-0`}>
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

          {/* Shared Trips Section */}
          <div className="animate-fade-in">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold mb-1">Shared Trips</h2>
                <p className="text-muted-foreground">Journeys shared with the community</p>
              </div>
              <Badge className="gap-2 px-4 py-2">
                <Globe className="w-4 h-4" />
                {trips.length} Public
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
                      src={trip.image || "/placeholder.svg"}
                      alt={trip.destination}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
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
                        <div className="flex items-center gap-1 hover:text-foreground transition-colors">
                          <Heart className="w-4 h-4" />
                          <span>{trip.likes}</span>
                        </div>
                        <div className="flex items-center gap-1 hover:text-foreground transition-colors">
                          <Star className="w-4 h-4" />
                          <span>{trip.saves}</span>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" className="hover-lift">
                        View
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
      </Container>
    </div>
  );
};

export default Profile;

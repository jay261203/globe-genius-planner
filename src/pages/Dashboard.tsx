import { useState } from "react";
import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";
import StatCard from "@/components/StatCard";
import TripCard from "@/components/TripCard";
import { PremiumModal } from "@/components/PremiumModal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Plus, MapPin, Calendar, Clock, Globe, Sparkles } from 'lucide-react';

const stats = [
  { label: "Total Trips", value: "12", change: "+2 this month", icon: MapPin, color: "text-primary" },
  { label: "Upcoming", value: "3", change: "Next: Bali", icon: Calendar, color: "text-secondary" },
  { label: "Days Traveled", value: "87", change: "This year", icon: Clock, color: "text-accent" },
  { label: "Countries", value: "8", change: "+3 new", icon: Globe, color: "text-primary" },
];

const tripsData = [
  {
    id: 1,
    destination: "Bali, Indonesia",
    dates: "Jun 15 - 22, 2024",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800",
    status: "upcoming" as const,
    days: 7,
  },
  {
    id: 2,
    destination: "Tokyo, Japan",
    dates: "Aug 1 - 10, 2024",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800",
    status: "planning" as const,
    days: 10,
  },
  {
    id: 3,
    destination: "Paris, France",
    dates: "Oct 5 - 12, 2024",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800",
    status: "saved" as const,
    days: 5,
  },
];

const Dashboard = () => {
  const [trips, setTrips] = useState(tripsData);

  const handleDeleteTrip = (id: number) => {
    setTrips(trips.filter(trip => trip.id !== id));
  };

  return (
    <div className="w-full min-h-screen py-8 px-4">
      <Container className="max-w-7xl animate-fade-in">
          {/* Header Section */}
          <SectionHeader
            title="Welcome back, Sarah! 👋"
            description="Ready to plan your next adventure?"
            action={
              <div className="flex gap-3">
                <PremiumModal />
                <Button className="bg-gradient-primary hover:opacity-90 gap-2 hover-lift">
                  <Plus className="w-4 h-4" />
                  New Trip
                </Button>
              </div>
            }
            className="mb-12 animate-slide-down"
          />

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {stats.map((stat, idx) => (
              <div key={idx} className="animate-slide-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                <StatCard {...stat} />
              </div>
            ))}
          </div>

          {/* My Trips Section */}
          <div className="mb-12">
            <SectionHeader
              title="My Trips"
              description="Manage your travel plans"
              className="mb-8"
            />

            <div className="grid md:grid-cols-3 gap-6">
              {trips.length > 0 ? (
                trips.map((trip, idx) => (
                  <div key={trip.id} className="animate-scale-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                    <TripCard
                      {...trip}
                      onDelete={() => handleDeleteTrip(trip.id)}
                    />
                  </div>
                ))
              ) : (
                <div className="col-span-3 text-center py-12">
                  <p className="text-muted-foreground">No trips yet. Create your first one!</p>
                </div>
              )}
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
                  { name: "Iceland", desc: "Perfect for adventure seekers", emoji: "🏔️" },
                  { name: "New Zealand", desc: "Nature and scenic beauty", emoji: "🌄" },
                  { name: "Costa Rica", desc: "Beaches and wildlife", emoji: "🏖️" },
                ].map((destination, idx) => (
                  <button
                    key={idx}
                    className="p-6 rounded-xl glass-card hover:bg-muted/50 transition-all text-left group hover-lift animate-scale-in"
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                    <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">{destination.emoji}</div>
                    <h4 className="font-semibold mb-1">{destination.name}</h4>
                    <p className="text-sm text-muted-foreground">{destination.desc}</p>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
        </Container>
    </div>
  );
};

export default Dashboard;

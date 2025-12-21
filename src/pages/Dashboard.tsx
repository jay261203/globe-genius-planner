import { useState } from "react";
import Container from "@/components/Container";
import TripCard from "@/components/TripCard";
import { Button } from "@/components/ui/button";
import { Plus, MapPin, Calendar, Clock } from 'lucide-react';
import { Link } from "react-router-dom";

const stats = [
  { label: "Total Trips", value: "12", icon: MapPin },
  { label: "Upcoming", value: "3", icon: Calendar },
  { label: "Days Traveled", value: "87", icon: Clock },
];

const tripsData = [
  { id: 1, destination: "Bali, Indonesia", dates: "Jun 15 - 22, 2024", image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800", status: "upcoming" as const, days: 7 },
  { id: 2, destination: "Tokyo, Japan", dates: "Aug 1 - 10, 2024", image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800", status: "planning" as const, days: 10 },
  { id: 3, destination: "Paris, France", dates: "Oct 5 - 12, 2024", image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800", status: "saved" as const, days: 5 },
];

const Dashboard = () => {
  const [trips, setTrips] = useState(tripsData);
  const [filter, setFilter] = useState<'all' | 'upcoming' | 'planning' | 'saved'>('all');

  const handleDeleteTrip = (id: number) => {
    setTrips(trips.filter(trip => trip.id !== id));
  };

  const filteredTrips = filter === 'all' ? trips : trips.filter(t => t.status === filter);

  return (
    <div className="w-full min-h-screen py-8 px-4">
      <Container className="max-w-6xl animate-fade-in">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-semibold text-foreground">My Trips</h1>
            <p className="text-muted-foreground mt-1">Manage your travel plans</p>
          </div>
          <Link to="/plan">
            <Button className="gap-2 btn-press">
              <Plus className="w-4 h-4" />
              New Trip
            </Button>
          </Link>
        </div>

        {/* Stats - Minimal */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-card border border-border/60">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                  <stat.icon className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-xl font-semibold text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          {['all', 'upcoming', 'planning', 'saved'].map((f) => (
            <Button
              key={f}
              variant={filter === f ? 'default' : 'outline'}
              size="sm"
              onClick={() => setFilter(f as typeof filter)}
              className="capitalize btn-press"
            >
              {f === 'all' ? 'All Trips' : f}
            </Button>
          ))}
        </div>

        {/* Trips Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredTrips.length > 0 ? (
            filteredTrips.map((trip, idx) => (
              <div key={trip.id} style={{ animation: 'scale-in 0.3s ease-out forwards', animationDelay: `${idx * 0.05}s`, opacity: 0 }}>
                <TripCard {...trip} onDelete={() => handleDeleteTrip(trip.id)} />
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-16">
              <MapPin className="w-12 h-12 text-muted-foreground/50 mx-auto mb-4" />
              <h3 className="font-medium text-foreground mb-2">No trips yet</h3>
              <p className="text-sm text-muted-foreground mb-4">Start planning your next adventure</p>
              <Link to="/plan">
                <Button className="btn-press">
                  <Plus className="w-4 h-4 mr-2" />
                  Create Trip
                </Button>
              </Link>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Dashboard;

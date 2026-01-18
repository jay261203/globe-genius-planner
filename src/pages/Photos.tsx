import { useState } from "react";
import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Image as ImageIcon, 
  Plus, 
  Search, 
  Download, 
  Trash2, 
  Heart,
  MapPin,
  Calendar,
  Grid3x3,
  List,
  Upload
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import AddPhotoModal from "@/components/Modal/AddPhotoModal";
import { toast } from "sonner";

const initialPhotosData = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800",
    title: "Bali Beach Sunset",
    trip: "Bali Adventure",
    location: "Seminyak Beach",
    date: "Jun 15, 2024",
    liked: true,
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800",
    title: "Tokyo Tower at Night",
    trip: "Tokyo Explorer",
    location: "Minato City",
    date: "Aug 3, 2024",
    liked: false,
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800",
    title: "Eiffel Tower View",
    trip: "Paris Romance",
    location: "Champ de Mars",
    date: "Oct 5, 2024",
    liked: true,
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1559628376-f3fe5f782a2e?w=800",
    title: "Temple Architecture",
    trip: "Bali Adventure",
    location: "Ubud",
    date: "Jun 17, 2024",
    liked: false,
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800",
    title: "Cherry Blossoms",
    trip: "Tokyo Explorer",
    location: "Ueno Park",
    date: "Aug 5, 2024",
    liked: true,
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    title: "Paris Street Cafe",
    trip: "Paris Romance",
    location: "Montmartre",
    date: "Oct 7, 2024",
    liked: false,
  },
];

const Photos = () => {
  const [photos, setPhotos] = useState(initialPhotosData);
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const filteredPhotos = photos.filter(photo =>
    photo.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    photo.trip.toLowerCase().includes(searchQuery.toLowerCase()) ||
    photo.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDelete = (id: number) => {
    setPhotos(photos.filter(p => p.id !== id));
    toast.success("Photo deleted");
  };

  const toggleLike = (id: number) => {
    setPhotos(photos.map(p => p.id === id ? { ...p, liked: !p.liked } : p));
  };

  const handleAddPhoto = (newPhoto: { title: string; trip: string; location: string; url: string }) => {
    const photo = {
      id: Date.now(),
      ...newPhoto,
      date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
      liked: false,
    };
    setPhotos([photo, ...photos]);
  };

  return (
    <div className="w-full min-h-screen py-8 px-4">
      <Container className="max-w-7xl animate-fade-in">
        {/* Header */}
        <SectionHeader
          title="Travel Photos"
          description="Your memories captured in beautiful moments"
          action={
            <div className="flex gap-3">
              <Button 
                variant="outline" 
                className="gap-2 hover-lift"
                onClick={() => setIsAddModalOpen(true)}
              >
                <Upload className="w-4 h-4" />
                Upload
              </Button>
              <Button 
                className="bg-gradient-primary hover:opacity-90 gap-2 hover-lift"
                onClick={() => setIsAddModalOpen(true)}
              >
                <Plus className="w-4 h-4" />
                Add Photos
              </Button>
            </div>
          }
          className="mb-8 animate-slide-down"
        />

        {/* Search, Filter, and View Toggle */}
        <Card className="glass-card border-border/50 mb-6">
          <div className="p-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search photos, trips, or locations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 glass-input"
                />
              </div>
              <div className="flex gap-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="gap-2 hover-lift">
                      <MapPin className="w-4 h-4" />
                      All Trips
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="glass-card border-border/50">
                    <DropdownMenuItem>All Trips</DropdownMenuItem>
                    <DropdownMenuItem>Bali Adventure</DropdownMenuItem>
                    <DropdownMenuItem>Tokyo Explorer</DropdownMenuItem>
                    <DropdownMenuItem>Paris Romance</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <div className="flex gap-1 border border-border/50 rounded-lg p-1">
                  <Button
                    size="icon"
                    variant={viewMode === 'grid' ? 'default' : 'ghost'}
                    onClick={() => setViewMode('grid')}
                    className="h-8 w-8"
                  >
                    <Grid3x3 className="w-4 h-4" />
                  </Button>
                  <Button
                    size="icon"
                    variant={viewMode === 'list' ? 'default' : 'ghost'}
                    onClick={() => setViewMode('list')}
                    className="h-8 w-8"
                  >
                    <List className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Photos Grid/List */}
        {filteredPhotos.length > 0 ? (
          <div className={viewMode === 'grid' 
            ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" 
            : "space-y-4"
          }>
            {filteredPhotos.map((photo, idx) => (
              <Card
                key={photo.id}
                className={`glass-card border-border/50 overflow-hidden hover-lift group animate-scale-in ${
                  viewMode === 'list' ? 'flex flex-row' : ''
                }`}
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                {/* Image */}
                <div className={`relative overflow-hidden ${
                  viewMode === 'grid' ? 'h-64' : 'w-48 h-48 flex-shrink-0'
                }`}>
                  <img
                    src={photo.url || "/placeholder.svg"}
                    alt={photo.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  {/* Quick Actions */}
                  <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button
                      size="icon"
                      variant="ghost"
                      className={`bg-black/20 backdrop-blur-sm hover:bg-black/40 hover-lift ${
                        photo.liked ? 'text-red-500' : 'text-white'
                      }`}
                      onClick={() => toggleLike(photo.id)}
                    >
                      <Heart className={`w-4 h-4 ${photo.liked ? 'fill-current' : ''}`} />
                    </Button>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="bg-black/20 backdrop-blur-sm text-white hover:bg-black/40 hover-lift"
                    >
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Info */}
                <div className={`p-4 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                  <h3 className="font-semibold mb-2 text-foreground">{photo.title}</h3>
                  <div className="flex flex-col gap-2 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3 h-3" />
                      <span>{photo.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3 h-3" />
                      <span>{photo.date}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="text-xs">
                      {photo.trip}
                    </Badge>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="hover:text-destructive hover-lift h-8 w-8"
                      onClick={() => handleDelete(photo.id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="glass-card border-border/50">
            <div className="p-12 text-center">
              <ImageIcon className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-50" />
              <h3 className="text-lg font-semibold mb-2">No photos found</h3>
              <p className="text-muted-foreground mb-6">
                {searchQuery ? "Try adjusting your search" : "Upload photos to capture your travel memories"}
              </p>
              <Button 
                className="bg-gradient-primary hover:opacity-90 gap-2"
                onClick={() => setIsAddModalOpen(true)}
              >
                <Plus className="w-4 h-4" />
                Add Photos
              </Button>
            </div>
          </Card>
        )}
      </Container>

      {/* Add Photo Modal */}
      <AddPhotoModal
        open={isAddModalOpen}
        onOpenChange={setIsAddModalOpen}
        onAddPhoto={handleAddPhoto}
      />
    </div>
  );
};

export default Photos;

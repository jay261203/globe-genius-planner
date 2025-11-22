import AIChat from "@/components/AIChat";
import InteractiveMap from "@/components/InteractiveMap";
import Navbar from "@/components/Navbar";
import BudgetCard from "@/components/trip-cards/BudgetCard";
import ExpensesCard from "@/components/trip-cards/ExpensesCard";
import ReadinessCard from "@/components/trip-cards/ReadinessCard";
import DestinationsCard from "@/components/trip-cards/DestinationsCard";
import WeatherCard from "@/components/trip-cards/WeatherCard";
import FlightCard from "@/components/trip-cards/FlightCard";
import PackingListCard from "@/components/trip-cards/PackingListCard";
import ActivityTimelineCard from "@/components/trip-cards/ActivityTimelineCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Share2, Download, Edit, History, Copy, Trash2 } from "lucide-react";

const mockData = {
  expenses: [
    { id: 1, name: "Air ticket", amount: 230, icon: "plane" },
    { id: 2, name: "Taxi rent", amount: 10, icon: "car" },
    { id: 3, name: "King burger", amount: 12, icon: "food" },
    { id: 4, name: "Trekking gear", amount: 95, icon: "shopping" },
  ],
  destinations: [
    { id: 1, name: "Seminyak", position: { x: 30, y: 25 } },
    { id: 2, name: "Ubud", position: { x: 35, y: 45 } },
    { id: 3, name: "Tanah Lot", position: { x: 50, y: 60 } },
    { id: 4, name: "Tegallalang", position: { x: 60, y: 75 } },
  ],
  packingItems: [
    { id: 1, name: "Backpack", completed: false },
    { id: 2, name: "Camera & GoPro", completed: false },
    { id: 3, name: "Laptop & Charger", completed: false },
    { id: 4, name: "Sunscreen", completed: false },
    { id: 5, name: "Medical Aid", completed: false },
    { id: 6, name: "Summer clothes", completed: false },
  ],
  activities: [
    {
      day: 1,
      title: "Arrival & Beach Sunset",
      activities: [
        {
          title: "Airport Arrival",
          description: [
            "Arrive at Ngurah Rai Airport",
            "Pick up rental car and check into hotel"
          ]
        }
      ]
    },
    { day: 2, title: "Temple & Rice Terraces" },
    { day: 3, title: "Beach & Water Sports" },
  ],
};

const TripDetails = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="py-8 px-4">
        <div className="container mx-auto max-w-7xl">
        {/* Hero Section */}
        <div className="relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden mb-8 animate-scale-in">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800')" }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/30 to-black/60" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Bali, Indonesia</h1>
            <p className="text-sm md:text-base opacity-90">Jun 15 - 22, 2024 • 7 Days • 2 Travelers</p>
          </div>
        </div>

        {/* Actions Bar */}
        <div className="flex flex-wrap gap-3 mb-8 animate-slide-up">
          <Button className="bg-gradient-primary hover:opacity-90 gap-2 hover-lift">
            <Edit className="w-4 h-4" />
            <span className="hidden sm:inline">Edit Trip</span>
          </Button>
          <Button variant="outline" className="gap-2 hover-lift">
            <Share2 className="w-4 h-4" />
            <span className="hidden sm:inline">Share</span>
          </Button>
          <Button variant="outline" className="gap-2 hover-lift">
            <Download className="w-4 h-4" />
            <span className="hidden sm:inline">Export PDF</span>
          </Button>
          <Button variant="outline" className="gap-2 hover-lift">
            <History className="w-4 h-4" />
            <span className="hidden sm:inline">History</span>
          </Button>
          <Button variant="outline" className="gap-2 hover-lift">
            <Copy className="w-4 h-4" />
            <span className="hidden sm:inline">Duplicate</span>
          </Button>
          <Button variant="outline" className="gap-2 hover-lift text-destructive hover:text-destructive">
            <Trash2 className="w-4 h-4" />
            <span className="hidden sm:inline">Delete</span>
          </Button>
        </div>

        {/* Trip Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 mb-8">
          {/* Row 1 */}
          <div className="lg:col-span-3">
            <BudgetCard total={2400} spent={1260} />
          </div>
          
          <div className="lg:col-span-3">
            <ExpensesCard expenses={mockData.expenses} />
          </div>
          
          <div className="lg:col-span-3">
            <WeatherCard
              location="Bali"
              temperature={28}
              condition="Partly cloudy"
              high={30}
              low={24}
            />
          </div>

          <div className="lg:col-span-3">
            <ReadinessCard daysLeft={12} />
          </div>

          {/* Row 2 */}
          <div className="lg:col-span-4">
            <DestinationsCard destinations={mockData.destinations} />
          </div>
          
          <div className="lg:col-span-4">
            <FlightCard
              outbound={{ date: "15 Jun", time: "10:00AM", from: "Jakarta", to: "Bali" }}
              return={{ date: "22 Jun", time: "4:30PM", from: "Bali", to: "Jakarta" }}
            />
          </div>
          
          <div className="lg:col-span-4">
            <PackingListCard items={mockData.packingItems} />
          </div>
        </div>

        {/* Interactive Map */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Interactive Route Map</h2>
          <InteractiveMap />
        </div>

        {/* Itinerary Timeline */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Day-by-Day Itinerary</h2>
          <ActivityTimelineCard days={mockData.activities} />
        </div>

        {/* AI Assistant */}
        <Card className="glass-card border-border/50 animate-fade-in">
          <CardContent className="p-0">
            <div className="p-4 border-b border-border">
              <h3 className="font-bold text-lg">AI Travel Assistant</h3>
              <p className="text-sm text-muted-foreground">Refine your itinerary with AI</p>
            </div>
            <AIChat />
          </CardContent>
        </Card>
        </div>
      </div>
    </div>
  );
};

export default TripDetails;


import Container from "@/components/Container";
import TripHeroCard from "@/components/trip-cards/TripHeroCard";
import BudgetCard from "@/components/trip-cards/BudgetCard";
import ExpensesCard from "@/components/trip-cards/ExpensesCard";
import ReadinessCard from "@/components/trip-cards/ReadinessCard";
import DestinationsCard from "@/components/trip-cards/DestinationsCard";
import WeatherCard from "@/components/trip-cards/WeatherCard";
import FlightCard from "@/components/trip-cards/FlightCard";
import PackingListCard from "@/components/trip-cards/PackingListCard";
import ActivityTimelineCard from "@/components/trip-cards/ActivityTimelineCard";
import { Bell, Mail, Plus } from 'lucide-react';
import { Button } from "@/components/ui/button";

const mockData = {
  expenses: [
    { id: 1, name: "Air ticket", amount: 230, icon: "plane" },
    { id: 2, name: "Taxi rent", amount: 10, icon: "car" },
    { id: 3, name: "King burger", amount: 12, icon: "food" },
    { id: 4, name: "Trekking gear", amount: 95, icon: "shopping" },
  ],
  destinations: [
    { id: 1, name: "Kathmandu", position: { x: 30, y: 25 } },
    { id: 2, name: "Pokhara", position: { x: 35, y: 45 } },
    { id: 3, name: "Chitwan", position: { x: 50, y: 60 } },
    { id: 4, name: "Everest", position: { x: 60, y: 75 } },
  ],
  packingItems: [
    { id: 1, name: "Backpack", completed: false },
    { id: 2, name: "Camera & GoPro", completed: false },
    { id: 3, name: "Laptop & Charger", completed: false },
    { id: 4, name: "Hot water bottle", completed: false },
    { id: 5, name: "Medical Aid", completed: false },
    { id: 6, name: "Winter Jacket", completed: false },
  ],
  activities: [
    {
      day: 1,
      title: "Arrival in Kathmandu",
      activities: [
        {
          title: "Arrival",
          description: [
            "Arrive in Kathmandu, the capital city of Nepal.",
            "Check into your accommodation and rest after your journey."
          ]
        }
      ]
    },
    { day: 2, title: "Kathmandu Sightseeing" },
    { day: 3, title: "Bhaktapur and Nagarkot" },
  ],
};

const TripDashboard = () => {
  return (
    <div className="p-8 bg-background">
      {/* Top Navigation */}
      <header className="sticky top-0 z-30 glass-sidebar border-b border-white/10">
        <div className="flex items-center justify-between px-8 py-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="font-medium">Discover</Button>
            <Button className="bg-primary/20 hover:bg-primary/30">
              Dashboard
            </Button>
            <Button variant="ghost" className="font-medium">Your Trips</Button>
            <Button variant="ghost" className="font-medium">Archive</Button>
            <Button className="bg-gradient-primary hover:opacity-90 gap-2">
              <Plus className="w-4 h-4" />
              New Trip
            </Button>
          </div>
          
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-xl hover:bg-muted/50 transition-colors">
              <Bell className="w-5 h-5" />
            </button>
            <button className="p-2 rounded-xl hover:bg-muted/50 transition-colors">
              <Mail className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold">
              JD
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-0">
        <Container>
          <div className="grid grid-cols-12 gap-6">
            {/* Row 1 */}
            <div className="col-span-4">
              <TripHeroCard
                destination="Nepal"
                greeting="Hey Ashik!"
                subtitle="The Mountains Are Calling And I Must Go. — John Muir"
                backgroundImage="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800"
              />
            </div>
            
            <div className="col-span-3">
              <BudgetCard total={1800} spent={1260} />
            </div>
            
            <div className="col-span-3">
              <ExpensesCard expenses={mockData.expenses} />
            </div>
            
            <div className="col-span-2">
              <ReadinessCard daysLeft={17} />
            </div>

            {/* Row 2 */}
            <div className="col-span-4">
              <DestinationsCard destinations={mockData.destinations} />
            </div>
            
            <div className="col-span-2">
              <WeatherCard
                location="Kathmandu"
                temperature={13}
                condition="Mostly cloudy"
                high={10}
                low={4}
              />
            </div>
            
            <div className="col-span-3">
              <FlightCard
                outbound={{ date: "12 May", time: "2:30PM", from: "Dhaka", to: "Kathmandu" }}
                return={{ date: "22 May", time: "9:30AM", from: "Kathmandu", to: "Delhi" }}
              />
            </div>
            
            <div className="col-span-3">
              <PackingListCard items={mockData.packingItems} />
            </div>

            {/* Row 3 - Full Width */}
            <div className="col-span-12">
              <ActivityTimelineCard days={mockData.activities} />
            </div>
          </div>
        </Container>
      </main>
    </div>
  );
};

export default TripDashboard;

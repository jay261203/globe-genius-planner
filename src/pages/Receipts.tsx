import { useState } from "react";
import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Receipt, 
  Plus, 
  Search, 
  Download, 
  Trash2, 
  FileText,
  Calendar,
  DollarSign,
  Filter,
  Upload
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const receiptsData = [
  {
    id: 1,
    name: "Hotel Reservation - Bali Resort",
    date: "Jun 15, 2024",
    amount: "$450.00",
    category: "Accommodation",
    trip: "Bali Adventure",
    status: "paid" as const,
  },
  {
    id: 2,
    name: "Flight Tickets - Tokyo",
    date: "Aug 1, 2024",
    amount: "$1,200.00",
    category: "Transportation",
    trip: "Tokyo Explorer",
    status: "pending" as const,
  },
  {
    id: 3,
    name: "Restaurant - Le Bernardin",
    date: "Oct 5, 2024",
    amount: "$85.50",
    category: "Food",
    trip: "Paris Romance",
    status: "paid" as const,
  },
  {
    id: 4,
    name: "Museum Tickets",
    date: "Oct 7, 2024",
    amount: "$45.00",
    category: "Activities",
    trip: "Paris Romance",
    status: "paid" as const,
  },
];

const Receipts = () => {
  const [receipts, setReceipts] = useState(receiptsData);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredReceipts = receipts.filter(receipt =>
    receipt.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    receipt.trip.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDelete = (id: number) => {
    setReceipts(receipts.filter(r => r.id !== id));
  };

  const totalAmount = receipts.reduce((sum, r) => {
    const amount = parseFloat(r.amount.replace(/[$,]/g, ''));
    return sum + amount;
  }, 0);

  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <div className="py-8 px-4">
        <Container className="max-w-6xl animate-fade-in">
        {/* Header */}
        <SectionHeader
          title="Receipts & Expenses"
          description="Track and manage all your travel expenses"
          action={
            <div className="flex gap-3">
              <Button variant="outline" className="gap-2 hover-lift">
                <Upload className="w-4 h-4" />
                Upload
              </Button>
              <Button className="bg-gradient-primary hover:opacity-90 gap-2 hover-lift">
                <Plus className="w-4 h-4" />
                Add Receipt
              </Button>
            </div>
          }
          className="mb-8 animate-slide-down"
        />

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          <Card className="glass-card border-border/50 hover-lift">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Total Expenses</p>
                  <h3 className="text-2xl font-bold">${totalAmount.toFixed(2)}</h3>
                </div>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card border-border/50 hover-lift">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Total Receipts</p>
                  <h3 className="text-2xl font-bold">{receipts.length}</h3>
                </div>
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-secondary" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card border-border/50 hover-lift">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Pending</p>
                  <h3 className="text-2xl font-bold">
                    {receipts.filter(r => r.status === 'pending').length}
                  </h3>
                </div>
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Receipt className="w-6 h-6 text-accent" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filter */}
        <Card className="glass-card border-border/50 mb-6">
          <CardContent className="p-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search receipts or trips..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 glass-input"
                />
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="gap-2 hover-lift">
                    <Filter className="w-4 h-4" />
                    Filter
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="glass-card border-border/50">
                  <DropdownMenuItem>All Receipts</DropdownMenuItem>
                  <DropdownMenuItem>Accommodation</DropdownMenuItem>
                  <DropdownMenuItem>Transportation</DropdownMenuItem>
                  <DropdownMenuItem>Food</DropdownMenuItem>
                  <DropdownMenuItem>Activities</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </CardContent>
        </Card>

        {/* Receipts List */}
        <div className="space-y-4">
          {filteredReceipts.length > 0 ? (
            filteredReceipts.map((receipt, idx) => (
              <Card
                key={receipt.id}
                className="glass-card border-border/50 hover-lift overflow-hidden animate-slide-up"
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                <CardContent className="p-0">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-6">
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                      <Receipt className="w-6 h-6 text-white" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                        <h4 className="font-semibold text-foreground truncate">{receipt.name}</h4>
                        <Badge variant={receipt.status === 'paid' ? 'default' : 'secondary'} className="w-fit">
                          {receipt.status}
                        </Badge>
                      </div>
                      <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {receipt.date}
                        </span>
                        <span>•</span>
                        <span>{receipt.category}</span>
                        <span>•</span>
                        <span className="text-primary font-medium">{receipt.trip}</span>
                      </div>
                    </div>

                    {/* Amount and Actions */}
                    <div className="flex items-center gap-4 ml-auto">
                      <p className="text-xl font-bold text-foreground">{receipt.amount}</p>
                      <div className="flex gap-2">
                        <Button size="icon" variant="ghost" className="hover-lift hover:text-primary">
                          <Download className="w-4 h-4" />
                        </Button>
                        <Button 
                          size="icon" 
                          variant="ghost" 
                          className="hover-lift hover:text-destructive"
                          onClick={() => handleDelete(receipt.id)}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <Card className="glass-card border-border/50">
              <CardContent className="p-12 text-center">
                <Receipt className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-50" />
                <h3 className="text-lg font-semibold mb-2">No receipts found</h3>
                <p className="text-muted-foreground mb-6">
                  {searchQuery ? "Try adjusting your search" : "Add your first receipt to get started"}
                </p>
                <Button className="bg-gradient-primary hover:opacity-90 gap-2">
                  <Plus className="w-4 h-4" />
                  Add Receipt
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </Container>
      </div>
    </div>
  );
};

export default Receipts;

import { useState } from "react";
import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { 
  User, 
  Bell, 
  Shield, 
  Globe, 
  Palette, 
  Camera,
  Mail,
  Lock,
  Trash2,
  Save,
  LogOut
} from 'lucide-react';
import { toast } from "sonner";
import ThemeToggle from "@/components/ThemeToggle";

const Settings = () => {
  const [profile, setProfile] = useState({
    name: "Sarah Anderson",
    username: "sarahtravels",
    email: "sarah@example.com",
    bio: "Passionate traveler exploring the world one destination at a time.",
    location: "New York, USA",
    website: "",
  });

  const [notifications, setNotifications] = useState({
    emailUpdates: true,
    tripReminders: true,
    communityAlerts: false,
    marketingEmails: false,
  });

  const [privacy, setPrivacy] = useState({
    profilePublic: true,
    showTrips: true,
    showStats: true,
  });

  const handleSave = () => {
    toast.success("Settings saved successfully");
  };

  return (
    <div className="w-full min-h-screen py-8 px-4">
      <Container className="max-w-4xl animate-fade-in">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-semibold text-foreground">Settings</h1>
          <p className="text-muted-foreground mt-1">Manage your account preferences</p>
        </div>

        <div className="space-y-6">
          {/* Profile Section */}
          <Card className="glass-card border-border/50">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <User className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-lg">Profile Information</CardTitle>
                  <CardDescription>Update your personal details</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Avatar */}
              <div className="flex items-center gap-6">
                <Avatar className="w-20 h-20 border-2 border-border">
                  <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=traveler" />
                  <AvatarFallback>SA</AvatarFallback>
                </Avatar>
                <div className="space-y-2">
                  <Button variant="outline" size="sm" className="gap-2">
                    <Camera className="w-4 h-4" />
                    Change Avatar
                  </Button>
                  <p className="text-xs text-muted-foreground">JPG, PNG or GIF. Max 2MB.</p>
                </div>
              </div>

              <Separator />

              {/* Form Fields */}
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input 
                    id="name" 
                    value={profile.name} 
                    onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                    className="glass-input"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="username">Username</Label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">@</span>
                    <Input 
                      id="username" 
                      value={profile.username} 
                      onChange={(e) => setProfile({ ...profile, username: e.target.value })}
                      className="pl-8 glass-input"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    type="email"
                    value={profile.email} 
                    onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                    className="glass-input"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input 
                    id="location" 
                    value={profile.location} 
                    onChange={(e) => setProfile({ ...profile, location: e.target.value })}
                    className="glass-input"
                    placeholder="City, Country"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea 
                  id="bio" 
                  value={profile.bio} 
                  onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                  className="glass-input resize-none"
                  rows={3}
                  placeholder="Tell us about yourself..."
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="website">Website</Label>
                <Input 
                  id="website" 
                  value={profile.website} 
                  onChange={(e) => setProfile({ ...profile, website: e.target.value })}
                  className="glass-input"
                  placeholder="https://yourwebsite.com"
                />
              </div>
            </CardContent>
          </Card>

          {/* Notifications Section */}
          <Card className="glass-card border-border/50">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                  <Bell className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <CardTitle className="text-lg">Notifications</CardTitle>
                  <CardDescription>Configure how you receive updates</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Email Updates</p>
                  <p className="text-sm text-muted-foreground">Receive trip updates via email</p>
                </div>
                <Switch 
                  checked={notifications.emailUpdates}
                  onCheckedChange={(checked) => setNotifications({ ...notifications, emailUpdates: checked })}
                />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Trip Reminders</p>
                  <p className="text-sm text-muted-foreground">Get notified before your trips</p>
                </div>
                <Switch 
                  checked={notifications.tripReminders}
                  onCheckedChange={(checked) => setNotifications({ ...notifications, tripReminders: checked })}
                />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Community Alerts</p>
                  <p className="text-sm text-muted-foreground">Updates from travelers you follow</p>
                </div>
                <Switch 
                  checked={notifications.communityAlerts}
                  onCheckedChange={(checked) => setNotifications({ ...notifications, communityAlerts: checked })}
                />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Marketing Emails</p>
                  <p className="text-sm text-muted-foreground">Tips, offers, and product news</p>
                </div>
                <Switch 
                  checked={notifications.marketingEmails}
                  onCheckedChange={(checked) => setNotifications({ ...notifications, marketingEmails: checked })}
                />
              </div>
            </CardContent>
          </Card>

          {/* Privacy Section */}
          <Card className="glass-card border-border/50">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <CardTitle className="text-lg">Privacy</CardTitle>
                  <CardDescription>Control your profile visibility</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Public Profile</p>
                  <p className="text-sm text-muted-foreground">Allow others to view your profile</p>
                </div>
                <Switch 
                  checked={privacy.profilePublic}
                  onCheckedChange={(checked) => setPrivacy({ ...privacy, profilePublic: checked })}
                />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Show Shared Trips</p>
                  <p className="text-sm text-muted-foreground">Display your public trips on profile</p>
                </div>
                <Switch 
                  checked={privacy.showTrips}
                  onCheckedChange={(checked) => setPrivacy({ ...privacy, showTrips: checked })}
                />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Show Travel Stats</p>
                  <p className="text-sm text-muted-foreground">Display countries visited and followers</p>
                </div>
                <Switch 
                  checked={privacy.showStats}
                  onCheckedChange={(checked) => setPrivacy({ ...privacy, showStats: checked })}
                />
              </div>
            </CardContent>
          </Card>

          {/* Appearance Section */}
          <Card className="glass-card border-border/50">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Palette className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-lg">Appearance</CardTitle>
                  <CardDescription>Customize the look and feel</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Theme</p>
                  <p className="text-sm text-muted-foreground">Switch between light and dark mode</p>
                </div>
                <ThemeToggle />
              </div>
            </CardContent>
          </Card>

          {/* Security Section */}
          <Card className="glass-card border-border/50">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center">
                  <Lock className="w-5 h-5 text-destructive" />
                </div>
                <div>
                  <CardTitle className="text-lg">Security</CardTitle>
                  <CardDescription>Manage your account security</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Change Password</p>
                  <p className="text-sm text-muted-foreground">Update your account password</p>
                </div>
                <Button variant="outline" size="sm">
                  Change
                </Button>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-destructive">Delete Account</p>
                  <p className="text-sm text-muted-foreground">Permanently delete your account and data</p>
                </div>
                <Button variant="outline" size="sm" className="text-destructive hover:text-destructive">
                  <Trash2 className="w-4 h-4 mr-2" />
                  Delete
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex items-center justify-between pt-4">
            <Button variant="outline" className="gap-2 text-destructive hover:text-destructive">
              <LogOut className="w-4 h-4" />
              Sign Out
            </Button>
            <Button onClick={handleSave} className="gap-2 bg-gradient-primary hover:opacity-90">
              <Save className="w-4 h-4" />
              Save Changes
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Settings;

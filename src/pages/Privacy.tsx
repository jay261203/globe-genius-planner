import Container from "@/components/Container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield } from 'lucide-react';

const Privacy = () => {
  return (
    <div className="w-full min-h-screen py-8 px-4">
      <Container className="max-w-4xl animate-fade-in">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-semibold text-foreground">Privacy Policy</h1>
              <p className="text-muted-foreground">Last updated: January 2025</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <Card className="glass-card border-border/50">
            <CardHeader>
              <CardTitle>Information We Collect</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm dark:prose-invert max-w-none">
              <p className="text-muted-foreground">
                We collect information you provide directly to us, such as when you create an account, 
                plan a trip, or contact us for support. This may include your name, email address, 
                travel preferences, and trip details.
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card border-border/50">
            <CardHeader>
              <CardTitle>How We Use Your Information</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm dark:prose-invert max-w-none">
              <p className="text-muted-foreground">
                We use the information we collect to provide, maintain, and improve our services, 
                personalize your trip recommendations, and communicate with you about your account 
                and travel plans.
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card border-border/50">
            <CardHeader>
              <CardTitle>Data Security</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm dark:prose-invert max-w-none">
              <p className="text-muted-foreground">
                We implement appropriate security measures to protect your personal information. 
                However, no method of transmission over the Internet is 100% secure, and we cannot 
                guarantee absolute security.
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card border-border/50">
            <CardHeader>
              <CardTitle>Contact Us</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm dark:prose-invert max-w-none">
              <p className="text-muted-foreground">
                If you have any questions about this Privacy Policy, please contact us at 
                privacy@trippy.com.
              </p>
            </CardContent>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default Privacy;

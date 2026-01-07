import Container from "@/components/Container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText } from 'lucide-react';

const Terms = () => {
  return (
    <div className="w-full min-h-screen py-8 px-4">
      <Container className="max-w-4xl animate-fade-in">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <FileText className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-semibold text-foreground">Terms of Service</h1>
              <p className="text-muted-foreground">Last updated: January 2025</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <Card className="glass-card border-border/50">
            <CardHeader>
              <CardTitle>Acceptance of Terms</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm dark:prose-invert max-w-none">
              <p className="text-muted-foreground">
                By accessing or using Trippy, you agree to be bound by these Terms of Service. 
                If you do not agree to these terms, please do not use our services.
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card border-border/50">
            <CardHeader>
              <CardTitle>Use of Services</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm dark:prose-invert max-w-none">
              <p className="text-muted-foreground">
                You may use our services only for lawful purposes and in accordance with these Terms. 
                You agree not to use the service in any way that violates any applicable laws or regulations.
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card border-border/50">
            <CardHeader>
              <CardTitle>User Accounts</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm dark:prose-invert max-w-none">
              <p className="text-muted-foreground">
                You are responsible for maintaining the confidentiality of your account credentials 
                and for all activities that occur under your account. Please notify us immediately 
                of any unauthorized use.
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card border-border/50">
            <CardHeader>
              <CardTitle>Intellectual Property</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm dark:prose-invert max-w-none">
              <p className="text-muted-foreground">
                The service and its original content, features, and functionality are owned by 
                Trippy and are protected by international copyright, trademark, and other 
                intellectual property laws.
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card border-border/50">
            <CardHeader>
              <CardTitle>Contact Us</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm dark:prose-invert max-w-none">
              <p className="text-muted-foreground">
                If you have any questions about these Terms, please contact us at 
                legal@trippy.com.
              </p>
            </CardContent>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default Terms;

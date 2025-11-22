import React from "react";
import { ReactNode } from "react";
import { AlertCircle } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

export default class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center px-4 bg-background">
          <Card className="glass-card border-border/50 max-w-md w-full">
            <CardContent className="p-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center mx-auto">
                <AlertCircle className="w-8 h-8 text-destructive" />
              </div>
              <h2 className="text-2xl font-bold">Something went wrong</h2>
              <p className="text-muted-foreground">
                {this.state.error?.message || "An unexpected error occurred"}
              </p>
              <Button
                onClick={() => window.location.href = "/"}
                className="w-full bg-gradient-primary hover:opacity-90"
              >
                Return to Home
              </Button>
            </CardContent>
          </Card>
        </div>
      );
    }

    return this.props.children;
  }
}

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorBoundary from "@/components/Alerts/ErrorBoundary";
import Layout from "@/components/Layout";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import Explore from "./pages/Explore";
import TripDetails from "./pages/TripDetails";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Settings from "./pages/Settings";
import Onboarding from "./pages/Onboarding";
import Receipts from "./pages/Receipts";
import Photos from "./pages/Photos";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <ErrorBoundary>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route
              path="/"
              element={
                <Layout withSidebar={true} withHeader={true} fullWidth={false}>
                  <Index />
                </Layout>
              }
            />

            <Route
              path="/dashboard"
              element={
                <Layout>
                  <Dashboard />
                </Layout>
              }
            />

            <Route
              path="/explore"
              element={
                <Layout>
                  <Explore />
                </Layout>
              }
            />

            <Route
              path="/trip/:id"
              element={
                <Layout>
                  <TripDetails />
                </Layout>
              }
            />

            <Route
              path="/profile"
              element={
                <Layout>
                  <Profile />
                </Layout>
              }
            />

            <Route path="*" element={<NotFound />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/settings"
              element={
                <Layout>
                  <Settings />
                </Layout>
              }
            />
            <Route
              path="/onboarding"
              element={
                <Layout fullWidth={true}>
                  <Onboarding />
                </Layout>
              }
            />
            <Route
              path="/receipts"
              element={
                <Layout>
                  <Receipts />
                </Layout>
              }
            />
            <Route
              path="/photos"
              element={
                <Layout>
                  <Photos />
                </Layout>
              }
            />
          </Routes>
        </BrowserRouter>
      </ErrorBoundary>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

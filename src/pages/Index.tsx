import Sidebar from "@/components/Sidebar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Destinations from "@/components/Destinations";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <div className="flex-1 ml-64">
        <Hero />
        <Features />
        <Destinations />
        <Footer />
      </div>
    </div>
  );
};

export default Index;

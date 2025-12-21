import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Destinations from "@/components/Destinations";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <div className="w-full">
      <Hero />
      <Features />
      <Destinations />
      <Testimonials />
      <CTASection />
    </div>
  );
};

export default Index;

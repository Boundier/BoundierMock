import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import LiveDemo from "@/components/LiveDemo";
import Features from "@/components/Features";
import DashboardPreview from "@/components/DashboardPreview";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <HowItWorks />
      <LiveDemo />
      <Features />
      <DashboardPreview />
      <CTASection />
      <Footer />
    </div>
  );
}

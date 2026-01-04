import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Benefits } from "./components/Benefits";
import { Testimonials } from "./components/Testimonials";
import { Pricing } from "./components/Pricing";
import { CTASection } from "./components/CTASection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] overflow-x-hidden">
      <Navigation />
      <Hero />
      <Benefits />
      <Pricing />
      <CTASection />
      <Testimonials />
      <Footer />
    </div>
  );
}

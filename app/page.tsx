import Hero from "@/components/home/Hero";
import TrustBar from "@/components/home/TrustBar";
import WhyChoose from "@/components/home/WhyChoose";
import Experiences from "@/components/home/Experiences";
import SignatureSafaris from "@/components/home/SignatureSafaris";
import Destinations from "@/components/home/Destinations";
import BrandQuote from "@/components/home/BrandQuote";
import HowItWorks from "@/components/home/HowItWorks";
import Accommodation from "@/components/home/Accommodation";
import Testimonials from "@/components/home/Testimonials";
import FinalCTA from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <TrustBar />
      <WhyChoose />
      <Experiences />
      <SignatureSafaris />
      <Destinations />
      <Accommodation />
      <BrandQuote />
      <HowItWorks />
      <Testimonials />
      <FinalCTA />
    </main>
  );
}

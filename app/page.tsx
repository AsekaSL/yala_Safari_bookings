import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import WhyYalaSection from "../components/WhyYalaSection";
import SafariPackages from "../components/SafariPackages";
import SafariExperience from "../components/SafariExperience";
import PlanTripSection from "../components/PlanTripSection";
import ExploreZones from "../components/ExploreZones";
import ResponsibleTourism from "../components/ResponsibleTourism";

export default function Home() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-[#FFF5E1] group/design-root overflow-x-hidden font-body text-[#161413]">
      <HeroSection />
      <WhyYalaSection />
      <SafariPackages />
      <SafariExperience />
      <PlanTripSection />
      <ExploreZones />
      <ResponsibleTourism />
    </div>
  );
}

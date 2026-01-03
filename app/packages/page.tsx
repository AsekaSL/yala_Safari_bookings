import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PackagesHero from "../../components/packages/PackagesHero";
import PackagesList from "../../components/packages/PackagesList";
import PackageRecommendations from "../../components/packages/PackageRecommendations";
import CostCalculatorCTA from "../../components/packages/CostCalculatorCTA";

export default function PackagesPage() {
    return (
        <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light group/design-root overflow-x-hidden font-body text-[#161413]">
            <Navbar />
            <PackagesHero />
            <PackagesList />
            <PackageRecommendations />
            <CostCalculatorCTA />
            <Footer />
        </div>
    );
}

import PackagesHero from "../../components/packages/PackagesHero";
import PackagesList from "../../components/packages/PackagesList";
import PackageRecommendations from "../../components/packages/PackageRecommendations";
import CostCalculatorCTA from "../../components/packages/CostCalculatorCTA";

export default function PackagesPage() {
    return (
        <div className="relative flex h-auto min-h-screen w-full flex-col bg-[#f7f7f6] group/design-root overflow-x-hidden font-body text-[#161413]">
            <PackagesHero />
            <PackagesList />
            <PackageRecommendations />
            <CostCalculatorCTA />
        </div>
    );
}

import GuideHero from "../../components/visitor-guide/GuideHero";
import PreArrivalChecklist from "../../components/visitor-guide/PreArrivalChecklist";
import GettingThere from "../../components/visitor-guide/GettingThere";
import FeesAndRentals from "../../components/visitor-guide/FeesAndRentals";
import SafariTimings from "../../components/visitor-guide/SafariTimings";
import ParkRules from "../../components/visitor-guide/ParkRules";
import PackingList from "../../components/visitor-guide/PackingList";
import SafetyInfo from "../../components/visitor-guide/SafetyInfo";
import ContactInfo from "../../components/visitor-guide/ContactInfo";
import GuideCTA from "../../components/visitor-guide/GuideCTA";

export default function VisitorGuidePage() {
    return (
        <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light group/design-root overflow-x-hidden font-body text-[#2E1F14]">
            <GuideHero />
            <PreArrivalChecklist />
            <GettingThere />
            <FeesAndRentals />
            <SafariTimings />
            <ParkRules />
            <PackingList />
            <SafetyInfo />
            <ContactInfo />
            <GuideCTA />
        </div>
    );
}

import AboutHero from "../../components/about/AboutHero";
import OurStory from "../../components/about/OurStory";
import MissionVision from "../../components/about/MissionVision";
import WhyTrustUs from "../../components/about/WhyTrustUs";
import Guardians from "../../components/about/Guardians";
import TeamSection from "../../components/about/TeamSection";
import WhyYalaMatters from "../../components/about/WhyYalaMatters";
import CallToAction from "../../components/about/CallToAction";

export default function AboutPage() {
    return (
        <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-cream group/design-root overflow-x-hidden font-body text-[#161413]">
            <AboutHero />
            <OurStory />
            <MissionVision />
            <WhyTrustUs />
            <Guardians />
            <TeamSection />
            <WhyYalaMatters />
            <CallToAction />
        </div>
    );
}

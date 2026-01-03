import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import DetailHero from "../../../components/package-detail/DetailHero";
import PackageInfo from "../../../components/package-detail/PackageInfo";
import SafariTimeline from "../../../components/package-detail/SafariTimeline";
import WildlifeGallery from "../../../components/package-detail/WildlifeGallery";
import SidebarInfo from "../../../components/package-detail/SidebarInfo";
import BottomBookingBar from "../../../components/package-detail/BottomBookingBar";

// Since we are not using dynamic data yet, we can ignore the params for now
// or just define them to satisfy Next.js types if needed.
export default function PackageDetailPage() {
    return (
        <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light group/design-root overflow-x-hidden font-body text-[#161413]">
            <Navbar />
            <DetailHero />
            <div className="layout-container flex flex-col items-center">
                <div className="layout-content-container w-full max-w-[1280px] px-4 md:px-10 py-12 md:py-20">
                    <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12 lg:gap-20">
                        <div className="flex flex-col gap-16">
                            <PackageInfo />
                            <SafariTimeline />
                            <WildlifeGallery />
                        </div>
                        <div className="relative">
                            <SidebarInfo />
                        </div>
                    </div>
                </div>
            </div>
            <BottomBookingBar />
            <Footer />
        </div>
    );
}

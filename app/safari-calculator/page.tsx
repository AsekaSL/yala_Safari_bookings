import CalculatorHero from "../../components/safari-calculator/CalculatorHero";
import BookingForm from "../../components/safari-calculator/BookingForm";
import ContactDetailsForm from "../../components/safari-calculator/ContactDetailsForm";
import PriceSummary from "../../components/safari-calculator/PriceSummary";
import HelpWidget from "../../components/safari-calculator/HelpWidget";

export default function SafariCalculatorPage() {
    return (
        <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-cream group/design-root overflow-x-hidden font-body text-[#161413]">
            <div className="flex-1 w-full py-8 md:py-12 px-4 md:px-10">
                <CalculatorHero />
                <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                        <BookingForm />
                        <ContactDetailsForm />
                    </div>
                    <div className="lg:col-span-4 relative h-full">
                        <div className="lg:sticky lg:top-[100px] flex flex-col gap-6">
                            <PriceSummary />
                            <HelpWidget />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

import ContactHero from "../../components/contact/ContactHero";
import ContactForm from "../../components/contact/ContactForm";
import DirectContact from "../../components/contact/DirectContact";
import DWCReference from "../../components/contact/DWCReference";
import OfficeInfo from "../../components/contact/OfficeInfo";
import ContactCTA from "../../components/contact/ContactCTA";

export default function ContactPage() {
    return (
        <div className="relative flex h-auto min-h-screen w-full flex-col bg-[#FFF5E1] group/design-root overflow-x-hidden font-body text-[#161413]">
            <ContactHero />
            <div className="bg-white py-16 md:py-20">
                <div className="layout-container flex h-full grow flex-col">
                    <div className="px-4 md:px-20 flex flex-1 justify-center">
                        <div className="layout-content-container flex flex-col max-w-[1280px] flex-1">
                            <div className="mb-12 md:mb-16 text-center max-w-3xl mx-auto">
                                <h2 className="text-[#58544b] text-3xl font-bold font-display mb-4">How to Reach Us</h2>
                                <p className="text-[#5a5a5a] text-lg leading-relaxed">
                                    Whether you're ready to book your safari or just have a few questions about the park, we'd love to hear from you. We aim to respond to all inquiries within 24-48 hours. Please choose the method most convenient for you below.
                                </p>
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                                <div className="flex flex-col gap-8 order-2 lg:order-1">
                                    <ContactForm />
                                </div>
                                <div className="flex flex-col gap-10 order-1 lg:order-2">
                                    <DirectContact />
                                    <DWCReference />
                                    <OfficeInfo />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ContactCTA />
        </div>
    );
}

import React from 'react';

export default function WhyTrustUs() {
    return (
        <div className="bg-white py-16 md:py-24">
            <div className="layout-container flex h-full grow flex-col">
                <div className="px-4 md:px-20 flex flex-1 justify-center">
                    <div className="layout-content-container flex flex-col max-w-[1280px] flex-1">
                        <div className="text-center mb-16">
                            <span className="text-sky-blue font-bold uppercase tracking-widest text-sm">Reliability</span>
                            <h2 className="text-primary text-3xl font-bold font-display mt-2">Why Trust Us?</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="flex flex-col items-center text-center gap-4">
                                <div className="size-16 rounded-full bg-background-light flex items-center justify-center text-primary mb-2">
                                    <span className="material-symbols-outlined text-3xl">person_pin</span>
                                </div>
                                <h4 className="text-lg font-bold text-[#161413]">Expert Local Guides</h4>
                                <p className="text-[#7e746d] text-sm">Our guides grew up near the park. Their tracking skills are unmatched.</p>
                            </div>
                            <div className="flex flex-col items-center text-center gap-4">
                                <div className="size-16 rounded-full bg-background-light flex items-center justify-center text-primary mb-2">
                                    <span className="material-symbols-outlined text-3xl">handshake</span>
                                </div>
                                <h4 className="text-lg font-bold text-[#161413]">Ethical Practices</h4>
                                <p className="text-[#7e746d] text-sm">We strictly adhere to park rules. No speeding, no harassment of animals.</p>
                            </div>
                            <div className="flex flex-col items-center text-center gap-4">
                                <div className="size-16 rounded-full bg-background-light flex items-center justify-center text-primary mb-2">
                                    <span className="material-symbols-outlined text-3xl">payments</span>
                                </div>
                                <h4 className="text-lg font-bold text-[#161413]">Transparent Pricing</h4>
                                <p className="text-[#7e746d] text-sm">No hidden fees. What you see is exactly what you pay for your adventure.</p>
                            </div>
                            <div className="flex flex-col items-center text-center gap-4">
                                <div className="size-16 rounded-full bg-background-light flex items-center justify-center text-primary mb-2">
                                    <span className="material-symbols-outlined text-3xl">favorite</span>
                                </div>
                                <h4 className="text-lg font-bold text-[#161413]">Personalized Care</h4>
                                <p className="text-[#7e746d] text-sm">From booking to drop-off, we tailor the experience to your needs.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

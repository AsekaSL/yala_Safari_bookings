import React from 'react';

export default function WhyYalaMatters() {
    return (
        <div className="bg-white py-16 md:py-24">
            <div className="layout-container flex h-full grow flex-col">
                <div className="px-4 md:px-20 flex flex-1 justify-center">
                    <div className="layout-content-container flex flex-col max-w-[800px] flex-1 text-center">
                        <span className="material-symbols-outlined text-accent text-5xl mb-6">forest</span>
                        <h2 className="text-primary text-3xl md:text-4xl font-bold font-display mb-6">Why Yala Matters</h2>
                        <div className="space-y-6 text-lg text-[#5a5a5a] leading-relaxed">
                            <p>
                                Yala is more than just a park to us. It is a living, breathing testament to the resilience of nature. It is where the roar of the leopard echoes through the dry zone forest, and where the gentle giants—our elephants—roam with ancient wisdom.
                            </p>
                            <p>
                                This land holds centuries of history, from ancient civilizations to modern conservation efforts. Every tour we book contributes to the local economy and reinforces the value of protecting this biodiversity hotspot. When you visit Yala with us, you aren't just a tourist; you become a partner in its preservation.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

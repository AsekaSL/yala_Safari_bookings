import React from 'react';

export default function CostCalculatorCTA() {
    return (
        <div className="bg-primary text-white py-16 relative overflow-hidden">
            <div className="layout-container flex h-full grow flex-col relative z-10">
                <div className="px-4 md:px-20 flex flex-1 justify-center">
                    <div className="layout-content-container flex flex-col max-w-[800px] flex-1 text-center items-center gap-6">
                        <span className="material-symbols-outlined text-5xl text-accent">calculate</span>
                        <h2 className="text-3xl md:text-4xl font-bold font-display">Ready to calculate your safari cost?</h2>
                        <p className="text-gray-200 text-lg leading-relaxed max-w-2xl">
                            Get an instant estimate for your trip based on your group size, date, and package preference. No hidden fees.
                        </p>
                        <button className="mt-4 flex min-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-14 px-8 bg-accent hover:bg-[#ff8030] text-white text-lg font-bold leading-normal tracking-[0.015em] transition-all shadow-lg hover:translate-y-[-2px]">
                            Calculate Your Safari Price
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

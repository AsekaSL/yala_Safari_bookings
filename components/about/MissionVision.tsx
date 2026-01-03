import React from 'react';

export default function MissionVision() {
    return (
        <div className="bg-background-cream py-16 md:py-24">
            <div className="layout-container flex h-full grow flex-col">
                <div className="px-4 md:px-20 flex flex-1 justify-center">
                    <div className="layout-content-container flex flex-col max-w-[1280px] flex-1">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-white rounded-xl p-10 shadow-sm border-l-4 border-primary hover:shadow-md transition-all">
                                <div className="size-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                                    <span className="material-symbols-outlined text-3xl">flag</span>
                                </div>
                                <h3 className="text-primary text-2xl font-bold font-display mb-4">Our Mission</h3>
                                <p className="text-[#5a5a5a] text-lg leading-relaxed">
                                    To deliver unforgettable, ethical safari experiences that connect travelers deeply with nature while prioritizing the safety and well-being of Yala’s wildlife.
                                </p>
                            </div>
                            <div className="bg-white rounded-xl p-10 shadow-sm border-l-4 border-accent hover:shadow-md transition-all">
                                <div className="size-14 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-6">
                                    <span className="material-symbols-outlined text-3xl">visibility</span>
                                </div>
                                <h3 className="text-primary text-2xl font-bold font-display mb-4">Our Vision</h3>
                                <p className="text-[#5a5a5a] text-lg leading-relaxed">
                                    To protect and celebrate Yala’s wildlife for future generations by setting the standard for sustainable, responsible tourism in Sri Lanka.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

import React from 'react';
import { MdFlag, MdVisibility } from 'react-icons/md';

export default function MissionVision() {
    return (
        <div className="bg-[#FFF5E1] py-16 md:py-24">
            <div className="layout-container flex h-full grow flex-col">
                <div className="px-4 md:px-20 flex flex-1 justify-center">
                    <div className="layout-content-container flex flex-col max-w-[1280px] flex-1">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-white rounded-xl p-10 shadow-sm border-l-4 border-[#5a3e2a] hover:shadow-md transition-all">
                                <div className="size-14 rounded-full bg-[#5a3e2a]/10 flex items-center justify-center text-[#5a3e2a] mb-6">
                                    <MdFlag className="text-3xl" />
                                </div>
                                <h3 className="text-[#5a3e2a] text-2xl font-bold font-display mb-4">Our Mission</h3>
                                <p className="text-[#5a5a5a] text-lg leading-relaxed">
                                    To deliver unforgettable, ethical safari experiences that connect travelers deeply with nature while prioritizing the safety and well-being of Yala’s wildlife.
                                </p>
                            </div>
                            <div className="bg-white rounded-xl p-10 shadow-sm border-l-4 border-[#FF914D] hover:shadow-md transition-all">
                                <div className="size-14 rounded-full bg-[#FF914D]/10 flex items-center justify-center text-[#FF914D] mb-6">
                                    <MdVisibility className="text-3xl" />
                                </div>
                                <h3 className="text-[#5a3e2a] text-2xl font-bold font-display mb-4">Our Vision</h3>
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

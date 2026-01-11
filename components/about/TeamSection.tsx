import React from 'react';
import { MdDirections, MdDirectionsCar, MdSearch, MdSupportAgent } from 'react-icons/md';

export default function TeamSection() {
    return (
        <div className="bg-[#f7f7f6] py-16 md:py-24">
            <div className="layout-container flex h-full grow flex-col">
                <div className="px-4 md:px-20 flex flex-1 justify-center">
                    <div className="layout-content-container flex flex-col max-w-[1280px] flex-1">
                        <div className="text-center mb-12">
                            <h2 className="text-[#5a3e2a] text-3xl font-bold font-display">The People Behind the Safaris</h2>
                            <p className="text-[#7e746d] mt-2 max-w-2xl mx-auto">It takes a dedicated team to make your wilderness dreams come true.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white p-8 rounded-xl text-center shadow-sm hover:translate-y-[-4px] transition-transform duration-300">
                                <div className="size-20 bg-[#FFF5E1] rounded-full mx-auto mb-6 flex items-center justify-center text-[#5a3e2a] border border-[#e3e0de]">
                                    <MdSearch className="text-4xl" />
                                </div>
                                <h3 className="font-bold text-lg text-[#5a3e2a]">The Trackers</h3>
                                <p className="text-sm text-[#5a5a5a] mt-3">With eyes like hawks, our trackers can spot a leopard in the brush from a mile away. They read the jungle's signs—footprints, alarm calls, and broken branches.</p>
                            </div>
                            <div className="bg-white p-8 rounded-xl text-center shadow-sm hover:translate-y-[-4px] transition-transform duration-300">
                                <div className="size-20 bg-[#FFF5E1] rounded-full mx-auto mb-6 flex items-center justify-center text-[#5a3e2a] border border-[#e3e0de]">
                                    <MdDirectionsCar className="text-4xl" />
                                </div>
                                <h3 className="font-bold text-lg text-[#5a3e2a]">The Drivers</h3>
                                <p className="text-sm text-[#5a5a5a] mt-3">Masters of the terrain. They navigate the rugged paths of Yala with skill and patience, positioning the vehicle perfectly for your photography.</p>
                            </div>
                            <div className="bg-white p-8 rounded-xl text-center shadow-sm hover:translate-y-[-4px] transition-transform duration-300">
                                <div className="size-20 bg-[#FFF5E1] rounded-full mx-auto mb-6 flex items-center justify-center text-[#5a3e2a] border border-[#e3e0de]">
                                    <MdSupportAgent className="text-4xl" />
                                </div>
                                <h3 className="font-bold text-lg text-[#5a3e2a]">The Support Team</h3>
                                <p className="text-sm text-[#5a5a5a] mt-3">Working tirelessly behind the scenes to ensure your booking is smooth, your dietary needs are met, and your experience is flawless.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

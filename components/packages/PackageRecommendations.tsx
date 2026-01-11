import React from 'react';
import { MdBackpack, MdFamilyRestroom, MdPets, MdPhotoCamera } from 'react-icons/md';

export default function PackageRecommendations() {
    return (
        <div className="bg-white py-16">
            <div className="layout-container flex h-full grow flex-col">
                <div className="px-4 md:px-20 flex flex-1 justify-center">
                    <div className="layout-content-container flex flex-col max-w-[1280px] flex-1">
                        <div className="flex flex-col gap-10">
                            <div className="text-center">
                                <h2 className="text-[#5a3e2a] text-3xl font-bold font-display leading-tight mb-2">Which Package Is Right for You?</h2>
                                <p className="text-[#7e746d]">Our expert recommendations based on your travel style.</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                <div className="p-6 rounded-xl bg-[#f7f7f6] border border-[#e3e0de] flex flex-col items-center text-center gap-4 hover:border-[#5a3e2a]/30 transition-colors">
                                    <div className="size-14 rounded-full bg-[#5a3e2a]/10 flex items-center justify-center text-[#5a3e2a]">
                                        <MdBackpack className="text-3xl" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-[#5a3e2a] mb-2">Best for Solo Travelers</h3>
                                        <p className="text-sm text-[#5a5a5a] leading-relaxed">Our <strong className="text-[#5a3e2a]">Shared All-Inclusive</strong> package is perfect for meeting fellow adventurers while keeping costs low without sacrificing the experience.</p>
                                    </div>
                                </div>
                                <div className="p-6 rounded-xl bg-[#f7f7f6] border border-[#e3e0de] flex flex-col items-center text-center gap-4 hover:border-[#5a3e2a]/30 transition-colors">
                                    <div className="size-14 rounded-full bg-[#5a3e2a]/10 flex items-center justify-center text-[#5a3e2a]">
                                        <MdPhotoCamera className="text-3xl" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-[#5a3e2a] mb-2">Best for Photographers</h3>
                                        <p className="text-sm text-[#5a5a5a] leading-relaxed">Choose the <strong className="text-[#5a3e2a]">Private Jeep Only</strong> option. You get the flexibility to stop as long as you want for that perfect shot without rushing.</p>
                                    </div>
                                </div>
                                <div className="p-6 rounded-xl bg-[#f7f7f6] border border-[#e3e0de] flex flex-col items-center text-center gap-4 hover:border-[#5a3e2a]/30 transition-colors">
                                    <div className="size-14 rounded-full bg-[#5a3e2a]/10 flex items-center justify-center text-[#5a3e2a]">
                                        <MdFamilyRestroom className="text-3xl" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-[#5a3e2a] mb-2">Best for Families</h3>
                                        <p className="text-sm text-[#5a5a5a] leading-relaxed">The <strong className="text-[#5a3e2a]">Private All-Inclusive</strong> ensures a private vehicle for your children's comfort, with snacks and drinks taken care of.</p>
                                    </div>
                                </div>
                                <div className="p-6 rounded-xl bg-[#f7f7f6] border border-[#e3e0de] flex flex-col items-center text-center gap-4 hover:border-[#5a3e2a]/30 transition-colors">
                                    <div className="size-14 rounded-full bg-[#5a3e2a]/10 flex items-center justify-center text-[#5a3e2a]">
                                        <MdPets className="text-3xl" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-[#5a3e2a] mb-2">Best for Elephant Lovers</h3>
                                        <p className="text-sm text-[#5a5a5a] leading-relaxed">Any <strong className="text-[#5a3e2a]">Afternoon Safari</strong> package increases your chances of seeing herds at waterholes. We recommend Block 5 or Lunugamwehera.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

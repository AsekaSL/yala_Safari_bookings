import React from 'react';
import { MdForest, MdPets, MdTravelExplore } from 'react-icons/md';

export default function ConservationSection() {
    return (
        <div className="bg-[#7FB3C8]/10 py-16 md:py-24">
            <div className="px-4 md:px-20 max-w-[1280px] mx-auto text-center">
                <span className="text-[#FF914D] font-bold uppercase tracking-widest text-sm mb-4 block">Conservation First</span>
                <h2 className="text-3xl md:text-4xl font-bold font-display text-[#5a3e2a] mb-6">Why Understanding Yala Matters</h2>
                <p className="text-[#5a5a5a] max-w-2xl mx-auto text-lg mb-12">
                    Yala is more than a tourist destination; it is a critical sanctuary for biodiversity. Understanding the delicate balance of this ecosystem is key to its survival.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                    <div className="bg-white p-8 rounded-xl shadow-sm border border-white/50 hover:border-[#7FB3C8]/50 transition-colors">
                        <div className="size-12 bg-[#5a3e2a]/10 rounded-full flex items-center justify-center text-[#5a3e2a] mb-6">
                            <MdForest   className="text-3xl" />
                        </div>
                        <h3 className="text-xl font-bold text-[#1d1815] mb-3">Ecosystem Balance</h3>
                        <p className="text-[#5a5a5a] text-sm leading-relaxed">From the smallest insects to the largest tuskers, every species plays a role. Learn how the dry season shapes the forest life.</p>
                    </div>
                    <div className="bg-white p-8 rounded-xl shadow-sm border border-white/50 hover:border-[#7FB3C8]/50 transition-colors">
                        <div className="size-12 bg-[#FF914D]/10 rounded-full flex items-center justify-center text-[#FF914D] mb-6">
                            <MdPets className="text-3xl" />
                        </div>
                        <h3 className="text-xl font-bold text-[#1d1815] mb-3">Leopard Conservation</h3>
                        <p className="text-[#5a5a5a] text-sm leading-relaxed">Protecting the 'Kotiya'. We dive into the conservation efforts that help maintain the world's highest leopard density.</p>
                    </div>
                    <div className="bg-white p-8 rounded-xl shadow-sm border border-white/50 hover:border-[#7FB3C8]/50 transition-colors">
                        <div className="size-12 bg-[#7FB3C8]/20 rounded-full flex items-center justify-center text-[#2d5c6f] mb-6">
                            <MdTravelExplore className="text-3xl" />
                        </div>
                        <h3 className="text-xl font-bold text-[#1d1815] mb-3">Responsible Impact</h3>
                        <p className="text-[#5a5a5a] text-sm leading-relaxed">Your visit counts. A portion of responsible tourism revenue goes directly into park maintenance and anti-poaching efforts.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

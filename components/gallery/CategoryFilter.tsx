import React from 'react';

export default function CategoryFilter() {
    return (
        <div className="sticky top-[64px] z-40 bg-[#f7f7f6]/95 backdrop-blur shadow-sm border-y border-[#5A3E2B]/10 py-4">
            <div className="max-w-[1440px] mx-auto px-4 md:px-10">
                <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-1 md:pb-0 items-center md:justify-center no-scrollbar">
                    <button className="whitespace-nowrap cursor-pointer px-5 py-2 rounded-full bg-[#5a3e2a] text-white text-sm font-medium shadow-md transition-all hover:bg-[#4a3222]">All</button>
                    <button className="whitespace-nowrap cursor-pointer px-5 py-2 rounded-full bg-white text-[#2E1F14] border border-[#5A3E2B]/20 text-sm font-medium hover:bg-[#5a3e2a] hover:text-white hover:border-[#5a3e2a] transition-all">Leopards</button>
                    <button className="whitespace-nowrap cursor-pointer px-5 py-2 rounded-full bg-white text-[#2E1F14] border border-[#5A3E2B]/20 text-sm font-medium hover:bg-[#5a3e2a] hover:text-white hover:border-[#5a3e2a] transition-all">Elephants</button>
                    <button className="whitespace-nowrap cursor-pointer px-5 py-2 rounded-full bg-white text-[#2E1F14] border border-[#5A3E2B]/20 text-sm font-medium hover:bg-[#5a3e2a] hover:text-white hover:border-[#5a3e2a] transition-all">Birds</button>
                    <button className="whitespace-nowrap cursor-pointer px-5 py-2 rounded-full bg-white text-[#2E1F14] border border-[#5A3E2B]/20 text-sm font-medium hover:bg-[#5a3e2a] hover:text-white hover:border-[#5a3e2a] transition-all">Other Mammals</button>
                    <button className="whitespace-nowrap cursor-pointer px-5 py-2 rounded-full bg-white text-[#2E1F14] border border-[#5A3E2B]/20 text-sm font-medium hover:bg-[#5a3e2a] hover:text-white hover:border-[#5a3e2a] transition-all">Reptiles & Amphibians</button>
                    <button className="whitespace-nowrap cursor-pointer px-5 py-2 rounded-full bg-white text-[#2E1F14] border border-[#5A3E2B]/20 text-sm font-medium hover:bg-[#5a3e2a] hover:text-white hover:border-[#5a3e2a] transition-all">Landscapes</button>
                    <button className="whitespace-nowrap cursor-pointer px-5 py-2 rounded-full bg-white text-[#2E1F14] border border-[#5A3E2B]/20 text-sm font-medium hover:bg-[#5a3e2a] hover:text-white hover:border-[#5a3e2a] transition-all">Ancient Sites</button>
                    <button className="whitespace-nowrap cursor-pointer px-5 py-2 rounded-full bg-white text-[#2E1F14] border border-[#5A3E2B]/20 text-sm font-medium hover:bg-[#5a3e2a] hover:text-white hover:border-[#5a3e2a] transition-all">Videos</button>
                </div>
            </div>
        </div>
    );
}

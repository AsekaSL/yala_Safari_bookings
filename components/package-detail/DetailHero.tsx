import { Badge, PackageDetail } from '@/types';
import Link from 'next/link';
import React from 'react';
import { MdGroup, MdSchedule } from 'react-icons/md';

interface DetailHeroProps {
    pkg: PackageDetail;
}

export default function DetailHero({ pkg }: DetailHeroProps) {
    return (
        <div className="relative w-full">
            <div
                className="relative flex min-h-[500px] md:min-h-[60vh] flex-col gap-6 bg-cover bg-center bg-no-repeat items-center justify-center px-4 pb-12 md:px-20 md:pb-20"
                style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.7) 100%), url(${pkg.heroImage})` }}
            >
                <div className="flex flex-col gap-4 text-center max-w-[900px] animate-fade-in-up mt-10">
                    <div className="flex flex-wrap justify-center gap-2">
                        {
                            pkg.badge && 
                            <span className="bg-[#FF914D] text-white font-bold uppercase tracking-widest text-xs px-3 py-1 rounded-full">{pkg.badge && pkg.badge[0]}</span>
                        }
                        
                        <span className="bg-white/20 backdrop-blur-md text-white font-bold uppercase tracking-widest text-xs px-3 py-1 rounded-full border border-white/30">{pkg.durationCategory} Safari</span>
                    </div>
                    <h1 className="text-white text-3xl font-black font-display leading-tight tracking-[-0.02em] md:text-5xl lg:text-6xl drop-shadow-lg">
                        {pkg.title}
                    </h1>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 mt-2 text-white/90">
                        <div className="flex items-center gap-2">
                            <MdSchedule className="text-[#FF914D] text-3xl" />
                            <span className="text-lg font-medium">{pkg.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <MdGroup className="text-[#FF914D] text-3xl" />
                            <span className="text-lg font-medium">{pkg.jeepType}</span>
                        </div>
                    </div>
                    <div className="mt-8 flex flex-col items-center gap-4">
                        <div className="flex items-baseline gap-2">
                            <span className="text-white text-4xl md:text-5xl font-bold font-display tracking-tight">${pkg.pricingPerPerson ? pkg.pricingPerPerson[0].price : pkg.price.jeep}</span>
                            <span className="text-white/80 text-lg">/ {pkg.pricingPerPerson ? 'person' : 'jeep'} ( {pkg.packageCategory})</span>
                        </div>
                        <p className="text-white/60 text-sm italic">*Price decreases for larger groups</p>
                        <button className="mt-4 flex min-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-14 px-8 bg-[#5a3e2a] hover:bg-[#4a3222] text-white text-lg font-bold leading-normal tracking-[0.015em] transition-all shadow-xl hover:translate-y-[-2px] border-2 border-[#5a3e2a]">
                            <Link href='/safari-calculator'>
                                <span className="truncate">Book This Safari</span>
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

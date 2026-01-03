import React from 'react';

export default function DetailHero() {
    return (
        <div className="relative w-full">
            <div
                className="relative flex min-h-[500px] md:min-h-[60vh] flex-col gap-6 bg-cover bg-center bg-no-repeat items-center justify-center px-4 pb-12 md:px-20 md:pb-20"
                style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.7) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBp5Pnks2ALayH82SkYI7XaLFAQaZkGYCefpmSZEN6KrFpbiREg0Er-rL2TRkqfWK-UYKOZbVe6hqOZRoJzkc5v4m9OcL1MkhAkVlbxLWMJfSrMtT0GsW37C1xwJ0TMQJLwM_2OxBWCeDjsTBQ75dqAbXodFsag61YsyNgdFOq1SYBmpgA75uEiYWcWIWITrHxatjll3iwCwDqClat0_p9ztKDRD7ckHti3ZpPckpdJe1Ou3ZdUjBXB2YjplYR7kXCf0aH1EJPR-_Bj")' }}
            >
                <div className="flex flex-col gap-4 text-center max-w-[900px] animate-fade-in-up mt-10">
                    <div className="flex flex-wrap justify-center gap-2">
                        <span className="bg-accent text-white font-bold uppercase tracking-widest text-xs px-3 py-1 rounded-full">Most Popular</span>
                        <span className="bg-white/20 backdrop-blur-md text-white font-bold uppercase tracking-widest text-xs px-3 py-1 rounded-full border border-white/30">Morning Safari</span>
                    </div>
                    <h1 className="text-white text-3xl font-black font-display leading-tight tracking-[-0.02em] md:text-5xl lg:text-6xl drop-shadow-lg">
                        Private All-Inclusive Morning Safari
                    </h1>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 mt-2 text-white/90">
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-accent">schedule</span>
                            <span className="text-lg font-medium">5 Hours (5:00 AM - 10:00 AM)</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-accent">group</span>
                            <span className="text-lg font-medium">Private Jeep (Up to 6 Pax)</span>
                        </div>
                    </div>
                    <div className="mt-8 flex flex-col items-center gap-4">
                        <div className="flex items-baseline gap-2">
                            <span className="text-white text-4xl md:text-5xl font-bold font-display tracking-tight">$150</span>
                            <span className="text-white/80 text-lg">/ person (All Inclusive)</span>
                        </div>
                        <p className="text-white/60 text-sm italic">*Price decreases for larger groups</p>
                        <button className="mt-4 flex min-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-14 px-8 bg-primary hover:bg-[#4a3222] text-white text-lg font-bold leading-normal tracking-[0.015em] transition-all shadow-xl hover:translate-y-[-2px] border-2 border-primary">
                            <span className="truncate">Book This Safari</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

import Link from 'next/link';
import React from 'react';

export default function HeroSection() {
    return (
        <div className="relative w-full">
            <div className="layout-container flex h-full grow flex-col">
                <div className="flex flex-1 justify-center">
                    <div className="layout-content-container flex flex-col w-full flex-1">
                        <div
                            className="relative flex min-h-[750px] md:min-h-[80vh] flex-col gap-6 bg-cover bg-center bg-no-repeat items-start justify-end px-4 pb-12 md:px-20 md:pb-20"
                            style={{
                                backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.6) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAj_W8k9MLHpZTXZyCCTy0PmtbEcbDfN9TqbPDPoTQ1W3b8_hJdf9eGkDlp4MY3kv6XJDOnZRu66U5BP0yCzYQD72-aCgQyKDgzs87L4C0DFpcLD5UFB2fEVjllx6UDygrbGLH3Tg5rmIsdpsdfPVUW4YBRHyBBFT6lffeBzygSaY_o-Rf0hUe7kkXBFB1wsVJn4t9iFopH7MyTNJPM31XXC7jEhHPrnuaNCZiGZWKIGV8ABVRCx359GuI5RGxEs9yCaH-gRM2j-ijy")'
                            }}
                        >
                            <div className="flex flex-col gap-4 text-left max-w-[800px] animate-fade-in-up">
                                <span className="text-[#FF914D] font-bold uppercase tracking-widest text-sm md:text-base">Welcome to the Jungle</span>
                                <h1 className="text-white text-4xl font-black font-display leading-tight tracking-[-0.02em] md:text-6xl lg:text-7xl drop-shadow-sm">
                                    Unveiling the Wild Heart of Sri Lanka
                                </h1>
                                <h2 className="text-gray-200 text-base font-normal leading-relaxed md:text-xl max-w-[600px] drop-shadow-sm">
                                    Your Ultimate Safari & Wildlife Guide to Yala National Park. Discover the highest leopard density in the world.
                                </h2>
                            </div>
                            <div className="flex flex-wrap gap-4 mt-4">
                                <Link href='/packages'>
                                    <button className="flex min-w-[140px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-8 bg-[#5a3e2a] hover:bg-[#4a3222] text-white text-base font-bold leading-normal tracking-[0.015em] transition-all shadow-lg hover:translate-y-[-2px]">
                                        <span className="truncate">Book a Safari</span>
                                    </button>
                                </Link>
                                <Link href='/visitor-guide'> 
                                    <button className="flex min-w-[140px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-8 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white text-base font-bold leading-normal tracking-[0.015em] transition-all hover:translate-y-[-2px]">
                                        <span className="truncate">Explore Wildlife</span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

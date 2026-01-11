import React from 'react';
import { MdArrowForward } from 'react-icons/md';

export default function FeaturedArticle() {
    return (
        <div className="py-12 md:py-20 px-4 md:px-20 max-w-[1280px] mx-auto w-full">
            <div className="relative w-full rounded-2xl overflow-hidden bg-white shadow-xl group cursor-pointer border border-[#e3e0de]">
                <div className="grid grid-cols-1 md:grid-cols-2 min-h-[500px]">
                    <div className="relative h-64 md:h-full overflow-hidden">
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAj_W8k9MLHpZTXZyCCTy0PmtbEcbDfN9TqbPDPoTQ1W3b8_hJdf9eGkDlp4MY3kv6XJDOnZRu66U5BP0yCzYQD72-aCgQyKDgzs87L4C0DFpcLD5UFB2fEVjllx6UDygrbGLH3Tg5rmIsdpsdfPVUW4YBRHyBBFT6lffeBzygSaY_o-Rf0hUe7kkXBFB1wsVJn4t9iFopH7MyTNJPM31XXC7jEhHPrnuaNCZiGZWKIGV8ABVRCx359GuI5RGxEs9yCaH-gRM2j-ijy")' }}
                        ></div>
                    </div>
                    <div className="p-8 md:p-16 flex flex-col justify-center gap-6 bg-white relative">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#5a3e2a] to-[#FF914D]"></div>
                        <div className="flex items-center gap-3">
                            <span className="px-3 py-1 bg-[#5a3e2a]/10 text-[#5a3e2a] text-xs font-bold uppercase tracking-wider rounded-md">Latest Sightings</span>
                            <span className="text-[#7e746d] text-xs font-medium">Oct 24, 2023</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold font-display text-[#1d1815] leading-tight group-hover:text-[#5a3e2a] transition-colors">
                            Sri Lankan Leopard: Apex Predator of Yala
                        </h2>
                        <p className="text-[#5a5a5a] text-lg leading-relaxed">
                            With the highest density of leopards in the world, Block 1 offers unparalleled opportunities to spot Panthera pardus kotiya. Learn about their behavior, territories, and how to spot them in the dense scrub.
                        </p>
                        <div className="flex items-center gap-2 text-[#FF914D] font-bold mt-2 group-hover:translate-x-2 transition-transform">
                            <span>Read Article</span>
                            <MdArrowForward className='text-sm' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

import React from 'react';

export default function BlogHero() {
    return (
        <div className="relative w-full">
            <div
                className="relative flex min-h-[500px] md:min-h-[60vh] flex-col gap-6 bg-cover bg-center bg-no-repeat items-center justify-center px-4 py-20 text-center"
                style={{ backgroundImage: 'linear-gradient(rgba(46, 31, 20, 0.4), rgba(46, 31, 20, 0.7)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAj_W8k9MLHpZTXZyCCTy0PmtbEcbDfN9TqbPDPoTQ1W3b8_hJdf9eGkDlp4MY3kv6XJDOnZRu66U5BP0yCzYQD72-aCgQyKDgzs87L4C0DFpcLD5UFB2fEVjllx6UDygrbGLH3Tg5rmIsdpsdfPVUW4YBRHyBBFT6lffeBzygSaY_o-Rf0hUe7kkXBFB1wsVJn4t9iFopH7MyTNJPM31XXC7jEhHPrnuaNCZiGZWKIGV8ABVRCx359GuI5RGxEs9yCaH-gRM2j-ijy")' }}
            >
                <div className="flex flex-col gap-4 max-w-[900px] animate-fade-in-up">
                    <span className="text-[#FF914D] font-bold uppercase tracking-widest text-sm md:text-base bg-black/20 backdrop-blur-sm px-4 py-1 rounded-full self-center border border-white/10">Official Blog</span>
                    <h1 className="text-white text-4xl font-bold font-display leading-tight tracking-tight md:text-6xl drop-shadow-lg">
                        Yala National Park Blog
                    </h1>
                    <p className="text-white/90 text-lg md:text-2xl font-light font-display max-w-[800px] mx-auto drop-shadow-md">
                        Latest Sightings, Stories & Guides from Sri Lanka’s Wild Heart
                    </p>
                    <p className="text-gray-200 text-sm md:text-lg leading-relaxed max-w-[650px] mx-auto mt-2">
                        Dive deeper into the wild. Discover real-time sightings, expert guides, conservation stories, and unforgettable safari experiences from Yala National Park.
                    </p>
                </div>
            </div>
        </div>
    );
}

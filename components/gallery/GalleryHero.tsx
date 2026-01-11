import React from 'react';

export default function GalleryHero() {
    return (
        <div className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: 'linear-gradient(rgba(46, 31, 20, 0.3) 0%, rgba(46, 31, 20, 0.7) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAj_W8k9MLHpZTXZyCCTy0PmtbEcbDfN9TqbPDPoTQ1W3b8_hJdf9eGkDlp4MY3kv6XJDOnZRu66U5BP0yCzYQD72-aCgQyKDgzs87L4C0DFpcLD5UFB2fEVjllx6UDygrbGLH3Tg5rmIsdpsdfPVUW4YBRHyBBFT6lffeBzygSaY_o-Rf0hUe7kkXBFB1wsVJn4t9iFopH7MyTNJPM31XXC7jEhHPrnuaNCZiGZWKIGV8ABVRCx359GuI5RGxEs9yCaH-gRM2j-ijy")' }}
            ></div>
            <div className="absolute inset-0 flex items-center justify-center text-center px-4">
                <div className="max-w-4xl space-y-6">
                    <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold font-display tracking-tight drop-shadow-lg">
                        Yala National Park Photo & Video Gallery
                    </h1>
                    <p className="text-gray-100 text-lg md:text-2xl font-light tracking-wide drop-shadow-md">
                        A Visual Journey into the Heart of Yala’s Wilderness
                    </p>
                    <p className="text-[#FF914D] text-sm md:text-base font-medium max-w-2xl mx-auto uppercase tracking-widest mt-4">
                        Experience the untamed beauty through stunning photography and immersive videos
                    </p>
                </div>
            </div>
        </div>
    );
}

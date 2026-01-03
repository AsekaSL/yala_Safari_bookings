import React from 'react';

export default function PackagesHero() {
    return (
        <div className="relative w-full">
            <div className="layout-container flex h-full grow flex-col">
                <div className="flex flex-1 justify-center">
                    <div className="layout-content-container flex flex-col w-full flex-1">
                        <div
                            className="relative flex min-h-[500px] md:min-h-[60vh] flex-col gap-6 bg-cover bg-center bg-no-repeat items-center justify-center px-4 pb-12 md:px-20 md:pb-20 text-center"
                            style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAj_W8k9MLHpZTXZyCCTy0PmtbEcbDfN9TqbPDPoTQ1W3b8_hJdf9eGkDlp4MY3kv6XJDOnZRu66U5BP0yCzYQD72-aCgQyKDgzs87L4C0DFpcLD5UFB2fEVjllx6UDygrbGLH3Tg5rmIsdpsdfPVUW4YBRHyBBFT6lffeBzygSaY_o-Rf0hUe7kkXBFB1wsVJn4t9iFopH7MyTNJPM31XXC7jEhHPrnuaNCZiGZWKIGV8ABVRCx359GuI5RGxEs9yCaH-gRM2j-ijy")' }}
                        >
                            <div className="flex flex-col gap-4 max-w-[900px]">
                                <h1 className="text-white text-4xl font-black font-display leading-tight tracking-[-0.02em] md:text-6xl lg:text-7xl drop-shadow-md">
                                    Yala Safari Packages – 2025
                                </h1>
                                <h2 className="text-gray-100 text-lg font-medium leading-relaxed md:text-2xl drop-shadow-sm">
                                    Choose the perfect safari experience for your adventure
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

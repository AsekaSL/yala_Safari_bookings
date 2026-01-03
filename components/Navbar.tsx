import React from 'react';

export default function Navbar() {
    return (
        <div className="sticky top-0 z-50 bg-white/10 backdrop-blur-sm border-b border-[#f3f2f1]">
            <div className="layout-container flex h-full grow flex-col">
                <div className="px-4 md:px-10 flex flex-1 justify-center py-0">
                    <div className="layout-content-container flex flex-col max-w-[1280px] flex-1">
                        <header className="flex items-center justify-between whitespace-nowrap py-3">
                            <div className="flex items-center gap-4 text-primary">
                                <div className="size-8 flex items-center justify-center text-primary">
                                    <span className="material-symbols-outlined !text-3xl">landscape</span>
                                </div>
                                <h2 className="text-primary text-xl font-bold font-display leading-tight tracking-[-0.015em]">Yala Safari Bookings</h2>
                            </div>
                            <div className="hidden md:flex flex-1 justify-end gap-8">
                                <nav className="flex items-center gap-9">
                                    <a className="text-[#161413] hover:text-primary text-sm font-medium leading-normal transition-colors" href="#packages">Safaris</a>
                                    <a className="text-[#161413] hover:text-primary text-sm font-medium leading-normal transition-colors" href="#experience">Experience</a>
                                    <a className="text-[#161413] hover:text-primary text-sm font-medium leading-normal transition-colors" href="#planning">Plan Your Trip</a>
                                    <a className="text-[#161413] hover:text-primary text-sm font-medium leading-normal transition-colors" href="#contact">Contact</a>
                                </nav>
                                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-6 bg-primary hover:bg-[#4a3222] text-white text-sm font-bold leading-normal tracking-[0.015em] transition-colors shadow-sm">
                                    <span className="truncate">Book a Safari</span>
                                </button>
                            </div>
                            <div className="md:hidden text-[#161413]">
                                <span className="material-symbols-outlined cursor-pointer">menu</span>
                            </div>
                        </header>
                    </div>
                </div>
            </div>
        </div>
    );
}

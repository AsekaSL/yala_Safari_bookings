import Link from 'next/link';
import React from 'react';

export default function CalculatorHero() {
    return (
        <div className="max-w-[1280px] mx-auto mb-8 md:mb-12 text-center md:text-left">
            <div className="flex items-center gap-2 text-sm text-[#7e746d] mb-4 justify-center md:justify-start">
                <Link className="hover:text-primary" href="/">Home</Link>
                <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                <span className="text-primary font-medium">Safari Booking Form</span>
            </div>
            <h1 className="text-primary text-3xl md:text-4xl lg:text-5xl font-bold font-display leading-tight">Safari Booking Calculator</h1>
            <p className="text-[#7e746d] mt-3 text-lg max-w-2xl">Customize your wildlife adventure. Get live pricing and secure your jeep instantly.</p>
        </div>
    );
}

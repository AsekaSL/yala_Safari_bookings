import Link from 'next/link';
import React from 'react';
import { MdCalendarMonth, MdPhoto, MdPhotoCamera } from 'react-icons/md';

export default function GalleryCTA() {
    return (
        <div className="bg-[#f7f7f6] py-20 px-4 md:px-10 border-t border-[#5A3E2B]/10">
            <div className="max-w-[1280px] mx-auto text-center">
                <h2 className="text-4xl font-display font-bold text-[#5a3e2a] mb-4">Inspired by What You See?</h2>
                <p className="text-[#2E1F14] text-xl font-light mb-10 max-w-2xl mx-auto">
                    The photos are just the beginning. The real magic happens when you're there, breathing the wild air.
                </p>
                <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6">
                    <Link href="/packages" className="flex items-center justify-center gap-2 bg-[#FF914D] hover:bg-[#e67e3d] text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 text-lg">
                        <MdCalendarMonth className="text-white text-3xl" />
                        Book Your Yala Safari Now
                    </Link>
                    <button className="flex items-center justify-center gap-2 bg-white border border-[#5a3e2a] text-[#5a3e2a] hover:bg-[#5a3e2a]/5 font-bold py-4 px-8 rounded-lg shadow-sm hover:shadow-md transition-all">
                        <MdPhotoCamera className="text-[#5a3e2a] text-3xl" />
                        Learn Wildlife Photography
                    </button>
                    <Link href="/packages" className="flex items-center justify-center gap-2 bg-transparent text-[#5a3e2a] hover:text-[#FF914D] font-semibold py-4 px-6 rounded-lg transition-colors underline decoration-2 underline-offset-4">
                        Explore Safari Packages
                    </Link>
                </div>
            </div>
        </div>
    );
}

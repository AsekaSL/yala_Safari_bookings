import Link from 'next/link';
import React from 'react';

export default function GuideCTA() {
    return (
        <div className="bg-[#5a3e2a] text-white py-16 relative overflow-hidden">
            <div className="layout-container flex h-full grow flex-col relative z-10">
                <div className="px-4 md:px-20 flex flex-1 justify-center">
                    <div className="layout-content-container flex flex-col max-w-[800px] flex-1 text-center items-center gap-8">
                        <h2 className="text-3xl md:text-4xl font-bold font-display">Ready to Plan Your Safari?</h2>
                        <p className="text-gray-200 text-lg leading-relaxed max-w-2xl">
                            Now that you have the essential information, explore our packages or get in touch with our experts to craft your perfect itinerary.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                            <Link href="/packages" className="cursor-pointer flex items-center justify-center rounded-lg h-12 px-8 bg-[#FF914D] hover:bg-[#ff8030] text-white text-base font-bold transition-all shadow-lg hover:translate-y-[-2px]">
                                View Safari Packages
                            </Link>
                            <Link href="/safari-calculator" className="cursor-pointer flex items-center justify-center rounded-lg h-12 px-8 bg-white text-[#5a3e2a] hover:bg-gray-100 text-base font-bold transition-all shadow-lg hover:translate-y-[-2px]">
                                Book a Jeep Safari
                            </Link>
                            <Link href="/contact" className="cursor-pointer flex items-center justify-center rounded-lg h-12 px-8 border border-white/30 hover:bg-white/10 text-white text-base font-bold transition-all">
                                Contact Our Experts
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

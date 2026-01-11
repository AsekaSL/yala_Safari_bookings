import Link from 'next/link';
import React from 'react';
import { MdExplore } from 'react-icons/md';

export default function ContactCTA() {
    return (
        <div className="bg-[#FFF5E1] py-16 border-t border-[#e3e0de]">
            <div className="layout-container flex h-full grow flex-col">
                <div className="px-4 md:px-20 flex flex-1 justify-center">
                    <div className="layout-content-container flex flex-col max-w-[1280px] flex-1">
                        <div className="flex flex-col items-center text-center gap-6 max-w-2xl mx-auto">
                            <MdExplore className="text-4xl text-[#5a3e2a]/40" />
                            <h2 className="text-[#5a3e2a] text-3xl font-bold font-display">Ready to Start Planning?</h2>
                            <p className="text-[#5a5a5a] text-lg leading-relaxed">
                                Explore our curated safari packages or simply drop us a message above if you need tailored advice from our experts.
                            </p>
                            <Link className="mt-2 inline-flex min-w-[140px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-8 bg-white border border-[#e3e0de] hover:border-[#5a3e2a] hover:text-[#5a3e2a] text-[#5a5a5a] text-base font-bold leading-normal tracking-[0.015em] transition-all shadow-sm" href="/packages">
                                View Safari Packages
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

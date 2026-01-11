import Link from 'next/link';
import React from 'react';

export default function BlogCTA() {
    return (
        <div className="bg-white py-16 text-center border-t border-[#f3f2f1]">
            <div className="px-4 md:px-20 max-w-[1280px] mx-auto">
                <h2 className="text-3xl font-bold font-display text-[#5a3e2a] mb-4">Planning a Visit to Yala?</h2>
                <p className="text-[#5a5a5a] max-w-xl mx-auto mb-8">Ready to witness these stories in real life? Let us help you plan the perfect, ethical safari adventure.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/packages" className="px-8 py-3 bg-[#5a3e2a] text-white font-bold rounded-lg hover:bg-[#4a3222] transition-colors shadow-lg">
                        View Safari Packages
                    </Link>
                    <Link href="/contact" className="px-8 py-3 bg-white border border-[#5a3e2a] text-[#5a3e2a] font-bold rounded-lg hover:bg-[#5a3e2a]/5 transition-colors">
                        Contact Our Experts
                    </Link>
                </div>
            </div>
        </div>
    );
}

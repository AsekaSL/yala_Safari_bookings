import Link from 'next/link';
import React from 'react';

export default function GalleryCTA() {
    return (
        <div className="bg-background-light py-20 px-4 md:px-10 border-t border-[#5A3E2B]/10">
            <div className="max-w-[1280px] mx-auto text-center">
                <h2 className="text-4xl font-display font-bold text-primary mb-4">Inspired by What You See?</h2>
                <p className="text-desert-brown text-xl font-light mb-10 max-w-2xl mx-auto">
                    The photos are just the beginning. The real magic happens when you're there, breathing the wild air.
                </p>
                <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6">
                    <Link href="/packages" className="flex items-center justify-center gap-2 bg-accent hover:bg-[#e67e3d] text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 text-lg">
                        <span className="material-symbols-outlined">calendar_month</span>
                        Book Your Yala Safari Now
                    </Link>
                    <button className="flex items-center justify-center gap-2 bg-white border border-primary text-primary hover:bg-primary/5 font-bold py-4 px-8 rounded-lg shadow-sm hover:shadow-md transition-all">
                        <span className="material-symbols-outlined">photo_camera</span>
                        Learn Wildlife Photography
                    </button>
                    <Link href="/packages" className="flex items-center justify-center gap-2 bg-transparent text-primary hover:text-accent font-semibold py-4 px-6 rounded-lg transition-colors underline decoration-2 underline-offset-4">
                        Explore Safari Packages
                    </Link>
                </div>
            </div>
        </div>
    );
}

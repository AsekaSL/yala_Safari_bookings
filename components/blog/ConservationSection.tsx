import React from 'react';

export default function ConservationSection() {
    return (
        <div className="bg-sky-blue/10 py-16 md:py-24">
            <div className="px-4 md:px-20 max-w-[1280px] mx-auto text-center">
                <span className="text-accent font-bold uppercase tracking-widest text-sm mb-4 block">Conservation First</span>
                <h2 className="text-3xl md:text-4xl font-bold font-display text-primary mb-6">Why Understanding Yala Matters</h2>
                <p className="text-[#5a5a5a] max-w-2xl mx-auto text-lg mb-12">
                    Yala is more than a tourist destination; it is a critical sanctuary for biodiversity. Understanding the delicate balance of this ecosystem is key to its survival.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                    <div className="bg-white p-8 rounded-xl shadow-sm border border-white/50 hover:border-sky-blue/50 transition-colors">
                        <div className="size-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
                            <span className="material-symbols-outlined">forest</span>
                        </div>
                        <h3 className="text-xl font-bold text-desert-brown mb-3">Ecosystem Balance</h3>
                        <p className="text-[#5a5a5a] text-sm leading-relaxed">From the smallest insects to the largest tuskers, every species plays a role. Learn how the dry season shapes the forest life.</p>
                    </div>
                    <div className="bg-white p-8 rounded-xl shadow-sm border border-white/50 hover:border-sky-blue/50 transition-colors">
                        <div className="size-12 bg-accent/10 rounded-full flex items-center justify-center text-accent mb-6">
                            <span className="material-symbols-outlined">pets</span>
                        </div>
                        <h3 className="text-xl font-bold text-desert-brown mb-3">Leopard Conservation</h3>
                        <p className="text-[#5a5a5a] text-sm leading-relaxed">Protecting the 'Kotiya'. We dive into the conservation efforts that help maintain the world's highest leopard density.</p>
                    </div>
                    <div className="bg-white p-8 rounded-xl shadow-sm border border-white/50 hover:border-sky-blue/50 transition-colors">
                        <div className="size-12 bg-sky-blue/20 rounded-full flex items-center justify-center text-[#2d5c6f] mb-6">
                            <span className="material-symbols-outlined">travel_explore</span>
                        </div>
                        <h3 className="text-xl font-bold text-desert-brown mb-3">Responsible Impact</h3>
                        <p className="text-[#5a5a5a] text-sm leading-relaxed">Your visit counts. A portion of responsible tourism revenue goes directly into park maintenance and anti-poaching efforts.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

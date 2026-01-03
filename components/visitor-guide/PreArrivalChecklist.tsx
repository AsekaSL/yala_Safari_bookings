import React from 'react';

export default function PreArrivalChecklist() {
    return (
        <div className="bg-background-cream py-16">
            <div className="layout-container flex flex-col items-center">
                <div className="max-w-[1280px] w-full px-4 md:px-10">
                    <div className="mb-10 text-center">
                        <h2 className="text-primary text-3xl font-bold font-display mb-4">Before You Go: Pre-Arrival Checklist</h2>
                        <p className="text-[#5a3e2b]/80 max-w-2xl mx-auto">A few simple preparations can make the difference between a good trip and a great one.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-[#e3e0de] flex flex-col gap-4 hover:-translate-y-1 transition-transform duration-300">
                            <div className="size-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                                <span className="material-symbols-outlined text-2xl">calendar_month</span>
                            </div>
                            <h3 className="font-bold text-lg text-primary">Book in Advance</h3>
                            <p className="text-sm text-[#5a5a5a]">Yala is popular. During peak season (Dec-Apr), jeeps and accommodations fill up weeks ahead. Secure your spot early.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-[#e3e0de] flex flex-col gap-4 hover:-translate-y-1 transition-transform duration-300">
                            <div className="size-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                                <span className="material-symbols-outlined text-2xl">payments</span>
                            </div>
                            <h3 className="font-bold text-lg text-primary">Cash is King</h3>
                            <p className="text-sm text-[#5a5a5a]">Gate fees must often be paid in Cash (LKR). Card machines can be unreliable due to connectivity issues.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-[#e3e0de] flex flex-col gap-4 hover:-translate-y-1 transition-transform duration-300">
                            <div className="size-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                                <span className="material-symbols-outlined text-2xl">block</span>
                            </div>
                            <h3 className="font-bold text-lg text-primary">Annual Closure</h3>
                            <p className="text-sm text-[#5a5a5a]">Block 1 typically closes in September/October for drought recovery. Check current dates before planning.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-[#e3e0de] flex flex-col gap-4 hover:-translate-y-1 transition-transform duration-300">
                            <div className="size-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                                <span className="material-symbols-outlined text-2xl">map</span>
                            </div>
                            <h3 className="font-bold text-lg text-primary">Explore Alternatives</h3>
                            <p className="text-sm text-[#5a5a5a]">During peak times, consider Block 5 or 6 for a quieter experience with excellent wildlife opportunities.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

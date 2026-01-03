import React from 'react';

export default function SafariTimeline() {
    return (
        <div>
            <h3 className="text-2xl font-bold font-display text-primary mb-8">Safari Timeline</h3>
            <div className="relative border-l-2 border-primary/20 ml-3 md:ml-6 space-y-10 pb-4">
                <div className="relative pl-8 md:pl-12 group">
                    <div className="absolute -left-[9px] top-1 h-5 w-5 rounded-full border-4 border-background-light bg-primary"></div>
                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                        <span className="font-bold text-accent text-lg w-24 shrink-0">05:00 AM</span>
                        <h4 className="font-bold text-[#161413] text-lg">Hotel Pickup</h4>
                    </div>
                    <p className="text-[#5a5a5a] text-sm mt-1">We pick you up from your hotel in Tissamaharama or Yala in our rugged safari jeep.</p>
                </div>
                <div className="relative pl-8 md:pl-12 group">
                    <div className="absolute -left-[9px] top-1 h-5 w-5 rounded-full border-4 border-background-light bg-primary"></div>
                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                        <span className="font-bold text-accent text-lg w-24 shrink-0">06:00 AM</span>
                        <h4 className="font-bold text-[#161413] text-lg">Park Entry</h4>
                    </div>
                    <p className="text-[#5a5a5a] text-sm mt-1">Gates open. We enter early to be the first on the tracks for fresh leopard prints.</p>
                </div>
                <div className="relative pl-8 md:pl-12 group">
                    <div className="absolute -left-[9px] top-1 h-5 w-5 rounded-full border-4 border-background-light bg-sky-blue"></div>
                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                        <span className="font-bold text-accent text-lg w-24 shrink-0">06:30 AM</span>
                        <h4 className="font-bold text-[#161413] text-lg">Golden Hour Tracking</h4>
                    </div>
                    <p className="text-[#5a5a5a] text-sm mt-1">The best light for photography. We search for leopards, sloth bears, and active birdlife.</p>
                </div>
                <div className="relative pl-8 md:pl-12 group">
                    <div className="absolute -left-[9px] top-1 h-5 w-5 rounded-full border-4 border-background-light bg-primary"></div>
                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                        <span className="font-bold text-accent text-lg w-24 shrink-0">09:00 AM</span>
                        <h4 className="font-bold text-[#161413] text-lg">Jungle Breakfast</h4>
                    </div>
                    <p className="text-[#5a5a5a] text-sm mt-1">A break at the designated beach area (Patangala) to stretch legs and enjoy a picnic meal.</p>
                </div>
                <div className="relative pl-8 md:pl-12 group">
                    <div className="absolute -left-[9px] top-1 h-5 w-5 rounded-full border-4 border-background-light bg-primary"></div>
                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                        <span className="font-bold text-accent text-lg w-24 shrink-0">10:00 AM</span>
                        <h4 className="font-bold text-[#161413] text-lg">Exit & Drop-off</h4>
                    </div>
                    <p className="text-[#5a5a5a] text-sm mt-1">Return to your hotel just as the mid-day heat sets in.</p>
                </div>
            </div>
        </div>
    );
}

import React from 'react';
import { MdSchedule, MdSunny, MdWbTwighlight } from 'react-icons/md';

export default function SafariTimings() {
    return (
        <div className="bg-white py-16">
            <div className="layout-container flex flex-col items-center">
                <div className="max-w-[1280px] w-full px-4 md:px-10">
                    <div className="text-center mb-12">
                        <h2 className="text-[#5a3e2a] text-3xl font-bold font-display">Safari Experience & Timings</h2>
                        <p className="text-gray-600">Choose the right time for your adventure.</p>
                    </div>
                    <div className="relative">
                        <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-gray-200 hidden md:block"></div>
                        <div className="space-y-12">
                            <div className="flex flex-col md:flex-row items-center gap-8 relative">
                                <div className="md:w-1/2 flex justify-end">
                                    <div className="bg-[#FFF5E1] p-6 rounded-xl border border-[#5a3e2a]/10 max-w-md w-full relative">
                                        <div className="absolute top-6 -right-3 size-6 bg-[#FFF5E1] border-t border-r border-[#5a3e2a]/10 rotate-45 hidden md:block"></div>
                                        <h3 className="text-xl font-bold text-[#5a3e2a] mb-2">Morning Safari</h3>
                                        <div className="flex items-center gap-2 text-[#FF914D] font-bold mb-3">
                                            <MdWbTwighlight className="text-[#FF914D] text-3xl" />
                                            <span>5:30 AM – 10:00 AM</span>
                                        </div>
                                        <p className="text-sm text-gray-700">The park opens at 6:00 AM. This is the best time for spotting leopards and bears as they are active before the heat sets in. Birds are also most active.</p>
                                    </div>
                                </div>
                                <div className="z-10 bg-[#5a3e2a] text-white size-10 rounded-full flex items-center justify-center shrink-0 shadow-lg">1</div>
                                <div className="md:w-1/2 text-left pl-0 md:pl-8">
                                    <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Best For</p>
                                    <p className="font-bold text-gray-800">Active Predators & Birdwatching</p>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row-reverse items-center gap-8 relative">
                                <div className="md:w-1/2 flex justify-start">
                                    <div className="bg-[#FFF5E1] p-6 rounded-xl border border-[#5a3e2a]/10 max-w-md w-full relative">
                                        <div className="absolute top-6 -left-3 size-6 bg-[#FFF5E1] border-b border-l border-[#5a3e2a]/10 rotate-45 hidden md:block"></div>
                                        <h3 className="text-xl font-bold text-[#5a3e2a] mb-2">Afternoon Safari</h3>
                                        <div className="flex items-center gap-2 text-[#FF914D] font-bold mb-3">
                                            <MdSunny className="text-[#FF914D] text-3xl" />
                                            <span>2:30 PM – 6:00 PM</span>
                                        </div>
                                        <p className="text-sm text-gray-700">As the day cools down, animals come to waterholes to drink. Ideal for seeing elephants and crocodiles. The "Golden Hour" light is perfect for photography.</p>
                                    </div>
                                </div>
                                <div className="z-10 bg-[#7FB3C8] text-white size-10 rounded-full flex items-center justify-center shrink-0 shadow-lg">2</div>
                                <div className="md:w-1/2 text-right pr-0 md:pr-8">
                                    <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Best For</p>
                                    <p className="font-bold text-gray-800">Elephants, Waterholes & Sunsets</p>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row items-center gap-8 relative">
                                <div className="md:w-1/2 flex justify-end">
                                    <div className="bg-[#FFF5E1] p-6 rounded-xl border border-[#5a3e2a]/10 max-w-md w-full relative">
                                        <div className="absolute top-6 -right-3 size-6 bg-[#FFF5E1] border-t border-r border-[#5a3e2a]/10 rotate-45 hidden md:block"></div>
                                        <h3 className="text-xl font-bold text-[#5a3e2a] mb-2">Full-Day Safari</h3>
                                        <div className="flex items-center gap-2 text-[#FF914D] font-bold mb-3">
                                            <MdSchedule className="text-[#FF914D] text-3xl" />
                                            <span>5:30 AM – 6:00 PM</span>
                                        </div>
                                        <p className="text-sm text-gray-700">For the serious enthusiast. Includes a break inside the park (usually by the beach) during the midday heat. Maximizes your chances of rare sightings.</p>
                                    </div>
                                </div>
                                <div className="z-10 bg-[#2E1F14] text-white size-10 rounded-full flex items-center justify-center shrink-0 shadow-lg">3</div>
                                <div className="md:w-1/2 text-left pl-0 md:pl-8">
                                    <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Best For</p>
                                    <p className="font-bold text-gray-800">Complete Immersion & Photography</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

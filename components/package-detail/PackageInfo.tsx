import React from 'react';

export default function PackageInfo() {
    return (
        <div className="flex flex-col gap-16">
            <div className="flex flex-col gap-4">
                <h2 className="text-primary text-3xl font-bold font-display">Experience the Golden Hour</h2>
                <p className="text-[#5a5a5a] text-lg leading-relaxed">
                    Our Private All-Inclusive Morning Safari is designed for wildlife enthusiasts who want the best chance of spotting Yala’s elusive leopards. Entering the park as the sun rises, you’ll witness the jungle waking up—a prime time for predator activity. With a private jeep and expert naturalist guide, you can explore at your own pace, lingering at sightings and avoiding the biggest crowds.
                </p>
            </div>
            <div className="bg-white rounded-xl border border-[#e3e0de] p-6 md:p-8 shadow-sm">
                <h3 className="text-2xl font-bold font-display text-primary mb-6">Package Overview</h3>
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-wide text-[#7e746d] mb-4">What's Included</h4>
                        <ul className="flex flex-col gap-3">
                            <li className="flex gap-3 text-[#161413]">
                                <span className="material-symbols-outlined text-green-600 shrink-0">check_circle</span>
                                <span>Private Safari Jeep (Toyota/Mitsubishi)</span>
                            </li>
                            <li className="flex gap-3 text-[#161413]">
                                <span className="material-symbols-outlined text-green-600 shrink-0">check_circle</span>
                                <span>Expert English-Speaking Driver/Guide</span>
                            </li>
                            <li className="flex gap-3 text-[#161413]">
                                <span className="material-symbols-outlined text-green-600 shrink-0">check_circle</span>
                                <span>National Park Entrance Fees & Taxes</span>
                            </li>
                            <li className="flex gap-3 text-[#161413]">
                                <span className="material-symbols-outlined text-green-600 shrink-0">check_circle</span>
                                <span>Picnic Breakfast & Refreshments</span>
                            </li>
                            <li className="flex gap-3 text-[#161413]">
                                <span className="material-symbols-outlined text-green-600 shrink-0">check_circle</span>
                                <span>Free Hotel Pickup/Drop-off (Tissamaharama/Yala area)</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-wide text-[#7e746d] mb-4">What's Not Included</h4>
                        <ul className="flex flex-col gap-3">
                            <li className="flex gap-3 text-[#5a5a5a]">
                                <span className="material-symbols-outlined text-red-400 shrink-0">cancel</span>
                                <span>Tips for Driver/Tracker (Optional)</span>
                            </li>
                            <li className="flex gap-3 text-[#5a5a5a]">
                                <span className="material-symbols-outlined text-red-400 shrink-0">cancel</span>
                                <span>Personal Camera Equipment</span>
                            </li>
                            <li className="flex gap-3 text-[#5a5a5a]">
                                <span className="material-symbols-outlined text-red-400 shrink-0">cancel</span>
                                <span>Transfer from areas outside Yala/Tissa</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

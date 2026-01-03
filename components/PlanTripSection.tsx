'use client';
import React, { useState } from 'react';

export default function PlanTripSection() {
    const [activeTab, setActiveTab] = useState('Best Time to Visit');

    const tabs = [
        {
            name: 'Best Time to Visit', title: 'Seasonality Guide', content: (
                <div className="space-y-4 text-[#5a5a5a]">
                    <p>Yala National Park is open year-round, but the experience varies by season.</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><strong className="text-[#161413]">Feb - July:</strong> Water levels drop, bringing animals to the waterholes. This is the peak season for leopard sightings.</li>
                        <li><strong className="text-[#161413]">Sep - Oct:</strong> The park (Block 1) usually closes for maintenance. We offer safaris in Block 5 and Lunugamwehera during this time.</li>
                        <li><strong className="text-[#161413]">Nov - Jan:</strong> The park is lush and green after monsoon rains. Great for bird watching and photography of vibrant landscapes.</li>
                    </ul>
                </div>
            )
        },
        {
            name: 'Park Fees & Tickets', title: 'Entrance Fees', content: (
                <div className="space-y-4 text-[#5a5a5a]">
                    <p>Park fees are mandatory and paid directly to the Department of Wildlife Conservation.</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Foreign Adult: approx. $25 - $30</li>
                        <li>Foreign Child: approx. $15</li>
                        <li>Service charge and VAT applicable.</li>
                        <li>We can purchase these on your behalf to save time at the gate.</li>
                    </ul>
                </div>
            )
        },
        {
            name: 'Where to Stay', title: 'Accommodation Options', content: (
                <div className="space-y-4 text-[#5a5a5a]">
                    <p>From luxury glamping to budget guesthouses, Tissamaharama and Yala have it all.</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Inside the Park:</strong> Luxury tented camps for an immersive experience.</li>
                        <li><strong>Buffer Zone:</strong> eco-lodges and hotels just minutes from the gate.</li>
                        <li><strong>Tissamaharama:</strong> The main town, offering a wide range of budget-friendly options.</li>
                    </ul>
                </div>
            )
        },
        {
            name: 'Getting There', title: 'Travel Logistics', content: (
                <div className="space-y-4 text-[#5a5a5a]">
                    <p>Plan your journey to the deep south of Sri Lanka.</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><strong>From Colombo:</strong> Approx. 5-6 hours via the Southern Expressway.</li>
                        <li><strong>From Ella:</strong> Approx. 2-3 hours scenic drive.</li>
                        <li><strong>Private Transfer:</strong> We can arrange comfortable AC transport from any location.</li>
                    </ul>
                </div>
            )
        },
    ];

    return (
        <div className="bg-background-cream py-16 md:py-24" id="planning">
            <div className="layout-container flex h-full grow flex-col">
                <div className="px-4 md:px-20 flex flex-1 justify-center">
                    <div className="layout-content-container flex flex-col max-w-[1280px] flex-1">
                        <div className="flex flex-col gap-8">
                            <div className="flex flex-col gap-2">
                                <h2 className="text-primary text-3xl font-bold font-display leading-tight">Plan Your Trip</h2>
                                <p className="text-[#7e746d]">Everything you need to know before you go.</p>
                            </div>
                            <div className="flex flex-col md:flex-row gap-8">
                                {/* Sidebar / Tab Headers */}
                                <div className="flex flex-col gap-2 md:w-1/4">
                                    {tabs.map((tab) => (
                                        <button
                                            key={tab.name}
                                            onClick={() => setActiveTab(tab.name)}
                                            className={`text-left px-4 py-3 rounded-lg font-medium text-sm transition-all ${activeTab === tab.name
                                                    ? 'bg-primary text-white shadow-md font-bold'
                                                    : 'bg-white hover:bg-[#e3e0de] text-[#161413]'
                                                }`}
                                        >
                                            {tab.name}
                                        </button>
                                    ))}
                                </div>
                                {/* Content Area */}
                                <div className="bg-white p-6 md:p-8 rounded-xl border border-[#e3e0de] flex-1 shadow-sm">
                                    {tabs.map((tab) => (
                                        tab.name === activeTab && (
                                            <div key={tab.name} className="animate-fade-in">
                                                <h3 className="text-xl font-bold text-primary mb-4 font-display">{tab.title}</h3>
                                                {tab.content}
                                            </div>
                                        )
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

"use client";

import React from 'react';

export default function BookingForm() {
    return (
        <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-[#e3e0de] md:col-span-1 h-fit">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-sm">1</span>
                <h2 className="text-xl font-bold font-display text-primary">Book Your Trip</h2>
            </div>
            <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-1.5">
                    <label className="block text-sm font-semibold text-[#161413]">Safari Package</label>
                    <div className="relative">
                        <select className="w-full rounded-lg border-[#d1d5db] bg-background-light px-4 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all appearance-none cursor-pointer">
                            <option>Morning Safari (Private Jeep)</option>
                            <option>Afternoon Safari (Private Jeep)</option>
                            <option>Full Day Safari (Private Jeep)</option>
                            <option>Shared Morning Safari</option>
                        </select>
                        <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">expand_more</span>
                    </div>
                </div>
                <div className="space-y-1.5">
                    <label className="block text-sm font-semibold text-[#161413]">Time Slot</label>
                    <div className="flex items-center gap-2 w-full rounded-lg border border-[#e3e0de] bg-gray-50 px-4 py-2.5 text-gray-500 text-sm cursor-not-allowed">
                        <span className="material-symbols-outlined text-[18px]">schedule</span>
                        <span>06:00 AM - 10:00 AM</span>
                    </div>
                    <p className="text-xs text-accent mt-1 flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">info</span>
                        Pickup usually 30-45 mins prior
                    </p>
                </div>
                <div className="space-y-1.5">
                    <label className="block text-sm font-semibold text-[#161413]">Select Date</label>
                    <input className="w-full rounded-lg border-[#d1d5db] bg-white px-4 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-gray-700" type="date" />
                    <p className="hidden text-xs text-red-500 mt-1 flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">error</span>
                        Please select a valid future date
                    </p>
                </div>
                <div className="grid grid-cols-3 gap-3">
                    <div className="space-y-1.5">
                        <label className="block text-xs font-semibold text-[#161413]">Adults</label>
                        <input className="w-full rounded-lg border-[#d1d5db] px-3 py-2 text-sm text-center focus:border-primary focus:ring-1 focus:ring-primary" min="1" type="number" defaultValue="2" />
                    </div>
                    <div className="space-y-1.5">
                        <label className="block text-xs font-semibold text-[#161413]">Children <span className="text-gray-400 font-normal">(6-12)</span></label>
                        <input className="w-full rounded-lg border-[#d1d5db] px-3 py-2 text-sm text-center focus:border-primary focus:ring-1 focus:ring-primary" min="0" type="number" defaultValue="0" />
                    </div>
                    <div className="space-y-1.5">
                        <label className="block text-xs font-semibold text-[#161413]">Infants <span className="text-gray-400 font-normal">(&lt;5)</span></label>
                        <input className="w-full rounded-lg border-[#d1d5db] px-3 py-2 text-sm text-center focus:border-primary focus:ring-1 focus:ring-primary" min="0" type="number" defaultValue="0" />
                    </div>
                </div>
                <div className="pt-2">
                    <a className="inline-flex items-center gap-1 text-sm text-primary hover:text-accent font-medium transition-colors border-b border-primary/20 hover:border-accent" href="#">
                        <span className="material-symbols-outlined text-[16px]">visibility</span>
                        View Additional Information
                    </a>
                </div>
            </form>
        </div>
    );
}

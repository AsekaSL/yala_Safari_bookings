import React from 'react';
import { MdCall, MdMail, MdPerson, MdSmartphone } from 'react-icons/md';

export default function ContactDetailsForm() {
    return (
        <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-[#e3e0de] md:col-span-1 h-fit">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#5a3e2a]/10 text-[#5a3e2a] font-bold text-sm">2</span>
                <h2 className="text-xl font-bold font-display text-[#5a3e2a]">Contact Details</h2>
            </div>
            <form className="flex flex-col gap-5">
                <div className="space-y-1.5">
                    <label className="block text-sm font-semibold text-[#161413]">Full Name <span className="text-red-500">*</span></label>
                    <div className="relative">
                        <MdPerson   className="text-gray-400 text-[20px] absolute left-3 top-1/2 -translate-y-1/2" />
                        <input className="w-full rounded-lg border-[#d1d5db] pl-10 px-4 py-2.5 text-sm focus:border-[#5a3e2a] focus:ring-1 focus:ring-[#5a3e2a] outline-none transition-all" placeholder="e.g. Sarah Williams" type="text" />
                    </div>
                </div>
                <div className="space-y-1.5">
                    <label className="block text-sm font-semibold text-[#161413]">Email Address <span className="text-red-500">*</span></label>
                    <div className="relative">
                        <MdMail className="text-gray-400 text-[20px] absolute left-3 top-1/2 -translate-y-1/2" />
                        <input className="w-full rounded-lg border-[#d1d5db] pl-10 px-4 py-2.5 text-sm focus:border-[#5a3e2a] focus:ring-1 focus:ring-[#5a3e2a] outline-none transition-all" placeholder="name@example.com" type="email" />
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-4">
                    <div className="space-y-1.5">
                        <label className="block text-sm font-semibold text-[#161413]">Phone 1 (WhatsApp) <span className="text-red-500">*</span></label>
                        <div className="relative">
                            <MdCall className="text-gray-400 text-[20px] absolute left-3 top-1/2 -translate-y-1/2" />
                            <input className="w-full rounded-lg border-[#d1d5db] pl-10 px-4 py-2.5 text-sm focus:border-[#5a3e2a] focus:ring-1 focus:ring-[#5a3e2a] outline-none transition-all" placeholder="+94 7X XXX XXXX" type="tel" />
                        </div>
                    </div>
                    <div className="space-y-1.5">
                        <label className="block text-sm font-semibold text-[#161413]">Phone 2 <span className="text-gray-400 font-normal">(Optional)</span></label>
                        <div className="relative">
                            <MdSmartphone className="text-gray-400 text-[20px] absolute left-3 top-1/2 -translate-y-1/2" />
                            <input className="w-full rounded-lg border-[#d1d5db] pl-10 px-4 py-2.5 text-sm focus:border-[#5a3e2a] focus:ring-1 focus:ring-[#5a3e2a] outline-none transition-all" placeholder="Alternative number" type="tel" />
                        </div>
                    </div>
                </div>
                <div className="space-y-1.5">
                    <label className="block text-sm font-semibold text-[#161413]">Additional Notes</label>
                    <textarea className="w-full rounded-lg border-[#d1d5db] px-4 py-2.5 text-sm focus:border-[#5a3e2a] focus:ring-1 focus:ring-[#5a3e2a] outline-none transition-all resize-none" placeholder="Hotel pickup location, dietary needs, special requests..." rows={3}></textarea>
                </div>
            </form>
        </div>
    );
}

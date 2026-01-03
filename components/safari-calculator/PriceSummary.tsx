import React from 'react';

export default function PriceSummary() {
    return (
        <div className="bg-white rounded-xl shadow-lg border border-[#e3e0de] overflow-hidden">
            <div className="bg-primary px-6 py-5 text-white flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20 text-white font-bold text-sm">3</span>
                    <h2 className="text-xl font-bold font-display">Price Summary</h2>
                </div>
                <span className="material-symbols-outlined opacity-70">receipt_long</span>
            </div>
            <div className="p-6 flex flex-col gap-6">
                <div className="space-y-4 pb-6 border-b border-dashed border-gray-200">
                    <label className="flex items-start gap-3 cursor-pointer group select-none">
                        <div className="relative flex items-center">
                            <input defaultChecked className="peer h-5 w-5 cursor-pointer appearance-none rounded border border-gray-300 shadow-sm transition-all checked:border-primary checked:bg-primary hover:border-primary focus:ring-2 focus:ring-primary/20" type="checkbox" />
                            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100">
                                <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path clipRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fillRule="evenodd"></path></svg>
                            </span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-sm font-semibold text-[#161413] group-hover:text-primary transition-colors">Add Park Entry Fees</span>
                            <span className="text-xs text-gray-500">Includes ticket + service charge</span>
                        </div>
                    </label>
                    <label className="flex items-start gap-3 cursor-pointer group select-none">
                        <div className="relative flex items-center">
                            <input className="peer h-5 w-5 cursor-pointer appearance-none rounded border border-gray-300 shadow-sm transition-all checked:border-primary checked:bg-primary hover:border-primary focus:ring-2 focus:ring-primary/20" type="checkbox" />
                            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100">
                                <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path clipRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fillRule="evenodd"></path></svg>
                            </span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-sm font-semibold text-[#161413] group-hover:text-primary transition-colors">Include Breakfast</span>
                            <span className="text-xs text-gray-500">$8 per person</span>
                        </div>
                    </label>
                </div>
                <div className="space-y-3 text-sm">
                    <div className="flex justify-between items-center text-gray-600">
                        <span>Jeep Price (Private)</span>
                        <span className="font-medium text-[#161413]">$55.00</span>
                    </div>
                    <div className="flex justify-between items-center text-gray-600">
                        <span className="flex items-center gap-1">Park Fees <span className="text-xs bg-gray-100 px-1 rounded text-gray-500">2 Adults</span></span>
                        <span className="font-medium text-[#161413]">$70.00</span>
                    </div>
                    <div className="flex justify-between items-center text-gray-600 opacity-50">
                        <span>Breakfast</span>
                        <span className="font-medium text-[#161413]">$0.00</span>
                    </div>
                    <div className="flex justify-between items-center text-gray-600">
                        <span>Service Charge (5%)</span>
                        <span className="font-medium text-[#161413]">$6.25</span>
                    </div>
                </div>
                <div className="pt-4 border-t border-gray-200">
                    <div className="flex justify-between items-end mb-1">
                        <span className="font-bold text-[#161413] text-lg">Current Total</span>
                        <div className="text-right">
                            <span className="block font-black text-primary text-3xl font-display">$131.25</span>
                        </div>
                    </div>
                    <p className="text-[11px] text-gray-400 text-right">Price in USD. Includes all taxes.</p>
                </div>
                <div className="space-y-3">
                    <button className="w-full bg-primary hover:bg-[#4a3222] text-white font-bold py-3.5 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 flex justify-center items-center gap-2">
                        <span>Pay Full Amount</span>
                        <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                    </button>
                    <button className="w-full bg-white border-2 border-primary text-primary hover:bg-primary/5 font-bold py-3.5 rounded-lg transition-colors flex justify-center items-center gap-2">
                        <span>Pay Advance Only ($40)</span>
                    </button>
                </div>
                <div className="bg-gray-50 px-6 py-4 border-t border-gray-100 flex items-center justify-center gap-4 -mx-6 -mb-6 mt-2">
                    <div className="flex items-center gap-1 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all cursor-help" title="Visa">
                        <span className="material-symbols-outlined">credit_card</span>
                    </div>
                    <div className="h-4 w-[1px] bg-gray-300"></div>
                    <div className="flex items-center gap-1 text-xs text-green-700 font-medium bg-green-50 px-2 py-1 rounded">
                        <span className="material-symbols-outlined text-[14px]">verified_user</span>
                        SSL Secure
                    </div>
                </div>
            </div>
        </div>
    );
}

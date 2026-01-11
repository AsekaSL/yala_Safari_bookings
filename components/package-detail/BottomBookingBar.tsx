import React from 'react';

export default function BottomBookingBar() {
    return (
        <>
            <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 p-4 md:hidden z-40 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
                <div className="flex gap-4 items-center justify-between">
                    <div className="flex flex-col">
                        <span className="text-xs text-[#7e746d] uppercase font-bold">Total Price</span>
                        <span className="text-xl font-bold text-[#5a3e2a]">$150</span>
                    </div>
                    <button className="flex-1 bg-[#5a3e2a] text-white font-bold py-3 rounded-lg shadow-md">
                        Book Now
                    </button>
                </div>
            </div>

            <div className="bg-[#FFF5E1] py-16 hidden md:block">
                <div className="layout-container flex justify-center">
                    <div className="layout-content-container max-w-[1280px] w-full px-10">
                        <div className="flex items-center justify-between bg-white p-10 rounded-2xl shadow-lg border border-[#e3e0de]">
                            <div className="flex flex-col gap-2 max-w-xl">
                                <h2 className="text-3xl font-bold font-display text-[#5a3e2a]">Secure Your Safari Today</h2>
                                <p className="text-[#7e746d]">Don't miss out on the morning magic. Enter your group size to see the final price.</p>
                            </div>
                            <div className="flex gap-4 items-center">
                                <div className="flex flex-col items-end mr-4">
                                    <span className="text-sm text-[#7e746d]">Starting from</span>
                                    <span className="text-3xl font-bold text-[#5a3e2a]">$150</span>
                                </div>
                                <button className="bg-white border-2 border-[#5a3e2a] text-[#5a3e2a] hover:bg-[#5a3e2a]/5 font-bold py-3 px-6 rounded-lg transition-colors">
                                    Calculate Price
                                </button>
                                <button className="bg-[#5a3e2a] hover:bg-[#4a3222] text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                                    Book Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

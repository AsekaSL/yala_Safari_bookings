import React from 'react';

export default function GettingThere() {
    return (
        <div className="bg-white py-16">
            <div className="layout-container flex flex-col items-center">
                <div className="max-w-[1000px] w-full px-4 md:px-10">
                    <div className="mb-10 text-center">
                        <h2 className="text-primary text-3xl font-bold font-display mb-4">Getting to Yala National Park</h2>
                        <p className="text-[#5a3e2b]/80">Most visitors base themselves in Tissamaharama or Kataragama. Here is how to get there.</p>
                    </div>
                    <div className="flex flex-col gap-6">
                        <div className="border border-gray-200 rounded-xl overflow-hidden">
                            <div className="bg-background-light p-4 flex justify-between items-center cursor-pointer border-b border-gray-100">
                                <h3 className="font-bold text-primary flex items-center gap-2"><span className="material-symbols-outlined text-sky-blue">directions_car</span> From Colombo</h3>
                                <span className="text-sm font-medium text-gray-500">~260km • 4.5 - 5.5 Hours</span>
                            </div>
                            <div className="p-6 bg-white grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="flex flex-col gap-2">
                                    <span className="text-xs font-bold uppercase text-gray-400">Private Transfer</span>
                                    <p className="text-sm">The most comfortable option via the Southern Expressway (E01). Taxi or private driver recommended.</p>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <span className="text-xs font-bold uppercase text-gray-400">Public Bus</span>
                                    <p className="text-sm">Direct AC buses available from Bastian Mawatha Bus Station to Kataragama/Tissamaharama.</p>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <span className="text-xs font-bold uppercase text-gray-400">Train + Taxi</span>
                                    <p className="text-sm">Train to Matara or Beliatta, then catch a bus or taxi to Yala (approx. 2 hours from station).</p>
                                </div>
                            </div>
                        </div>
                        <div className="border border-gray-200 rounded-xl overflow-hidden">
                            <div className="bg-background-light p-4 flex justify-between items-center cursor-pointer border-b border-gray-100">
                                <h3 className="font-bold text-primary flex items-center gap-2"><span className="material-symbols-outlined text-sky-blue">terrain</span> From Ella</h3>
                                <span className="text-sm font-medium text-gray-500">~90km • 2.5 - 3 Hours</span>
                            </div>
                            <div className="p-6 bg-white grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex flex-col gap-2">
                                    <span className="text-xs font-bold uppercase text-gray-400">Private Taxi</span>
                                    <p className="text-sm">A scenic drive passing Ravana Falls. Easily arranged from Ella town.</p>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <span className="text-xs font-bold uppercase text-gray-400">Local Bus</span>
                                    <p className="text-sm">Take a bus heading to Wellawaya, then transfer to a Tissamaharama/Kataragama bus.</p>
                                </div>
                            </div>
                        </div>
                        <div className="border border-gray-200 rounded-xl overflow-hidden">
                            <div className="bg-background-light p-4 flex justify-between items-center cursor-pointer border-b border-gray-100">
                                <h3 className="font-bold text-primary flex items-center gap-2"><span className="material-symbols-outlined text-sky-blue">fort</span> From Galle / South Coast</h3>
                                <span className="text-sm font-medium text-gray-500">~150km • 3 - 3.5 Hours</span>
                            </div>
                            <div className="p-6 bg-white">
                                <p className="text-sm">Straightforward drive along the Southern Coast via Tangalle and Hambantota. Frequent buses connect Galle/Matara to Tissamaharama.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

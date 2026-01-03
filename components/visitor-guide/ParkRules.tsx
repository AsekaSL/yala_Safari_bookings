import React from 'react';

export default function ParkRules() {
    return (
        <div className="bg-background-cream py-16">
            <div className="layout-container flex flex-col items-center">
                <div className="max-w-[1280px] w-full px-4 md:px-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-primary text-3xl font-bold font-display mb-6">Responsible Tourism & Park Rules</h2>
                            <p className="text-[#5a3e2b] mb-8 leading-relaxed">
                                Yala is a protected wildlife sanctuary. Respecting these rules ensures your safety and the well-being of the animals.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-4">
                                    <span className="material-symbols-outlined text-red-500 mt-1">do_not_step</span>
                                    <div>
                                        <strong className="text-primary block">Stay Inside the Vehicle</strong>
                                        <span className="text-sm text-gray-600">Never alight from the jeep unless at designated spots (like Patanangala beach).</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="material-symbols-outlined text-red-500 mt-1">no_food</span>
                                    <div>
                                        <strong className="text-primary block">Do Not Feed Animals</strong>
                                        <span className="text-sm text-gray-600">Feeding changes natural behavior and can be dangerous. Keep all food hidden.</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="material-symbols-outlined text-primary mt-1">volume_off</span>
                                    <div>
                                        <strong className="text-primary block">Maintain Silence</strong>
                                        <span className="text-sm text-gray-600">Loud noises scare animals away. Whisper during sightings.</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="material-symbols-outlined text-primary mt-1">recycling</span>
                                    <div>
                                        <strong className="text-primary block">Pack It In, Pack It Out</strong>
                                        <span className="text-sm text-gray-600">Leave no trace. Take all your trash back with you.</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-accent">
                            <h3 className="font-bold text-xl text-primary mb-4">Common Questions</h3>
                            <div className="space-y-6">
                                <div>
                                    <p className="font-bold text-gray-800 mb-1 flex items-center gap-2"><span className="material-symbols-outlined text-sm">pets</span> Are pets allowed?</p>
                                    <p className="text-sm text-gray-600">No. Domestic animals are strictly prohibited to prevent disease spread and conflict.</p>
                                </div>
                                <div>
                                    <p className="font-bold text-gray-800 mb-1 flex items-center gap-2"><span className="material-symbols-outlined text-sm">bedtime</span> Are night safaris allowed?</p>
                                    <p className="text-sm text-gray-600">No. The park is open from 6:00 AM to 6:00 PM only to allow animals rest.</p>
                                </div>
                                <div>
                                    <p className="font-bold text-gray-800 mb-1 flex items-center gap-2"><span className="material-symbols-outlined text-sm">drone</span> Can I fly a drone?</p>
                                    <p className="text-sm text-gray-600">Strictly prohibited without special permission from DWC and Ministry of Defence.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

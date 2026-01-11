import React from 'react';
import { FaCameraRetro, FaVideo } from 'react-icons/fa';
import { GiFlyingFox } from 'react-icons/gi';
import { MdBedtime, MdDoNotStep, MdFlight, MdNoFood, MdPets, MdRecycling, MdRemoveDone, MdToys, MdVolumeDown, MdVolumeOff } from 'react-icons/md';

export default function ParkRules() {
    return (
        <div className="bg-[#FFF5E1] py-16">
            <div className="layout-container flex flex-col items-center">
                <div className="max-w-[1280px] w-full px-4 md:px-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-[#5a3e2a] text-3xl font-bold font-display mb-6">Responsible Tourism & Park Rules</h2>
                            <p className="text-[#5a3e2b] mb-8 leading-relaxed">
                                Yala is a protected wildlife sanctuary. Respecting these rules ensures your safety and the well-being of the animals.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-4 ">
                                    <MdDoNotStep className="text-red-500 mt-1 text-2xl" />
                                    <div>
                                        <strong className="text-[#5a3e2a] block">Stay Inside the Vehicle</strong>
                                        <span className="text-sm text-gray-600">Never alight from the jeep unless at designated spots (like Patanangala beach).</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <MdNoFood className="text-red-500 mt-1 text-2xl" />
                                    <div>
                                        <strong className="text-[#5a3e2a] block">Do Not Feed Animals</strong>
                                        <span className="text-sm text-gray-600">Feeding changes natural behavior and can be dangerous. Keep all food hidden.</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <MdVolumeOff className="text-[#5a3e2a] mt-1 text-2xl" />
                                    <div>
                                        <strong className="text-[#5a3e2a] block">Maintain Silence</strong>
                                        <span className="text-sm text-gray-600">Loud noises scare animals away. Whisper during sightings.</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <MdRecycling className="text-[#5a3e2a] mt-1 text-2xl" />
                                    <div>
                                        <strong className="text-[#5a3e2a] block">Pack It In, Pack It Out</strong>
                                        <span className="text-sm text-gray-600">Leave no trace. Take all your trash back with you.</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-[#FF914D]">
                            <h3 className="font-bold text-xl text-[#5a3e2a] mb-4">Common Questions</h3>
                            <div className="space-y-6">
                                <div>
                                    
                                    <p className="font-bold text-gray-800 mb-1 flex items-center gap-2"> <MdPets className="text-[#5a3e2a] text-2xl mb-2" /> Are pets allowed?</p>
                                    <p className="text-sm text-gray-600">No. Domestic animals are strictly prohibited to prevent disease spread and conflict.</p>
                                </div>
                                <div>
                                    <p className="font-bold text-gray-800 mb-1 flex items-center gap-2"> <MdBedtime className="text-[#5a3e2a] text-2xl mb-2" /> Are night safaris allowed?</p>
                                    <p className="text-sm text-gray-600">No. The park is open from 6:00 AM to 6:00 PM only to allow animals rest.</p>
                                </div>
                                <div>
                                    <p className="font-bold text-gray-800 mb-1 flex items-center gap-2"> <MdToys className="text-[#5a3e2a] text-2xl mb-2" /> Can I fly a drone?</p>
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

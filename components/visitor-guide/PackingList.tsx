import React from 'react';
import { GiFootprint } from 'react-icons/gi';
import { MdBugReport, MdLightMode, MdMedication, MdPallet, MdPhotoCamera, MdStyle, MdVisibility, MdWaterDrop, MdZoomIn } from 'react-icons/md';

export default function PackingList() {
    return (
        <div className="bg-white py-16">
            <div className="layout-container flex flex-col items-center">
                <div className="max-w-[1280px] w-full px-4 md:px-10">
                    <div className="text-center mb-10">
                        <h2 className="text-[#5a3e2a] text-3xl font-bold font-display mb-4">What to Bring</h2>
                        <p className="text-gray-600">Pack smart for the dusty, hot, and wild environment.</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-10">
                        <div className="flex flex-col items-center gap-2 text-center">
                            <div className="size-14 rounded-full bg-[#f7f7f6] flex items-center justify-center text-[#5a3e2a]">
                                <MdStyle className="text-3xl" />
                            </div>
                            <span className="text-xs font-bold text-gray-700">Light Clothing</span>
                        </div>
                        <div className="flex flex-col items-center gap-2 text-center">
                            <div className="size-14 rounded-full bg-[#f7f7f6] flex items-center justify-center text-[#5a3e2a]">
                                <GiFootprint className="text-3xl" />
                            </div>
                            <span className="text-xs font-bold text-gray-700">Sandals/Sneakers</span>
                        </div>
                        <div className="flex flex-col items-center gap-2 text-center">
                            <div className="size-14 rounded-full bg-[#f7f7f6] flex items-center justify-center text-[#5a3e2a]">
                                <MdLightMode className="text-3xl" />
                            </div>
                            <span className="text-xs font-bold text-gray-700">Sun Protection</span>
                        </div>
                        <div className="flex flex-col items-center gap-2 text-center">
                            <div className="size-14 rounded-full bg-[#f7f7f6] flex items-center justify-center text-[#5a3e2a]">
                                <MdBugReport className="text-3xl" />
                            </div>
                            <span className="text-xs font-bold text-gray-700">Insect Repellent</span>
                        </div>
                        <div className="flex flex-col items-center gap-2 text-center">
                            <div className="size-14 rounded-full bg-background-light flex items-center justify-center text-primary">
                                <MdVisibility className="text-3xl" />
                            </div>
                            <span className="text-xs font-bold text-gray-700">Binoculars</span>
                        </div>
                        <div className="flex flex-col items-center gap-2 text-center">
                            <div className="size-14 rounded-full bg-background-light flex items-center justify-center text-primary">
                                <MdPhotoCamera className="text-3xl" />
                            </div>
                            <span className="text-xs font-bold text-gray-700">Camera</span>
                        </div>
                        <div className="flex flex-col items-center gap-2 text-center">
                            <div className="size-14 rounded-full bg-background-light flex items-center justify-center text-primary">
                                <MdWaterDrop className="text-3xl" />
                            </div>
                            <span className="text-xs font-bold text-gray-700">Water & Snacks</span>
                        </div>
                        <div className="flex flex-col items-center gap-2 text-center">
                            <div className="size-14 rounded-full bg-background-light flex items-center justify-center text-primary">
                                <MdMedication className="text-3xl" />
                            </div>
                            <span className="text-xs font-bold text-gray-700">Personal Meds</span>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-6 justify-center">
                        <div className="bg-[#f7f7f6] p-4 rounded-lg border border-gray-200 flex items-start gap-3 max-w-md">
                            <MdPallet className="text-[#5a3e2a] text-3xl" />
                            <div>
                                <span className="font-bold text-sm block mb-1">Wear Neutral Colors</span>
                                <p className="text-xs text-gray-600">Earth tones like green, brown, and beige blend in. Bright colors (red, white) can startle wildlife.</p>
                            </div>
                        </div>
                        <div className="bg-[#f7f7f6] p-4 rounded-lg border border-gray-200 flex items-start gap-3 max-w-md">
                            <MdZoomIn className="text-[#5a3e2a] text-3xl" />
                            <div>
                                <span className="font-bold text-sm block mb-1">Lens Recommendation</span>
                                <p className="text-xs text-gray-600">A telephoto lens (300mm+) is highly recommended. Wildlife is often spotted at a distance.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

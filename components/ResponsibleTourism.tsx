import React from 'react';
import { MdGroup, MdRecycling, MdSpeed } from 'react-icons/md';
import home5 from '@/public/home/home5.png'
import home6 from '@/public/home/home6.png'

export default function ResponsibleTourism() {
    return (
        <div className="bg-[#2E1F14] py-16 md:py-24 text-white">
            <div className="layout-container flex h-full grow flex-col">
                <div className="px-4 md:px-20 flex flex-1 justify-center">
                    <div className="layout-content-container flex flex-col max-w-[1280px] flex-1">
                        <div className="flex flex-col md:flex-row items-center gap-12">
                            <div className="flex-1 space-y-6">
                                <h2 className="text-3xl md:text-4xl font-bold font-display text-background-cream">Responsible Tourism</h2>
                                <p className="text-gray-300 leading-relaxed text-lg">
                                    We believe in protecting the wild heart of Sri Lanka. Our safaris are conducted with the utmost respect for wildlife and local communities. We strictly adhere to park rules to minimize stress on animals.
                                </p>
                                <div className="flex flex-col gap-4 mt-4">
                                    <div className="flex items-center gap-4">
                                        <div className="p-2 bg-white/10 rounded-full"><MdRecycling className="text-[#FF914D] text-3xl" /></div>
                                        <span className="font-medium">Plastic-free Safaris</span>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="p-2 bg-white/10 rounded-full"><MdSpeed className="text-[#FF914D] text-3xl" /></div>
                                        <span className="font-medium">Strict Speed Limits</span>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="p-2 bg-white/10 rounded-full"><MdGroup className="text-[#FF914D] text-3xl" /></div>
                                        <span className="font-medium">Supporting Local Guides</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 w-full">
                                <div className="grid grid-cols-2 gap-4">
                                    <div
                                        className="h-48 rounded-lg bg-cover bg-center"
                                        style={{ backgroundImage: `url(${home5.src})` }}
                                    ></div>
                                    <div
                                        className="h-48 rounded-lg bg-cover bg-center mt-8"
                                        style={{ backgroundImage: `url(${home6.src})` }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

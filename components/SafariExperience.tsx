import { durationTypes } from '@/lib/data';
import { DurationTypes } from '@/types';
import React from 'react';

export default function SafariExperience() {
    return (
        <div className="bg-white py-16 md:py-24 overflow-hidden" id="experience">
            <div className="layout-container flex h-full grow flex-col">
                <div className="px-4 md:px-20 flex flex-1 justify-center">
                    <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                        <div className="flex flex-col items-center mb-12">
                            <h2 className="text-primary text-3xl font-bold font-display text-center mb-4">A Day in the Wild</h2>
                            <p className="text-[#7e746d] text-center max-w-2xl">Timing is everything in the wild. Our experts have curated the perfect schedules to maximize your sightings.</p>
                        </div>
                        <div className="grid grid-cols-[auto_1fr] gap-x-6 md:gap-x-10 px-4">
                            {
                                durationTypes.map((durationType : DurationTypes, index : number) => (
                                    <React.Fragment key={durationType.title}>
                                        <div   className="flex flex-col items-center gap-1 pt-3">
                                            <img
                                                className="bg-center bg-no-repeat bg-cover rounded-full object-cover size-12 border-4 border-background-cream shadow-lg z-10"
                                                alt={durationType.title}
                                                src={durationType.src}
                                            />
                                            
                                            {
                                                (durationTypes.length != index + 1) &&
                                                    <div className="w-[2px] bg-[#e3e0de] h-full grow"></div>
                                            }
                                        </div>
                                        <div className="flex flex-1 flex-col py-3 pb-12">
                                            <h3 className="text-primary text-xl font-bold font-display">{durationType.title}</h3>
                                            <p className="text-accent text-sm font-bold mb-2">{durationType.duration}</p>
                                            <p className="text-[#5a5a5a] leading-relaxed">{durationType.description}</p>
                                        </div>
                                    </React.Fragment>
                                    
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

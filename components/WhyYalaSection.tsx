import React from 'react';

export default function WhyYalaSection() {
    return (
        <div className="bg-white py-16 md:py-24">
            <div className="layout-container flex h-full grow flex-col">
                <div className="px-4 md:px-20 flex flex-1 justify-center">
                    <div className="layout-content-container flex flex-col max-w-[1280px] flex-1">
                        <div className="flex flex-col gap-10">
                            <div className="flex flex-col gap-4 text-center md:text-left">
                                <h2 className="text-primary tracking-tight text-3xl font-bold font-display leading-tight md:text-4xl">
                                    Why Choose Yala?
                                </h2>
                                <p className="text-[#7e746d] text-lg font-normal leading-relaxed max-w-[720px]">
                                    Discover the untamed beauty of Sri Lanka's most famous national park, where the jungle meets the Indian Ocean.
                                </p>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                                {/* Feature 1 */}
                                <div className="flex flex-col gap-4 rounded-xl border border-[#e3e0de] bg-background-light p-6 hover:shadow-md transition-shadow group">
                                    <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                        <span className="material-symbols-outlined">pets</span>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <h3 className="text-[#161413] text-xl font-bold font-display leading-tight">Leopard Density</h3>
                                        <p className="text-[#7e746d] text-sm leading-relaxed">Recognized as having one of the highest leopard densities in the world.</p>
                                    </div>
                                </div>

                                {/* Feature 2 */}
                                <div className="flex flex-col gap-4 rounded-xl border border-[#e3e0de] bg-background-light p-6 hover:shadow-md transition-shadow group">
                                    <div className="size-12 rounded-full bg-sky-blue/20 flex items-center justify-center text-[#2d5c6f] group-hover:bg-sky-blue group-hover:text-white transition-colors">
                                        <span className="material-symbols-outlined">pest_control_rodent</span>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <h3 className="text-[#161413] text-xl font-bold font-display leading-tight">Gentle Giants</h3>
                                        <p className="text-[#7e746d] text-sm leading-relaxed">Home to majestic herds of elephants roaming freely in their natural habitat.</p>
                                    </div>
                                </div>

                                {/* Feature 3 */}
                                <div className="flex flex-col gap-4 rounded-xl border border-[#e3e0de] bg-background-light p-6 hover:shadow-md transition-shadow group">
                                    <div className="size-12 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                                        <span className="material-symbols-outlined">photo_camera</span>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <h3 className="text-[#161413] text-xl font-bold font-display leading-tight">Rich Biodiversity</h3>
                                        <p className="text-[#7e746d] text-sm leading-relaxed">A birdwatcher's paradise with 215 bird species and diverse reptiles.</p>
                                    </div>
                                </div>

                                {/* Feature 4 */}
                                <div className="flex flex-col gap-4 rounded-xl border border-[#e3e0de] bg-background-light p-6 hover:shadow-md transition-shadow group">
                                    <div className="size-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                                        <span className="material-symbols-outlined">water_drop</span>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <h3 className="text-[#161413] text-xl font-bold font-display leading-tight">Coastal Landscapes</h3>
                                        <p className="text-[#7e746d] text-sm leading-relaxed">A unique ecosystem where dry monsoon forests meet pristine beaches.</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

import React from 'react';

export default function OurStory() {
    return (
        <div className="bg-white py-16 md:py-24">
            <div className="layout-container flex h-full grow flex-col">
                <div className="px-4 md:px-20 flex flex-1 justify-center">
                    <div className="layout-content-container flex flex-col max-w-[1280px] flex-1">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="flex flex-col gap-6">
                                <span className="text-accent font-bold uppercase tracking-widest text-sm">Who We Are</span>
                                <h2 className="text-primary text-3xl font-bold font-display leading-tight md:text-4xl">
                                    Born from a Passion for the Wilderness
                                </h2>
                                <p className="text-[#7e746d] text-lg font-normal leading-relaxed">
                                    Yala Safari Bookings was founded by a group of local wildlife enthusiasts and veteran trackers with a simple belief: the best way to explore nature is with respect.
                                </p>
                                <p className="text-[#7e746d] text-lg font-normal leading-relaxed">
                                    With over 20 years of combined experience traversing the dusty trails of Yala, we know every block, every waterhole, and the secret behaviors of the animals that call this park home. We aren't just a booking platform; we are your local guides to the wild heart of Sri Lanka.
                                </p>
                                <div className="flex items-center gap-4 mt-2">
                                    <div className="h-px bg-gray-200 flex-1"></div>
                                    <span className="material-symbols-outlined text-primary text-3xl">nature_people</span>
                                    <div className="h-px bg-gray-200 flex-1"></div>
                                </div>
                            </div>
                            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                                <div
                                    className="absolute inset-0 bg-cover bg-center"
                                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBQE7lPcuAqhsHCE3DSGAB-7pZ1yJr0qhd1_C4o11reDqDhPPXmBvaMVLb70CchHW7hAnjY54zoDSVp4opdt2HIqaBHVg9M-_ZQFqBW52D4JlvNI0wWovy3mYq5HwmCn6FcWVGoIlDVrF33Exc3jNdxgVKUvKTGr0hWMINTmCAfiQSx-RnT9aq0Yop6PEvAlNZdaHKkmFnw1rPs0VwnRBdNqgXudD2zUuVPi37vfDQVMcAgsWBt8jCYy1KCcqGeiTZ2lMTf5w_C8SBt")' }}
                                ></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                                <div className="absolute bottom-6 left-6 text-white">
                                    <p className="font-bold text-lg">Authentic Experiences</p>
                                    <p className="text-sm opacity-90">Guided by true experts</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

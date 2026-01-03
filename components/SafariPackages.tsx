import React from 'react';

export default function SafariPackages() {
    return (
        <div className="bg-background-cream py-16 md:py-24" id="packages">
            <div className="layout-container flex h-full grow flex-col">
                <div className="px-4 md:px-20 flex flex-1 justify-center">
                    <div className="layout-content-container flex flex-col max-w-[1280px] flex-1">
                        <div className="flex flex-col gap-10">
                            <div className="flex flex-col items-center text-center gap-4">
                                <span className="text-accent font-bold uppercase tracking-widest text-sm">Adventures Await</span>
                                <h2 className="text-primary text-3xl font-bold font-display leading-tight md:text-4xl">Safari Packages</h2>
                                <p className="text-[#7e746d] text-lg font-normal leading-relaxed max-w-[700px]">
                                    Choose the perfect safari experience. Whether you prefer a private luxury jeep or a shared adventure, we have options for every traveler.
                                </p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                                {/* Card 1: Private All-Inclusive */}
                                <div className="flex flex-col rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                    <div
                                        className="h-48 bg-cover bg-center"
                                        style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDX0XdnalZ-eocWpBmw-70DR2eZIzhFP6gD2C_dYzplUqqJ0PZVPF7gbLTtmpkro0Y3PXXsn_6Cndonpo_UzyO8Kcs_uI7-dYx0MdySTiWcHrPC9w594x6Kv0PyTaB2yOwte462DSTGQltO2wpYcw_hYzqD4X-KFLFIyJoeUI_HhqGqLgAmR9JhiiNbJ0GLa03yazqMzx7cep5_Y-I165cVyJ5DKKsB3CmNuL2Do2sPlAz9EOFWxqHQpLhYsI8PFuNBfkC2maiNFX1y")' }}
                                    >
                                        <div className="flex justify-end p-3">
                                            <span className="bg-primary text-white text-xs font-bold px-2 py-1 rounded">Best Value</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col p-6 gap-4 flex-1">
                                        <div>
                                            <h3 className="text-primary text-lg font-bold font-display">Private All-Inclusive</h3>
                                            <p className="text-[#7e746d] text-sm mt-1">For those who want it all handled.</p>
                                        </div>
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-[#161413] text-3xl font-bold tracking-tight">$150</span>
                                            <span className="text-[#7e746d] text-sm font-medium">/ person</span>
                                        </div>
                                        <div className="flex flex-col gap-2 border-t border-gray-100 pt-4 flex-1">
                                            <div className="flex gap-2 text-sm text-[#5a5a5a]">
                                                <span className="material-symbols-outlined text-primary text-[20px]">check</span> 4 Hours Duration
                                            </div>
                                            <div className="flex gap-2 text-sm text-[#5a5a5a]">
                                                <span className="material-symbols-outlined text-primary text-[20px]">check</span> Expert Naturalist Guide
                                            </div>
                                            <div className="flex gap-2 text-sm text-[#5a5a5a]">
                                                <span className="material-symbols-outlined text-primary text-[20px]">check</span> Snacks & Drinks
                                            </div>
                                            <div className="flex gap-2 text-sm text-[#5a5a5a]">
                                                <span className="material-symbols-outlined text-primary text-[20px]">check</span> Hotel Pickup
                                            </div>
                                        </div>
                                        <button className="w-full mt-2 rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold hover:bg-[#4a3222] transition-colors">Book Now</button>
                                    </div>
                                </div>

                                {/* Card 2: Shared All-Inclusive */}
                                <div className="flex flex-col rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                    <div
                                        className="h-48 bg-cover bg-center"
                                        style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBQE7lPcuAqhsHCE3DSGAB-7pZ1yJr0qhd1_C4o11reDqDhPPXmBvaMVLb70CchHW7hAnjY54zoDSVp4opdt2HIqaBHVg9M-_ZQFqBW52D4JlvNI0wWovy3mYq5HwmCn6FcWVGoIlDVrF33Exc3jNdxgVKUvKTGr0hWMINTmCAfiQSx-RnT9aq0Yop6PEvAlNZdaHKkmFnw1rPs0VwnRBdNqgXudD2zUuVPi37vfDQVMcAgsWBt8jCYy1KCcqGeiTZ2lMTf5w_C8SBt")' }}
                                    ></div>
                                    <div className="flex flex-col p-6 gap-4 flex-1">
                                        <div>
                                            <h3 className="text-primary text-lg font-bold font-display">Shared All-Inclusive</h3>
                                            <p className="text-[#7e746d] text-sm mt-1">Meet new friends, share the cost.</p>
                                        </div>
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-[#161413] text-3xl font-bold tracking-tight">$80</span>
                                            <span className="text-[#7e746d] text-sm font-medium">/ person</span>
                                        </div>
                                        <div className="flex flex-col gap-2 border-t border-gray-100 pt-4 flex-1">
                                            <div className="flex gap-2 text-sm text-[#5a5a5a]">
                                                <span className="material-symbols-outlined text-primary text-[20px]">check</span> 4 Hours Duration
                                            </div>
                                            <div className="flex gap-2 text-sm text-[#5a5a5a]">
                                                <span className="material-symbols-outlined text-primary text-[20px]">check</span> Standard Guide
                                            </div>
                                            <div className="flex gap-2 text-sm text-[#5a5a5a]">
                                                <span className="material-symbols-outlined text-primary text-[20px]">check</span> Water Included
                                            </div>
                                            <div className="flex gap-2 text-sm text-[#5a5a5a]">
                                                <span className="material-symbols-outlined text-primary text-[20px]">check</span> Meeting Point Pickup
                                            </div>
                                        </div>
                                        <button className="w-full mt-2 rounded-lg h-10 px-4 bg-[#f3f2f1] text-[#161413] text-sm font-bold hover:bg-[#e0dedc] transition-colors">View Details</button>
                                    </div>
                                </div>

                                {/* Card 3: Private Jeep-Only */}
                                <div className="flex flex-col rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                    <div
                                        className="h-48 bg-cover bg-center"
                                        style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC-lHG_f3Gan9XR1DGYtr0ho0d_fs-LG2Ro_MJ4AyHk9IMHt8WqmhBzqwNrgCtjhFaUIssfVDGEc4HMOqHSwKCUPchNGSpFfs8tYVDUBOhrJ_fzB0JTGO8qmcOxgdi-6j1nvLmV31ljjqnRToenvZK7QaUMvFZ63bua1IinTtFc7aZbXSx-QP7-anknim-Yh4Bd2AAt__NZ7vW7lHDfHlFEdcFX1OMd31ArESy24O7ySHpK8wGrzAhYXMFjG09jy53uMCThOY6nDEC6")' }}
                                    ></div>
                                    <div className="flex flex-col p-6 gap-4 flex-1">
                                        <div>
                                            <h3 className="text-primary text-lg font-bold font-display">Private Jeep-Only</h3>
                                            <p className="text-[#7e746d] text-sm mt-1">Flexible timing for photographers.</p>
                                        </div>
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-[#161413] text-3xl font-bold tracking-tight">$100</span>
                                            <span className="text-[#7e746d] text-sm font-medium">/ jeep</span>
                                        </div>
                                        <div className="flex flex-col gap-2 border-t border-gray-100 pt-4 flex-1">
                                            <div className="flex gap-2 text-sm text-[#5a5a5a]">
                                                <span className="material-symbols-outlined text-primary text-[20px]">check</span> Flexible Timing
                                            </div>
                                            <div className="flex gap-2 text-sm text-[#5a5a5a]">
                                                <span className="material-symbols-outlined text-primary text-[20px]">check</span> Vehicle & Driver Only
                                            </div>
                                            <div className="flex gap-2 text-sm text-[#5a5a5a]">
                                                <span className="material-symbols-outlined text-primary text-[20px]">check</span> Private Experience
                                            </div>
                                            <div className="flex gap-2 text-sm text-[#5a5a5a]">
                                                <span className="material-symbols-outlined text-primary text-[20px]">check</span> Up to 6 Pax
                                            </div>
                                        </div>
                                        <button className="w-full mt-2 rounded-lg h-10 px-4 bg-[#f3f2f1] text-[#161413] text-sm font-bold hover:bg-[#e0dedc] transition-colors">View Details</button>
                                    </div>
                                </div>

                                {/* Card 4: Shared Jeep-Only */}
                                <div className="flex flex-col rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                    <div
                                        className="h-48 bg-cover bg-center"
                                        style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCKxeLK39nuyogrN0gZ-lqLg3OWTzYx3qWNWThEzJAlFfO-Cd3aFXiMlkDxCg9c6YDsoW1gP6t37lp7Ivd-FNnud32FCkSlQ26xMV46FxIGA0u7qGP8LxAR-M5se5KI8JYeqsCrICDoOQsyUEG5-mB2jNX5WVIvtTsi6MzhG-HR4JBHxOFJzQepm4TE2wmERiEGsZyRfAHms2bLL7ueNDdY27OBFReLKDkSZcPTzjb8Fop2eVENM-A4OtxuVXlzoN9A4FPHCIXK-M_d")' }}
                                    >
                                        <div className="flex justify-end p-3">
                                            <span className="bg-accent text-white text-xs font-bold px-2 py-1 rounded">Budget</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col p-6 gap-4 flex-1">
                                        <div>
                                            <h3 className="text-primary text-lg font-bold font-display">Shared Jeep-Only</h3>
                                            <p className="text-[#7e746d] text-sm mt-1">The most economical way to see Yala.</p>
                                        </div>
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-[#161413] text-3xl font-bold tracking-tight">$50</span>
                                            <span className="text-[#7e746d] text-sm font-medium">/ jeep</span>
                                        </div>
                                        <div className="flex flex-col gap-2 border-t border-gray-100 pt-4 flex-1">
                                            <div className="flex gap-2 text-sm text-[#5a5a5a]">
                                                <span className="material-symbols-outlined text-primary text-[20px]">check</span> Fixed Timing
                                            </div>
                                            <div className="flex gap-2 text-sm text-[#5a5a5a]">
                                                <span className="material-symbols-outlined text-primary text-[20px]">check</span> Vehicle Only
                                            </div>
                                            <div className="flex gap-2 text-sm text-[#5a5a5a]">
                                                <span className="material-symbols-outlined text-primary text-[20px]">check</span> Shared Guide
                                            </div>
                                            <div className="flex gap-2 text-sm text-[#5a5a5a]">
                                                <span className="material-symbols-outlined text-primary text-[20px]">check</span> Park Fees Extra
                                            </div>
                                        </div>
                                        <button className="w-full mt-2 rounded-lg h-10 px-4 bg-[#f3f2f1] text-[#161413] text-sm font-bold hover:bg-[#e0dedc] transition-colors">View Details</button>
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

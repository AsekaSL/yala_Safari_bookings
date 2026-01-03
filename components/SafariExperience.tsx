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

                            {/* Morning */}
                            <div className="flex flex-col items-center gap-1 pt-3">
                                <div
                                    className="bg-center bg-no-repeat bg-cover rounded-full size-12 border-4 border-background-cream shadow-lg z-10"
                                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBp5Pnks2ALayH82SkYI7XaLFAQaZkGYCefpmSZEN6KrFpbiREg0Er-rL2TRkqfWK-UYKOZbVe6hqOZRoJzkc5v4m9OcL1MkhAkVlbxLWMJfSrMtT0GsW37C1xwJ0TMQJLwM_2OxBWCeDjsTBQ75dqAbXodFsag61YsyNgdFOq1SYBmpgA75uEiYWcWIWITrHxatjll3iwCwDqClat0_p9ztKDRD7ckHti3ZpPckpdJe1Ou3ZdUjBXB2YjplYR7kXCf0aH1EJPR-_Bj")' }}
                                ></div>
                                <div className="w-[2px] bg-[#e3e0de] h-full grow"></div>
                            </div>
                            <div className="flex flex-1 flex-col py-3 pb-12">
                                <h3 className="text-primary text-xl font-bold font-display">Morning Safari</h3>
                                <p className="text-accent text-sm font-bold mb-2">6:00 AM - 10:00 AM</p>
                                <p className="text-[#5a5a5a] leading-relaxed">The jungle wakes up. This is the best time to see leopards on the prowl and birds becoming active. The lighting is soft and golden, perfect for photography.</p>
                            </div>

                            {/* Afternoon */}
                            <div className="flex flex-col items-center gap-1">
                                <div className="w-[2px] bg-[#e3e0de] h-8"></div>
                                <div
                                    className="bg-center bg-no-repeat bg-cover rounded-full size-12 border-4 border-background-cream shadow-lg z-10"
                                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA6BOLDSqQ4miscR7ga7_XG_ezysuVtiyCyCa38JEcl-1klRfP7ycCkK-yTbdvS51Ymd50sPSiTIfo-460NRu_B25nO01Lgpm93hqhHf6ZBi_QcQr0CKCE96FoNUOkGBqfe3KYQmpmIBjMf8JseEOJLStRXfXPSzCH2uD_hkpJH-4sTjnniow52CxBFNWKAHpPCfZ39lOYkZ7nDaMHFtwtvp_lOwnpGFbwX9Ct5Sofa1EQxv06sM7tewFovNrnCOQvt0YNOUrFylHcI")' }}
                                ></div>
                                <div className="w-[2px] bg-[#e3e0de] h-full grow"></div>
                            </div>
                            <div className="flex flex-1 flex-col py-3 pb-12">
                                <h3 className="text-primary text-xl font-bold font-display">Afternoon Safari</h3>
                                <p className="text-accent text-sm font-bold mb-2">2:30 PM - 6:30 PM</p>
                                <p className="text-[#5a5a5a] leading-relaxed">As the heat of the day subsides, animals come out to waterholes to drink. Elephants are frequently spotted bathing, and sunset provides a dramatic backdrop.</p>
                            </div>

                            {/* Full Day */}
                            <div className="flex flex-col items-center gap-1 pb-3">
                                <div className="w-[2px] bg-[#e3e0de] h-8"></div>
                                <div
                                    className="bg-center bg-no-repeat bg-cover rounded-full size-12 border-4 border-background-cream shadow-lg z-10"
                                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBb30XZ9WdkHWjtDWm_tU84bP7cFDydbC9vgf3VVtfSiRIEToX7zkk2KBnUKpdHK7lFUl3WACn7bqfSL_I5sX1vpK7q98T2uQLq854B-ZT5jCa1_pMSWS1ro5DpRwIuZ_gdA8-gGPFSZx_6HzHbm7vJbbXGNnf9mK3T4wXWtFxAAeBHpShiEq5du56QqB5Lw5o5kfOIleIlpxuhyx7nlsKn96KOAtIroQRCWy5bCqALjNNgcGTCdAOKbX_4yZK7aNlbRx8GNGXUdNMs")' }}
                                ></div>
                            </div>
                            <div className="flex flex-1 flex-col py-3">
                                <h3 className="text-primary text-xl font-bold font-display">Full Day Expedition</h3>
                                <p className="text-accent text-sm font-bold mb-2">6:00 AM - 6:00 PM</p>
                                <p className="text-[#5a5a5a] leading-relaxed">For the true enthusiast. Spend the entire day deep in the park, including a rustic jungle lunch. Venture into less crowded blocks for exclusive sightings.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

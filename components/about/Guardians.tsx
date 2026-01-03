import React from 'react';

export default function Guardians() {
    return (
        <div className="relative py-16 md:py-24 bg-[#2E1F14] text-white overflow-hidden">
            <div
                className="absolute inset-0 z-0 opacity-20 bg-cover bg-center"
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC02iI-Phj57mRdcqhi7ftq6HJG72LIz1Vy64_MyMIaUAnCOJOmfeyFiDoEGm15xD8NbHrR215QEhXPsS5-Y41t2Get_FXtFMkqbc6YvmM3zOiNmMglpb-z7sHQkgrDas4fg6vmu0FmnSQ4vfXEwlBuzgGMg5-DetRsSWWSDpZBDgNMVE8uR1qF2Q4NhI9kaytkODsYUevmcFG3mfmy9yXlmzvkYV_nyqmXBdzxtKoVPKipUGwM-gTWg4DVGrGOyzrZKLnql5UJfRcC")' }}
            ></div>
            <div className="layout-container flex h-full grow flex-col relative z-10">
                <div className="px-4 md:px-20 flex flex-1 justify-center">
                    <div className="layout-content-container flex flex-col max-w-[1280px] flex-1">
                        <div className="flex flex-col lg:flex-row gap-16 items-center">
                            <div className="flex-1 space-y-6">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-bold tracking-wider uppercase text-accent">
                                    <span className="w-2 h-2 rounded-full bg-accent"></span> Responsible Tourism
                                </div>
                                <h2 className="text-3xl md:text-5xl font-bold font-display leading-tight text-background-cream">
                                    Guardians of the Jungle
                                </h2>
                                <p className="text-gray-300 text-lg leading-relaxed">
                                    We believe that tourism should support conservation, not compromise it. Every safari we conduct is an opportunity to educate travelers about the fragile ecosystems of Yala.
                                </p>
                                <ul className="space-y-4 mt-4">
                                    <li className="flex items-start gap-4">
                                        <span className="material-symbols-outlined text-accent mt-1">check_circle</span>
                                        <div>
                                            <h5 className="font-bold text-white">Respecting the Residents</h5>
                                            <p className="text-gray-400 text-sm">We maintain safe distances from animals to reduce stress and ensure natural behavior.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <span className="material-symbols-outlined text-accent mt-1">check_circle</span>
                                        <div>
                                            <h5 className="font-bold text-white">Leave No Trace</h5>
                                            <p className="text-gray-400 text-sm">A strict zero-plastic policy in our jeeps to keep the national park pristine.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="flex-1 w-full relative">
                                <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
                                    <img alt="Safari jeep maintaining respectful distance" className="w-full h-auto object-cover min-h-[300px]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvBjBHCEf4BuO9RMROViYppoS4RDAFgVqVBawvSvdd0CN7SE271cz3d2STYq5HIlPCBr2Na8OKNTIKsoteTj46OLepkWGI0yHDC08opQulRQawDvq1gM4Bi_jgLwxJJnxxGWsLD3IAYhQvwBkAbtAIpN11Rgu1gJWEtRgJUPZv2DlBTXJD1Y35iow3XQZGXxvU1FPTum6qfORYlf4TUMtYOB9rcnNFw_lw8JGG_UydNy2mzWey1L4_4kGlEhhBX2jGTPx-01TIWJo6" />
                                </div>
                                <div className="absolute -bottom-6 -left-6 bg-primary p-6 rounded-lg shadow-xl hidden md:block max-w-xs">
                                    <p className="text-white font-serif italic">"We don't inherit the earth from our ancestors, we borrow it from our children."</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

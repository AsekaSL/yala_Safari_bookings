import React from 'react';
import { MdGroup, MdRecycling, MdSpeed } from 'react-icons/md';

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
                                        style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC02iI-Phj57mRdcqhi7ftq6HJG72LIz1Vy64_MyMIaUAnCOJOmfeyFiDoEGm15xD8NbHrR215QEhXPsS5-Y41t2Get_FXtFMkqbc6YvmM3zOiNmMglpb-z7sHQkgrDas4fg6vmu0FmnSQ4vfXEwlBuzgGMg5-DetRsSWWSDpZBDgNMVE8uR1qF2Q4NhI9kaytkODsYUevmcFG3mfmy9yXlmzvkYV_nyqmXBdzxtKoVPKipUGwM-gTWg4DVGrGOyzrZKLnql5UJfRcC")' }}
                                    ></div>
                                    <div
                                        className="h-48 rounded-lg bg-cover bg-center mt-8"
                                        style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDvBjBHCEf4BuO9RMROViYppoS4RDAFgVqVBawvSvdd0CN7SE271cz3d2STYq5HIlPCBr2Na8OKNTIKsoteTj46OLepkWGI0yHDC08opQulRQawDvq1gM4Bi_jgLwxJJnxxGWsLD3IAYhQvwBkAbtAIpN11Rgu1gJWEtRgJUPZv2DlBTXJD1Y35iow3XQZGXxvU1FPTum6qfORYlf4TUMtYOB9rcnNFw_lw8JGG_UydNy2mzWey1L4_4kGlEhhBX2jGTPx-01TIWJo6")' }}
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

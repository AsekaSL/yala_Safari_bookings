import React from 'react';

export default function VideoGallery() {
    return (
        <div className="bg-background-dark py-20 text-white relative">
            <div className="max-w-[1440px] mx-auto px-4 md:px-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <span className="text-accent text-sm font-bold uppercase tracking-widest block mb-2">Cinematic Experience</span>
                        <h2 className="text-3xl md:text-5xl font-display font-bold">Explore the Wild – Yala Safari Moments</h2>
                    </div>
                    <button className="text-sky-blue hover:text-white transition-colors flex items-center gap-2 text-sm font-medium">
                        View All Videos <span className="material-symbols-outlined">arrow_forward</span>
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="group relative rounded-xl overflow-hidden aspect-video bg-black/40 cursor-pointer">
                        <img alt="Leopard sighting video thumbnail" className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQE7lPcuAqhsHCE3DSGAB-7pZ1yJr0qhd1_C4o11reDqDhPPXmBvaMVLb70CchHW7hAnjY54zoDSVp4opdt2HIqaBHVg9M-_ZQFqBW52D4JlvNI0wWovy3mYq5HwmCn6FcWVGoIlDVrF33Exc3jNdxgVKUvKTGr0hWMINTmCAfiQSx-RnT9aq0Yop6PEvAlNZdaHKkmFnw1rPs0VwnRBdNqgXudD2zUuVPi37vfDQVMcAgsWBt8jCYy1KCcqGeiTZ2lMTf5w_C8SBt" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="size-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white/40">
                                <span className="material-symbols-outlined text-white text-3xl fill-current">play_arrow</span>
                            </div>
                        </div>
                        <div className="absolute bottom-0 left-0 p-4 w-full bg-gradient-to-t from-black/90 to-transparent">
                            <h3 className="font-bold text-lg">Rare Leopard Sighting</h3>
                            <p className="text-xs text-gray-300">02:14 • Block 1</p>
                        </div>
                    </div>
                    <div className="group relative rounded-xl overflow-hidden aspect-video bg-black/40 cursor-pointer">
                        <img alt="Elephant herd video thumbnail" className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvBjBHCEf4BuO9RMROViYppoS4RDAFgVqVBawvSvdd0CN7SE271cz3d2STYq5HIlPCBr2Na8OKNTIKsoteTj46OLepkWGI0yHDC08opQulRQawDvq1gM4Bi_jgLwxJJnxxGWsLD3IAYhQvwBkAbtAIpN11Rgu1gJWEtRgJUPZv2DlBTXJD1Y35iow3XQZGXxvU1FPTum6qfORYlf4TUMtYOB9rcnNFw_lw8JGG_UydNy2mzWey1L4_4kGlEhhBX2jGTPx-01TIWJo6" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="size-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white/40">
                                <span className="material-symbols-outlined text-white text-3xl fill-current">play_arrow</span>
                            </div>
                        </div>
                        <div className="absolute bottom-0 left-0 p-4 w-full bg-gradient-to-t from-black/90 to-transparent">
                            <h3 className="font-bold text-lg">Elephants at Waterhole</h3>
                            <p className="text-xs text-gray-300">01:45 • Late Afternoon</p>
                        </div>
                    </div>
                    <div className="group relative rounded-xl overflow-hidden aspect-video bg-black/40 cursor-pointer">
                        <img alt="Sunset time lapse video thumbnail" className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKxeLK39nuyogrN0gZ-lqLg3OWTzYx3qWNWThEzJAlFfO-Cd3aFXiMlkDxCg9c6YDsoW1gP6t37lp7Ivd-FNnud32FCkSlQ26xMV46FxIGA0u7qGP8LxAR-M5se5KI8JYeqsCrICDoOQsyUEG5-mB2jNX5WVIvtTsi6MzhG-HR4JBHxOFJzQepm4TE2wmERiEGsZyRfAHms2bLL7ueNDdY27OBFReLKDkSZcPTzjb8Fop2eVENM-A4OtxuVXlzoN9A4FPHCIXK-M_d" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="size-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white/40">
                                <span className="material-symbols-outlined text-white text-3xl fill-current">play_arrow</span>
                            </div>
                        </div>
                        <div className="absolute bottom-0 left-0 p-4 w-full bg-gradient-to-t from-black/90 to-transparent">
                            <h3 className="font-bold text-lg">Magical Yala Sunset</h3>
                            <p className="text-xs text-gray-300">00:58 • Time-lapse</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

import React from 'react';

export default function LatestArticles() {
    return (
        <div className="py-8 md:py-16 px-4 md:px-20 max-w-[1280px] mx-auto w-full">
            <div className="flex justify-between items-end mb-10">
                <h3 className="text-2xl md:text-3xl font-bold font-display text-desert-brown">Latest from the Field</h3>
                <a className="hidden md:flex text-primary font-bold hover:text-accent transition-colors" href="#">View Archive →</a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <article className="flex flex-col gap-4 group cursor-pointer">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCKxeLK39nuyogrN0gZ-lqLg3OWTzYx3qWNWThEzJAlFfO-Cd3aFXiMlkDxCg9c6YDsoW1gP6t37lp7Ivd-FNnud32FCkSlQ26xMV46FxIGA0u7qGP8LxAR-M5se5KI8JYeqsCrICDoOQsyUEG5-mB2jNX5WVIvtTsi6MzhG-HR4JBHxOFJzQepm4TE2wmERiEGsZyRfAHms2bLL7ueNDdY27OBFReLKDkSZcPTzjb8Fop2eVENM-A4OtxuVXlzoN9A4FPHCIXK-M_d")' }}
                        ></div>
                        <div className="absolute top-4 left-4">
                            <span className="bg-white/90 backdrop-blur-sm text-primary text-xs font-bold px-3 py-1 rounded-md shadow-sm">Photography</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex gap-3 text-xs text-[#7e746d]">
                            <span>5 min read</span>
                            <span>•</span>
                            <span>Yesterday</span>
                        </div>
                        <h4 className="text-xl font-bold font-display text-desert-brown group-hover:text-accent transition-colors">Golden Hour in Yala: A Photographer's Guide</h4>
                        <p className="text-[#5a5a5a] text-sm line-clamp-2 leading-relaxed">Master the light. Discover the best settings and locations to capture the magical sunrise over the park's reservoirs.</p>
                        <span className="text-primary text-sm font-bold mt-1 inline-block border-b border-transparent group-hover:border-primary w-fit">Read More</span>
                    </div>
                </article>

                <article className="flex flex-col gap-4 group cursor-pointer">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC02iI-Phj57mRdcqhi7ftq6HJG72LIz1Vy64_MyMIaUAnCOJOmfeyFiDoEGm15xD8NbHrR215QEhXPsS5-Y41t2Get_FXtFMkqbc6YvmM3zOiNmMglpb-z7sHQkgrDas4fg6vmu0FmnSQ4vfXEwlBuzgGMg5-DetRsSWWSDpZBDgNMVE8uR1qF2Q4NhI9kaytkODsYUevmcFG3mfmy9yXlmzvkYV_nyqmXBdzxtKoVPKipUGwM-gTWg4DVGrGOyzrZKLnql5UJfRcC")' }}
                        ></div>
                        <div className="absolute top-4 left-4">
                            <span className="bg-white/90 backdrop-blur-sm text-primary text-xs font-bold px-3 py-1 rounded-md shadow-sm">Deep Dive</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex gap-3 text-xs text-[#7e746d]">
                            <span>8 min read</span>
                            <span>•</span>
                            <span>2 Days ago</span>
                        </div>
                        <h4 className="text-xl font-bold font-display text-desert-brown group-hover:text-accent transition-colors">Understanding Elephant Emotions</h4>
                        <p className="text-[#5a5a5a] text-sm line-clamp-2 leading-relaxed">Elephants are highly intelligent and emotional beings. Our experts break down their complex social structures.</p>
                        <span className="text-primary text-sm font-bold mt-1 inline-block border-b border-transparent group-hover:border-primary w-fit">Read More</span>
                    </div>
                </article>

                <article className="flex flex-col gap-4 group cursor-pointer">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDvBjBHCEf4BuO9RMROViYppoS4RDAFgVqVBawvSvdd0CN7SE271cz3d2STYq5HIlPCBr2Na8OKNTIKsoteTj46OLepkWGI0yHDC08opQulRQawDvq1gM4Bi_jgLwxJJnxxGWsLD3IAYhQvwBkAbtAIpN11Rgu1gJWEtRgJUPZv2DlBTXJD1Y35iow3XQZGXxvU1FPTum6qfORYlf4TUMtYOB9rcnNFw_lw8JGG_UydNy2mzWey1L4_4kGlEhhBX2jGTPx-01TIWJo6")' }}
                        ></div>
                        <div className="absolute top-4 left-4">
                            <span className="bg-white/90 backdrop-blur-sm text-primary text-xs font-bold px-3 py-1 rounded-md shadow-sm">Responsible Tourism</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex gap-3 text-xs text-[#7e746d]">
                            <span>4 min read</span>
                            <span>•</span>
                            <span>Last Week</span>
                        </div>
                        <h4 className="text-xl font-bold font-display text-desert-brown group-hover:text-accent transition-colors">The Impact of Ethical Jeeping</h4>
                        <p className="text-[#5a5a5a] text-sm line-clamp-2 leading-relaxed">Why keeping your distance matters. How ethical driving practices protect wildlife and enhance your sighting quality.</p>
                        <span className="text-primary text-sm font-bold mt-1 inline-block border-b border-transparent group-hover:border-primary w-fit">Read More</span>
                    </div>
                </article>

                <article className="flex flex-col gap-4 group cursor-pointer">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA5aKx8Fv7uco7OLQhlKXcdSPMt5ghq7_MBLPRdQxDEnUwjVpsh69HgQj5c3xuak00Or5D4LpROn0HdnnSQ-0PJKiO6z58D9Mnwt1Sb4yiH1xImvr_h_wbIGtsNZIdpLtvlAHfg8Lphvcm-naobc4YksK-R0dDC5hE1mpRN_Amdokkpa0v8fJupxeQAJWBhogiuRfj-JGnpjdTr7RsR2G0aipA1liA-MbgEpTbLkLXjHrTirRxNPsyLsdHJWqRGp43E987GnnvjKKt4")' }}
                        ></div>
                        <div className="absolute top-4 left-4">
                            <span className="bg-white/90 backdrop-blur-sm text-primary text-xs font-bold px-3 py-1 rounded-md shadow-sm">Planning</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex gap-3 text-xs text-[#7e746d]">
                            <span>6 min read</span>
                            <span>•</span>
                            <span>2 Weeks ago</span>
                        </div>
                        <h4 className="text-xl font-bold font-display text-desert-brown group-hover:text-accent transition-colors">Navigating the Blocks: Where to Go?</h4>
                        <p className="text-[#5a5a5a] text-sm line-clamp-2 leading-relaxed">Block 1 vs Block 5 vs Lunugamwehera. We help you choose the right zone for your specific wildlife interests.</p>
                        <span className="text-primary text-sm font-bold mt-1 inline-block border-b border-transparent group-hover:border-primary w-fit">Read More</span>
                    </div>
                </article>

                <article className="flex flex-col gap-4 group cursor-pointer">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC-lHG_f3Gan9XR1DGYtr0ho0d_fs-LG2Ro_MJ4AyHk9IMHt8WqmhBzqwNrgCtjhFaUIssfVDGEc4HMOqHSwKCUPchNGSpFfs8tYVDUBOhrJ_fzB0JTGO8qmcOxgdi-6j1nvLmV31ljjqnRToenvZK7QaUMvFZ63bua1IinTtFc7aZbXSx-QP7-anknim-Yh4Bd2AAt__NZ7vW7lHDfHlFEdcFX1OMd31ArESy24O7ySHpK8wGrzAhYXMFjG09jy53uMCThOY6nDEC6")' }}
                        ></div>
                        <div className="absolute top-4 left-4">
                            <span className="bg-white/90 backdrop-blur-sm text-primary text-xs font-bold px-3 py-1 rounded-md shadow-sm">Deep Dive</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex gap-3 text-xs text-[#7e746d]">
                            <span>10 min read</span>
                            <span>•</span>
                            <span>3 Weeks ago</span>
                        </div>
                        <h4 className="text-xl font-bold font-display text-desert-brown group-hover:text-accent transition-colors">Reading the Jungle Floor</h4>
                        <p className="text-[#5a5a5a] text-sm line-clamp-2 leading-relaxed">A guide to tracking. Learn how to identify pugmarks, scat, and alarm calls to predict predator movements.</p>
                        <span className="text-primary text-sm font-bold mt-1 inline-block border-b border-transparent group-hover:border-primary w-fit">Read More</span>
                    </div>
                </article>

                <article className="flex flex-col gap-4 group cursor-pointer">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDX0XdnalZ-eocWpBmw-70DR2eZIzhFP6gD2C_dYzplUqqJ0PZVPF7gbLTtmpkro0Y3PXXsn_6Cndonpo_UzyO8Kcs_uI7-dYx0MdySTiWcHrPC9w594x6Kv0PyTaB2yOwte462DSTGQltO2wpYcw_hYzqD4X-KFLFIyJoeUI_HhqGqLgAmR9JhiiNbJ0GLa03yazqMzx7cep5_Y-I165cVyJ5DKKsB3CmNuL2Do2sPlAz9EOFWxqHQpLhYsI8PFuNBfkC2maiNFX1y")' }}
                        ></div>
                        <div className="absolute top-4 left-4">
                            <span className="bg-white/90 backdrop-blur-sm text-primary text-xs font-bold px-3 py-1 rounded-md shadow-sm">Experiences</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex gap-3 text-xs text-[#7e746d]">
                            <span>3 min read</span>
                            <span>•</span>
                            <span>1 Month ago</span>
                        </div>
                        <h4 className="text-xl font-bold font-display text-desert-brown group-hover:text-accent transition-colors">Packing for Your Safari Adventure</h4>
                        <p className="text-[#5a5a5a] text-sm line-clamp-2 leading-relaxed">Don't forget the binoculars! A complete checklist of what to bring for a comfortable and successful safari.</p>
                        <span className="text-primary text-sm font-bold mt-1 inline-block border-b border-transparent group-hover:border-primary w-fit">Read More</span>
                    </div>
                </article>
            </div>
            <div className="mt-12 flex justify-center">
                <button className="px-8 py-3 bg-white border border-[#e3e0de] hover:border-primary hover:text-primary text-desert-brown font-bold rounded-lg transition-all shadow-sm hover:shadow-md">
                    Load More Articles
                </button>
            </div>
        </div>
    );
}

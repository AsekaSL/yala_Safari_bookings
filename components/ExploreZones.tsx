import React from 'react';

export default function ExploreZones() {
    return (
        <div className="bg-white py-16">
            <div className="layout-container flex h-full grow flex-col">
                <div className="px-4 md:px-20 flex flex-1 justify-center">
                    <div className="layout-content-container flex flex-col max-w-[1280px] flex-1">
                        <div className="mb-10 text-center">
                            <h2 className="text-[#5a3e2a] text-3xl font-bold font-display">Explore the Zones</h2>
                            <p className="text-[#7e746d] mt-2">Yala is divided into blocks. Choose your adventure.</p>
                        </div>
                        <div
                            className="relative w-full aspect-[16/9] md:aspect-[21/9] bg-[#e6dfd8] rounded-xl overflow-hidden flex items-center justify-center bg-cover bg-center"
                            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA5aKx8Fv7uco7OLQhlKXcdSPMt5ghq7_MBLPRdQxDEnUwjVpsh69HgQj5c3xuak00Or5D4LpROn0HdnnSQ-0PJKiO6z58D9Mnwt1Sb4yiH1xImvr_h_wbIGtsNZIdpLtvlAHfg8Lphvcm-naobc4YksK-R0dDC5hE1mpRN_Amdokkpa0v8fJupxeQAJWBhogiuRfj-JGnpjdTr7RsR2G0aipA1liA-MbgEpTbLkLXjHrTirRxNPsyLsdHJWqRGp43E987GnnvjKKt4")' }}
                        >
                            <div className="absolute inset-0 bg-black/20"></div>
                            {/* Stylized Map Markers */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full px-4 md:px-20 z-10">

                                {/* Block 1 */}
                                <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg border-l-4 border-[#5a3e2a]">
                                    <h4 className="font-bold text-[#5a3e2a]">Block 1 (Main)</h4>
                                    <p className="text-xs text-[#5a5a5a] mt-1">Highest density of leopards. Most popular and busy.</p>
                                </div>

                                {/* Block 5 */}
                                <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg border-l-4 border-sky-blue">
                                    <div className="flex justify-between items-start">
                                        <h4 className="font-bold text-[#5a3e2a]">Block 5</h4>
                                        <span className="bg-[#7FB3C8] text-white text-[10px] px-2 py-0.5 rounded-full">Quiet</span>
                                    </div>
                                    <p className="text-xs text-[#5a5a5a] mt-1">Scenic reservoirs and less crowded. Good for elephants.</p>
                                </div>

                                {/* Lunugamwehera */}
                                <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg border-l-4 border-green-600">
                                    <div className="flex justify-between items-start">
                                        <h4 className="font-bold text-[#5a3e2a]">Lunugamwehera</h4>
                                        <span className="bg-green-600 text-white text-[10px] px-2 py-0.5 rounded-full">Ethical</span>
                                    </div>
                                    <p className="text-xs text-[#5a5a5a] mt-1">Elephant corridor. Zero crowding, pure wilderness.</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

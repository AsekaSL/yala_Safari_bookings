import React from 'react';
import { MdMedicalServices, MdSignalCellularOff } from 'react-icons/md';

export default function SafetyInfo() {
    return (
        <div className="bg-[#FFF5E1] py-16">
            <div className="layout-container flex flex-col items-center">
                <div className="max-w-[1280px] w-full px-4 md:px-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-[#5a3e2a] mb-4 flex items-center gap-2">
                                <MdSignalCellularOff className='text-2xl' /> Digital Detox
                            </h3>
                            <p className="text-sm text-gray-700 leading-relaxed mb-4">
                                Mobile signal within the park is extremely limited or non-existent. This is a chance to disconnect and immerse yourself in nature. Download offline maps and inform family beforehand.
                            </p>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-[#5a3e2a] mb-4 flex items-center gap-2">
                                <MdMedicalServices className='text-2xl' /> Health & Safety
                            </h3>
                            <p className="text-sm text-gray-700 leading-relaxed mb-4">
                                <strong>Hydration:</strong> It gets very hot. Drink plenty of water. <br />
                                <strong>Motion Sickness:</strong> The roads are bumpy. Take medication if prone to car sickness. <br />
                                <strong>Nearest Hospital:</strong> Base Hospital Tissamaharama (~20km away).
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

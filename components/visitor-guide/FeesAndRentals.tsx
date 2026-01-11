import React from 'react';
import { MdDirectionsCar, MdInfo, MdLocalActivity } from 'react-icons/md';

export default function FeesAndRentals() {
    return (
        <div className="bg-background-light py-16">
            <div className="layout-container flex flex-col items-center">
                <div className="max-w-[1280px] w-full px-4 md:px-10">
                    <div className="flex flex-col lg:flex-row gap-10">
                        <div className="flex-1 bg-white p-8 rounded-xl shadow-sm border-t-4 border-primary">
                            <h3 className="text-2xl font-bold font-display text-primary mb-6 flex items-center gap-2">
                                <MdLocalActivity className="text-2xl" /> Entrance Fees (DWC)
                            </h3>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                                    <span className="font-medium">Foreign Adult</span>
                                    <span className="font-bold text-primary">~$35 - $40 USD</span>
                                </div>
                                <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                                    <span className="font-medium">Foreign Child (6-12 yrs)</span>
                                    <span className="font-bold text-primary">~$20 USD</span>
                                </div>
                                <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                                    <span className="font-medium">Local / Resident</span>
                                    <span className="font-bold text-primary">LKR rates apply</span>
                                </div>
                                <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                                    <span className="font-medium">SAARC Nationals</span>
                                    <span className="font-bold text-primary">Reduced rates available</span>
                                </div>
                                <div className="flex justify-between items-center pb-3">
                                    <span className="font-medium text-gray-600 text-sm">Service Charge + VAT</span>
                                    <span className="font-bold text-gray-600 text-sm">Included in final ticket</span>
                                </div>
                            </div>
                            <div className="mt-6 bg-accent/5 p-4 rounded-lg border border-accent/20 flex gap-3">
                                <MdInfo className="text-accent shrink-0 text-2xl" />
                                <p className="text-sm text-[#5a3e2b]"><strong>Note:</strong> Payment in LKR Cash is highly recommended at the gate. Prices fluctuate with exchange rates.</p>
                            </div>
                        </div>
                        <div className="flex-1 bg-white p-8 rounded-xl shadow-sm border-t-4 border-sky-blue">
                            <h3 className="text-2xl font-bold font-display text-primary mb-6 flex items-center gap-2">
                                <MdDirectionsCar className="text-2xl" />
                                Safari Jeep Rental
                            </h3>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                                    <div>
                                        <span className="font-bold block text-primary">Half-Day Private Jeep</span>
                                        <span className="text-xs text-gray-500">Morning or Afternoon</span>
                                    </div>
                                    <span className="font-bold">LKR 12,000 - 18,000</span>
                                </div>
                                <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                                    <div>
                                        <span className="font-bold block text-primary">Full-Day Private Jeep</span>
                                        <span className="text-xs text-gray-500">Dawn to Dusk</span>
                                    </div>
                                    <span className="font-bold">LKR 22,000 - 30,000</span>
                                </div>
                                <div className="flex justify-between items-center pb-3">
                                    <div>
                                        <span className="font-bold block text-primary">Shared Jeep (Per Seat)</span>
                                        <span className="text-xs text-gray-500">Budget Option</span>
                                    </div>
                                    <span className="font-bold">LKR 4,000 - 6,000</span>
                                </div>
                            </div>
                            <div className="mt-6">
                                <p className="text-sm text-gray-500 italic">* Prices are approximate estimates and vary by provider. Includes jeep and driver fee only. Tip is customary for good sightings.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

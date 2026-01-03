import React from 'react';

export default function DWCReference() {
    return (
        <div className="rounded-xl bg-orange-50 border border-orange-100 p-6">
            <div className="flex gap-3 items-center mb-3 text-orange-800">
                <span className="material-symbols-outlined">info</span>
                <h4 className="font-bold text-sm uppercase tracking-wide">For Reference Only</h4>
            </div>
            <p className="text-sm text-orange-900/80 mb-4 leading-relaxed">
                The numbers below are for the Department of Wildlife Conservation (DWC). <strong>These are NOT for safari bookings through our website.</strong>
            </p>
            <div className="space-y-3 text-sm">
                <div>
                    <span className="font-semibold block text-orange-950">Yala National Park (DWC Office):</span>
                    <span className="text-orange-900">047 348 9297 (from Sri Lanka)</span><br />
                    <span className="text-orange-900">+94 47 348 9297 (International)</span>
                </div>
                <div>
                    <span className="font-semibold block text-orange-950">DWC Colombo Head Office:</span>
                    <span className="text-orange-900">0112 888 585</span>
                </div>
            </div>
        </div>
    );
}

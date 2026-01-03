import React from 'react';

export default function ContactInfo() {
    return (
        <div className="bg-white py-16">
            <div className="layout-container flex flex-col items-center">
                <div className="max-w-[800px] w-full px-4 md:px-10">
                    <div className="border border-gray-200 rounded-xl p-8 text-center bg-background-light">
                        <h3 className="text-lg font-bold text-primary mb-4">Important Contact Information</h3>
                        <div className="flex flex-col md:flex-row justify-center gap-8 mb-6">
                            <div className="flex flex-col items-center">
                                <span className="text-sm font-medium text-gray-500">Yala Park Office</span>
                                <span className="text-lg font-bold text-primary">+94 47 348 9211</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <span className="text-sm font-medium text-gray-500">DWC Head Office</span>
                                <span className="text-lg font-bold text-primary">+94 11 288 8585</span>
                            </div>
                        </div>
                        <p className="text-xs text-gray-500 italic border-t border-gray-200 pt-4 inline-block px-4">
                            * Note: These are official park administration numbers, not for safari bookings.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

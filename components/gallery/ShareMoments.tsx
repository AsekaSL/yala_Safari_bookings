import React from 'react';
import { MdDiversity2 } from 'react-icons/md';

export default function ShareMoments() {
    return (
        <div className="bg-[#7FB3C8]/10 py-16 px-4">
            <div className="max-w-3xl mx-auto text-center">
                <MdDiversity2 className="text-[#5a3e2a] text-5xl mb-4 mx-auto" />
                <h2 className="text-3xl font-display font-bold text-[#5a3e2a] mb-4">Share Your Yala Moments</h2>
                <p className="text-[#2E1F14] text-lg mb-8 max-w-2xl mx-auto">
                    Have you captured something incredible? We love to see Yala through your eyes. Submit your best shots for a chance to be featured in our monthly community showcase.
                </p>
                <button className="bg-[#5a3e2a] hover:bg-[#4a3222] text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 opacity-75 cursor-not-allowed" title="Coming Soon">
                    Submit Your Photo (Coming Soon)
                </button>
            </div>
        </div>
    );
}

import React from 'react';

export default function ShareMoments() {
    return (
        <div className="bg-sky-blue/10 py-16 px-4">
            <div className="max-w-4xl mx-auto text-center">
                <span className="material-symbols-outlined text-primary text-5xl mb-4">diversity_2</span>
                <h2 className="text-3xl font-display font-bold text-primary mb-4">Share Your Yala Moments</h2>
                <p className="text-desert-brown text-lg mb-8 max-w-2xl mx-auto">
                    Have you captured something incredible? We love to see Yala through your eyes. Submit your best shots for a chance to be featured in our monthly community showcase.
                </p>
                <button className="bg-primary hover:bg-[#4a3222] text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 opacity-75 cursor-not-allowed" title="Coming Soon">
                    Submit Your Photo (Coming Soon)
                </button>
            </div>
        </div>
    );
}

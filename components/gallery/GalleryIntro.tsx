import React from 'react';
import { FaCameraRetro } from 'react-icons/fa';

export default function GalleryIntro() {
    return (
        <div className="bg-[#f7f7f6] py-16 md:py-20">
            <div className="max-w-3xl mx-auto px-6 text-center">
                <FaCameraRetro className="text-[#5a3e2a] text-4xl mb-4 mx-auto" />
                <p className="text-[#2E1F14] text-lg md:text-xl leading-relaxed font-light mb-6">
                    Our curated gallery captures the raw, unfiltered essence of Yala National Park. From the stealthy gaze of the Sri Lankan Leopard to the gentle rumble of elephant herds gathering at dusk, each image tells a story of survival and beauty.
                </p>
                <p className="text-[#5A3E2B]/80 text-base leading-relaxed">
                    Explore high-quality visuals showcasing diverse ecosystems, rare birdlife, ancient cultural sites hidden within the jungle, and the authentic safari experience that awaits you.
                </p>
            </div>
        </div>
    );
}

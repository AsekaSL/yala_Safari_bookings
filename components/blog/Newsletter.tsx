import React from 'react';
import { MdMail, MdPhotoCamera, MdSmartDisplay, MdThumbUp } from 'react-icons/md';

export default function Newsletter() {
    return (
        <div className="bg-[#FFF5E1] py-20 px-4 md:px-20 border-t border-[#e3e0de]">
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
                <div className="md:w-2/5 bg-[#5a3e2a] relative h-64 md:h-auto overflow-hidden">
                    <div
                        className="absolute inset-0 bg-cover bg-center opacity-60 mix-blend-overlay"
                        style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBb30XZ9WdkHWjtDWm_tU84bP7cFDydbC9vgf3VVtfSiRIEToX7zkk2KBnUKpdHK7lFUl3WACn7bqfSL_I5sX1vpK7q98T2uQLq854B-ZT5jCa1_pMSWS1ro5DpRwIuZ_gdA8-gGPFSZx_6HzHbm7vJbbXGNnf9mK3T4wXWtFxAAeBHpShiEq5du56QqB5Lw5o5kfOIleIlpxuhyx7nlsKn96KOAtIroQRCWy5bCqALjNNgcGTCdAOKbX_4yZK7aNlbRx8GNGXUdNMs")' }}
                    ></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <MdMail className="text-white text-8xl opacity-20" />
                    </div>
                </div>
                <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold font-display text-[#5a3e2a] mb-3">Join Our Wildlife Community</h3>
                    <p className="text-[#5a5a5a] mb-6">Get weekly blog updates, exclusive wildlife stories, safari tips, and conservation news delivered to your inbox.</p>
                    <form className="flex flex-col gap-3">
                        <input
                            className="w-full bg-[#f7f7f6] border border-[#e3e0de] rounded-lg px-4 py-3 text-[#1d1815] focus:ring-2 focus:ring-[#FF914D] focus:border-[#FF914D] outline-none"
                            placeholder="Your email address"
                            type="email"
                        />
                        <button
                            className="w-full bg-[#FF914D] hover:bg-[#ff8033] text-white font-bold py-3 rounded-lg transition-colors shadow-md"
                            type="button"
                        >
                            Subscribe
                        </button>
                    </form>
                    <div className="flex gap-4 mt-8 justify-center md:justify-start">
                        <MdThumbUp className="text-[#7e746d] hover:text-[#5a3e2a] transition-colors text-2xl cursor-pointer" />
                        <MdPhotoCamera className="text-[#7e746d] hover:text-[#5a3e2a] transition-colors text-2xl cursor-pointer" />
                        <MdSmartDisplay className="text-[#7e746d] hover:text-[#5a3e2a] transition-colors text-2xl cursor-pointer" />
                    </div>
                </div>
            </div>
        </div>
    );
}

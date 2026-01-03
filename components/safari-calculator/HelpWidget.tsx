import React from 'react';

export default function HelpWidget() {
    return (
        <div className="bg-[#FFF5E1] border border-accent/20 rounded-xl p-4 flex items-start gap-4">
            <div className="bg-accent/10 p-2 rounded-full text-accent shrink-0">
                <span className="material-symbols-outlined">support_agent</span>
            </div>
            <div>
                <h4 className="font-bold text-primary text-sm">Need Help Booking?</h4>
                <p className="text-xs text-[#7e746d] mt-1 mb-2">Our team is available 24/7 on WhatsApp to assist you.</p>
                <a className="text-accent text-xs font-bold hover:underline flex items-center gap-1" href="#">
                    Chat with us <span className="material-symbols-outlined text-[12px]">open_in_new</span>
                </a>
            </div>
        </div>
    );
}

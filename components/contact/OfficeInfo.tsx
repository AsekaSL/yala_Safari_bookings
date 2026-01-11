import React from 'react';
import { MdLocationOn, MdSchedule } from 'react-icons/md';

export default function OfficeInfo() {
    return (
        <div className="flex flex-col gap-6 pt-6 border-t border-[#e3e0de]">
            <div className="flex gap-4 items-start">
                <div className="size-12 shrink-0 rounded-full bg-[#f7f7f6] flex items-center justify-center text-[#7e746d]">
                    <MdLocationOn className="text-xl" />
                </div>
                <div className="flex flex-col gap-1">
                    <h4 className="text-lg font-bold text-[#161413]">Our Office Addresses</h4>
                    <p className="text-sm text-[#7e746d] italic mb-2">We operate primarily online for your convenience.</p>
                    <div className="space-y-3 text-sm text-[#5a5a5a]">
                        <div>
                            <strong className="text-[#5a3e2a] block">Head Office:</strong>
                            2B, 1st Cross Street, Pagoda Road, Nugegoda, Sri Lanka
                        </div>
                        <div>
                            <strong className="text-[#5a3e2a] block">Alternative Office:</strong>
                            Main Street, Kannathtota, Sri Lanka 71372
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex gap-4 items-start">
                <div className="size-12 shrink-0 rounded-full bg-[#f7f7f6] flex items-center justify-center text-[#7e746d]">
                    <MdSchedule className="text-xl" />
                </div>
                <div className="flex flex-col gap-1">
                    <h4 className="text-lg font-bold text-[#161413]">Operating Hours</h4>
                    <p className="text-sm text-[#5a5a5a] leading-relaxed">
                        Our head office is open <strong>9 AM – 6 PM (Sri Lanka Standard Time), Monday to Friday</strong>.
                    </p>
                    <p className="text-xs text-[#7e746d] mt-1">
                        *We monitor emails and WhatsApp for urgent inquiries outside these hours.
                    </p>
                </div>
            </div>
        </div>
    );
}

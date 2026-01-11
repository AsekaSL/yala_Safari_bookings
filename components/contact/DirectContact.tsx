import { MdCall, MdMail } from "react-icons/md";

export default function DirectContact() {
    return (
        <div className="flex flex-col gap-8">
            <div className="flex gap-4 items-start">
                <div className="size-12 shrink-0 rounded-full bg-[#5a3e2a]/10 flex items-center justify-center text-[#5a3e2a]">
                    <MdMail className="text-xl" />
                </div>
                <div className="flex flex-col gap-1">
                    <h4 className="text-lg font-bold text-[#161413]">Email Us</h4>
                    <p className="text-sm text-[#7e746d] mb-2">For detailed inquiries or documents.</p>
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-col">
                            <span className="text-xs font-semibold uppercase text-[#FF914D] tracking-wide">General Inquiries & Bookings</span>
                            <a className="text-[#5a3e2a] font-medium hover:underline" href="mailto:holidays@expeditions.lk">holidays@expeditions.lk</a>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xs font-semibold uppercase text-[#FF914D] tracking-wide">Alternative Email</span>
                            <a className="text-[#5a3e2a] font-medium hover:underline" href="mailto:info@yalanationalparksrilanka.com">info@yalanationalparksrilanka.com</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex gap-4 items-start">
                <div className="size-12 shrink-0 rounded-full bg-[#5a3e2a]/10 flex items-center justify-center text-[#5a3e2a]">
                    <MdCall className="text-xl" />
                </div>
                <div className="flex flex-col gap-1">
                    <h4 className="text-lg font-bold text-[#161413]">Call or WhatsApp</h4>
                    <p className="text-sm text-[#7e746d] mb-2">Immediate assistance during office hours.</p>
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-col">
                            <span className="text-xs font-semibold uppercase text-[#FF914D] tracking-wide">Sri Lanka Office Phone</span>
                            <a className="text-[#5a3e2a] font-medium hover:underline" href="tel:+94717884499">+94 717 88 44 99</a>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xs font-semibold uppercase text-[#FF914D] tracking-wide">WhatsApp / Viber Only</span>
                            <a className="text-[#5a3e2a] font-medium hover:underline" href="https://wa.me/94772335051">+94 772 335 051</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

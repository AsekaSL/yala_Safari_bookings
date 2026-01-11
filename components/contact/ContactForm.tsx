export default function ContactForm() {
    return (
        <div className="bg-[#f7f7f6] p-8 rounded-xl border border-[#e3e0de] shadow-sm">
            <h3 className="text-[#5a3e2a] text-2xl font-bold font-display mb-2">Send Us a Message</h3>
            <p className="text-[#7e746d] text-sm mb-6">Use this form for general inquiries, specific booking questions, or custom tour requests.</p>
            <form className="flex flex-col gap-5">
                <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-semibold text-[#161413]" htmlFor="name">Your Name</label>
                    <input
                        className="w-full rounded-lg border border-[#d1cec8] bg-white px-4 py-2.5 text-sm text-[#161413] focus:border-[#5a3e2a] focus:ring-1 focus:ring-[#5a3e2a] outline-none transition-all"
                        id="name"
                        placeholder="Enter your full name"
                        type="text"
                    />
                </div>
                <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-semibold text-[#161413]" htmlFor="email">Your Email</label>
                    <input
                        className="w-full rounded-lg border border-[#d1cec8] bg-white px-4 py-2.5 text-sm text-[#161413] focus:border-[#5a3e2a] focus:ring-1 focus:ring-[#5a3e2a] outline-none transition-all"
                        id="email"
                        placeholder="Enter your email address"
                        type="email"
                    />
                </div>
                <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-semibold text-[#161413]" htmlFor="subject">Subject</label>
                    <select
                        className="w-full rounded-lg border border-[#d1cec8] bg-white px-4 py-2.5 text-sm text-[#161413] focus:border-[#5a3e2a] focus:ring-1 focus:ring-[#5a3e2a] outline-none transition-all"
                        id="subject"
                    >
                        <option>General Inquiry</option>
                        <option>Safari Booking</option>
                        <option>Custom Tour Request</option>
                        <option>Other</option>
                    </select>
                </div>
                <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-semibold text-[#161413]" htmlFor="message">Your Message</label>
                    <textarea
                        className="w-full rounded-lg border border-[#d1cec8] bg-white px-4 py-2.5 text-sm text-[#161413] focus:border-[#5a3e2a] focus:ring-1 focus:ring-[#5a3e2a] outline-none transition-all resize-none"
                        id="message"
                        placeholder="How can we help you plan your adventure?"
                        rows={5}
                    ></textarea>
                </div>
                <button
                    className="mt-2 flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 bg-[#5a3e2a] hover:bg-[#4a3222] text-white text-base font-bold leading-normal transition-colors shadow-md"
                    type="button"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
}

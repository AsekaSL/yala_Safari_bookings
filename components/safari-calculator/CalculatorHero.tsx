import Link from 'next/link';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

export default function CalculatorHero() {
    return (
        <div className="max-w-[1280px] mx-auto mb-8 md:mb-12 text-center md:text-left">
            <div className="flex items-center gap-2 text-sm text-[#7e746d] mb-4 justify-center md:justify-start">
                <Link className="hover:text-[#5a3e2a]" href="/">Home</Link>
                <MdChevronRight className="text-[16px]" />
                <span className="text-[#5a3e2a] font-medium">Safari Booking Form</span>
            </div>
            <h1 className="text-[#5a3e2a] text-3xl md:text-4xl lg:text-5xl font-bold font-display leading-tight">Safari Booking Calculator</h1>
            <p className="text-[#7e746d] mt-3 text-lg max-w-2xl">Customize your wildlife adventure. Get live pricing and secure your jeep instantly.</p>
        </div>
    );
}

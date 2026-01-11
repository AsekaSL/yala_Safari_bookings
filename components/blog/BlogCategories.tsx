import { MdAutoStories, MdCalendarMonth, MdMenuBook, MdPhotoCamera, MdTempleBuddhist, MdVisibility, MdVolunteerActivism } from "react-icons/md";

export default function BlogCategories() {
    return (
        <div className="bg-background-light border-y border-[#e3e0de] py-8 sticky top-[65px] z-40 shadow-sm overflow-hidden">
            <div className="px-4 md:px-20 max-w-[1280px] mx-auto">
                <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide no-scrollbar mask-gradient">
                    <button className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-[#e3e0de] text-[#2E1F14] whitespace-nowrap hover:border-[#FF914D] hover:text-[#FF914D] transition-all shadow-sm group">
                        <MdVisibility className="text-[20px] text-[#5a3e2a] group-hover:text-[#FF914D]" />
                        <span className="font-medium text-sm">Latest Sightings</span>
                    </button>
                    <button className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-[#e3e0de] text-[#2E1F14] whitespace-nowrap hover:border-[#FF914D] hover:text-[#FF914D] transition-all shadow-sm group">
                        <MdMenuBook className="text-[20px] text-[#5a3e2a] group-hover:text-[#FF914D]" />
                        <span className="font-medium text-sm">Deep Dives</span>
                    </button>
                    <button className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-[#e3e0de] text-[#2E1F14] whitespace-nowrap hover:border-[#FF914D] hover:text-[#FF914D] transition-all shadow-sm group">
                        <MdPhotoCamera className="text-[20px] text-[#5a3e2a] group-hover:text-[#FF914D]" />
                        <span className="font-medium text-sm">Photography</span>
                    </button>
                    <button className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-[#e3e0de] text-[#2E1F14] whitespace-nowrap hover:border-[#FF914D] hover:text-[#FF914D] transition-all shadow-sm group">
                        <MdVolunteerActivism className="text-[20px] text-[#5a3e2a] group-hover:text-[#FF914D]" />
                        <span className="font-medium text-sm">Conservation</span>
                    </button>
                    <button className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-[#e3e0de] text-[#2E1F14] whitespace-nowrap hover:border-[#FF914D] hover:text-[#FF914D] transition-all shadow-sm group">
                        <MdAutoStories className="text-[20px] text-[#5a3e2a] group-hover:text-[#FF914D]" />
                        <span className="font-medium text-sm">Safari Stories</span>
                    </button>
                    <button className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-[#e3e0de] text-[#2E1F14] whitespace-nowrap hover:border-[#FF914D] hover:text-[#FF914D] transition-all shadow-sm group">
                        <MdTempleBuddhist className="text-[20px] text-[#5a3e2a] group-hover:text-[#FF914D]" />
                        <span className="font-medium text-sm">Local Culture</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

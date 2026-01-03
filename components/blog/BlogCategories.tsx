import React from 'react';

export default function BlogCategories() {
    return (
        <div className="bg-background-light border-y border-[#e3e0de] py-8 sticky top-[65px] z-40 shadow-sm overflow-hidden">
            <div className="px-4 md:px-20 max-w-[1280px] mx-auto">
                <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide no-scrollbar mask-gradient">
                    <button className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-[#e3e0de] text-desert-brown whitespace-nowrap hover:border-accent hover:text-accent transition-all shadow-sm group">
                        <span className="material-symbols-outlined text-[20px] text-primary group-hover:text-accent">visibility</span>
                        <span className="font-medium text-sm">Latest Sightings</span>
                    </button>
                    <button className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-[#e3e0de] text-desert-brown whitespace-nowrap hover:border-accent hover:text-accent transition-all shadow-sm group">
                        <span className="material-symbols-outlined text-[20px] text-primary group-hover:text-accent">menu_book</span>
                        <span className="font-medium text-sm">Deep Dives</span>
                    </button>
                    <button className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-[#e3e0de] text-desert-brown whitespace-nowrap hover:border-accent hover:text-accent transition-all shadow-sm group">
                        <span className="material-symbols-outlined text-[20px] text-primary group-hover:text-accent">photo_camera</span>
                        <span className="font-medium text-sm">Photography</span>
                    </button>
                    <button className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-[#e3e0de] text-desert-brown whitespace-nowrap hover:border-accent hover:text-accent transition-all shadow-sm group">
                        <span className="material-symbols-outlined text-[20px] text-primary group-hover:text-accent">volunteer_activism</span>
                        <span className="font-medium text-sm">Conservation</span>
                    </button>
                    <button className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-[#e3e0de] text-desert-brown whitespace-nowrap hover:border-accent hover:text-accent transition-all shadow-sm group">
                        <span className="material-symbols-outlined text-[20px] text-primary group-hover:text-accent">auto_stories</span>
                        <span className="font-medium text-sm">Safari Stories</span>
                    </button>
                    <button className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-[#e3e0de] text-desert-brown whitespace-nowrap hover:border-accent hover:text-accent transition-all shadow-sm group">
                        <span className="material-symbols-outlined text-[20px] text-primary group-hover:text-accent">calendar_month</span>
                        <span className="font-medium text-sm">When to Visit</span>
                    </button>
                    <button className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-[#e3e0de] text-desert-brown whitespace-nowrap hover:border-accent hover:text-accent transition-all shadow-sm group">
                        <span className="material-symbols-outlined text-[20px] text-primary group-hover:text-accent">temple_buddhist</span>
                        <span className="font-medium text-sm">Local Culture</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

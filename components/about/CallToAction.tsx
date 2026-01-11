export default function CallToAction() {
    return (
        <div className="bg-[#FFF5E1] py-20 border-t border-[#e6dfd8]">
            <div className="layout-container flex h-full grow flex-col">
                <div className="px-4 md:px-20 flex flex-1 justify-center">
                    <div className="layout-content-container flex flex-col max-w-[1280px] flex-1 items-center text-center">
                        <h2 className="text-[#5a3e2a] text-3xl md:text-5xl font-bold font-display mb-6">
                            Join Us in Exploring the Wild Responsibly
                        </h2>
                        <p className="text-[#7e746d] text-lg max-w-2xl mb-10">
                            Ready to write your own story in the jungle? Let us guide you on an adventure you will never forget.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                            <button className="flex min-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-8 bg-[#5a3e2a] hover:bg-[#4a3222] text-white text-base font-bold leading-normal tracking-[0.015em] transition-all shadow-lg hover:translate-y-[-2px]">
                                Explore Safari Packages
                            </button>
                            <button className="flex min-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-8 bg-transparent border-2 border-[#5a3e2a] text-[#5a3e2a] hover:bg-[#5a3e2a] hover:text-white text-base font-bold leading-normal tracking-[0.015em] transition-all hover:translate-y-[-2px]">
                                Contact Our Team
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

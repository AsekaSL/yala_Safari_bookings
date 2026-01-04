import { feature } from '@/lib/data';
import { FeatureContainer } from '@/types';

export default function WhyYalaSection() {
    return (
        <div className="bg-white py-16 md:py-24">
            <div className="layout-container flex h-full grow flex-col">
                <div className="px-4 md:px-20 flex flex-1 justify-center">
                    <div className="layout-content-container flex flex-col max-w-[1280px] flex-1">
                        <div className="flex flex-col gap-10">
                            <div className="flex flex-col gap-4 text-center md:text-left">
                                <h2 className="text-primary tracking-tight text-3xl font-bold font-display leading-tight md:text-4xl">
                                    Why Choose Yala?
                                </h2>
                                <p className="text-[#7e746d] text-lg font-normal leading-relaxed max-w-[720px]">
                                    Discover the untamed beauty of Sri Lanka's most famous national park, where the jungle meets the Indian Ocean.
                                </p>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                {/* Feature */}
                                {
                                    feature.map((feat : FeatureContainer) => (
                                        <div key={feat.icon} className="flex flex-col gap-4 rounded-xl border border-[#e3e0de] bg-background-light p-6 hover:shadow-md transition-shadow group">
                                            <div className={`size-12 rounded-full flex items-center justify-center group-hover:text-white transition-colors ${feat.style}`}>
                                                <span className="material-symbols-outlined">{feat.icon}</span>
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <h3 className="text-[#161413] text-xl font-bold font-display leading-tight">{feat.title}</h3>
                                                <p className="text-[#7e746d] text-sm leading-relaxed">{feat.description}</p>
                                            </div>
                                        </div>
                                    ))
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

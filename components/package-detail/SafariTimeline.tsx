import { PackageDetail } from '@/types';

interface SafariTimelineProps {
    pkg: PackageDetail;
}

export default function SafariTimeline({ pkg }: SafariTimelineProps) {
    return (
        <div>
            <h3 className="text-2xl font-bold font-display text-primary mb-8">Safari Timeline</h3>
            <div className="relative border-l-2 border-primary/20 ml-3 md:ml-6 space-y-10 pb-4">
                {
                    pkg.itinerary.map((item, index) => (
                        <div key={index} className="relative pl-8 md:pl-12 group">
                            <div className="absolute -left-[9px] top-1 h-5 w-5 rounded-full border-4 border-background-light bg-primary"></div>
                            <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                                <span className="font-bold text-accent text-lg w-24 shrink-0">{item.time}</span>
                                <h4 className="font-bold text-[#161413] text-lg">{item.title}</h4>
                            </div>
                            <p className="text-[#5a5a5a] text-sm mt-1">{item.description}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

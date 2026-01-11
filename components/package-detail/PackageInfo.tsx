import { PackageDetail } from "@/types";
import { MdCancel, MdCheckCircle } from "react-icons/md";

interface PackageInfoProps {
    pkg: PackageDetail;
}

export default function PackageInfo({ pkg }: PackageInfoProps) {
    return (
        <div className="flex flex-col gap-16">
            <div className="flex flex-col gap-4">
                <h2 className="text-[#5a3e2a] text-3xl font-bold font-display">{pkg.subtitle}</h2>
                <p className="text-[#5a5a5a] text-lg leading-relaxed">
                    {pkg.description}
                </p>
            </div>
            <div className="bg-white rounded-xl border border-[#e3e0de] p-6 md:p-8 shadow-sm">
                <h3 className="text-2xl font-bold font-display text-[#5a3e2a] mb-6">Package Overview</h3>
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-wide text-[#7e746d] mb-4">What's Included</h4>
                        <ul className="flex flex-col gap-3">
                            {
                                pkg.inclusions.map((item, index) => (
                                    <li key={index} className="flex gap-3 text-[#161413]">
                                        <MdCheckCircle className="text-green-600 shrink-0 text-2xl" />
                                        <span>{item}</span>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-wide text-[#7e746d] mb-4">What's Not Included</h4>
                        <ul className="flex flex-col gap-3">
                            {
                                pkg.exclusions.map((item, index) => (
                                    <li key={index} className="flex gap-3 text-[#5a5a5a]">
                                        <MdCancel className="text-red-400 shrink-0 text-2xl" />
                                        <span>{item}</span>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

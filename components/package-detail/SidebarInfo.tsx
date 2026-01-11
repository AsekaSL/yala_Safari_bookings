
'use client';
import { PackageDetail } from '@/types';
import { MdAccountBalance, MdCreditCard, MdFamilyRestroom, MdFavorite, MdPhotoCamera } from 'react-icons/md';
import { useRouter } from 'next/navigation';

export default function SidebarInfo({ pkg }: { pkg: PackageDetail }) {

    const router = useRouter();

    return (
        <div className="sticky top-24 flex flex-col gap-6">
            <div className="bg-[#FFF5E1] p-6 rounded-xl border border-[#e3e0de]">
                <h3 className="text-lg font-bold font-display text-[#5a3e2a] mb-4">Who This Is Best For</h3>
                <div className="flex flex-col gap-4">
                    <div className="flex gap-3">
                        <div className="size-8 rounded-full bg-[#5a3e2a]/10 flex items-center justify-center text-[#5a3e2a] shrink-0">
                            <MdPhotoCamera className="text-sm" />
                        </div>
                        <div>
                            <h4 className="font-bold text-sm text-[#161413]">Photographers</h4>
                            <p className="text-xs text-[#5a5a5a]">Best lighting conditions and animal activity.</p>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <div className="size-8 rounded-full bg-[#5a3e2a]/10 flex items-center justify-center text-[#5a3e2a] shrink-0">
                            <MdFamilyRestroom className="text-sm" />
                        </div>
                        <div>
                            <h4 className="font-bold text-sm text-[#161413]">Families</h4>
                            <p className="text-xs text-[#5a5a5a]">Short duration (4-5 hrs) is ideal for kids.</p>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <div className="size-8 rounded-full bg-[#5a3e2a]/10 flex items-center justify-center text-[#5a3e2a] shrink-0">
                            <MdFavorite className="text-sm" />
                        </div>
                        <div>
                            <h4 className="font-bold text-sm text-[#161413]">Couples</h4>
                            <p className="text-xs text-[#5a5a5a]">Private and intimate experience in nature.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-[#e3e0de] shadow-sm">
                <h3 className="text-lg font-bold font-display text-[#5a3e2a] mb-4">Pricing & Policies</h3>
                <div className="space-y-4">
                    <div className="border-b border-gray-100 pb-2">
                        {
                            pkg.pricingPerPerson ? pkg.pricingPerPerson.map((item, index) => (
                                <div key={index} className="flex justify-between text-sm mb-1">
                                    <span className="text-[#5a5a5a]">{item.label}</span>
                                    <span className="font-bold text-[#161413]">$ {item.price}</span>
                                </div>
                            ))
                            :
                            pkg.price.jeep && (
                                <div  className="flex justify-between text-sm mb-1">
                                    <span className="text-[#5a5a5a]">Jeep</span>
                                    <span className="font-bold text-[#161413]">{pkg.price.jeep}</span>
                                </div>
                            )
                        }
                    </div>
                    <div className="flex flex-col gap-1">
                        <h4 className="text-xs font-bold uppercase text-[#7e746d]">Cancellation</h4>
                        <p className="text-xs text-[#5a5a5a] leading-relaxed">Full refund if cancelled 24 hours before the safari start time. No refund for last-minute cancellations.</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h4 className="text-xs font-bold uppercase text-[#7e746d]">Payment Methods</h4>
                        <div className="flex gap-2 text-[#5a5a5a]">
                            <MdCreditCard className="text-lg" />
                            <MdAccountBalance className="text-lg" />
                            <span className="text-xs pt-0.5">Cash on arrival accepted</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#5a3e2a] p-6 rounded-xl text-white text-center">
                <h4 className="font-bold text-lg font-display mb-2">Ready for Adventure?</h4>
                <p className="text-sm text-white/80 mb-4">Book your morning safari now and secure the best jeep.</p>
                <button onClick={() => router.push('/safari-calculator')} className="w-full cursor-pointer bg-[#FF914D] hover:bg-orange-600 text-white font-bold py-3 rounded-lg transition-colors shadow-md">
                    Check Availability
                </button>
            </div>
        </div>
    );
}

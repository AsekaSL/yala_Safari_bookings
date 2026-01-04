'use client'
import React, { useState } from 'react';
import Dropdown from './Dropdown';
import { categories, durations, packagesData, prices } from '@/lib/data';
import { Badge, Duration, PackageCategory, PackageDetail, PriceRange } from '@/types';
import Link from 'next/link';

type PackageArticleProps = {
  pkg: PackageDetail
}

// const badgeClass = {
//         'primary': 'bg-primary',
//         'accent': 'bg-accent',
//         'sky-blue': 'bg-sky-blue'
//     }[badgeColor] || 'bg-primary';


function PackageCard({ pkg }: PackageArticleProps) {

    

    return (
        <div className="flex flex-col rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
            <div
                className="h-56 bg-cover bg-center relative"
                style={{ backgroundImage: `url("${pkg.heroImage}")` }}
            >
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
                {pkg.badge && (
                    <div className="absolute top-3 right-3">
                        <span className={`${pkg.badge && 'bg-accent' } text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-sm`}>{pkg.badge}</span>
                    </div>
                )}
            </div>
            <div className="flex flex-col p-6  flex-1">
                <div className="">
                    <h3 className="text-primary text-xl font-bold font-display">{pkg.title}</h3>
                    <p className="text-[#7e746d] line-clamp-2 text-sm mt-2 leading-relaxed">{pkg.description}</p>
                </div>
                <div className=" flex-col mt-2 gap-3">
                    <p className="text-xs  my-2 text-[#7e746d] font-medium uppercase tracking-wide">Starting from</p>
                    <div className="flex items-baseline gap-1 my-2">
                        <span className="text-[#161413] text-3xl font-bold tracking-tight">{ (pkg.pricingPerPerson) ? pkg.pricingPerPerson[0].price : pkg.price.jeep}</span>
                        <span className="text-[#7e746d] text-sm font-medium">$ / {pkg.pricingPerPerson ? 'per person' : 'per jeep'} </span>
                    </div>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                        {
                            pkg.itinerary.map((item, index) => (
                                <li key={index} className="flex items-center text-sm text-primary">
                                    <span className="material-symbols-outlined text-accent mr-3">{item.icon}</span>
                                    {item.title}
                                </li>
                            ))
                        }
                </ul>
                <Link href={`/packages/${pkg.id}`}>
                    <button className="w-full mt-4 cursor-pointer rounded-lg h-11 px-4 bg-primary text-white text-sm font-bold hover:bg-[#4a3222] transition-colors shadow-sm">View Packages</button>
                </Link>
            </div>
        </div>
    );
}

export default function PackagesList() {
    // const packages: PackageProps[] = [
    //     {
    //         title: "Private All-Inclusive",
    //         description: "The ultimate hassle-free experience with a dedicated jeep and naturalist.",
    //         price: "$142",
    //         priceUnit: "/ person",
    //         image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDX0XdnalZ-eocWpBmw-70DR2eZIzhFP6gD2C_dYzplUqqJ0PZVPF7gbLTtmpkro0Y3PXXsn_6Cndonpo_UzyO8Kcs_uI7-dYx0MdySTiWcHrPC9w594x6Kv0PyTaB2yOwte462DSTGQltO2wpYcw_hYzqD4X-KFLFIyJoeUI_HhqGqLgAmR9JhiiNbJ0GLa03yazqMzx7cep5_Y-I165cVyJ5DKKsB3CmNuL2Do2sPlAz9EOFWxqHQpLhYsI8PFuNBfkC2maiNFX1y",
    //         badge: "Luxury",
    //         badgeColor: "primary",
    //         itinerary: [
    //             { icon: "check_circle", text: "Private Jeep" },
    //             { icon: "confirmation_number", text: "Tickets Included" },
    //             { icon: "restaurant", text: "Snacks & Refreshments" },
    //         ]
    //     },
    //     {
    //         title: "Shared All-Inclusive",
    //         description: "Join other travelers for a fun, social, and cost-effective adventure.",
    //         price: "$55",
    //         priceUnit: "/ person",
    //         image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQE7lPcuAqhsHCE3DSGAB-7pZ1yJr0qhd1_C4o11reDqDhPPXmBvaMVLb70CchHW7hAnjY54zoDSVp4opdt2HIqaBHVg9M-_ZQFqBW52D4JlvNI0wWovy3mYq5HwmCn6FcWVGoIlDVrF33Exc3jNdxgVKUvKTGr0hWMINTmCAfiQSx-RnT9aq0Yop6PEvAlNZdaHKkmFnw1rPs0VwnRBdNqgXudD2zUuVPi37vfDQVMcAgsWBt8jCYy1KCcqGeiTZ2lMTf5w_C8SBt",
    //         badge: "Social",
    //         badgeColor: "sky-blue",
    //         features: [
    //             { icon: "groups", text: "Max 6 Guests" },
    //             { icon: "confirmation_number", text: "Tickets Included" },
    //             { icon: "water_drop", text: "Water Provided" },
    //         ]
    //     },
    //     {
    //         title: "Private Jeep Only",
    //         description: "Hire the vehicle and driver. Perfect for those arranging their own tickets.",
    //         price: "Rs. 15,000",
    //         priceUnit: "/ jeep",
    //         image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC-lHG_f3Gan9XR1DGYtr0ho0d_fs-LG2Ro_MJ4AyHk9IMHt8WqmhBzqwNrgCtjhFaUIssfVDGEc4HMOqHSwKCUPchNGSpFfs8tYVDUBOhrJ_fzB0JTGO8qmcOxgdi-6j1nvLmV31ljjqnRToenvZK7QaUMvFZ63bua1IinTtFc7aZbXSx-QP7-anknim-Yh4Bd2AAt__NZ7vW7lHDfHlFEdcFX1OMd31ArESy24O7ySHpK8wGrzAhYXMFjG09jy53uMCThOY6nDEC6",
    //         features: [
    //             { icon: "directions_car", text: "Jeep + Driver Only" },
    //             { icon: "schedule", text: "Flexible Timing" },
    //             { icon: "local_activity", text: "Gate Fees Excluded" },
    //         ]
    //     },
    //     {
    //         title: "Shared Jeep Only",
    //         description: "The most economical way to see Yala. Pay only for your seat.",
    //         price: "Rs. 4,500",
    //         priceUnit: "/ seat",
    //         image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCKxeLK39nuyogrN0gZ-lqLg3OWTzYx3qWNWThEzJAlFfO-Cd3aFXiMlkDxCg9c6YDsoW1gP6t37lp7Ivd-FNnud32FCkSlQ26xMV46FxIGA0u7qGP8LxAR-M5se5KI8JYeqsCrICDoOQsyUEG5-mB2jNX5WVIvtTsi6MzhG-HR4JBHxOFJzQepm4TE2wmERiEGsZyRfAHms2bLL7ueNDdY27OBFReLKDkSZcPTzjb8Fop2eVENM-A4OtxuVXlzoN9A4FPHCIXK-M_d",
    //         badge: "Budget",
    //         badgeColor: "accent",
    //         features: [
    //             { icon: "savings", text: "Budget Friendly" },
    //             { icon: "event_seat", text: "Pay Per Seat" },
    //             { icon: "local_activity", text: "Gate Fees Excluded" },
    //         ]
    //     }
    // ];

    const [category ,setCategory] = useState(categories[0])
    const [duration ,setDuration] = useState(durations[0])
    const [price ,setPrice] = useState(prices[0])
    let filteredPackagesData = (duration != Duration.DURATION_ALL) ? Object.values(packagesData).filter((pck) => pck.durationCategory === duration) : Object.values(packagesData)
    filteredPackagesData = (price != PriceRange.PRICE_RANGE_ALL) ? filteredPackagesData.filter((pck) => pck.priceRange === price) : filteredPackagesData

    return (
        <div className="bg-background-cream py-16 md:py-24" id="packages">
            <div className="layout-container flex h-full grow flex-col">
                <div className="px-4 md:px-20 flex flex-1 justify-center">
                    <div className="layout-content-container flex flex-col max-w-[1280px] flex-1">
                        <div className="flex flex-col gap-10">
                            <div className="text-center max-w-3xl mx-auto mb-4">
                                <p className="text-[#7e746d] text-lg">We offer a range of safari options tailored to different needs and budgets. From all-inclusive luxury to flexible jeep hires.</p>
                            </div>

                             {/* Filters */}
                            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8 bg-primary/90 backdrop-blur-md p-4 rounded-xl border border-[#383429] shadow-xl">
                                <div className="flex flex-wrap gap-3">
                                    <button onClick={() => {setCategory(categories[0]); setDuration(Duration.DURATION_ALL); setPrice(PriceRange.PRICE_RANGE_ALL);}} className="flex h-9 items-center gap-2 rounded-lg bg-primary px-4 text-white text-sm font-bold transition-transform active:scale-95">
                                        All Packages
                                    </button>
                                    <Dropdown selectedOption={category} setSelectedOption={setCategory} options={categories} />
                                    <Dropdown selectedOption={duration} setSelectedOption={setDuration} options={durations} />
                                    <Dropdown selectedOption={price} setSelectedOption={setPrice} options={prices} />
                                    
                                </div>
                                <div className="flex items-center gap-2 text-sm text-white">
                                    <span>Sort by:</span>
                                    <button className="flex items-center gap-1 text-white font-medium hover:text-primary transition-colors">
                                        Recommended <span className="material-symbols-outlined text-[18px]">sort</span>
                                    </button>
                                </div>
                            </div>
                            {
                                (   (category === PackageCategory.CATEGORY_ALL || category == PackageCategory.PRIVATE_INCLUSIVE) && Object.values(filteredPackagesData).filter((pck) => pck.packageCategory === PackageCategory.PRIVATE_INCLUSIVE).length > 0) &&
                                (
                                    <>
                                        <section className="pt-5 bg-surface-darker" id="private-all">
                                            <div className="max-w-7xl mx-auto px-4 md:px-8">
                                                <div className="flex flex-col lg:flex-row gap-12">
                                                    {/* Content */}
                                                    <div className="flex-1">
                                                        <div className="flex items-center gap-3 mb-4">
                                                            <span className="bg-primary/10 text-primary p-2 rounded-lg">
                                                                <span className="material-symbols-outlined">diamond</span>
                                                            </span>
                                                            <h2 className="text-3xl font-bold">Private All-Inclusive</h2>
                                                        </div>
                                                        <p className="text-desert-brown mb-8 text-lg">
                                                            Our most popular premium option. You get the entire jeep to yourself, complete with tickets purchased in advance (no queuing), hotel pickup/drop-off, and refreshments.
                                                        </p>
                                                        {/* Feature List */}
                                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                                            <div className="flex items-start gap-3">
                                                                <span className="material-symbols-outlined text-accent mt-1">check_circle</span>
                                                                <div>
                                                                    <h4 className="font-bold text-desert-brown">Zero Queues</h4>
                                                                    <p className="text-sm text-gray-400">Tickets pre-purchased</p>
                                                                </div>
                                                            </div>
                                                            <div className="flex items-start gap-3">
                                                                <span className="material-symbols-outlined text-accent mt-1">check_circle</span>
                                                                <div>
                                                                    <h4 className="font-bold text-desert-brown">Private Guide</h4>
                                                                    <p className="text-sm text-gray-400">Dedicated tracker</p>
                                                                </div>
                                                            </div>
                                                            <div className="flex items-start gap-3">
                                                                <span className="material-symbols-outlined text-accent mt-1">check_circle</span>
                                                                <div>
                                                                    <h4 className="font-bold text-desert-brown">Hotel Pickup</h4>
                                                                    <p className="text-sm text-gray-400">From Tissamaharama area</p>
                                                                </div>
                                                            </div>
                                                            <div className="flex items-start gap-3">
                                                                <span className="material-symbols-outlined text-accent mt-1">check_circle</span>
                                                                <div>
                                                                    <h4 className="font-bold text-desert-brown">Refreshments</h4>
                                                                    <p className="text-sm text-gray-400">Water & fruit basket</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                            {Object.values(filteredPackagesData).filter((pkg) => pkg.packageCategory === PackageCategory.PRIVATE_INCLUSIVE).map((pkg) => (
                                                <PackageCard key={pkg.id} pkg={pkg} />
                                            ))}
                                        </div>
                                    </>
                                )
                            }

                            {
                                ((category === PackageCategory.CATEGORY_ALL || category === PackageCategory.SHARED_INCLUSIVE) && Object.values(filteredPackagesData).filter((pck) => pck.packageCategory === PackageCategory.SHARED_INCLUSIVE).length > 0) && (
                                    <>
                                        {/* SECTION B: Shared All-Inclusive */}
                                        <section className="pt-5 bg-surface-darker" id="shared-all">
                                            <div className="max-w-7xl mx-auto px-4 md:px-8">
                                                <div className="flex flex-col lg:flex-row-reverse gap-12">
                                                    {/* Content */}
                                                    <div className="flex-1">
                                                        <div className="flex items-center gap-3 mb-4">
                                                            <span className="bg-primary/10 text-primary p-2 rounded-lg">
                                                                <span className="material-symbols-outlined">groups</span>
                                                            </span>
                                                            <h2 className="text-3xl font-bold">Shared All-Inclusive</h2>
                                                        </div>
                                                        <p className="text-desert-brown mb-8 text-lg">
                                                            Ideal for solo travelers or couples wanting to keep costs low without the hassle. We group you with other travelers. Includes tickets and pickup from a central meeting point.
                                                        </p>
                                                        {/* Feature List */}
                                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                                            <div className="flex items-start gap-3">
                                                                <span className="material-symbols-outlined text-accent mt-1">savings</span>
                                                                <div>
                                                                    <h4 className="font-bold text-desert-brown">Cost Effective</h4>
                                                                    <p className="text-sm text-gray-400">Split costs with others</p>
                                                                </div>
                                                            </div>
                                                            <div className="flex items-start gap-3">
                                                                <span className="material-symbols-outlined text-accent mt-1">confirmation_number</span>
                                                                <div>
                                                                    <h4 className="font-bold text-desert-brown">Tickets Included</h4>
                                                                    <p className="text-sm text-gray-400">No gate payment needed</p>
                                                                </div>
                                                            </div>
                                                            <div className="flex items-start gap-3">
                                                                <span className="material-symbols-outlined text-accent mt-1">handshake</span>
                                                                <div>
                                                                    <h4 className="font-bold text-desert-brown">Meet People</h4>
                                                                    <p className="text-sm text-gray-400">Social experience</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                        </section>
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                            {Object.values(filteredPackagesData).filter((pkg) => pkg.packageCategory === PackageCategory.SHARED_INCLUSIVE).map((pkg) => (
                                                <PackageCard key={pkg.id} pkg={pkg} />
                                            ))}
                                        </div>

                                    </>
                                )
                            }

                            {
                                ((category === PackageCategory.CATEGORY_ALL || category === PackageCategory.PRIVATE_JEEP_ONLY) && Object.values(filteredPackagesData).filter((pck) => pck.packageCategory === PackageCategory.PRIVATE_JEEP_ONLY).length > 0)  && (
                                    <>
                                        
                                        {/* SECTION C: Private Jeep Hire Only */}
                                        <section className="py-10 bg-surface-darker" id="private-all">
                                            <div className="max-w-7xl mx-auto px-4 md:px-8">
                                                <div className="flex flex-col lg:flex-row gap-12">
                                                    {/* Content */}
                                                    <div className="flex-1">
                                                        <div className="flex items-center gap-3 mb-4">
                                                            <span className="bg-primary/10 text-primary p-2 rounded-lg">
                                                                <span className="material-symbols-outlined">directions_car</span>
                                                            </span>
                                                            <h2 className="text-3xl font-bold">Private Jeep Hire Only</h2>
                                                        </div>
                                                        <p className="text-desert-brown mb-8 text-lg">
                                                            Hire the vehicle and driver. You must queue at the ticket counter and pay entrance fees separately. Ideal if you have local IDs or specific permits.
                                                        </p>
                                                        {/* Feature List */}
                                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                                            <div className="flex items-start gap-3">
                                                                <span className="material-symbols-outlined text-accent mt-1">check_circle</span>
                                                                <div>
                                                                    <h4 className="font-bold text-desert-brown">Zero Queues</h4>
                                                                    <p className="text-sm text-gray-400">Tickets pre-purchased</p>
                                                                </div>
                                                            </div>
                                                            <div className="flex items-start gap-3">
                                                                <span className="material-symbols-outlined text-accent mt-1">check_circle</span>
                                                                <div>
                                                                    <h4 className="font-bold text-desert-brown">Private Guide</h4>
                                                                    <p className="text-sm text-gray-400">Dedicated tracker</p>
                                                                </div>
                                                            </div>
                                                            <div className="flex items-start gap-3">
                                                                <span className="material-symbols-outlined text-accent mt-1">check_circle</span>
                                                                <div>
                                                                    <h4 className="font-bold text-desert-brown">Hotel Pickup</h4>
                                                                    <p className="text-sm text-gray-400">From Tissamaharama area</p>
                                                                </div>
                                                            </div>
                                                            <div className="flex items-start gap-3">
                                                                <span className="material-symbols-outlined text-accent mt-1">check_circle</span>
                                                                <div>
                                                                    <h4 className="font-bold text-desert-brown">Refreshments</h4>
                                                                    <p className="text-sm text-gray-400">Water & fruit basket</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                            {Object.values(filteredPackagesData).filter((pkg) => pkg.packageCategory === PackageCategory.PRIVATE_JEEP_ONLY).map((pkg) => (
                                                <PackageCard key={pkg.id} pkg={pkg} />
                                            ))}
                                        </div>
                                    </>
                                )
                            }

                            {
                                ((category === PackageCategory.CATEGORY_ALL || category === PackageCategory.SHARED_JEEP_ONLY) && Object.values(filteredPackagesData).filter((pck) => pck.packageCategory === PackageCategory.SHARED_JEEP_ONLY).length > 0) && (
                                    <>
                                       {/* SECTION D: Shared Jeep Only */}
                                        <section className="py-10 " id="shared-all">
                                            <div className="max-w-7xl mx-auto px-4 md:px-8">
                                                <div className="flex flex-col lg:flex-row-reverse gap-12">
                                                    {/* Content */}
                                                    <div className="flex-1">
                                                        <div className="flex items-center gap-3 mb-4">
                                                            <span className="bg-primary/10 text-primary p-2 rounded-lg">
                                                                <span className="material-symbols-outlined">event_seat</span>
                                                            </span>
                                                            <h2 className="text-3xl font-bold">Shared Jeep Seat Only</h2>
                                                        </div>
                                                        <p className="text-desert-brow mb-8 text-lg">
                                                            Reserve a single seat in a jeep. You share the jeep cost but still need to buy your own ticket at the gate. The most budget-friendly "backpacker" option.
                                                        </p>
                                                        {/* Feature List */}
                                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                                            <div className="flex items-start gap-3">
                                                                <span className="material-symbols-outlined text-accent mt-1">savings</span>
                                                                <div>
                                                                    <h4 className="font-bold text-desert-brow">Cost Effective</h4>
                                                                    <p className="text-sm text-gray-400">Split costs with others</p>
                                                                </div>
                                                            </div>
                                                            <div className="flex items-start gap-3">
                                                                <span className="material-symbols-outlined text-accent mt-1">confirmation_number</span>
                                                                <div>
                                                                    <h4 className="font-bold text-desert-brow">Tickets Included</h4>
                                                                    <p className="text-sm text-gray-400">No gate payment needed</p>
                                                                </div>
                                                            </div>
                                                            <div className="flex items-start gap-3">
                                                                <span className="material-symbols-outlined text-accent mt-1">handshake</span>
                                                                <div>
                                                                    <h4 className="font-bold text-desert-brow">Meet People</h4>
                                                                    <p className="text-sm text-gray-400">Social experience</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                        </section>
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                            {Object.values(filteredPackagesData).filter((pkg) => pkg.packageCategory === PackageCategory.SHARED_JEEP_ONLY).map((pkg) => (
                                                <PackageCard key={pkg.id} pkg={pkg} />
                                            ))}
                                        </div>
                                    </>
                                )
                            }
                            

                            <div className="mt-8 rounded-lg border border-accent/30 bg-accent/5 p-4 flex items-start gap-3">
                                <span className="material-symbols-outlined text-accent mt-0.5">info</span>
                                <div className="text-sm text-[#5a3e2a]">
                                    <span className="font-bold block mb-1">Important for Jeep-Only Packages:</span>
                                    Please note that for 'Jeep Only' packages, park entrance tickets and gate fees are <strong>not included</strong> in the price. These must be paid directly at the park entrance gate. We strongly recommend carrying cash in Sri Lankan Rupees (LKR) for these payments to avoid delays.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

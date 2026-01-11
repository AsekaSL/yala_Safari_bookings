'use client'
import React, { useState } from 'react';
import Dropdown from './Dropdown';
import { categories, durations, packagesData, prices } from '@/lib/data';
import { Badge, Duration, PackageCategory, PackageDetail, PriceRange } from '@/types';
import Link from 'next/link';
import { MdCheckCircle, MdDiamond, MdEvent, MdEventSeat, MdGroups, MdHandshake, MdInfo, MdSavings, MdSort } from 'react-icons/md';
import { MdBakeryDining, MdConfirmationNumber, MdDirectionsCar, MdDoorFront, MdEco, MdFlag, MdForest, MdHome, MdLunchDining, MdPark, MdPets, MdPhotoCamera, MdReply, MdRestaurant, MdStar, MdSupportAgent, MdVerifiedUser, MdVisibility, MdWater, MdWbSunny } from "react-icons/md";


type PackageArticleProps = {
  pkg: PackageDetail
}


function PackageCard({ pkg }: PackageArticleProps) {

     const getIcon = (iconName: string) => {
    
            const style = 'text-[#FF914D] mr-3 text-3xl';
    
            if(iconName === 'directions_car') {
                return <MdDirectionsCar className={style} />
            }else if (iconName === 'confirmation_number') {
                return <MdConfirmationNumber className={style} />;
            }else if (iconName === 'bakery_dining') {
                return <MdBakeryDining className={style} />;
            }else if (iconName === 'flag') {
                return <MdFlag className={style} />;
            }else if (iconName === 'water') {
                return <MdWater className={style} />;
            }else if (iconName === 'photo_camera') {
                return <MdPhotoCamera className={style} />;
            }else if (iconName === 'pets') {
                return <MdPets className={style} />;
            }else if (iconName === 'forest') {
                return <MdForest className={style} />;
            }else if (iconName === 'restaurant') {
                return <MdRestaurant className={style} />;
            }else if (iconName === 'visibility') {
                return <MdVisibility className={style} />;
            }else if (iconName === 'reply') {
                return <MdReply className={style} />;
            }else if (iconName === 'wb_sunny') {
                return <MdWbSunny className={style} />;
            }else if (iconName === 'gate') {
                return <MdDoorFront className={style} />;
            }else if (iconName === 'park') {
                return <MdPark className={style} />;
            }else if (iconName === 'eco') {
                return <MdEco className={style} />;
            }else if (iconName === 'lunch_dining') {
                return <MdLunchDining className={style} />;
            }else if (iconName === 'breakfast_dining') {
                return <MdBakeryDining className={style} />;
            }else if (iconName === 'home') {
                return <MdHome className={style} />;
            }
            return ''
        }

    

    return (
        <div className="flex flex-col rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
            <div
                className="h-56 bg-cover bg-center relative"
                style={{ backgroundImage: `url("${pkg.heroImage}")` }}
            >
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
                {pkg.badge && (
                    <div className="absolute top-3 right-3">
                        <span className={`${pkg.badge && 'bg-[#FF914D]' } text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-sm`}>{pkg.badge}</span>
                    </div>
                )}
            </div>
            <div className="flex flex-col p-6  flex-1">
                <div className="">
                    <h3 className="text-[#5a3e2a] text-xl font-bold font-display">{pkg.title}</h3>
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
                                <li key={index} className="flex items-center text-sm text-[#5a3e2a]">
                                    {
                                        getIcon(item.icon)
                                    }
                                    {item.title}
                                </li>
                            ))
                        }
                </ul>
                <Link href={`/packages/${pkg.id}`}>
                    <button className="w-full mt-4 cursor-pointer rounded-lg h-11 px-4 bg-[#5a3e2a] text-white text-sm font-bold hover:bg-[#4a3222] transition-colors shadow-sm">View Packages</button>
                </Link>
            </div>
        </div>
    );
}

export default function PackagesList() {

    const [category ,setCategory] = useState(categories[0])
    const [duration ,setDuration] = useState(durations[0])
    const [price ,setPrice] = useState(prices[0])
    let filteredPackagesData = (duration != Duration.DURATION_ALL) ? Object.values(packagesData).filter((pck) => pck.durationCategory === duration) : Object.values(packagesData)
    filteredPackagesData = (price != PriceRange.PRICE_RANGE_ALL) ? filteredPackagesData.filter((pck) => pck.priceRange === price) : filteredPackagesData

     const getIcon = (iconName: string) => {
    
            const style = 'text-[#FF914D] mr-3 text-3xl';
    
            if(iconName === 'directions_car') {
                return <MdDirectionsCar className={style} />
            }else if (iconName === 'confirmation_number') {
                return <MdConfirmationNumber className={style} />;
            }else if (iconName === 'bakery_dining') {
                return <MdBakeryDining className={style} />;
            }else if (iconName === 'flag') {
                return <MdFlag className={style} />;
            }else if (iconName === 'water') {
                return <MdWater className={style} />;
            }else if (iconName === 'photo_camera') {
                return <MdPhotoCamera className={style} />;
            }else if (iconName === 'pets') {
                return <MdPets className={style} />;
            }else if (iconName === 'forest') {
                return <MdForest className={style} />;
            }else if (iconName === 'restaurant') {
                return <MdRestaurant className={style} />;
            }else if (iconName === 'visibility') {
                return <MdVisibility className={style} />;
            }else if (iconName === 'reply') {
                return <MdReply className={style} />;
            }else if (iconName === 'wb_sunny') {
                return <MdWbSunny className={style} />;
            }else if (iconName === 'gate') {
                return <MdDoorFront className={style} />;
            }else if (iconName === 'park') {
                return <MdPark className={style} />;
            }else if (iconName === 'eco') {
                return <MdEco className={style} />;
            }else if (iconName === 'lunch_dining') {
                return <MdLunchDining className={style} />;
            }else if (iconName === 'breakfast_dining') {
                return <MdBakeryDining className={style} />;
            }else if (iconName === 'home') {
                return <MdHome className={style} />;
            }
            return ''
        }
   

    return (
        <div className="bg-[#FFF5E1] py-16 md:py-24" id="packages">
            <div className="layout-container flex h-full grow flex-col">
                <div className="px-4 md:px-20 flex flex-1 justify-center">
                    <div className="layout-content-container flex flex-col max-w-[1280px] flex-1">
                        <div className="flex flex-col gap-10">
                            <div className="text-center max-w-3xl mx-auto mb-4">
                                <p className="text-[#7e746d] text-lg">We offer a range of safari options tailored to different needs and budgets. From all-inclusive luxury to flexible jeep hires.</p>
                            </div>

                             {/* Filters */}
                            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8 bg-[#5a3e2a]/90 backdrop-blur-md p-4 rounded-xl border border-[#383429] shadow-xl">
                                <div className="flex flex-wrap gap-3">
                                    <button onClick={() => {setCategory(categories[0]); setDuration(Duration.DURATION_ALL); setPrice(PriceRange.PRICE_RANGE_ALL);}} className="flex h-9 items-center gap-2 rounded-lg bg-[#5a3e2a] px-4 text-white text-sm font-bold transition-transform active:scale-95">
                                        All Packages
                                    </button>
                                    <Dropdown selectedOption={category} setSelectedOption={setCategory} options={categories} />
                                    <Dropdown selectedOption={duration} setSelectedOption={setDuration} options={durations} />
                                    <Dropdown selectedOption={price} setSelectedOption={setPrice} options={prices} />
                                    
                                </div>
                                <div className="flex items-center gap-2 text-sm text-white">
                                    <span>Sort by:</span>
                                    <button className="flex items-center gap-1 text-white font-medium hover:text-[#5a3e2a] transition-colors">
                                        Recommended <MdSort className="text-[18px]" />
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
                                                            <span className="bg-[#5a3e2a]/10 text-[#5a3e2a] p-2 rounded-lg">
                                                                <MdDiamond className="text-[#5a3e2a] text-2xl" />
                                                            </span>
                                                            <h2 className="text-3xl font-bold">Private All-Inclusive</h2>
                                                        </div>
                                                        <p className="text-[#2E1F14] mb-8 text-lg">
                                                            Our most popular premium option. You get the entire jeep to yourself, complete with tickets purchased in advance (no queuing), hotel pickup/drop-off, and refreshments.
                                                        </p>
                                                        {/* Feature List */}
                                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                                            <div className="flex items-start gap-3">
                                                                <MdCheckCircle className="text-[#FF914D] text-2xl mt-1" />
                                                                <div>
                                                                    <h4 className="font-bold text-[#2E1F14]">Zero Queues</h4>
                                                                    <p className="text-sm text-gray-400">Tickets pre-purchased</p>
                                                                </div>
                                                            </div>
                                                            <div className="flex items-start gap-3">
                                                                <MdCheckCircle className="text-[#FF914D] text-2xl mt-1" />
                                                                <div>
                                                                    <h4 className="font-bold text-[#2E1F14]">Private Guide</h4>
                                                                    <p className="text-sm text-gray-400">Dedicated tracker</p>
                                                                </div>
                                                            </div>
                                                            <div className="flex items-start gap-3">
                                                                <MdCheckCircle className="text-[#FF914D] text-2xl mt-1" />
                                                                <div>
                                                                    <h4 className="font-bold text-[#2E1F14]">Hotel Pickup</h4>
                                                                    <p className="text-sm text-gray-400">From Tissamaharama area</p>
                                                                </div>
                                                            </div>
                                                            <div className="flex items-start gap-3">
                                                                <MdCheckCircle className="text-[#FF914D] text-2xl mt-1" />
                                                                <div>
                                                                    <h4 className="font-bold text-[#2E1F14]">Refreshments</h4>
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
                                        <section className="pt-5 " id="shared-all">
                                            <div className="max-w-7xl mx-auto px-4 md:px-8">
                                                <div className="flex flex-col lg:flex-row-reverse gap-12">
                                                    {/* Content */}
                                                    <div className="flex-1">
                                                        <div className="flex items-center gap-3 mb-4">
                                                            <span className="bg-[#5a3e2a]/10 text-[#5a3e2a] p-2 rounded-lg">
                                                                <MdGroups className="text-[#5a3e2a] text-2xl" />
                                                            </span>
                                                            <h2 className="text-3xl font-bold">Shared All-Inclusive</h2>
                                                        </div>
                                                        <p className="text-[#2E1F14] mb-8 text-lg">
                                                            Ideal for solo travelers or couples wanting to keep costs low without the hassle. We group you with other travelers. Includes tickets and pickup from a central meeting point.
                                                        </p>
                                                        {/* Feature List */}
                                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                                            <div className="flex items-start gap-3">
                                                                <MdSavings className="text-[#FF914D] text-2xl mt-1" />
                                                                <div>
                                                                    <h4 className="font-bold text-[#2E1F14]">Cost Effective</h4>
                                                                    <p className="text-sm text-gray-400">Split costs with others</p>
                                                                </div>
                                                            </div>
                                                            <div className="flex items-start gap-3">
                                                                <MdConfirmationNumber className="text-[#FF914D] text-2xl mt-1" />
                                                                <div>
                                                                    <h4 className="font-bold text-[#2E1F14]">Tickets Included</h4>
                                                                    <p className="text-sm text-gray-400">No gate payment needed</p>
                                                                </div>
                                                            </div>
                                                            <div className="flex items-start gap-3">
                                                                <MdHandshake className="text-[#FF914D] text-2xl mt-1" />
                                                                <div>
                                                                    <h4 className="font-bold text-[#2E1F14]">Meet People</h4>
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
                                                            <span className="bg-[#5a3e2a]/10 text-[#5a3e2a] p-2 rounded-lg">
                                                                <MdDirectionsCar className="text-[#5a3e2a] text-2xl" />
                                                            </span>
                                                            <h2 className="text-3xl font-bold">Private Jeep Hire Only</h2>
                                                        </div>
                                                        <p className="text-[#2E1F14] mb-8 text-lg">
                                                            Hire the vehicle and driver. You must queue at the ticket counter and pay entrance fees separately. Ideal if you have local IDs or specific permits.
                                                        </p>
                                                        {/* Feature List */}
                                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                                            <div className="flex items-start gap-3">
                                                                <MdCheckCircle className="text-[#FF914D] text-2xl mt-1" />
                                                                <div>
                                                                    <h4 className="font-bold text-[#2E1F14]">Zero Queues</h4>
                                                                    <p className="text-sm text-gray-400">Tickets pre-purchased</p>
                                                                </div>
                                                            </div>
                                                            <div className="flex items-start gap-3">
                                                                <MdCheckCircle className="text-[#FF914D] text-2xl mt-1" />
                                                                <div>
                                                                    <h4 className="font-bold text-[#2E1F14]">Private Guide</h4>
                                                                    <p className="text-sm text-gray-400">Dedicated tracker</p>
                                                                </div>
                                                            </div>
                                                            <div className="flex items-start gap-3">
                                                                <MdCheckCircle className="text-[#FF914D] text-2xl mt-1" />
                                                                <div>
                                                                    <h4 className="font-bold text-[#2E1F14]">Hotel Pickup</h4>
                                                                    <p className="text-sm text-gray-400">From Tissamaharama area</p>
                                                                </div>
                                                            </div>
                                                            <div className="flex items-start gap-3">
                                                                <MdCheckCircle className="text-[#FF914D] text-2xl mt-1" />
                                                                <div>
                                                                    <h4 className="font-bold text-[#2E1F14]">Refreshments</h4>
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
                                                            <span className="bg-[#5a3e2a]/10 text-[#5a3e2a] p-2 rounded-lg">
                                                                    <MdEventSeat className="text-[#5a3e2a] text-2xl" />
                                                            </span>
                                                            <h2 className="text-3xl font-bold">Shared Jeep Seat Only</h2>
                                                        </div>
                                                        <p className="text-desert-brow mb-8 text-lg">
                                                            Reserve a single seat in a jeep. You share the jeep cost but still need to buy your own ticket at the gate. The most budget-friendly "backpacker" option.
                                                        </p>
                                                        {/* Feature List */}
                                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                                            <div className="flex items-start gap-3">
                                                                <MdSavings className="text-[#FF914D] text-2xl mt-1" />
                                                                <div>
                                                                    <h4 className="font-bold text-desert-brow">Cost Effective</h4>
                                                                    <p className="text-sm text-gray-400">Split costs with others</p>
                                                                </div>
                                                            </div>
                                                            <div className="flex items-start gap-3">
                                                                <MdConfirmationNumber className="text-[#FF914D] text-2xl mt-1" />                                                                <div>
                                                                    <h4 className="font-bold text-desert-brow">Tickets Included</h4>
                                                                    <p className="text-sm text-gray-400">No gate payment needed</p>
                                                                </div>
                                                            </div>
                                                            <div className="flex items-start gap-3">
                                                                <MdHandshake className="text-[#FF914D] text-2xl mt-1" />
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
                            

                            <div className="mt-8 rounded-lg border border-[#FF914D]/30 bg-[#FF914D]/5 p-4 flex items-start gap-3">

                                <MdInfo className="text-[#FF914D] mt-0.5 text-2xl" />
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

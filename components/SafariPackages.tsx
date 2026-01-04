'use client';

import React, { useState } from 'react';
import { packagesData, tabs } from '@/lib/data';
import { Badge, PackageCategory, PackageDetail } from '@/types';
import { useRouter } from "next/navigation";

export default function SafariPackages() {
  const [activeTab, setActiveTab] = useState(
    PackageCategory.PRIVATE_INCLUSIVE
  );

  const filteredPackages: PackageDetail[] = Object.values(packagesData).filter((pkg) => pkg.packageCategory === activeTab) 
  const router = useRouter();
  return (
    <main className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* HEADER */}
      <header className="text-center mb-12 text-3xl sm:text-4xl md:text-5xl">
        <span className="inline-block py-1 px-3 rounded-full bg-accent/10 text-accent font-semibold text-xs tracking-wider uppercase mb-3">
          Adventures Await
        </span>

        <h1 className="text-4xl md:text-5xl font-display font-bold text-accent-brown dark:text-primary mb-6">
          Safari Packages
        </h1>

        <p className="max-w-2xl mx-auto text-[#7e746d] dark:text-[#7e746d] text-base sm:text-lg leading-relaxed">
          Choose the perfect safari experience. Whether you prefer a private
          luxury jeep or a shared adventure, we have curated options for every
          traveler.
        </p>
      </header>

      {/* TABS */}
      <div className="flex justify-center mb-12 overflow-x-auto">
        <nav className="flex gap-2 bg-white dark:bg-card-dark p-1.5 rounded-full shadow-sm overflow-x-auto snap-x snap-mandatory scrollbar-hide">
            {
                tabs.map((tab) => (
                    <button
                        key={tab.id}
                        className={`px-6 py-2.5 px-4 sm:px-6 py-3 rounded-full text-sm font-medium ${activeTab === tab.id ? 'bg-accent text-white' : 'text-primary hover:text-white hover:bg-accent'} cursor-pointer whitespace-nowrap transition`}
                        onClick={() => setActiveTab(tab.id)}
                    >
                        {tab.label}
                    </button>
                ))
            }
        </nav>
      </div>

      {/* PACKAGES GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {/* CARDS */}
        {
           filteredPackages.map((pkg, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-1xl hover:shadow-2xl transition transform hover:-translate-y-1 flex flex-col relative">
                {
                    pkg.badge && pkg.badge === Badge.POPULAR && (
                        <span className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg z-10">
                            Best Value
                        </span>
                    )
                }

                <div className="h-48 overflow-hidden relative">
                    <img
                    src={pkg.heroImage}
                    alt={pkg.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60" />
                </div>

                <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-display font-bold text-primary  mb-2">
                    {pkg.title}
                    </h3>

                    <p className="text-sm line-clamp-3 sm:line-clamp-2 text-gray-500 dark:text-gray-400 mb-4">
                      {pkg.description}
                    </p>

                    <div className="flex items-baseline mb-6">
                    <span className="text-3xl font-bold text-accent">${pkg.pricingPerPerson ? `${pkg.pricingPerPerson[0].price}` : `${pkg.price.jeep}`}</span>
                    <span className="ml-1 text-sm text-gray-500 dark:text-gray-400">
                        / {pkg.pricingPerPerson ? "per person" : "per jeep"}
                    </span>
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

                    <button onClick={() => router.push(`/packages/${pkg.id}`)} className="w-full cursor-pointer py-3 rounded-xl bg-primary hover:bg-primary/80 text-white font-medium transition shadow-lg">
                        Book Now
                    </button>
                </div>
                </div>
           ))
        }

        {/* OTHER CARDS → SAME STRUCTURE */}
      </div>

      {/* TRUST SECTION */}
      <div className="mt-20 border-t border-background-dark/20 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            {
              icon: 'stars',
              title: 'Top Rated Service',
              desc: 'Over 500+ 5-star reviews from happy travelers.',
            },
            {
              icon: 'support_agent',
              title: '24/7 Support',
              desc: 'We are here to help you plan your trip anytime.',
            },
            {
              icon: 'verified_user',
              title: 'Secure Booking',
              desc: 'Your payment details are safe with us.',
            },
          ].map((item) => (
            <div key={item.title} className="flex flex-col items-center">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-primary mb-4">
                <span className="material-symbols-outlined text-accent">{item.icon}</span>
              </div>
              <h4 className="font-bold text-primary">
                {item.title}
              </h4>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

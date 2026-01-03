import React from 'react';

interface PackageFeature {
    icon: string;
    text: string;
}

interface PackageProps {
    title: string;
    description: string;
    price: string;
    priceUnit: string;
    image: string;
    badge?: string;
    badgeColor?: string; // 'primary' | 'accent' | 'sky-blue'
    features: PackageFeature[];
}

function PackageCard({ title, description, price, priceUnit, image, badge, badgeColor = 'primary', features }: PackageProps) {
    const badgeClass = {
        'primary': 'bg-primary',
        'accent': 'bg-accent',
        'sky-blue': 'bg-sky-blue'
    }[badgeColor] || 'bg-primary';

    return (
        <div className="flex flex-col rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
            <div
                className="h-56 bg-cover bg-center relative"
                style={{ backgroundImage: `url("${image}")` }}
            >
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
                {badge && (
                    <div className="absolute top-3 right-3">
                        <span className={`${badgeClass} text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-sm`}>{badge}</span>
                    </div>
                )}
            </div>
            <div className="flex flex-col p-6 gap-4 flex-1">
                <div className="flex-1">
                    <h3 className="text-primary text-xl font-bold font-display">{title}</h3>
                    <p className="text-[#7e746d] text-sm mt-2 leading-relaxed">{description}</p>
                </div>
                <div className="flex flex-col gap-1">
                    <p className="text-xs text-[#7e746d] font-medium uppercase tracking-wide">Starting from</p>
                    <div className="flex items-baseline gap-1">
                        <span className="text-[#161413] text-3xl font-bold tracking-tight">{price}</span>
                        <span className="text-[#7e746d] text-sm font-medium">{priceUnit}</span>
                    </div>
                </div>
                <div className="flex flex-col gap-3 border-t border-gray-100 pt-4">
                    {features.map((feature, idx) => (
                        <div key={idx} className="flex gap-3 text-sm text-[#5a5a5a] items-start">
                            <span className="material-symbols-outlined text-primary text-[20px] shrink-0">{feature.icon}</span>
                            <span>{feature.text}</span>
                        </div>
                    ))}
                </div>
                <button className="w-full mt-4 rounded-lg h-11 px-4 bg-primary text-white text-sm font-bold hover:bg-[#4a3222] transition-colors shadow-sm">View Packages</button>
            </div>
        </div>
    );
}

export default function PackagesList() {
    const packages: PackageProps[] = [
        {
            title: "Private All-Inclusive",
            description: "The ultimate hassle-free experience with a dedicated jeep and naturalist.",
            price: "$142",
            priceUnit: "/ person",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDX0XdnalZ-eocWpBmw-70DR2eZIzhFP6gD2C_dYzplUqqJ0PZVPF7gbLTtmpkro0Y3PXXsn_6Cndonpo_UzyO8Kcs_uI7-dYx0MdySTiWcHrPC9w594x6Kv0PyTaB2yOwte462DSTGQltO2wpYcw_hYzqD4X-KFLFIyJoeUI_HhqGqLgAmR9JhiiNbJ0GLa03yazqMzx7cep5_Y-I165cVyJ5DKKsB3CmNuL2Do2sPlAz9EOFWxqHQpLhYsI8PFuNBfkC2maiNFX1y",
            badge: "Luxury",
            badgeColor: "primary",
            features: [
                { icon: "check_circle", text: "Private Jeep" },
                { icon: "confirmation_number", text: "Tickets Included" },
                { icon: "restaurant", text: "Snacks & Refreshments" },
            ]
        },
        {
            title: "Shared All-Inclusive",
            description: "Join other travelers for a fun, social, and cost-effective adventure.",
            price: "$55",
            priceUnit: "/ person",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQE7lPcuAqhsHCE3DSGAB-7pZ1yJr0qhd1_C4o11reDqDhPPXmBvaMVLb70CchHW7hAnjY54zoDSVp4opdt2HIqaBHVg9M-_ZQFqBW52D4JlvNI0wWovy3mYq5HwmCn6FcWVGoIlDVrF33Exc3jNdxgVKUvKTGr0hWMINTmCAfiQSx-RnT9aq0Yop6PEvAlNZdaHKkmFnw1rPs0VwnRBdNqgXudD2zUuVPi37vfDQVMcAgsWBt8jCYy1KCcqGeiTZ2lMTf5w_C8SBt",
            badge: "Social",
            badgeColor: "sky-blue",
            features: [
                { icon: "groups", text: "Max 6 Guests" },
                { icon: "confirmation_number", text: "Tickets Included" },
                { icon: "water_drop", text: "Water Provided" },
            ]
        },
        {
            title: "Private Jeep Only",
            description: "Hire the vehicle and driver. Perfect for those arranging their own tickets.",
            price: "Rs. 15,000",
            priceUnit: "/ jeep",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC-lHG_f3Gan9XR1DGYtr0ho0d_fs-LG2Ro_MJ4AyHk9IMHt8WqmhBzqwNrgCtjhFaUIssfVDGEc4HMOqHSwKCUPchNGSpFfs8tYVDUBOhrJ_fzB0JTGO8qmcOxgdi-6j1nvLmV31ljjqnRToenvZK7QaUMvFZ63bua1IinTtFc7aZbXSx-QP7-anknim-Yh4Bd2AAt__NZ7vW7lHDfHlFEdcFX1OMd31ArESy24O7ySHpK8wGrzAhYXMFjG09jy53uMCThOY6nDEC6",
            features: [
                { icon: "directions_car", text: "Jeep + Driver Only" },
                { icon: "schedule", text: "Flexible Timing" },
                { icon: "local_activity", text: "Gate Fees Excluded" },
            ]
        },
        {
            title: "Shared Jeep Only",
            description: "The most economical way to see Yala. Pay only for your seat.",
            price: "Rs. 4,500",
            priceUnit: "/ seat",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCKxeLK39nuyogrN0gZ-lqLg3OWTzYx3qWNWThEzJAlFfO-Cd3aFXiMlkDxCg9c6YDsoW1gP6t37lp7Ivd-FNnud32FCkSlQ26xMV46FxIGA0u7qGP8LxAR-M5se5KI8JYeqsCrICDoOQsyUEG5-mB2jNX5WVIvtTsi6MzhG-HR4JBHxOFJzQepm4TE2wmERiEGsZyRfAHms2bLL7ueNDdY27OBFReLKDkSZcPTzjb8Fop2eVENM-A4OtxuVXlzoN9A4FPHCIXK-M_d",
            badge: "Budget",
            badgeColor: "accent",
            features: [
                { icon: "savings", text: "Budget Friendly" },
                { icon: "event_seat", text: "Pay Per Seat" },
                { icon: "local_activity", text: "Gate Fees Excluded" },
            ]
        }
    ];

    return (
        <div className="bg-background-cream py-16 md:py-24" id="packages">
            <div className="layout-container flex h-full grow flex-col">
                <div className="px-4 md:px-20 flex flex-1 justify-center">
                    <div className="layout-content-container flex flex-col max-w-[1280px] flex-1">
                        <div className="flex flex-col gap-10">
                            <div className="text-center max-w-3xl mx-auto mb-4">
                                <p className="text-[#7e746d] text-lg">We offer a range of safari options tailored to different needs and budgets. From all-inclusive luxury to flexible jeep hires.</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {packages.map((pkg, idx) => (
                                    <PackageCard key={idx} {...pkg} />
                                ))}
                            </div>

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

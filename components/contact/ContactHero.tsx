import React from 'react';

export default function ContactHero() {
    return (
        <div className="relative w-full">
            <div className="layout-container flex h-full grow flex-col">
                <div className="flex flex-1 justify-center">
                    <div className="layout-content-container flex flex-col w-full flex-1">
                        <div
                            className="relative flex min-h-[400px] md:min-h-[500px] flex-col gap-6 bg-cover bg-center bg-no-repeat items-center justify-center px-4 py-20 text-center"
                            style={{ backgroundImage: 'linear-gradient(rgba(46, 31, 20, 0.4) 0%, rgba(46, 31, 20, 0.6) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCKxeLK39nuyogrN0gZ-lqLg3OWTzYx3qWNWThEzJAlFfO-Cd3aFXiMlkDxCg9c6YDsoW1gP6t37lp7Ivd-FNnud32FCkSlQ26xMV46FxIGA0u7qGP8LxAR-M5se5KI8JYeqsCrICDoOQsyUEG5-mB2jNX5WVIvtTsi6MzhG-HR4JBHxOFJzQepm4TE2wmERiEGsZyRfAHms2bLL7ueNDdY27OBFReLKDkSZcPTzjb8Fop2eVENM-A4OtxuVXlzoN9A4FPHCIXK-M_d")' }}
                        >
                            <div className="flex flex-col gap-4 max-w-[800px] animate-fade-in-up">
                                <span className="text-accent font-bold uppercase tracking-widest text-sm md:text-base">We're Here to Help</span>
                                <h1 className="text-white text-4xl font-black font-display leading-tight tracking-[-0.02em] md:text-5xl lg:text-6xl drop-shadow-sm">
                                    Contact – Your Yala National Park Experts
                                </h1>
                                <h2 className="text-gray-200 text-lg font-medium leading-relaxed md:text-2xl drop-shadow-sm">
                                    Get in Touch for Your Yala Adventure
                                </h2>
                                <p className="text-gray-100 text-base md:text-lg leading-relaxed max-w-[700px] mx-auto mt-2">
                                    Our team of wildlife enthusiasts and safari experts is committed to providing prompt, helpful, and personalized service to ensure your trip to Yala is unforgettable.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

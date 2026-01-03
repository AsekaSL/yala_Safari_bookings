import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-[#1d1815] text-[#9ca3af] py-16 border-t border-gray-800" id="contact">
            <div className="layout-container flex h-full grow flex-col">
                <div className="px-4 md:px-20 flex flex-1 justify-center">
                    <div className="layout-content-container flex flex-col max-w-[1280px] flex-1">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                            {/* Brand */}
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center gap-2 text-white">
                                    <span className="material-symbols-outlined">landscape</span>
                                    <span className="text-xl font-bold font-display">Yala Safari Bookings</span>
                                </div>
                                <p className="text-sm leading-relaxed">
                                    Unforgettable wildlife experiences in the heart of Sri Lanka. Book your adventure with the experts today.
                                </p>
                                <div className="flex gap-4 mt-2">
                                    <a className="hover:text-white transition-colors" href="#"><span className="material-symbols-outlined">social_leaderboard</span></a>
                                    <a className="hover:text-white transition-colors" href="#"><span className="material-symbols-outlined">photo_camera</span></a>
                                </div>
                            </div>

                            {/* Quick Links */}
                            <div className="flex flex-col gap-4">
                                <h4 className="text-white font-bold text-base">Quick Links</h4>
                                <nav className="flex flex-col gap-2 text-sm">
                                    <a className="hover:text-primary transition-colors" href="#">Safaris</a>
                                    <a className="hover:text-primary transition-colors" href="#">About Us</a>
                                    <a className="hover:text-primary transition-colors" href="#">Blog</a>
                                    <a className="hover:text-primary transition-colors" href="#">Contact</a>
                                    <a className="hover:text-primary transition-colors" href="#">Privacy Policy</a>
                                </nav>
                            </div>

                            {/* Contact */}
                            <div className="flex flex-col gap-4">
                                <h4 className="text-white font-bold text-base">Contact Us</h4>
                                <div className="flex flex-col gap-3 text-sm">
                                    <div className="flex items-center gap-3">
                                        <span className="material-symbols-outlined text-primary text-sm">call</span>
                                        <span>+94 77 123 4567</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="material-symbols-outlined text-primary text-sm">mail</span>
                                        <span>hello@yalasafari.com</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-primary text-sm mt-0.5">location_on</span>
                                        <span>Palatupana Entrance,<br />Yala National Park, Sri Lanka</span>
                                    </div>
                                </div>
                            </div>

                            {/* Newsletter */}
                            <div className="flex flex-col gap-4">
                                <h4 className="text-white font-bold text-base">Newsletter</h4>
                                <p className="text-sm">Subscribe for wildlife updates and seasonal offers.</p>
                                <div className="flex flex-col gap-2">
                                    <input className="w-full bg-[#2a2420] border border-gray-700 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-primary" placeholder="Your email address" type="email" />
                                    <button className="w-full bg-primary hover:bg-[#4a3222] text-white text-sm font-bold py-2 rounded-lg transition-colors">Subscribe</button>
                                </div>
                            </div>

                        </div>
                        <div className="border-t border-gray-800 pt-8 text-center text-xs">
                            <p>© 2023 Yala Safari Bookings. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

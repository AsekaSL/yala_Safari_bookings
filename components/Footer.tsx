import { blogs, navLinks, services } from '@/lib/data';
import Link from 'next/link';
import React from 'react';
import { MdCall, MdLandscape, MdLocationOn, MdMail, MdPeople, MdPhotoCamera, MdSocialDistance } from 'react-icons/md';

export default function Footer() {
    return (
        <footer className="bg-[#1d1815] text-[#9ca3af] py-16 border-t border-gray-800" id="contact">
            <div className="layout-container flex h-full grow flex-col">
                <div className="px-4 md:px-20 flex flex-1 justify-center">
                    <div className="layout-content-container flex flex-col max-w-[1280px] flex-1">
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 mb-12">

                            {/* Brand */}
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center gap-2 text-white">
                                    <MdLandscape className="text-3xl" />
                                    <span className="text-xl font-bold font-display">Yala Safari Bookings</span>
                                </div>
                                <p className="text-sm leading-relaxed">
                                    Leopard Yala is your trusted partner for an unforgettable wildlife adventure. Experience the thrill of spotting leopards, elephants, and a variety of exotic wildlife in their natural habitat. Our expert guides, with years of experience, are skilled in tracking elusive you get the most out of your Yala Safari.
                                </p>
                                <div className="flex gap-4 mt-2">
                                    <MdSocialDistance className="text-white text-3xl hover:text-[#FFF5E1] transition-colors cursor-pointer" />
                                    <MdPhotoCamera className="text-white text-3xl hover:text-[#FFF5E1] transition-colors cursor-pointer" />
                                    <MdPeople className="text-white text-3xl hover:text-[#FFF5E1] transition-colors cursor-pointer" />
                                </div>
                            </div>

                            {/* Quick Links */}
                            <div className="flex flex-col gap-4">
                                <h4 className="text-white font-bold text-base">Quick Links</h4>
                                <nav className="flex flex-col gap-2 text-sm">
                                    {
                                        navLinks.map((link) => (
                                            <Link key={link.href} className="hover:text-[#5a3e2a] transition-colors" href={link.href}>{link.label}</Link>
                                        ))
                                    }
                                </nav>
                            </div>
                            
                            {/* Pacakages */}
                            <div className="flex flex-col gap-4">
                                <h4 className="text-white font-bold text-base">Our Pacakages</h4>
                                <nav className="flex flex-col gap-2 text-sm">
                                    {
                                        services.map((link) => (
                                            <Link key={link.href} className="hover:text-[#5a3e2a] transition-colors" href={link.href}>{link.label}</Link>
                                        ))
                                    }
                                </nav>
                            </div>
                            
                            <div className="flex flex-col gap-4">
                                <h4 className="text-white font-bold text-base">Our Blogs</h4>
                                <nav className="flex flex-col gap-2 text-sm">
                                    {
                                        blogs.map((blog) => (
                                            <Link key={blog.label} className="hover:text-[#5a3e2a] transition-colors" href={blog.href}>{blog.label}</Link>
                                        ))
                                    }
                                </nav>
                            </div>

                            <div>
                                    {/* Contact */}
                                    <div className="flex flex-col gap-4 mb-3">
                                        <h4 className="text-white font-bold text-base">Contact Us</h4>
                                        <div className="flex flex-col gap-3 text-sm">
                                            <div className="flex items-center gap-3">
                                                <MdCall className="text-[#ffffff] text-sm" />
                                                <span>+94 77 123 4567</span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <MdMail className="text-[#ffffff] text-sm" />
                                                <span>hello@yalasafari.com</span>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <MdLocationOn className="text-[#ffffff] text-sm mt-0.5" />
                                                <span>Palatupana Entrance,<br />Yala National Park, Sri Lanka</span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Newsletter */}
                                    <div className="flex flex-col gap-2">
                                        <h4 className="text-white font-bold text-base">Newsletter</h4>
                                        <p className="text-sm">Subscribe for wildlife updates and seasonal offers.</p>
                                        <div className="flex flex-col gap-2">
                                            <input className="w-full bg-[#2a2420] border border-gray-700 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-[#5a3e2a]" placeholder="Your email address" type="email" />
                                            <button className="w-full bg-[#5a3e2a] hover:bg-[#4a3222] text-white text-sm font-bold py-2 rounded-lg transition-colors">Subscribe</button>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div className="border-t border-gray-800 pt-8 text-center text-xs">
                            <p>© {new Date().getFullYear()} Yala Safari Bookings. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

'use client';

import { navLinks } from '@/lib/data';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { MdClose, MdLandscape, MdMenu, MdOpenInBrowser } from 'react-icons/md';

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <div className="top-0 z-50 bg-white/100 backdrop-blur-sm border-b border-[#f3f2f1]">
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 md:px-10 flex flex-1 justify-center">
          <div className="layout-content-container flex flex-col max-w-[1280px] flex-1">
            <header className="flex items-center justify-between py-3">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-4 text-[#5a3e2a]">
                <MdLandscape className='text-3xl' />
                <h2 className="text-xl font-bold font-display">
                  Yala Safari Bookings
                </h2>
              </Link>

              {/* Desktop Nav */}
              <div className="hidden md:flex items-center gap-8">
                <nav className="flex items-center gap-9 relative">
                  {navLinks.map((link) => {
                    const isActive = pathname === link.href;

                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="relative text-sm font-medium text-[#161413] hover:text-[#5a3e2a]"
                      >
                        {link.label}
                        <span
                          className={`
                            absolute left-0 -bottom-1 h-[2px] w-full bg-[#5a3e2a]
                            transition-transform duration-300 origin-left
                            ${isActive ? 'scale-x-100' : 'scale-x-0'}
                          `}
                        />
                      </Link>
                    );
                  })}
                </nav>

                <Link href="/packages">
                  <button className="h-10 px-6 cursor-pointer rounded-lg bg-[#5a3e2a] hover:bg-[#4a3222] text-white text-sm font-bold transition-colors">
                    Book a Safari
                  </button>
                </Link>
              </div>

              {/* Mobile Hamburger */}
              <button
                className="md:hidden text-[#161413]"
                onClick={() => setOpen(!open)}
              >
                <span className=" text-3xl">
                  {open ? <MdClose /> : <MdMenu />}
                </span>
              </button>
            </header>

            {/* Mobile Menu */}
            <div
              className={`
                md:hidden overflow-hidden transition-all duration-300
                ${open ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}
              `}
            >
              <nav className="flex flex-col gap-6 py-6">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`relative text-base font-medium
                        ${isActive ? 'text-[#5a3e2a]' : 'text-[#161413]'}
                      `}
                    >
                      {link.label}
                      <span
                        className={`
                          absolute left-0 -bottom-1 h-[2px] w-full bg-[#5a3e2a]
                          transition-transform duration-300 origin-left
                          ${isActive ? 'scale-x-100' : 'scale-x-0'}
                        `}
                      />
                    </Link>
                  );
                })}

                <Link href="/packages" onClick={() => setOpen(false)}>
                  <button className="mt-4 h-11 w-full rounded-lg bg-[#5a3e2a] text-white font-bold">
                    Book a Safari
                  </button>
                </Link>
              </nav>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

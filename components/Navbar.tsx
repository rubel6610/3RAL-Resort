"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { inter, raleway } from "@/app/fonts";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Rooms", href: "/rooms" },
  { name: "Dining", href: "/dining" },
  { name: "Explore", href: "/explore" },
  { name: "Gallery", href: "/gallery" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 w-full z-40 transition-all duration-300 ${
        scrolled
          ? "top-0 bg-[#07241a]/95 backdrop-blur-md shadow-2xl border-b border-emerald-900/30 py-1"
          : "top-[55px] bg-transparent"
      } ${inter.className}`}
    >
      <div
        className={`w-full max-w-[1920px] mx-auto px-[200px] max-2xl:px-24 max-xl:px-8 max-md:px-4 flex items-center justify-between transition-all duration-300 ${
          scrolled ? "h-[88px]" : "h-[112px] py-[15px]"
        }`}
      >
        {/* Left: Brand Logo */}
        <Link href="/" className="shrink-0 flex items-center group">
          <div className="relative w-[100px] h-[100px]">
            <Image
              src="/logo/logo2.png"
              alt="Corral Creek Lodge Logo"
              fill
              sizes="82px"
              priority
              className="object-cover"
            />
          </div>
        </Link>

        {/* Center: Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-7 xl:gap-9 2xl:gap-11">
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname?.startsWith(link.href);

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-base tracking-wide font-medium transition-colors relative py-1 ${
                  isActive
                    ? "text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-white"
                    : "text-white/85 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right: Book Now Button */}
        <div className="hidden sm:flex items-center">
          <Link
            href="/book"
            className={`group inline-flex items-center justify-center gap-1.5 px-6 py-2.5 rounded-lg bg-[#0a3a2a] hover:bg-[#0c4833] text-white text-base font-medium transition-all shadow-md hover:shadow-lg ${raleway.className}`}
          >
            <span>Book Now</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="lg:hidden p-2 text-white hover:text-emerald-200 transition-colors focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a3a2a]/95 backdrop-blur-md border-t border-white/10 px-6 py-5 flex flex-col gap-4 animate-in fade-in slide-in-from-top-2">
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname?.startsWith(link.href);

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-base font-medium py-1 transition-colors ${
                  isActive
                    ? "text-white font-bold"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="pt-2">
            <Link
              href="/book"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 rounded-lg bg-emerald-800 hover:bg-emerald-700 text-white font-semibold transition-colors"
            >
              <span>Book Now</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

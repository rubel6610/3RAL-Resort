"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin, Compass } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#072218] text-white pt-16 pb-10 border-t border-emerald-950">
      <div className="max-w-[1520px] mx-auto px-6 sm:px-12 lg:px-20 2xl:px-24">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-emerald-900/40">
          {/* Brand Info (Col 1-4) */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="inline-flex items-center space-x-3 group">
              <div className="relative w-[100px] h-[100px] ">
                <Image
                  src="/logo/logo2.png"
                  alt="Corral Creek Lodge Logo"
                  fill
                  sizes="60px"
                  className="object-cover transition-transform"
                />
              </div>
              <div>
                <span className="font-average text-2xl tracking-wide text-white block">
                  Corral Creek Lodge
                </span>
                <span className="text-[11px] uppercase tracking-widest text-emerald-300/80 font-inter">
                  Kernville, California
                </span>
              </div>
            </Link>

            <p className="font-inter text-emerald-200/75 text-sm leading-relaxed max-w-sm">
              Your Home Away From Home On The Upper Kern River, In The Sequoia
              National Forest.
            </p>

            <div className="pt-2">
              <span className="text-xs uppercase tracking-wider text-emerald-400 font-semibold block mb-3 font-inter">
                Follow Us
              </span>
              <div className="flex items-center space-x-2.5">
                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-full bg-emerald-900/60 border border-emerald-800/40 flex items-center justify-center text-emerald-200 hover:text-white hover:bg-emerald-700 hover:border-emerald-500 transition-all duration-300 hover:scale-110"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>

                {/* YouTube */}
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="w-9 h-9 rounded-full bg-emerald-900/60 border border-emerald-800/40 flex items-center justify-center text-emerald-200 hover:text-white hover:bg-emerald-700 hover:border-emerald-500 transition-all duration-300 hover:scale-110"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>

                <a
                  href="https://tripadvisor.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TripAdvisor"
                  className="w-9 h-9 rounded-full bg-emerald-900/60 border border-emerald-800/40 flex items-center justify-center text-emerald-200 hover:text-white hover:bg-emerald-700 hover:border-emerald-500 transition-all duration-300 hover:scale-110"
                >
                  <Compass className="w-4 h-4" />
                </a>

                {/* Facebook */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-9 h-9 rounded-full bg-emerald-900/60 border border-emerald-800/40 flex items-center justify-center text-emerald-200 hover:text-white hover:bg-emerald-700 hover:border-emerald-500 transition-all duration-300 hover:scale-110"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>

                {/* Twitter / X */}
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter / X"
                  className="w-9 h-9 rounded-full bg-emerald-900/60 border border-emerald-800/40 flex items-center justify-center text-emerald-200 hover:text-white hover:bg-emerald-700 hover:border-emerald-500 transition-all duration-300 hover:scale-110"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-9 h-9 rounded-full bg-emerald-900/60 border border-emerald-800/40 flex items-center justify-center text-emerald-200 hover:text-white hover:bg-emerald-700 hover:border-emerald-500 transition-all duration-300 hover:scale-110"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Explore (Col 5-6) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-inter font-semibold text-sm uppercase tracking-wider text-white">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm font-inter text-emerald-200/75">
              <li>
                <Link
                  href="/"
                  className="hover:text-emerald-300 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/rooms"
                  className="hover:text-emerald-300 transition-colors"
                >
                  Room
                </Link>
              </li>
              <li>
                <Link
                  href="/dining"
                  className="hover:text-emerald-300 transition-colors"
                >
                  Dining
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="hover:text-emerald-300 transition-colors"
                >
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Stay With Us (Col 7-8) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-inter font-semibold text-sm uppercase tracking-wider text-white">
              Stay With Us
            </h4>
            <ul className="space-y-2.5 text-sm font-inter text-emerald-200/75">
              <li>
                <Link
                  href="#booking-bar"
                  className="hover:text-emerald-300 transition-colors"
                >
                  Book Now
                </Link>
              </li>
              <li>
                <Link
                  href="/rooms"
                  className="hover:text-emerald-300 transition-colors"
                >
                  Check Availability
                </Link>
              </li>
              <li>
                <Link
                  href="/amenities"
                  className="hover:text-emerald-300 transition-colors"
                >
                  Amenities
                </Link>
              </li>
              <li>
                <Link
                  href="/rooms"
                  className="hover:text-emerald-300 transition-colors"
                >
                  Pet-Friendly Rooms
                </Link>
              </li>
              <li>
                <Link
                  href="/visitor-guide"
                  className="hover:text-emerald-300 transition-colors"
                >
                  Visitor Guide Info
                </Link>
              </li>
            </ul>
          </div>

          {/* Explore Kernville (Col 9-10) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-inter font-semibold text-sm uppercase tracking-wider text-white">
              Explore Kernville
            </h4>
            <ul className="space-y-2.5 text-sm font-inter text-emerald-200/75">
              <li>
                <Link
                  href="/things-to-do"
                  className="hover:text-emerald-300 transition-colors"
                >
                  Things To Do
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="hover:text-emerald-300 transition-colors"
                >
                  Local Events
                </Link>
              </li>
              <li>
                <Link
                  href="/kern-river"
                  className="hover:text-emerald-300 transition-colors"
                >
                  Kern River
                </Link>
              </li>
              <li>
                <Link
                  href="/sequoia"
                  className="hover:text-emerald-300 transition-colors"
                >
                  Sequoia National Forest
                </Link>
              </li>
            </ul>
          </div>

          {/* Get In Touch (Col 11-12) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-inter font-semibold text-sm uppercase tracking-wider text-white">
              Get In Touch
            </h4>
            <ul className="space-y-3 text-xs sm:text-[13px] font-inter text-emerald-200/80">
              <li className="flex items-start space-x-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <a
                  href="mailto:reservations@corralcreekresort.com"
                  className="hover:text-emerald-300 break-all transition-colors"
                >
                  reservations@corralcreekresort.com
                </a>
              </li>
              <li className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href="tel:+17603763601"
                  className="hover:text-emerald-300 transition-colors"
                >
                  +1 760-376-3601
                </a>
              </li>
              <li className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  15.5 Mile Mountain 99, Kernville, CA, United States, 91238
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-inter text-emerald-300/60 gap-4">
          <p>© 2026. All rights reserved. corral creek lodge</p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link
              href="/privacy-policy"
              className="hover:text-emerald-300 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-emerald-300 transition-colors"
            >
              Terms &amp; Conditions
            </Link>
            <Link
              href="/ada"
              className="hover:text-emerald-300 transition-colors"
            >
              ADA
            </Link>
            <Link
              href="/policies"
              className="hover:text-emerald-300 transition-colors"
            >
              Policies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

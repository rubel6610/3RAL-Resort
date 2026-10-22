"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Calendar, Users, ChevronDown, ArrowUpRight } from "lucide-react";
import { average, inter, raleway } from "@/app/fonts";

export default function Banner() {
  const [arrivalDate, setArrivalDate] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [guestCount, setGuestCount] = useState("1 Guest");
  const [guestDropdownOpen, setGuestDropdownOpen] = useState(false);

  // Set today's date initially
  useEffect(() => {
    const today = new Date();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");
    const yyyy = today.getFullYear();
    const todayFormatted = `${mm}/${dd}/${yyyy}`;

    setArrivalDate(todayFormatted);
    setDepartureDate(todayFormatted);
  }, []);

  return (
    <section className="relative w-full h-[calc(100vh-55px)] min-h-[660px] flex flex-col justify-between overflow-hidden pt-[112px] pb-6 sm:pb-8">
      
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover -z-20 scale-105 pointer-events-none"
      >
        <source src="/banner/banner_video.mp4" type="video/mp4" />
      </video>

      {/* Dark Natural Contrast Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/25 to-black/55 -z-10 pointer-events-none" />

      {/* 2. Middle: Hero Title & Subtitle */}
      <div className="w-full max-w-[1920px] mx-auto px-[200px] max-2xl:px-24 max-xl:px-8 max-md:px-4 my-auto py-4 z-20">
        <div className="max-w-[1000px]">
          {/* Main Title matching Figma specs: Font Average, 80px, line-height 104px, #F9FFFD, Uppercase */}
          <h1
            className={`${average.className} text-[36px] sm:text-[52px] lg:text-[70px] xl:text-[80px] leading-[1.15] xl:leading-[104px] text-[#F9FFFD] uppercase font-normal tracking-normal drop-shadow-md select-none`}
          >
            Your Riverside<br className="hidden sm:inline" />
            {" "}Stay In The Heart<br className="hidden sm:inline" />
            {" "}Of Kernville.
          </h1>

          {/* Subtitle */}
          <p
            className={`${inter.className} mt-3 sm:mt-5 text-sm sm:text-base lg:text-[18px] text-[#F9FFFD]/90 max-w-[680px] leading-relaxed drop-shadow-sm font-normal`}
          >
            Stay Along The Kern River And Discover The Natural Beauty, Local
            Charm, And Outdoor Adventures Of Kernville.
          </p>
        </div>
      </div>

      {/* 3. Bottom: Floating Booking Bar (width: 1168px, height: 98px) */}
      <div className="w-full px-4 sm:px-6 z-20">
        <div className="w-full max-w-[1168px] min-h-[98px] mx-auto bg-[#F4F6F4]/95 backdrop-blur-md rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.35)] border border-white/60 px-5 sm:px-8 py-3.5 flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          {/* Inputs Container */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 items-center divide-y sm:divide-y-0 sm:divide-x divide-stone-300/80 gap-3 sm:gap-0">
            
            {/* Arrival Date */}
            <div className="flex items-center justify-between sm:pr-6 cursor-pointer group py-1 sm:py-0">
              <div className="flex flex-col">
                <span className="text-xs text-stone-500 font-medium tracking-wide mb-1">
                  Arrival Date
                </span>
                <input
                  type="text"
                  value={arrivalDate}
                  onChange={(e) => setArrivalDate(e.target.value)}
                  placeholder="MM/DD/YYYY"
                  className="text-sm sm:text-base font-bold text-stone-800 bg-transparent outline-none cursor-pointer tracking-tight"
                  aria-label="Arrival Date"
                />
              </div>
              <div className="p-2 rounded-full text-emerald-800 group-hover:bg-emerald-50 transition-colors">
                <Calendar className="w-5 h-5" />
              </div>
            </div>

            {/* Departure Date */}
            <div className="flex items-center justify-between sm:px-6 cursor-pointer group py-1 sm:py-0">
              <div className="flex flex-col">
                <span className="text-xs text-stone-500 font-medium tracking-wide mb-1">
                  Departure Date
                </span>
                <input
                  type="text"
                  value={departureDate}
                  onChange={(e) => setDepartureDate(e.target.value)}
                  placeholder="MM/DD/YYYY"
                  className="text-sm sm:text-base font-bold text-stone-800 bg-transparent outline-none cursor-pointer tracking-tight"
                  aria-label="Departure Date"
                />
              </div>
              <div className="p-2 rounded-full text-emerald-800 group-hover:bg-emerald-50 transition-colors">
                <Calendar className="w-5 h-5" />
              </div>
            </div>

            {/* Guests */}
            <div className="relative flex items-center justify-between sm:pl-6 cursor-pointer group py-1 sm:py-0">
              <div
                className="flex flex-col w-full"
                onClick={() => setGuestDropdownOpen((prev) => !prev)}
              >
                <span className="text-xs text-stone-500 font-medium tracking-wide mb-1">
                  Guests
                </span>
                <div className="flex items-center gap-1.5 text-sm sm:text-base font-bold text-stone-800">
                  <span>{guestCount}</span>
                  <ChevronDown className="w-4 h-4 text-stone-600 transition-transform duration-200" />
                </div>
              </div>

              <div
                onClick={() => setGuestDropdownOpen((prev) => !prev)}
                className="p-2 rounded-full text-emerald-800 group-hover:bg-emerald-50 transition-colors"
              >
                <Users className="w-5 h-5" />
              </div>

              {/* Guest Count Dropdown */}
              {guestDropdownOpen && (
                <div className="absolute left-0 bottom-full mb-3 w-44 bg-white rounded-xl shadow-xl border border-stone-200 py-2 z-50 animate-in fade-in zoom-in-95">
                  {["1 Guest", "2 Guests", "3 Guests", "4+ Guests"].map((g) => (
                    <button
                      key={g}
                      type="button"
                      onClick={() => {
                        setGuestCount(g);
                        setGuestDropdownOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-sm font-medium hover:bg-emerald-50 transition-colors ${
                        guestCount === g ? "text-emerald-900 bg-emerald-50/60 font-bold" : "text-stone-700"
                      }`}
                    >
                      {g}
                    </button>
                  ))}
                </div>
              )}
            </div>

          </div>

          {/* Book Now Button */}
          <div className="shrink-0 flex items-center sm:pl-4">
            <Link
              href="/book"
              className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 h-[54px] rounded-lg bg-[#0a3a2a] hover:bg-[#0c4833] text-white text-base font-medium transition-all shadow-md hover:shadow-lg ${raleway.className}`}
            >
              <span>Book Now</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

        </div>
      </div>

    </section>
  );
}

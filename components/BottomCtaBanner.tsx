"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function BottomCtaBanner() {
  return (
    <section className="relative w-full bg-[#fbfbfa] pt-10 sm:pt-16 overflow-hidden">
      {/* Background fill behind bottom of arch so it seamlessly merges into footer */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[#072218] -z-10" />

      {/* Arched Top Banner Container matching Figma */}
      <div className="relative w-full max-w-[1640px] mx-auto h-[450px] sm:h-[520px] lg:h-[580px] rounded-t-[60px] sm:rounded-t-[80px] lg:rounded-t-[100px] overflow-hidden shadow-2xl z-10">
        
        {/* Background Landscape Photograph */}
        <Image
          src="/images/getaway_autumn.jpg"
          alt="Scenic Kern River with Sierra Nevada mountains backdrop"
          fill
          sizes="100vw"
          className="object-cover object-center filter brightness-[0.65]"
        />

        {/* Ambient Dark Green Forest Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#072218] via-[#072218]/50 to-black/30" />

        {/* Centered Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 sm:px-12 max-w-3xl mx-auto z-10 text-white space-y-6">
          <h2 className="font-average text-3xl sm:text-5xl lg:text-[56px] leading-[1.15] text-[#ffffff] drop-shadow-md">
            Ready For Your Kernville Getaway?
          </h2>

          <p className="font-inter text-emerald-100/90 text-base sm:text-lg lg:text-[18px] max-w-2xl leading-relaxed">
            Find Your Perfect Room At Corral Creek Lodge And Make Your Next Stay
            In Kernville One To Remember.
          </p>

          <div className="pt-2">
            <Link
              href="#booking-bar"
              className="group inline-flex items-center space-x-2 bg-white text-[#0a3a2a] px-9 py-4 rounded-full font-inter font-semibold text-base shadow-2xl hover:bg-emerald-50 hover:scale-105 hover:shadow-emerald-900/30 transition-all duration-300"
            >
              <span>Book Now</span>
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

      </div>

    </section>
  );
}

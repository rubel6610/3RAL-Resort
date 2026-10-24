"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const getawayImages = [
  {
    id: 1,
    title: "Sequoia River Valley",
    image: "/images/getaway_valley.jpg",
  },
  {
    id: 2,
    title: "Autumn Kern Reflections",
    image: "/images/getaway_autumn.jpg",
  },
  {
    id: 3,
    title: "Starlit Lodge Evenings",
    image: "/images/getaway_night.jpg",
  },
];

export default function PerfectGetawaySection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative w-full bg-[#f4f6f4] overflow-hidden text-[#183125]">
      
      {/* 1. Realistic Torn Paper Top Edge Divider */}
      <div className="w-full overflow-hidden leading-none rotate-180 text-[#fbfbfa]">
        <svg
          className="relative block w-full h-8 sm:h-12"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C150,90 350,-40 500,60 C650,140 900,10 1200,80 L1200,120 L0,120 Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="max-w-[1520px] mx-auto px-6 sm:px-12 lg:px-20 2xl:px-24 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text & CTA */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
            <h2 className="font-average text-3xl sm:text-4xl lg:text-[46px] leading-tight text-[#11271d]">
              The Perfect Getaway!
            </h2>

            <div className="space-y-4 text-[#3d5446] font-inter text-base lg:text-[16.5px] leading-relaxed">
              <p>
                Discover The Beauty Of The Sequoia National Forest At 3RAL
                Resort. Located Along The Kern River, Our 20 Comfortable
                Rooms, Including 4 Pet-Friendly Options, Offer A Relaxing Base
                For Your Next Adventure.
              </p>

              <p>
                From Hiking, Fishing, And River Rafting To Exploring The Nearby
                Wilderness And Charming Town Of Kernville, There&apos;s Something
                To Enjoy In Every Season.
              </p>

              <p className="text-[#0a3a2a] font-medium pt-1 text-[17px]">
                Make Your Next Getaway Memorable.
              </p>
            </div>

            <div className="pt-2">
              <Link
                href="#booking-bar"
                className="group inline-flex items-center space-x-2 bg-[#0a3a2a] text-white px-7 py-3.5 rounded-xl font-inter font-medium text-sm shadow-xl hover:bg-[#06291d] hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <span>Book Your Getaway</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>

          {/* Right Column: 3 Vertical Rounded Gallery Panels with Accordion Lift Effect */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4 h-[440px] sm:h-[480px]">
            {getawayImages.map((item, idx) => {
              const isHovered = hoveredIndex === idx;

              return (
                <div
                  key={item.id}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`group relative h-full rounded-2xl overflow-hidden shadow-lg transition-all duration-500 cursor-pointer ${
                    isHovered
                      ? "sm:scale-[1.04] z-10 shadow-2xl shadow-emerald-950/20"
                      : "opacity-95 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 25vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                  />

                  {/* Gradient bottom bar with caption */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex items-end p-4">
                    <span className="font-inter text-xs font-medium text-white/95 tracking-wide">
                      {item.title}
                    </span>
                  </div>

                  <div className="absolute inset-0 rounded-2xl border border-white/20 pointer-events-none group-hover:border-white/50 transition-colors" />
                </div>
              );
            })}
          </div>

        </div>
      </div>

      {/* 2. Realistic Torn Paper Bottom Edge Divider leading into deep forest green */}
      <div className="w-full overflow-hidden leading-none text-[#07241a]">
        <svg
          className="relative block w-full h-8 sm:h-12"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C200,90 400,-30 650,70 C900,150 1050,20 1200,90 L1200,120 L0,120 Z"
            fill="currentColor"
          />
        </svg>
      </div>

    </section>
  );
}

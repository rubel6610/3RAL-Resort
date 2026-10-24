"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin, Waves, Home, Car, Flame } from "lucide-react";

interface Hotspot {
  id: number;
  title: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
  top: string;
  left: string;
}

const hotspots: Hotspot[] = [
  {
    id: 1,
    title: "Upper Kern River",
    desc: "Direct river access across Mountain 99 for swimming, rafting & fly-fishing.",
    icon: Waves,
    top: "52%",
    left: "14%",
  },
  {
    id: 2,
    title: "Main Lodge & 20 Rooms",
    desc: "Two-story timber lodge featuring clean, cozy rooms with kitchenettes and mountain views.",
    icon: Home,
    top: "56%",
    left: "58%",
  },
  {
    id: 3,
    title: "Guest Parking",
    desc: "Spacious, complimentary on-site parking for cars, trailers, and outdoor recreation gear.",
    icon: Car,
    top: "72%",
    left: "82%",
  },
  {
    id: 4,
    title: "Outdoor BBQ & Gathering Area",
    desc: "Outdoor patio with BBQ grills, picnic seating, and panoramic mountain backdrops.",
    icon: Flame,
    top: "42%",
    left: "70%",
  },
];

export default function PropertyMapSection() {
  const [activeSpot, setActiveSpot] = useState<number | null>(null);

  return (
    <section className="relative w-full bg-[#fbfbfa] pb-24 text-[#183125]">
      <div className="max-w-[1520px] mx-auto px-6 sm:px-12 lg:px-20 2xl:px-24">
        
        {/* Section Title */}
        <div className="mb-10 text-left max-w-2xl">
          <h2 className="font-average text-3xl sm:text-4xl lg:text-[44px] leading-tight text-[#11271d]">
            Take A Look Around
          </h2>
          <p className="font-inter text-[#4a6153] text-base lg:text-[17px] mt-3 leading-relaxed">
            Explore Corral Creek Lodge From Every Angle And Get A Feel For Where
            You&apos;ll Stay Before You Arrive.
          </p>
        </div>

        {/* 3D Property Map Card Container */}
        <div className="relative w-full h-[450px] sm:h-[550px] lg:h-[680px] rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-2xl border border-black/5 group">
          
          <Image
            src="/images/property_map.jpg"
            alt="Corral Creek Lodge 3D property map overview in Kernville"
            fill
            sizes="100vw"
            className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-[1.02]"
          />

          {/* Top-Left Floating Badge matching Figma */}
          <div className="absolute top-6 left-6 max-w-sm sm:max-w-md bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl shadow-xl border border-white/60">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 rounded-lg bg-[#0a3a2a]/10 flex items-center justify-center text-[#0a3a2a] shrink-0 mt-0.5">
                <MapPin className="w-4 h-4" />
              </div>
              <p className="font-inter text-xs sm:text-sm text-[#274032] leading-relaxed">
                <strong className="text-[#0a3a2a] font-semibold block">
                  Corral Creek Lodge Grounds
                </strong>
                Explore Corral Creek Lodge From Every Angle And Get A Feel For
                Where You&apos;ll Stay Before You Arrive.
              </p>
            </div>
          </div>

          {/* Interactive Hotspot Radar Pins */}
          {hotspots.map((spot) => {
            const Icon = spot.icon;
            const isSelected = activeSpot === spot.id;

            return (
              <div
                key={spot.id}
                style={{ top: spot.top, left: spot.left }}
                className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
                onMouseEnter={() => setActiveSpot(spot.id)}
                onMouseLeave={() => setActiveSpot(null)}
              >
                {/* Radar pulse ring */}
                <div className="relative flex items-center justify-center">
                  <span className="absolute w-10 h-10 rounded-full bg-emerald-400/40 animate-ping" />
                  <button
                    onClick={() => setActiveSpot(isSelected ? null : spot.id)}
                    className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#0a3a2a] text-white shadow-xl flex items-center justify-center hover:scale-110 transition-transform duration-200 border-2 border-white"
                  >
                    <Icon className="w-4 h-4" />
                  </button>

                  {/* Hotspot Popover Tooltip */}
                  {isSelected && (
                    <div className="absolute bottom-11 left-1/2 -translate-x-1/2 w-64 bg-white/95 backdrop-blur-md p-3.5 rounded-xl shadow-2xl border border-emerald-950/10 z-30 animate-in fade-in zoom-in-95 duration-200 pointer-events-none">
                      <h4 className="font-inter font-semibold text-sm text-[#0a3a2a]">
                        {spot.title}
                      </h4>
                      <p className="font-inter text-xs text-[#4b6053] mt-1 leading-snug">
                        {spot.desc}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}

          {/* Bottom-Right CTA Button matching Figma */}
          <div className="absolute bottom-6 right-6 z-20">
            <Link
              href="#booking-bar"
              className="group inline-flex items-center space-x-2 bg-[#0a3a2a] text-white px-6 py-3.5 rounded-2xl font-inter font-medium text-sm shadow-xl hover:bg-[#072a1e] hover:shadow-2xl hover:scale-105 transition-all duration-300"
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

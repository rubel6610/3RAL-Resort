"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ActivityCard {
  id: number;
  title: string;
  image: string;
  heightClass: string;
  marginOffset?: string;
  subtitle: string;
}

const activities: ActivityCard[] = [
  {
    id: 1,
    title: "Mountain Trail Hiking",
    subtitle: "Sequoia Wilderness",
    image: "/images/outdoor_hiking.jpg",
    heightClass: "h-[320px] lg:h-[350px]",
    marginOffset: "lg:translate-y-8",
  },
  {
    id: 2,
    title: "White Water Rafting",
    subtitle: "Kern River Rapids",
    image: "/images/outdoor_rafting.jpg",
    heightClass: "h-[290px] lg:h-[320px]",
    marginOffset: "lg:translate-y-16",
  },
  {
    id: 3,
    title: "Canyon & River Cruises",
    subtitle: "Emerald Waters",
    image: "/images/outdoor_canyon.jpg",
    heightClass: "h-[380px] lg:h-[440px]",
    marginOffset: "lg:-translate-y-4",
  },
  {
    id: 4,
    title: "Sierra Peaks Exploration",
    subtitle: "Alpine Vistas",
    image: "/images/outdoor_snow.jpg",
    heightClass: "h-[290px] lg:h-[320px]",
    marginOffset: "lg:translate-y-14",
  },
  {
    id: 5,
    title: "Riverside Relaxation",
    subtitle: "Crystal Mountain Streams",
    image: "/images/outdoor_relax.jpg",
    heightClass: "h-[320px] lg:h-[350px]",
    marginOffset: "lg:translate-y-6",
  },
];

export default function ExploreOutdoorsSection() {
  return (
    <section className="relative w-full bg-[#f4f6f4] py-20 lg:py-28 overflow-hidden text-[#172b20]">
      <div className="max-w-[1520px] mx-auto px-6 sm:px-12 lg:px-20 2xl:px-24">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="font-average text-3xl sm:text-4xl lg:text-[46px] leading-tight text-[#11271d]">
            Explore The Great Outdoors Around Kernville
          </h2>
          <p className="font-inter text-[#465b4f] text-base lg:text-lg max-w-2xl leading-relaxed">
            From River Days To Mountain Adventures, There&apos;s Always Something
            To Explore Around Kernville.
          </p>

          <Link
            href="/things-to-do"
            className="group mt-2 inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-[#0a3a2a] text-[#0a3a2a] text-sm font-medium tracking-wide transition-all duration-300 hover:bg-[#0a3a2a] hover:text-white hover:shadow-lg hover:shadow-[#0a3a2a]/20"
          >
            <span>See More Things To Do</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* 5 Staggered Pill Cards Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-5 items-end justify-center pt-4 pb-10">
          {activities.map((item) => (
            <div
              key={item.id}
              className={`group relative w-full ${item.heightClass} ${item.marginOffset || ""} rounded-[32px] overflow-hidden shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-emerald-950/25 cursor-pointer`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 20vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Dark Gradient Overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent transition-opacity duration-300 group-hover:opacity-90" />

              {/* Content overlay */}
              <div className="absolute inset-0 p-5 flex flex-col justify-end text-white">
                <span className="text-[11px] uppercase tracking-wider text-emerald-300/90 font-medium">
                  {item.subtitle}
                </span>
                <h3 className="font-average text-lg sm:text-xl font-normal leading-snug mt-1 group-hover:text-emerald-100 transition-colors">
                  {item.title}
                </h3>
              </div>

              {/* Subtle light glow on top border */}
              <div className="absolute inset-0 rounded-[32px] border border-white/20 pointer-events-none group-hover:border-white/40 transition-colors" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

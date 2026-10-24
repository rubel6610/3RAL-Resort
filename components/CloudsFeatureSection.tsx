"use client";

import React from "react";
import Image from "next/image";

interface FeatureCardItem {
  id: number;
  title: string;
  subtitle: string;
  imageFront: string;
  imageBack: string;
}

const features: FeatureCardItem[] = [
  {
    id: 1,
    title: "Riverside Location",
    subtitle: "Kern River Across The Road",
    imageFront: "/images/getaway_autumn.jpg",
    imageBack: "/images/outdoor_relax.jpg",
  },
  {
    id: 2,
    title: "Pet-Friendly Options",
    subtitle: "4 Rooms Welcome Pets",
    imageFront: "/images/welcome_lodge.jpg",
    imageBack: "/images/room_double_queen.jpg",
  },
  {
    id: 3,
    title: "Kitchenette Rooms",
    subtitle: "Cook In, Every Room",
    imageFront: "/images/room_double_queen.jpg",
    imageBack: "/images/room_king.jpg",
  },
  {
    id: 4,
    title: "Outdoor Adventures",
    subtitle: "Hike, Fish, Raft, Climb",
    imageFront: "/images/outdoor_hiking.jpg",
    imageBack: "/images/outdoor_rafting.jpg",
  },
  {
    id: 5,
    title: "Sequoia Attractions",
    subtitle: "Trail Of 100 Giants Nearby",
    imageFront: "/images/getaway_valley.jpg",
    imageBack: "/images/outdoor_snow.jpg",
  },
  {
    id: 6,
    title: "Peaceful Setting",
    subtitle: "Mountains At Your Back",
    imageFront: "/images/outdoor_relax.jpg",
    imageBack: "/images/getaway_night.jpg",
  },
];

export default function CloudsFeatureSection() {
  return (
    <section className="relative w-full bg-[#fbfbfa] overflow-hidden">
      
      {/* 1. Panoramic Cloudscape Banner */}
      <div className="relative w-full h-[220px] sm:h-[300px] lg:h-[380px] overflow-hidden">
        <Image
          src="/images/clouds_banner.jpg"
          alt="Panoramic Sierra Nevada cloudscape above Kernville"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center filter brightness-105"
        />
        {/* Soft atmospheric gradients for seamless blend */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#fbfbfa] via-transparent to-[#f4f6f4]/20" />
      </div>

      {/* 2. 6 Polaroid / Fanned Photo Cards Row */}
      <div className="max-w-[1520px] mx-auto px-6 sm:px-12 lg:px-20 2xl:px-24 -mt-10 sm:-mt-16 lg:-mt-20 relative z-10 pb-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 lg:gap-6 justify-center items-start">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="group flex flex-col items-center text-center cursor-pointer transition-transform duration-300"
            >
              {/* Stacked Fanned Photo Cards */}
              <div className="relative w-[110px] h-[110px] sm:w-[130px] sm:h-[130px] mb-4">
                
                {/* Back card (Tilted left) */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-md -rotate-6 scale-95 border-2 border-white bg-white transition-all duration-300 group-hover:-rotate-12 group-hover:scale-100 group-hover:shadow-lg">
                  <Image
                    src={feature.imageBack}
                    alt={feature.title}
                    fill
                    sizes="130px"
                    className="object-cover object-center opacity-85"
                  />
                </div>

                {/* Front card (Tilted right) */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-lg rotate-3 border-2 border-white bg-white transition-all duration-300 group-hover:rotate-0 group-hover:scale-105 group-hover:shadow-xl">
                  <Image
                    src={feature.imageFront}
                    alt={feature.title}
                    fill
                    sizes="130px"
                    className="object-cover object-center"
                  />
                  {/* Subtle glossy overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-white/20 pointer-events-none" />
                </div>

              </div>

              {/* Title & Subtitle */}
              <h3 className="font-inter font-semibold text-[#183125] text-sm sm:text-base leading-snug group-hover:text-emerald-700 transition-colors">
                {feature.title}
              </h3>
              <p className="font-inter text-xs text-[#52665b] mt-1 leading-normal max-w-[140px]">
                {feature.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}

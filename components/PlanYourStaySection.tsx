"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Star,
  CalendarCheck,
  Compass,
  MapPin,
  Luggage,
} from "lucide-react";

interface RoomCard {
  id: number;
  title: string;
  rating: string;
  badges: string[];
  image: string;
  category: string[];
}

interface ItineraryGuide {
  suggested: string[];
  activities: string[];
  nearby: string[];
  beforeYouGo: string[];
}

const tripFilters = [
  "Family Gateway",
  "Couples Escape",
  "Fishing Trip",
  "Hiking Adventure",
  "Rafting Trip",
  "Pet-Friendly Stay",
  "Nature & Relaxation",
  "Sequoia Adventure",
];

const rooms: RoomCard[] = [
  {
    id: 1,
    title: "Comfort King Room",
    rating: "5/5",
    badges: ["Up To 1 Guests", "Mountain View"],
    image: "/images/room_king.jpg",
    category: [
      "Family Gateway",
      "Couples Escape",
      "Nature & Relaxation",
      "Sequoia Adventure",
    ],
  },
  {
    id: 2,
    title: "Double Queen Studio",
    rating: "4.9",
    badges: ["Up To 2 Guests", "Pet-Friendly"],
    image: "/images/room_double_queen.jpg",
    category: [
      "Family Gateway",
      "Fishing Trip",
      "Rafting Trip",
      "Pet-Friendly Stay",
    ],
  },
  {
    id: 3,
    title: "King Studio",
    rating: "5/5",
    badges: ["Up To 1 Guests", "Pet-Friendly"],
    image: "/images/room_king_studio.jpg",
    category: [
      "Couples Escape",
      "Pet-Friendly Stay",
      "Hiking Adventure",
      "Nature & Relaxation",
    ],
  },
  {
    id: 4,
    title: "Double Queen Studio",
    rating: "4.9",
    badges: ["Up To 2 Guests", "Pet-Friendly", "Mountain View"],
    image: "/images/room_double_queen.jpg",
    category: [
      "Family Gateway",
      "Hiking Adventure",
      "Rafting Trip",
      "Sequoia Adventure",
    ],
  },
];

const itineraryGuides: Record<string, ItineraryGuide> = {
  "Family Gateway": {
    suggested: [
      "Arrive, River Play, Grill Dinner",
      "Giant Sequoias And A Picnic",
      "Ice Cream In Kernville",
    ],
    activities: [
      "Splash At The River",
      "Trail Of 100 Giants",
      "BBQ On The Deck",
    ],
    nearby: ["Kernville Town", "Kern River", "Sequoia National Forest"],
    beforeYouGo: [
      "Bring Water Shoes",
      "Pack Groceries For The Kitchenette",
      "Layers For Cool Evenings",
    ],
  },
  "Couples Escape": {
    suggested: [
      "Sunset Stroll Along Upper Kern River",
      "Dinner At Kern River Brewing",
      "Stargazing From Private Patio",
    ],
    activities: [
      "Riverside Picnic For Two",
      "Scenic Drive To Lake Isabella",
      "Cozy Kitchenette Breakfast",
    ],
    nearby: ["Downtown Kernville", "Riverside Park", "Whiskey Flat Saloon"],
    beforeYouGo: [
      "Bring A Warm Blanket",
      "Camera For Sunset Vistas",
      "Casual Dinner Attire",
    ],
  },
  "Fishing Trip": {
    suggested: [
      "Early Morning Cast On Upper Kern",
      "Midday Fly-Tying & Tackle Restock",
      "Evening Hatch Catch",
    ],
    activities: [
      "Fly Fishing Trophy Trout",
      "River Bank Exploration",
      "BBQ Catch At Lodge Grill",
    ],
    nearby: ["Kern River Outfitters", "Cora Creek Confluence", "Lake Isabella"],
    beforeYouGo: [
      "California Fishing License",
      "Waders & Polarized Glasses",
      "Cooler & Ice Pack",
    ],
  },
  "Hiking Adventure": {
    suggested: [
      "Cannell Meadow Trail Ascent",
      "Scenic Overlook Lunch",
      "Post-Hike Refreshment By River",
    ],
    activities: [
      "Hike Trail Of 100 Giants",
      "Powers Peak Ascent",
      "Kern River Trail Trek",
    ],
    nearby: ["Cannell Trailhead", "Packwrap Trail", "Sequoia National Forest"],
    beforeYouGo: [
      "Sturdy Hiking Boots & Poles",
      "Hydration Pack & Electrolytes",
      "Sun Protection & Trail Map",
    ],
  },
};

export default function PlanYourStaySection() {
  const [activeFilter, setActiveFilter] = useState("Family Gateway");

  const guide =
    itineraryGuides[activeFilter] || itineraryGuides["Family Gateway"];

  return (
    <section className="relative w-full bg-[#07241a] text-white py-20 lg:py-28 overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] rounded-full bg-emerald-800/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full bg-teal-900/15 blur-[120px] pointer-events-none" />

      <div className="max-w-[1520px] mx-auto px-6 sm:px-12 lg:px-20 2xl:px-24 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-4 mb-12">
          <h2 className="font-average text-3xl sm:text-4xl lg:text-[46px] leading-tight text-[#f8fcf9]">
            Plan Your Stay
          </h2>
          <p className="font-inter text-emerald-200/80 text-base lg:text-[17px] max-w-2xl leading-relaxed">
            Tell Us What Kind Of Trip This Is. We Will Shape The Rooms,
            Activities And A Simple Itinerary Around It.
          </p>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 pt-4">
            {tripFilters.map((filter) => {
              const isActive = activeFilter === filter;
              return (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-inter transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-[#115e43] text-white shadow-lg shadow-emerald-950/40 ring-1 ring-emerald-400/40 scale-105"
                      : "bg-[#0b3325]/70 text-emerald-200/70 hover:bg-[#0e3f2e] hover:text-white border border-emerald-900/40"
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </div>

        {/* 4 Room Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
          {rooms.map((room) => (
            <div
              key={room.id}
              className="group bg-[#0b3325]/90 rounded-2xl overflow-hidden border border-emerald-800/25 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-emerald-500/40 flex flex-col"
            >
              {/* Image Frame */}
              <div className="relative w-full h-[220px] overflow-hidden">
                <Image
                  src={room.image}
                  alt={room.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Rating Badge */}
                <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full text-xs font-medium text-amber-300 flex items-center space-x-1 border border-white/10">
                  <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
                  <span>{room.rating}</span>
                </div>
              </div>

              {/* Room Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-inter font-semibold text-base sm:text-lg text-white group-hover:text-emerald-300 transition-colors">
                    {room.title}
                  </h3>

                  {/* Feature Badges */}
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {room.badges.map((badge, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-inter px-2.5 py-0.5 rounded-md bg-white/10 text-emerald-100/90 border border-white/5"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Link */}
                <div className="pt-5 mt-4 border-t border-emerald-900/40">
                  <Link
                    href="#booking-bar"
                    className="inline-flex items-center space-x-1.5 text-xs font-semibold text-emerald-400 group-hover:text-emerald-300 transition-colors"
                  >
                    <span>View Room</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 4 Informational/Itinerary Guide Boxes Aligned with Room Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          
          {/* Box 1: Suggested Itinerary */}
          <div className="bg-[#0b3325]/50 backdrop-blur-sm rounded-2xl p-5 border border-emerald-900/40">
            <div className="flex items-center space-x-2 text-emerald-400 font-inter font-semibold text-sm mb-3">
              <CalendarCheck className="w-4 h-4" />
              <span>Suggested Itinerary</span>
            </div>
            <ul className="space-y-2 text-xs sm:text-[13px] text-emerald-100/75 font-inter">
              {guide.suggested.map((item, idx) => (
                <li key={idx} className="flex items-start space-x-2">
                  <span className="text-emerald-400/80 font-bold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Box 2: Activities */}
          <div className="bg-[#0b3325]/50 backdrop-blur-sm rounded-2xl p-5 border border-emerald-900/40">
            <div className="flex items-center space-x-2 text-emerald-400 font-inter font-semibold text-sm mb-3">
              <Compass className="w-4 h-4" />
              <span>Activities</span>
            </div>
            <ul className="space-y-2 text-xs sm:text-[13px] text-emerald-100/75 font-inter">
              {guide.activities.map((item, idx) => (
                <li key={idx} className="flex items-start space-x-2">
                  <span className="text-emerald-400/80 font-bold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Box 3: Nearby */}
          <div className="bg-[#0b3325]/50 backdrop-blur-sm rounded-2xl p-5 border border-emerald-900/40">
            <div className="flex items-center space-x-2 text-emerald-400 font-inter font-semibold text-sm mb-3">
              <MapPin className="w-4 h-4" />
              <span>Nearby</span>
            </div>
            <ul className="space-y-2 text-xs sm:text-[13px] text-emerald-100/75 font-inter">
              {guide.nearby.map((item, idx) => (
                <li key={idx} className="flex items-start space-x-2">
                  <span className="text-emerald-400/80 font-bold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Box 4: Before You Go */}
          <div className="bg-[#0b3325]/50 backdrop-blur-sm rounded-2xl p-5 border border-emerald-900/40">
            <div className="flex items-center space-x-2 text-emerald-400 font-inter font-semibold text-sm mb-3">
              <Luggage className="w-4 h-4" />
              <span>Before You Go</span>
            </div>
            <ul className="space-y-2 text-xs sm:text-[13px] text-emerald-100/75 font-inter">
              {guide.beforeYouGo.map((item, idx) => (
                <li key={idx} className="flex items-start space-x-2">
                  <span className="text-emerald-400/80 font-bold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}

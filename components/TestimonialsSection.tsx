"use client";

import React, { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Testimonial {
  id: number;
  author: string;
  source: string;
  date: string;
  rating: string;
  review: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    author: "Andrey",
    source: "TripAdvisor",
    date: "5 April, 2026",
    rating: "5/5",
    review:
      "It's A Beautiful Lodge Hugged By The Mountains At The Back And With The River At The Front That Makes It Perfect For The Morning Hike. Clean Rooms, Convenient Parking, Cozy Outside BBQ Patio, Special Appreciation To The Hosts, Rebecca And Jason, Who Made Our Arrival/Check-In And Stay Very Welcoming And Pleasant. Highly Recommended!",
  },
  {
    id: 2,
    author: "Sarah M.",
    source: "Google Reviews",
    date: "12 April, 2026",
    rating: "5/5",
    review:
      "Such a gem right on the Kern River! Having the kitchenette in the room made traveling with our family so seamless. We spent the day rafting, had a sunset BBQ on the patio, and fell asleep to the sound of rushing water. Can't wait to return for our next Kernville getaway!",
  },
  {
    id: 3,
    author: "Marcus & Elena",
    source: "TripAdvisor",
    date: "18 April, 2026",
    rating: "5/5",
    review:
      "Pet-friendly paradise! Finding a spot this clean and comfortable that genuinely welcomes dogs is rare. The location across from the river was incredible for morning walks with mountain backdrops. Friendly staff and spotless amenities throughout.",
  },
  {
    id: 4,
    author: "David K.",
    source: "TripAdvisor",
    date: "22 April, 2026",
    rating: "5/5",
    review:
      "3RAL Resort exceeded all expectations. The views of the Sierra mountains are breathtaking, the beds are super comfortable, and it's just minutes from the Trail of 100 Giants and downtown Kernville. 10/10 lodge experience!",
  },
];

export default function TestimonialsSection() {
  const [currentPage, setCurrentPage] = useState(0);

  const prevReview = () => {
    setCurrentPage((prev) => (prev === 0 ? testimonials.length - 3 : prev - 1));
  };

  const nextReview = () => {
    setCurrentPage((prev) => (prev >= testimonials.length - 3 ? 0 : prev + 1));
  };

  return (
    <section className="relative w-full bg-[#fbfbfa] py-20 lg:py-28 overflow-hidden text-[#183125]">
      <div className="max-w-[1520px] mx-auto px-6 sm:px-12 lg:px-20 2xl:px-24">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl space-y-3">
            <h2 className="font-average text-3xl sm:text-4xl lg:text-[46px] leading-tight text-[#11271d]">
              Loved By Our Guests
            </h2>
            <p className="font-inter text-[#4a6153] text-base lg:text-[17px] leading-relaxed">
              Hear From Guests Who&apos;Ve Enjoyed Their Stay At 3RAL Resort.
              Discover What Makes Their Time In Kernville Special.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center space-x-3 shrink-0">
            <button
              onClick={prevReview}
              className="w-11 h-11 rounded-full border border-[#0a3a2a]/20 text-[#0a3a2a] flex items-center justify-center hover:bg-[#0a3a2a] hover:text-white transition-all duration-300 shadow-sm cursor-pointer"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextReview}
              className="w-11 h-11 rounded-full border border-[#0a3a2a]/20 text-[#0a3a2a] flex items-center justify-center hover:bg-[#0a3a2a] hover:text-white transition-all duration-300 shadow-sm cursor-pointer"
              aria-label="Next testimonials"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.slice(currentPage, currentPage + 3).map((item) => (
            <div
              key={item.id}
              className="group bg-white p-7 sm:p-8 rounded-3xl border border-[#0a3a2a]/10 shadow-lg hover:shadow-2xl hover:border-[#0a3a2a]/25 transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between"
            >
              <div>
                {/* Header with Quote Icon & Rating */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#0a3a2a]/10 text-[#0a3a2a] flex items-center justify-center">
                    <Quote className="w-5 h-5 fill-[#0a3a2a]" />
                  </div>

                  <div className="flex items-center space-x-1 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                    <span className="text-xs font-semibold text-[#183125] ml-1.5 font-inter">
                      ({item.rating})
                    </span>
                  </div>
                </div>

                {/* Review Text */}
                <p className="font-inter text-[#3c5245] text-sm sm:text-[14.5px] leading-[1.75]">
                  &ldquo;{item.review}&rdquo;
                </p>
              </div>

              {/* Author & Source Footer */}
              <div className="pt-6 mt-6 border-t border-[#0a3a2a]/10 flex items-center justify-between text-xs font-inter">
                <span className="font-semibold text-[#183125]">
                  {item.author} • {item.source}
                </span>
                <span className="text-[#647c6e]">{item.date}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

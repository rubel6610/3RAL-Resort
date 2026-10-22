import React, { Suspense } from "react";
import WeatherHeader from "@/components/WeatherHeader";
import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";

export default function Home() {
  return (
    <div className="min-h-screen text-white relative">
      {/* 1. Top Weather Header */}
      <Suspense fallback={<div className="h-10 bg-[#0a3a2a] w-full" />}>
        <WeatherHeader />
      </Suspense>

      {/* 2. Fixed Transparent Navbar */}
      <Navbar />

      {/* 3. Hero Banner (Under Header & Navbar) */}
      <main>
        <Banner />
      </main>
    </div>
  );
}
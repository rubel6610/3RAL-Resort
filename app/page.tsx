import React, { Suspense } from "react";
import WeatherHeader from "@/components/WeatherHeader";

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Weather Header Top Bar */}
      <Suspense fallback={<div className="h-10 bg-[#0a3a2a] w-full animate-pulse" />}>
        <WeatherHeader />
      </Suspense>

      {/* Main Page Content */}
      <main className="p-8">
        <h1 className="text-3xl font-serif text-[#0a3a2a] mb-2 font-bold">
          Corral Creek Lodge
        </h1>
        <p className="text-stone-600">
          Welcome to Kernville, CA
        </p>
      </main>
    </div>
  );
}
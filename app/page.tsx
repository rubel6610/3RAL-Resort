import React, { Suspense } from "react";
import WeatherHeader from "@/components/WeatherHeader";
import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import WelcomeSection from "@/components/WelcomeSection";
import ExploreOutdoorsSection from "@/components/ExploreOutdoorsSection";
import CloudsFeatureSection from "@/components/CloudsFeatureSection";
import PropertyMapSection from "@/components/PropertyMapSection";
import PerfectGetawaySection from "@/components/PerfectGetawaySection";
import PlanYourStaySection from "@/components/PlanYourStaySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BottomCtaBanner from "@/components/BottomCtaBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen text-[#172b20] bg-white relative flex flex-col">
      {/* 1. Top Weather Header */}
      <Suspense fallback={<div className="h-10 bg-[#0a3a2a] w-full" />}>
        <WeatherHeader />
      </Suspense>

      {/* 2. Fixed Transparent Navbar */}
      <Navbar />

      {/* 3. Main Landing Page Sections Stack */}
      <main className="flex-1 w-full">
        {/* Hero Banner (Under Header & Navbar) */}
        <Banner />

        {/* Welcome Section */}
        <WelcomeSection />

        {/* Explore The Great Outdoors */}
        <ExploreOutdoorsSection />

        {/* Clouds Banner & 6 Polaroid Highlights */}
        <CloudsFeatureSection />

        {/* 3D Property Map ("Take A Look Around") */}
        <PropertyMapSection />

        {/* The Perfect Getaway with Torn Paper Edges */}
        <PerfectGetawaySection />

        {/* Plan Your Stay (Interactive Itinerary & Rooms) */}
        <PlanYourStaySection />

        {/* Testimonials ("Loved By Our Guests") */}
        <TestimonialsSection />

        {/* Arched Bottom CTA Banner */}
        <BottomCtaBanner />
      </main>

      {/* 4. Lodge Footer */}
      <Footer />
    </div>
  );
}

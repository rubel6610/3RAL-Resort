"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  MapPin,
  X,
  Sun,
  Cloud,
  CloudRain,
  CloudSnow,
} from "lucide-react";
import Image from "next/image";
import { average, inter, raleway } from "@/app/fonts";
import { useGetWeatherQuery } from "@/redux/Api/weatherApi";

// Types for Weather Data
export interface DailyForecast {
  day: string;
  high: number;
  low: number;
  condition: "sunny" | "partly-cloudy" | "cloudy" | "rainy" | "snow";
  precipitationProbability?: number;
}

export interface WeatherData {
  location: string;
  currentTemp: number;
  conditionText: string;
  conditionType: "sunny" | "partly-cloudy" | "cloudy" | "rainy" | "snow";
  feelsLike?: number;
  windSpeed?: number;
  humidity?: number;
  sunset?: string;
  forecast: DailyForecast[];
  extendedForecast?: DailyForecast[];
  forecastUrl?: string;
}

// Fallback data while initial request loads
export const DEFAULT_WEATHER_DATA: WeatherData = {
  location: "Switzerland",
  currentTemp: 31,
  conditionText: "Snow",
  conditionType: "snow",
  feelsLike: 23,
  windSpeed: 9,
  humidity: 83,
  sunset: "6:24 PM",
  forecast: [
    { day: "Sun", high: 49, low: 36, condition: "sunny", precipitationProbability: 100 },
    { day: "Mon", high: 50, low: 36, condition: "sunny", precipitationProbability: 13 },
    { day: "Tue", high: 61, low: 46, condition: "partly-cloudy", precipitationProbability: 4 },
    { day: "Wed", high: 47, low: 39, condition: "partly-cloudy", precipitationProbability: 46 },
  ],
  extendedForecast: [
    { day: "TODAY", high: 36, low: 30, condition: "snow", precipitationProbability: 100 },
    { day: "SUN", high: 49, low: 36, condition: "rainy", precipitationProbability: 100 },
    { day: "MON", high: 50, low: 36, condition: "sunny", precipitationProbability: 13 },
    { day: "TUE", high: 61, low: 46, condition: "sunny", precipitationProbability: 4 },
    { day: "WED", high: 47, low: 39, condition: "cloudy", precipitationProbability: 46 },
    { day: "THU", high: 48, low: 32, condition: "cloudy", precipitationProbability: 4 },
    { day: "FRI", high: 54, low: 37, condition: "sunny", precipitationProbability: 0 },
  ],
  forecastUrl: "https://weather.com/weather/tenday/l/Switzerland",
};

function getForecastIcon(condition: string) {
  switch (condition) {
    case "sunny":
      return <Sun className="w-4 h-4 text-amber-500" />;
    case "rainy":
      return <CloudRain className="w-4 h-4 text-sky-600" />;
    case "snow":
      return <CloudSnow className="w-4 h-4 text-cyan-600" />;
    case "cloudy":
    case "partly-cloudy":
    default:
      return <Cloud className="w-4 h-4 text-stone-500" />;
  }
}

export default function WeatherHeader() {
  const [mounted, setMounted] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setModalOpen(false);
    };
    if (modalOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [modalOpen]);

  // Live weather fetched from Open-Meteo via RTK Query (deferred to client mount)
  const { data: apiData, isLoading } = useGetWeatherQuery(undefined, {
    skip: !mounted,
  });
  const data = apiData || DEFAULT_WEATHER_DATA;

  return (
    <>
      <header className="w-full bg-[#0a3a2a] text-white border-b border-emerald-950/40 select-none py-2 px-50 max-xl:px-6 relative z-50">
        <div
          className={`w-full flex items-center justify-between gap-4 overflow-x-auto scrollbar-none xl:grid xl:grid-cols-[1fr_auto_1fr] ${inter.className}`}
        >
          {/* Left: Location & Current Weather */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0 justify-self-start">
            {/* Location */}
            <div className="flex items-center gap-2">
              <span className="p-1 rounded-full bg-white/10 text-white/90">
                <MapPin className="w-3.5 h-3.5" />
              </span>
              <span className="text-xs sm:text-sm md:text-base font-bold tracking-wide text-white whitespace-nowrap">
                {data?.location}
              </span>
            </div>

            {/* Divider */}
            <div className="h-7 w-px bg-white/20 mx-4" />

            {/* Current Weather */}
            <div className="flex items-center gap-4">
              <Image
                src="/header/cloud-sun.png"
                alt="cloud-sun"
                width={51}
                height={39}
              />
              <div className="flex flex-col leading-tight">
                <span className="text-sm sm:text-base font-bold text-white tracking-tight">
                  {isLoading ? "..." : `${data?.currentTemp}°F`}
                </span>
                <span className="text-[11px] text-emerald-100/80 font-normal whitespace-nowrap">
                  {isLoading ? "Loading..." : data?.conditionText}
                </span>
              </div>
            </div>

            {/* Divider */}
            <div className="h-7 w-px bg-white/20 mx-4" />
          </div>

          {/* Center: 4-Day Forecast (Centered) */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0 justify-self-center">
            {data?.forecast.map((item, index) => (
              <React.Fragment key={item.day || index}>
                {index > 0 && <div className="h-7 w-px bg-white/20" />}

                <div className="flex items-center gap-2">
                  <Image
                    src={
                      item.condition === "partly-cloudy" ||
                      item.condition === "cloudy"
                        ? "/header/cloud-sun.png"
                        : "/header/Sun-icon.png"
                    }
                    alt="weather-icon"
                    width={24}
                    height={24}
                  />
                  <div className="flex flex-col leading-tight">
                    <span className="text-xs text-white mb-1">
                      {isLoading ? "..." : item.day}
                    </span>
                    <span className="text-[11px] text-white whitespace-nowrap">
                      {isLoading ? "..." : `${item.high}° / ${item.low}°`}
                    </span>
                  </div>
                </div>
              </React.Fragment>
            ))}

            {/* Divider after the last forecast day */}
            <div className="h-7 w-px bg-white/20" />
          </div>

          {/* Right: View Full Forecast Trigger Button */}
          <div className="shrink-0 pl-2 justify-self-end">
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className={`group inline-flex items-center gap-1.5 text-base text-white/90 hover:text-white ${raleway.className} transition-colors whitespace-nowrap cursor-pointer focus:outline-none`}
            >
              <span>View Full Forecast</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>
      </header>

      {/* Full Weather & Forecast Modal Dialog */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="relative w-full max-w-[480px] bg-white text-stone-900 rounded-[28px] shadow-2xl p-6 sm:p-8 animate-in zoom-in-95 duration-200 border border-black/5"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Close Button */}
            <button
              type="button"
              onClick={() => setModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors cursor-pointer"
              aria-label="Close forecast modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Title */}
            <h3
              className={`${average.className} text-[22px] sm:text-[26px] font-normal leading-[1.25] text-[#0a2e21] pr-6`}
            >
              Today&apos;s Weather And What&apos;s Coming Up In Town.
            </h3>

            {/* Current Weather Main Block */}
            <div className="flex items-center gap-4 sm:gap-5 mt-6 mb-7">
              <div className="relative w-20 h-16 sm:w-24 sm:h-18 shrink-0">
                <Image
                  src="/header/cloud-sun.png"
                  alt={data?.conditionText || "weather"}
                  fill
                  sizes="96px"
                  className="object-contain"
                />
              </div>
              <div className="w-px h-12 bg-stone-200" />
              <div className="flex flex-col">
                <span className="text-4xl sm:text-5xl font-bold text-stone-900 tracking-tight font-inter">
                  {isLoading ? "..." : `${data?.currentTemp}°F`}
                </span>
                <span className="text-base font-medium text-stone-600 capitalize mt-0.5 font-inter">
                  {isLoading ? "Loading..." : data?.conditionText}
                </span>
              </div>
            </div>

            {/* 2x2 Weather Metrics Grid */}
            <div className="grid grid-cols-2 gap-y-5 gap-x-6 sm:gap-x-8 mb-7 font-inter">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-stone-400 block">
                  FEELS LIKE
                </span>
                <span className="text-2xl sm:text-[28px] font-bold text-stone-800 mt-1 block">
                  {data?.feelsLike !== undefined ? `${data.feelsLike}°F` : "..."}
                </span>
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-stone-400 block">
                  WIND
                </span>
                <span className="text-2xl sm:text-[28px] font-bold text-stone-800 mt-1 block">
                  {data?.windSpeed !== undefined ? `${data.windSpeed} Mph` : "..."}
                </span>
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-stone-400 block">
                  HUMIDITY
                </span>
                <span className="text-2xl sm:text-[28px] font-bold text-stone-800 mt-1 block">
                  {data?.humidity !== undefined ? `${data.humidity}%` : "..."}
                </span>
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-stone-400 block">
                  SUNSET
                </span>
                <span className="text-2xl sm:text-[28px] font-bold text-stone-800 mt-1 block">
                  {data?.sunset || "6:24 PM"}
                </span>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-stone-200/90 mb-6" />

            {/* 7-Day Forecast Pills / Cards */}
            <div className="grid grid-cols-7 gap-1.5 sm:gap-2 mb-7 font-inter">
              {(data?.extendedForecast || data?.forecast)?.map((item, idx) => (
                <div
                  key={item.day || idx}
                  className="bg-[#ebede7] rounded-xl py-2.5 px-1 flex flex-col items-center justify-between text-center min-w-0"
                >
                  <span className="text-[10px] font-bold tracking-wider text-stone-600 uppercase block mb-1">
                    {item.day}
                  </span>
                  <div className="my-1 text-stone-700 flex items-center justify-center">
                    {getForecastIcon(item.condition)}
                  </div>
                  <div className="flex flex-col leading-tight mt-1">
                    <span className="text-xs font-bold text-stone-900">
                      {item.high}°
                    </span>
                    <span className="text-[11px] text-stone-500 font-medium">
                      {item.low}°
                    </span>
                  </div>
                  <span className="text-[10px] font-bold text-[#1a6d4d] mt-1.5">
                    {item.precipitationProbability !== undefined
                      ? `${item.precipitationProbability}%`
                      : "0%"}
                  </span>
                </div>
              ))}
            </div>

            {/* Bottom Button
            <Link
              href={data?.forecastUrl || "https://weather.com/weather/tenday/l/Switzerland"}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#0a3a2a] hover:bg-[#0c4833] text-white text-sm sm:text-base font-semibold py-3.5 px-6 rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>All Events & Forecast</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link> */}
          </div>
        </div>
      )}
    </>
  );
}


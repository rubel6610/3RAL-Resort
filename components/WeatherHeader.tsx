"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import Image from "next/image";
import { inter, raleway } from "@/app/fonts";
import { useGetWeatherQuery } from "@/redux/Api/weatherApi";

// Types for Weather Data
export interface DailyForecast {
  day: string;
  high: number;
  low: number;
  condition: "sunny" | "partly-cloudy" | "cloudy" | "rainy";
}

export interface WeatherData {
  location: string;
  currentTemp: number;
  conditionText: string;
  conditionType: "sunny" | "partly-cloudy" | "cloudy" | "rainy";
  forecast: DailyForecast[];
  forecastUrl?: string;
}

// Fallback data while initial request loads
export const DEFAULT_WEATHER_DATA: WeatherData = {
  location: "Kernville, CA",
  currentTemp: 0,
  conditionText: "Partly Cloudy",
  conditionType: "partly-cloudy",
  forecast: [
    { day: "Thu", high: 78, low: 54, condition: "sunny" },
    { day: "Fri", high: 80, low: 56, condition: "sunny" },
    { day: "Sat", high: 82, low: 58, condition: "sunny" },
    { day: "Sun", high: 81, low: 57, condition: "partly-cloudy" },
  ],
  forecastUrl: "https://weather.com/weather/tenday/l/Kernville+CA+USCA0533",
};



export default function WeatherHeader() {
  // Live weather fetched from Open-Meteo via RTK Query
  const { data: apiData } = useGetWeatherQuery();
  const data =  apiData || DEFAULT_WEATHER_DATA;
  return (
    <header className="w-full bg-[#0a3a2a] text-white border-b border-emerald-950/40 select-none py-2 px-50 max-xl:px-6">
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
                {data?.currentTemp}°F
              </span>
              <span className="text-[11px] text-emerald-100/80 font-normal whitespace-nowrap">
                {data?.conditionText}
              </span>
            </div>
          </div>

          {/* Divider */}
          <div className="h-7 w-px bg-white/20 mx-4" />
        </div>

        {/* Center: 4-Day Forecast (Centered) */}
        <div className="flex items-center gap-3 sm:gap-4 shrink-0 justify-self-center">
          {data?.forecast.map((item, index) => (
            <React.Fragment key={item.day}>
              {index > 0 && <div className="h-7 w-px bg-white/20" />}

              <div className="flex items-center gap-2">
                <Image
                  src={
                    item.condition === "partly-cloudy" || item.condition === "cloudy"
                      ? "/header/cloud-sun.png"
                      : "/header/Sun-icon.png"
                  }
                  alt="weather-icon"
                  width={24}
                  height={24}
                />
                <div className="flex flex-col leading-tight">
                  <span className="text-xs text-white mb-1">{item.day}</span>
                  <span className="text-[11px] text-white whitespace-nowrap">
                    {item.high}° / {item.low}°
                  </span>
                </div>
              </div>
            </React.Fragment>
          ))}

          {/* Divider after the last forecast day */}
          <div className="h-7 w-px bg-white/20" />
        </div>

        {/* Right: View Full Forecast Link */}
        <div className="shrink-0 pl-2 justify-self-end">
          <Link
            href={data?.forecastUrl || "https://weather.com/weather/tenday/l/Kernville+CA+USCA0533"}
            target="_blank"
            rel="noopener noreferrer"
            className={`group inline-flex items-center gap-1 text-base hover:text-white ${raleway.className} transition-colors whitespace-nowrap`}
          >
            <span>View Full Forecast</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </header>
  );
}

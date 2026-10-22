import React from "react";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import Image from "next/image";
import { inter, raleway } from "@/app/layout";

// Types for easy integration with your Weather RTK Query API later
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

// Static mock data matching the lodge location design
export const DEFAULT_WEATHER_DATA: WeatherData = {
  location: "Kernville, CA",
  currentTemp: 72,
  conditionText: "Partly Cloudy",
  conditionType: "partly-cloudy",
  forecast: [
    { day: "Thu", high: 78, low: 54, condition: "sunny" },
    { day: "Fri", high: 80, low: 56, condition: "sunny" },
    { day: "Sat", high: 82, low: 58, condition: "sunny" },
    { day: "Sun", high: 81, low: 57, condition: "partly-cloudy" },
  ],
  forecastUrl: "https://weather.com",
};

// Weather Icons crafted to match the design
export function SunIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="5" fill="#FBBF24" />
      <g stroke="#FBBF24" strokeWidth="2" strokeLinecap="round">
        <line x1="12" y1="1.5" x2="12" y2="3.5" />
        <line x1="12" y1="20.5" x2="12" y2="22.5" />
        <line x1="1.5" y1="12" x2="3.5" y2="12" />
        <line x1="20.5" y1="12" x2="22.5" y2="12" />
        <line x1="4.5" y1="4.5" x2="6" y2="6" />
        <line x1="18" y1="18" x2="19.5" y2="19.5" />
        <line x1="4.5" y1="19.5" x2="6" y2="18" />
        <line x1="18" y1="6" x2="19.5" y2="4.5" />
      </g>
    </svg>
  );
}

export function PartlyCloudyIcon({
  className = "w-6 h-6",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="sunGrad" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#FDE047" />
          <stop offset="100%" stopColor="#F59E0B" />
        </radialGradient>
        <linearGradient id="cloudGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#E2E8F0" />
        </linearGradient>
        <filter id="cloudShadow" x="-10%" y="-10%" width="120%" height="130%">
          <feDropShadow dx="0" dy="1" stdDeviation="1" floodOpacity="0.18" />
        </filter>
      </defs>
      {/* Sun */}
      <circle cx="13" cy="12" r="6.5" fill="url(#sunGrad)" />
      {/* Rays */}
      <g
        stroke="#FBBF24"
        strokeWidth="1.75"
        strokeLinecap="round"
        opacity="0.9"
      >
        <line x1="13" y1="2" x2="13" y2="4" />
        <line x1="5.5" y1="5.5" x2="7" y2="7" />
        <line x1="3" y1="12" x2="5" y2="12" />
        <line x1="20.5" y1="5.5" x2="19" y2="7" />
      </g>
      {/* Fluffy Cloud */}
      <path
        d="M10 24h13.5a5.5 5.5 0 0 0 1.2-10.87 6.5 6.5 0 0 0-12.44-1.63A4.5 4.5 0 0 0 10 24z"
        fill="url(#cloudGrad)"
        filter="url(#cloudShadow)"
      />
    </svg>
  );
}


interface WeatherHeaderProps {
  data?: WeatherData;
}

export default function WeatherHeader({
  data = DEFAULT_WEATHER_DATA,
}: WeatherHeaderProps) {
  return (
    <header className={`w-full bg-[#0a3a2a] text-white border-b border-emerald-950/40 select-none py-[8px] px-[200px] max-xl:px-6 `}>
      <div className={`w-full flex items-center justify-between gap-4 overflow-x-auto scrollbar-none xl:grid xl:grid-cols-[1fr_auto_1fr] ${inter.className}`}>
        {/* Left: Location & Current Weather */}
        <div className="flex items-center gap-3 sm:gap-4 shrink-0 justify-self-start">
          {/* Location */}
          <div className="flex items-center gap-2">
            <span className="p-1 rounded-full bg-white/10 text-white/90">
              <MapPin className="w-3.5 h-3.5" />
            </span>
            <span className="text-xs sm:text-sm md:text-base font-bold tracking-wide text-white whitespace-nowrap">
              {data.location}
            </span>
          </div>

          {/* Divider */}
          <div className="h-7 w-px bg-white/20 mx-4" />

          {/* Current Weather */}
          <div className="flex items-center gap-4">
          <Image src="/header/cloud-sun.png" alt="cloud-sun" width={51} height={39}/>
            <div className="flex flex-col leading-tight">
              <span className="text-sm sm:text-base font-bold text-white tracking-tight">
                {data.currentTemp}°F
              </span>
              <span className="text-[11px] text-emerald-100/80 font-normal whitespace-nowrap">
                {data.conditionText}
              </span>
            </div>
          </div>
               {/* Divider */}
          <div className="h-7 w-px bg-white/20 mx-4" />
        </div>

        {/* Center: 4-Day Forecast (Centered) */}
        <div className="flex items-center gap-3 sm:gap-4 shrink-0 justify-self-center">
          {data.forecast.map((item, index) => (
            <React.Fragment key={item.day}>
              {index > 0 && <div className="h-7 w-px bg-white/20" />}

              <div className="flex items-center gap-2">
         <Image src="/header/Sun-icon.png" alt="cloud-sun" width={24} height={24}/>
                <div className="flex flex-col leading-tight">
                  <span className="text-xs  text-white mb-1">
                    {item.day}
                  </span>
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
            href={data.forecastUrl || "#"}
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

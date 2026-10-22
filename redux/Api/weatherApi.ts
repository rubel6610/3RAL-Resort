import { fetchWeatherApi } from "openmeteo";
import { baseApi } from "./apiSlice";
import type { WeatherData, DailyForecast } from "@/components/WeatherHeader";

export interface WeatherQueryParams {
  latitude?: number;
  longitude?: number;
  locationName?: string;
  timezone?: string;
}

function mapWeatherCode(code: number): {
  text: string;
  type: "sunny" | "partly-cloudy" | "cloudy" | "rainy";
} {
  switch (code) {
    case 0:
      return { text: "Sunny", type: "sunny" };
    case 1:
      return { text: "Mainly Clear", type: "sunny" };
    case 2:
      return { text: "Partly Cloudy", type: "partly-cloudy" };
    case 3:
      return { text: "Overcast", type: "cloudy" };
    case 45:
    case 48:
      return { text: "Foggy", type: "cloudy" };
    case 51:
    case 53:
    case 55:
      return { text: "Drizzle", type: "rainy" };
    case 61:
    case 63:
    case 65:
      return { text: "Rain", type: "rainy" };
    case 71:
    case 73:
    case 75:
      return { text: "Snow", type: "rainy" };
    case 80:
    case 81:
    case 82:
      return { text: "Showers", type: "rainy" };
    case 95:
    case 96:
    case 99:
      return { text: "Thunderstorm", type: "rainy" };
    default:
      return { text: "Partly Cloudy", type: "partly-cloudy" };
  }
}

export const weatherApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getWeather: builder.query<WeatherData, WeatherQueryParams | void>({
      queryFn: async (params) => {
        try {
          const lat = params?.latitude ?? 35.7547;
          const lon = params?.longitude ?? -118.4251;
          const locationName = params?.locationName ?? "Kernville, CA";

          const url = "https://api.open-meteo.com/v1/forecast";
          const queryParams = {
            latitude: lat,
            longitude: lon,
            current: ["temperature_2m", "weather_code"],
            daily: ["weather_code", "temperature_2m_max", "temperature_2m_min"],
            temperature_unit: "fahrenheit",
            timezone: params?.timezone || "auto",
          };

          const responses = await fetchWeatherApi(url, queryParams);
          const response = responses[0];

          const utcOffsetSeconds = response.utcOffsetSeconds();
          const current = response.current()!;
          const daily = response.daily()!;

          const currentTemp = Math.round(current.variables(0)!.value());
          const currentWeatherCode = Math.round(current.variables(1)!.value());
          const currentMapped = mapWeatherCode(currentWeatherCode);

          const timeStart = Number(daily.time());
          const timeEnd = Number(daily.timeEnd());
          const interval = Number(daily.interval());

          const weatherCodes = daily.variables(0)!.valuesArray()!;
          const maxTemps = daily.variables(1)!.valuesArray()!;
          const minTemps = daily.variables(2)!.valuesArray()!;

          const forecast: DailyForecast[] = [];
          let index = 0;
          for (let t = timeStart; t < timeEnd; t += interval) {
            // Skip today (index 0), collect the next 4 forecast days (indices 1 to 4)
            if (index >= 1 && index <= 4) {
              const date = new Date((t + utcOffsetSeconds) * 1000);
              const day = date.toLocaleDateString("en-US", {
                weekday: "short",
                timeZone: "UTC",
              });
              forecast.push({
                day,
                high: Math.round(maxTemps[index]),
                low: Math.round(minTemps[index]),
                condition: mapWeatherCode(Math.round(weatherCodes[index])).type,
              });
            }
            index++;
          }

          const weatherData: WeatherData = {
            location: locationName,
            currentTemp,
            conditionText: currentMapped.text,
            conditionType: currentMapped.type,
            forecast,
            forecastUrl:
              params?.locationName && params.locationName !== "Kernville, CA"
                ? `https://weather.com/weather/tenday/l/${encodeURIComponent(params.locationName)}`
                : "https://weather.com/weather/tenday/l/Kernville+CA+USCA0533",
          };

          return { data: weatherData };
        } catch (error: any) {
          return {
            error: {
              status: "CUSTOM_ERROR",
              error: error?.message || "Failed to fetch weather using openmeteo",
            },
          };
        }
      },
      providesTags: ["Weather"],
    }),
  }),
  overrideExisting: false,
});

export const { useGetWeatherQuery, useLazyGetWeatherQuery } = weatherApi;

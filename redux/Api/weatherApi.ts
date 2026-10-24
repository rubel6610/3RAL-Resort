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
    case 77:
    case 85:
    case 86:
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
          const lat = params?.latitude ?? 46.8182;
          const lon = params?.longitude ?? 8.2275;
          const locationName = params?.locationName ?? "Switzerland";

          const url = "https://api.open-meteo.com/v1/forecast";
          const queryParams = {
            latitude: lat,
            longitude: lon,
            current: [
              "temperature_2m",
              "apparent_temperature",
              "relative_humidity_2m",
              "wind_speed_10m",
              "weather_code",
            ],
            daily: [
              "weather_code",
              "temperature_2m_max",
              "temperature_2m_min",
              "precipitation_probability_max",
              "sunset",
            ],
            temperature_unit: "fahrenheit",
            wind_speed_unit: "mph",
            timezone: params?.timezone || "Europe/Zurich",
          };

          const responses = await fetchWeatherApi(url, queryParams);
          const response = responses[0];

          const utcOffsetSeconds = response.utcOffsetSeconds();
          const current = response.current()!;
          const daily = response.daily()!;

          const currentTemp = Math.round(current.variables(0)!.value());
          const feelsLike = Math.round(current.variables(1)!.value());
          const humidity = Math.round(current.variables(2)!.value());
          const windSpeed = Math.round(current.variables(3)!.value());
          const currentWeatherCode = Math.round(current.variables(4)!.value());
          const currentMapped = mapWeatherCode(currentWeatherCode);

          let sunsetFormatted = "6:24 PM";
          try {
            const sunsetVar = daily.variables(4);
            if (sunsetVar && typeof sunsetVar.valuesInt64 === "function") {
              const tsVal = Number(sunsetVar.valuesInt64(0));
              if (tsVal) {
                sunsetFormatted = new Date(tsVal * 1000).toLocaleTimeString("en-US", {
                  hour: "numeric",
                  minute: "2-digit",
                  hour12: true,
                  timeZone: params?.timezone || "Europe/Zurich",
                });
              }
            }
          } catch {
            // fallback
          }

          const timeStart = Number(daily.time());
          const timeEnd = Number(daily.timeEnd());
          const interval = Number(daily.interval());

          const weatherCodes = daily.variables(0)!.valuesArray()!;
          const maxTemps = daily.variables(1)!.valuesArray()!;
          const minTemps = daily.variables(2)!.valuesArray()!;
          const precipProbabilities = daily.variables(3)!.valuesArray()!;

          const extendedForecast: DailyForecast[] = [];
          const forecast: DailyForecast[] = [];
          let index = 0;
          for (let t = timeStart; t < timeEnd; t += interval) {
            if (index < 7) {
              const date = new Date((t + utcOffsetSeconds) * 1000);
              const dayName =
                index === 0
                  ? "TODAY"
                  : date.toLocaleDateString("en-US", {
                      weekday: "short",
                      timeZone: "UTC",
                    }).toUpperCase();

              const dayForecast: DailyForecast = {
                day: dayName,
                high: Math.round(maxTemps[index]),
                low: Math.round(minTemps[index]),
                condition: mapWeatherCode(Math.round(weatherCodes[index])).type,
                precipitationProbability: Math.round(precipProbabilities[index] || 0),
              };

              extendedForecast.push(dayForecast);

              // 4 days for the top bar header (indices 1 to 4)
              if (index >= 1 && index <= 4) {
                forecast.push({
                  ...dayForecast,
                  day: date.toLocaleDateString("en-US", {
                    weekday: "short",
                    timeZone: "UTC",
                  }),
                });
              }
            }
            index++;
          }

          const weatherData: WeatherData = {
            location: locationName,
            currentTemp,
            conditionText: currentMapped.text,
            conditionType: currentMapped.type,
            feelsLike,
            windSpeed,
            humidity,
            sunset: sunsetFormatted,
            forecast,
            extendedForecast,
            forecastUrl:
              params?.locationName && params.locationName !== "Switzerland"
                ? `https://weather.com/weather/tenday/l/${encodeURIComponent(params.locationName)}`
                : "https://weather.com/weather/tenday/l/Switzerland",
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

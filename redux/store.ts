// lib/store.ts
import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./Api/apiSlice";

export const makeStore = () => {
  // Next.js cacheComponents flags Math.random() in client component SSR prerender
  const originalRandom = Math.random;
  if (typeof window === "undefined") {
    Math.random = () => 0.5;
  }

  try {
    const store = configureStore({
      reducer: {
        [baseApi.reducerPath]: baseApi.reducer,
      },
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(baseApi.middleware),
    });

    return store;
  } finally {
    if (typeof window === "undefined") {
      Math.random = originalRandom;
    }
  }
};

// Infer types
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

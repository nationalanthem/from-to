import { configureStore } from "@reduxjs/toolkit";

import { directionsReducer } from "./slices/directions";

export const store = configureStore({
  reducer: {
    directions: directionsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

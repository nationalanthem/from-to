import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { DIRECTIONS, DIRECTIONS_BY_CATEGORY, FILTERS } from "../../../const";

export const DEFAULT_CATEGORY = "all";

export interface DirectionsState {
  directions: { [key: string]: string };
  filters: { [key: string]: string[] };
  categoryFrom: string;
  categoryTo: string;
  directionFrom: string;
  directionTo?: string;
}

const directions = DIRECTIONS.reduce(
  (state, { code, name }) => ({
    ...state,
    [code]: name,
  }),
  {}
);

const filters = FILTERS.reduce(
  (state, { from, to }) => ({
    ...state,
    [from.code]: to.map(({ code }) => code),
  }),
  {} as { [key: string]: string[] }
);

const initialState: DirectionsState = {
  directions,
  filters,
  categoryFrom: DEFAULT_CATEGORY,
  categoryTo: DEFAULT_CATEGORY,
  directionFrom: Object.keys(directions)[0],
  directionTo: filters[Object.keys(directions)[0]][0],
};

export const directionsSlice = createSlice({
  name: "directions",
  initialState,
  reducers: {
    setCategoryFrom: (state, action: PayloadAction<string>) => {
      if (state.categoryFrom === action.payload) return;

      state.categoryFrom = action.payload;
      state.categoryTo = DEFAULT_CATEGORY;

      if (action.payload !== DEFAULT_CATEGORY) {
        state.directionFrom = DIRECTIONS_BY_CATEGORY[action.payload][0];
        state.directionTo = state.filters[state.directionFrom][0];
      } else {
        state.directionFrom = Object.keys(state.directions)[0];
        state.directionTo = state.filters[state.directionFrom][0];
      }
    },
    setCategoryTo: (state, action: PayloadAction<string>) => {
      state.categoryTo = action.payload;

      if (action.payload !== DEFAULT_CATEGORY) {
        state.directionTo = state.filters[state.directionFrom].filter((code) =>
          DIRECTIONS_BY_CATEGORY[action.payload].includes(code)
        )[0];
      } else {
        state.directionTo = state.filters[state.directionFrom][0];
      }
    },
    setDirectionFrom: (state, action: PayloadAction<string>) => {
      state.directionFrom = action.payload;

      state.directionTo = state.filters[state.directionFrom][0];
      state.categoryTo = DEFAULT_CATEGORY;
    },
    setDirectionTo: (state, action: PayloadAction<string>) => {
      state.directionTo = action.payload;
    },
  },
});

export const directionsActions = directionsSlice.actions;

export const directionsReducer = directionsSlice.reducer;

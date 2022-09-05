import { createSelector } from "@reduxjs/toolkit";

import { DEFAULT_CATEGORY } from ".";
import { RootState } from "../..";
import { DIRECTIONS_BY_CATEGORY } from "../../../const";

const selectSelf = (state: RootState) => state.directions;

export const selectCategoryFrom = createSelector(
  selectSelf,
  (state) => state.categoryFrom
);

export const selectCategoryTo = createSelector(
  selectSelf,
  (state) => state.categoryTo
);

export const selectDirectionFrom = createSelector(
  selectSelf,
  (state) => state.directionFrom
);

export const selectDirectionTo = createSelector(
  selectSelf,
  (state) => state.directionTo
);

export const selectFromDirections = createSelector(selectSelf, (state) => {
  if (state.categoryFrom === DEFAULT_CATEGORY) return state.directions;

  const directions = DIRECTIONS_BY_CATEGORY[state.categoryFrom];

  return Object.fromEntries(
    Object.entries(state.directions).filter(([code]) =>
      directions.includes(code)
    )
  );
});

export const selectToDirections = createSelector(selectSelf, (state) => {
  let directions = state.filters[state.directionFrom];

  if (state.categoryTo !== DEFAULT_CATEGORY)
    directions = directions.filter((code) =>
      DIRECTIONS_BY_CATEGORY[state.categoryTo].includes(code)
    );

  return Object.fromEntries(
    Object.entries(state.directions).filter(([code]) =>
      directions.includes(code)
    )
  );
});

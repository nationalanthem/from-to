import { useDispatch, useSelector } from "react-redux";

import "./App.scss";

import { directionsActions } from "./store/slices/directions";
import {
  selectCategoryFrom,
  selectCategoryTo,
  selectDirectionFrom,
  selectDirectionTo,
  selectFromDirections,
  selectToDirections,
} from "./store/slices/directions/selectors";

import { DirectionsForm } from "./components/molecules/DirectionsForm";

export const App = () => {
  const dispatch = useDispatch();

  const fromCategory = useSelector(selectCategoryFrom);
  const toCategory = useSelector(selectCategoryTo);

  const fromDirection = useSelector(selectDirectionFrom);
  const toDirection = useSelector(selectDirectionTo);

  const fromDirections = useSelector(selectFromDirections);
  const toDirections = useSelector(selectToDirections);

  const changeFromCategory = (value: string) => {
    dispatch(directionsActions.setCategoryFrom(value));
  };

  const changeToCategory = (value: string) => {
    dispatch(directionsActions.setCategoryTo(value));
  };

  const changeFromDirection = (value: string) => {
    dispatch(directionsActions.setDirectionFrom(value));
  };

  const changeToDirection = (value: string) => {
    dispatch(directionsActions.setDirectionTo(value));
  };

  return (
    <div className="container">
      <DirectionsForm
        activeCategory={fromCategory}
        setActiveCategory={changeFromCategory}
        directions={fromDirections}
        activeDirection={fromDirection}
        setActiveDirection={changeFromDirection}
      />

      <DirectionsForm
        activeCategory={toCategory}
        setActiveCategory={changeToCategory}
        directions={toDirections}
        activeDirection={toDirection}
        setActiveDirection={changeToDirection}
      />
    </div>
  );
};

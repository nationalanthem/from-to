import { DropdownButton } from "../../atoms/Dropdown";
import { Input } from "../../atoms/Input";
import { Tabs } from "../../atoms/Tabs";
import { DIRECTIONS_CATEGORIES } from "../../../const";

import styles from "./DirectionsForm.module.scss";

interface DirectionsFormProps {
  activeCategory: string;
  setActiveCategory: (value: string) => void;
  directions: { [key: string]: string };
  activeDirection?: string;
  setActiveDirection: (value: string) => void;
}

export const DirectionsForm = ({
  activeCategory,
  setActiveCategory,
  directions,
  activeDirection,
  setActiveDirection,
}: DirectionsFormProps) => {
  return (
    <div className={styles.container}>
      <Tabs
        data={DIRECTIONS_CATEGORIES}
        activeTab={activeCategory}
        setActiveTab={setActiveCategory}
      />
      <div className={styles.form}>
        <Input placeholder="Введите сумму..." />
        <DropdownButton
          value={activeDirection ?? "Выбрать"}
          onChange={setActiveDirection}
          data={directions}
        />
      </div>
    </div>
  );
};

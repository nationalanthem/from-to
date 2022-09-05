import { useState, useRef, useEffect } from "react";
import { Button } from "../Button";

import styles from "./Dropdown.module.scss";

interface Props {
  data: { [key: string]: string };
  onChange: (value: string) => void;
  value: string;
}

export function DropdownButton({ value, data, onChange }: Props) {
  const [open, setOpen] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  const handlePress = (value: string) => {
    setOpen(false);
    onChange(value);
  };

  useEffect(() => {
    if (!open) return;

    function outsideClickHandler(e: MouseEvent) {
      if (!containerRef.current?.contains(e.target as Element)) {
        setOpen(false);
      }
    }

    window.addEventListener("click", outsideClickHandler);

    return () => {
      window.removeEventListener("click", outsideClickHandler);
    };
  }, [open, containerRef]);

  return (
    <div ref={containerRef} className={styles.container}>
      <Button onClick={() => setOpen(!open)} text={value} />
      {open && (
        <div className={styles.dropdown}>
          {!Object.keys(data).length && (
            <span className={styles.dropdownEmpty}>Пусто</span>
          )}
          {Object.keys(data).map((item) => {
            return (
              <span
                key={item}
                className={styles.dropdownItem}
                onClick={() => handlePress(item)}
              >
                {data[item]}
              </span>
            );
          })}
        </div>
      )}
    </div>
  );
}

import cn from "classnames";

import styles from "./Tabs.module.scss";

interface Props {
  data: { [key: string]: string };
  activeTab?: string;
  setActiveTab(value: string): void;
}

export const Tabs = ({ data, activeTab, setActiveTab }: Props) => {
  return (
    <div className={styles.container}>
      {Object.keys(data).map((tab) => (
        <div
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={cn(styles.tab, {
            [styles.tabActive]: tab === activeTab,
          })}
        >
          {data[tab]}
        </div>
      ))}
    </div>
  );
};

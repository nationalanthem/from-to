import styles from "./Input.module.scss";

interface Props {
  placeholder?: string;
}

export const Input = (props: Props) => {
  return <input type={"number"} className={styles.input} {...props} />;
};

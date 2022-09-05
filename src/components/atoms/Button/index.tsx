import styles from "./Button.module.scss";

interface Props {
  text: string;
  onClick(): void;
}

export const Button = ({ text, onClick }: Props) => {
  return (
    <button type="button" onClick={onClick} className={styles.button}>
      {text}
    </button>
  );
};

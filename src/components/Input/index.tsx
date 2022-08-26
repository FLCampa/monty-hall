import styles from "./styles.module.css";

interface NumberInputProps {
  text: string;
  value: number;
  onChange: (newValue: number) => void;
}

function Input({ text, value, onChange }: NumberInputProps) {
  const decrease = () => {
    if (value > 1) onChange(value - 1);
  };

  const increase = () => onChange(value + 1);

  return (
    <div className={styles.container}>
      <span className={styles.text}>{text}</span>
      <span className={styles.value}>{value}</span>

      <div className={styles.buttons}>
        <button className={styles.button} onClick={decrease}>
          -
        </button>
        <button className={styles.button} onClick={increase}>
          +
        </button>
      </div>
    </div>
  );
}

export default Input;

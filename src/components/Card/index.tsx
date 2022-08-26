import styles from "./styles.module.css";

interface CardProps {
  bgcolor?: string;
  children?: any;
}

function Card({ bgcolor, children }: CardProps) {
  return (
    <div className={styles.container} style={{ background: bgcolor ?? "#fff" }}>
      {children}
    </div>
  );
}

export default Card;

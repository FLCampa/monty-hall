import React from "react";

import styles from "./styles.module.css";

function Gift() {
  return (
    <div className={styles.container}>
      <div className={styles.top}></div>
      <div className={styles.body}></div>
      <div className={styles.verticalstrip}></div>
      <div className={styles.horizontalstrip}></div>
    </div>
  );
}

export default Gift;

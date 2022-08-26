import { useState } from "react";
import Card from "../Card";
import Link from "next/link";
import Input from "../Input";

import styles from "./styles.module.css";

export default function Form() {
  const [doorQuantity, setDoorQuantity] = useState(3);
  const [hasGift, setHasGift] = useState(1);

  return (
    <div className={styles.form}>
      <div>
        <Card bgcolor="#c0392c">
          <h1 className={styles.title}>Monty Hall</h1>
        </Card>

        <Card>
          <Input
            text="Number of doors"
            value={doorQuantity}
            onChange={(newQuantity) => setDoorQuantity(newQuantity)}
          />
        </Card>
      </div>

      <div>
        <Card>
          <Input
            text="Prize door number"
            value={hasGift}
            onChange={(newGiftDoor) => setHasGift(newGiftDoor)}
          />
        </Card>

        <Card bgcolor="#28a085">
          <Link href={`/game/${doorQuantity}/${hasGift}`}>
            <h2 className={styles.link}>Start</h2>
          </Link>
        </Card>
      </div>
    </div>
  );
}

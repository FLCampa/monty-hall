// External Libraries
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

// Components
import Door from "../../../components/Door";

// Functions
import { createDoors, refreshDoors } from "../../../functions/doors";

// Styles
import styles from "../styles.module.css";

export default function Game() {
  const { query } = useRouter();

  const [isValid, setIsValid] = useState(false);
  const [doors, setDoors] = useState([]);

  useEffect(() => {
    const doors = +query.doors; // + converte para number
    const hasGift = +query.hasGift;

    const validQuantity = doors >= 3 && doors <= 100;
    const hasValidGift = hasGift >= 1 && hasGift <= doors;

    setIsValid(validQuantity && hasValidGift);
  }, [doors, query]);

  useEffect(() => {
    const doors = +query.doors; // + converte para number
    const hasGift = +query.hasGift;

    setDoors(createDoors(doors, hasGift));
  }, [query]);

  function renderDoors() {
    return doors.map((door) => {
      return (
        <Door
          key={door.number}
          door={door}
          onChange={(newDoor) => setDoors(refreshDoors(doors, newDoor))}
        />
      );
    });
  }

  return (
    <div className={styles.game}>
      <div className={styles.doors}>
        {/* {isValid ? renderDoors() : <h2>Invalid values</h2>} */}

        {doors.map((door) => (
          <Door
            key={door.number}
            door={door}
            onChange={(newDoor) => setDoors(refreshDoors(doors, newDoor))}
          />
        ))}
      </div>

      <div className={styles.buttons}>
        <Link href="/">
          <button>Restart Game</button>
        </Link>
      </div>
    </div>
  );
}

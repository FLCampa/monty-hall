import React from "react";

import Gift from "../Gift";
import DoorModel from "../../model/door";

import styles from "./styles.module.css";

interface DoorProps {
  door: DoorModel;
  onChange: (newDoor: DoorModel) => void;
}

function Door({ door, onChange }: DoorProps) {
  const isSelected = door.isSelected && !door.isOpen ? styles.selected : "";

  const toggleSelection = () => onChange(door.toggleSelection());
  const openDoor = (e) => {
    e.stopPropagation();
    onChange(door.openDoor());
  };

  function renderDoor() {
    return (
      <div className={styles.door}>
        <div className={styles.number}>{door.number}</div>
        <div className={styles.knob} onClick={openDoor}></div>
      </div>
    );
  }

  return (
    <div className={styles.container} onClick={toggleSelection}>
      <div className={`${styles.frame} ${isSelected}`}>
        {door.isClosed ? renderDoor() : door.hasGift && <Gift />}
      </div>
      <div className={styles.floor}></div>
    </div>
  );
}

export default Door;

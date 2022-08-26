import DoorModel from "../model/door";

export function createDoors(quantity: number, giftDoor: number): DoorModel[] {
  return Array.from({ length: quantity }, (_, i) => {
    const number = i + 1;
    const hasGift = number === giftDoor;
    return new DoorModel(number, hasGift);
  });
}

export function refreshDoors(
  doors: DoorModel[],
  modifiedDoor: DoorModel
): DoorModel[] {
  return doors.map((currentDoor) => {
    const sameAsModified = currentDoor.number === modifiedDoor.number;

    if (sameAsModified) return modifiedDoor;
    return modifiedDoor.isOpen ? currentDoor : currentDoor.deselectDoor();
  });
}

export default class DoorModel {
  #number: number; // # <- private attribute
  #hasGift: boolean;
  #isSelected: boolean;
  #isOpen: boolean;

  constructor(
    number: number,
    hasGift = false,
    isSelected = false,
    isOpen = false
  ) {
    this.#number = number;
    this.#hasGift = hasGift;
    this.#isSelected = isSelected;
    this.#isOpen = isOpen;
  }

  get number() {
    return this.#number;
  }

  get hasGift() {
    return this.#hasGift;
  }

  get isSelected() {
    return this.#isSelected;
  }

  get isOpen() {
    return this.#isOpen;
  }

  get isClosed() {
    return !this.#isOpen;
  }

  deselectDoor() {
    const isSelected = false;
    return new DoorModel(this.number, this.hasGift, isSelected, this.isOpen);
  }

  toggleSelection() {
    const isSelected = !this.isSelected; // <- acessando pelo get
    return new DoorModel(this.number, this.hasGift, isSelected, this.isOpen);
  }

  openDoor() {
    const isOpen = true;
    return new DoorModel(this.number, this.hasGift, this.isSelected, isOpen);
  }
}

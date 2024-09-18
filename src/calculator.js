import { toNumber, calculateValue, toString } from "./utils.js";

export class Calculator {
  constructor(display) {
    this.display = display;
    this.display.innerText = "0";
    this.storedValue = 0;
    this.action = "";
  }

  handleValueInput(value) {
    if (value === ",") {
      this.display.innerText += value;
    } else if (this.display.innerText === "0") {
      this.display.innerText = value;
    } else {
      this.display.innerText += value;
    }
  }

  handleReset() {
    this.display.innerText = "0";
    this.action = "";
    this.storedValue = 0;
  }

  handleAdd() {
    this.storedValue = toNumber(this.display.innerText);
    this.action = "+";

    this.display.innerText = "0";
  }

  handleSubtract() {
    this.storedValue = toNumber(this.display.innerText);
    this.action = "-";

    this.display.innerText = "0";
  }

  handleMultiply() {
    this.storedValue = toNumber(this.display.innerText);
    this.action = "*";

    this.display.innerText = "0";
  }

  handleDivide() {
    this.storedValue = toNumber(this.display.innerText);
    this.action = "/";

    this.display.innerText = "0";
  }

  handleNegate() {
    this.storedValue = toNumber(this.display.innerText) * -1;

    this.display.innerText = toString(this.storedValue);
  }

  handlePercentage() {
    this.storedValue = toNumber(this.display.innerText) / 100;

    this.display.innerText = toString(this.storedValue);
  }

  handleCalculate() {
    if (this.action !== "") {
      this.storedValue = calculateValue(
        this.storedValue,
        toNumber(this.display.innerText),
        this.action,
      );

      this.action = "";
    } else {
      this.storedValue = toNumber(this.display.innerText);
    }

    this.display.innerText = toString(this.storedValue);
  }
}

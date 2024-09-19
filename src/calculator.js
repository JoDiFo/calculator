import { toNumber, calculateValue, toString } from "./utils.js";

export class Calculator {
  constructor(display, memoDisplay) {
    this.display = display;
    this.memoDisplay = memoDisplay;

    this.display.innerText = "0";
    this.memoDisplay.innerText = "";

    this.firstValue = 0;
    this.secondValue = 0;
    this.action = "";
  }

  updateValues() {
    if (this.action) {
      this.secondValue = toNumber(this.display.innerText);
    } else {
      this.firstValue = toNumber(this.display.innerText);
    }
  }

  handleValueInput(value) {
    if (value === ",") {
      if (!this.display.innerText.includes(",")) {
        this.display.innerText += value;
      }
    } else if (this.display.innerText === "0") {
      this.display.innerText = value;
    } else {
      this.display.innerText += value;
    }

    this.updateValues();
  }

  handleDelete() {
    this.display.innerText = this.display.innerText.substring(
      0,
      this.display.innerText.length - 1,
    );

    if (this.display.innerText === "") {
      this.display.innerText = "0";
    }

    this.updateValues();
  }

  handleReset() {
    this.display.innerText = "0";
    this.memoDisplay.innerText = "";
    this.action = "";
    this.firstValue = 0;
    this.secondValue = 0;
  }

  handleAdd() {
    this.action = "+";

    this.display.innerText = "0";
    this.memoDisplay.innerText = `${toString(this.firstValue)} ${this.action}`;
  }

  handleSubtract() {
    this.action = "-";

    this.display.innerText = "0";
    this.memoDisplay.innerText = `${toString(this.firstValue)} ${this.action}`;
  }

  handleMultiply() {
    this.action = "*";

    this.display.innerText = "0";
    this.memoDisplay.innerText = `${toString(this.firstValue)} ${this.action}`;
  }

  handleDivide() {
    this.action = "/";

    this.display.innerText = "0";
    this.memoDisplay.innerText = `${toString(this.firstValue)} ${this.action}`;
  }

  handleNegate() {
    this.firstValue = toNumber(this.display.innerText) * -1;

    this.display.innerText = toString(this.firstValue);
    if (this.memoDisplay.innerText) {
      this.memoDisplay.innerText = `${toString(this.firstValue)} ${this.action} ${toString(this.secondValue)}`;
    }
  }

  handlePercentage() {
    this.firstValue = toNumber(this.display.innerText) / 100;

    this.display.innerText = toString(this.firstValue);
    this.memoDisplay.innerText = `${toString(this.firstValue)} ${this.action}`;
  }

  handleCalculate() {
    const prevValue = this.firstValue;

    if (this.action !== "") {
      this.firstValue = calculateValue(
        this.firstValue,
        this.secondValue,
        this.action,
      );
    } else {
      this.firstValue = toNumber(this.display.innerText);
    }

    this.display.innerText = toString(this.firstValue);
    this.memoDisplay.innerText = `${toString(prevValue)} ${this.action} ${toString(this.secondValue)} =`;
  }
}

import {
  DISPLAY_SMALL_FONT_SIZE,
  DISPLAY_BIG_FONT_SIZE,
  MAX_BIG_DISPLAY_LENGTH,
  MAX_SMALL_DISPLAY_LENGTH,
  BIG_MEMO_FONT_SIZE,
  SMALL_MEMO_FONT_SIZE,
  MAX_MEMO_LENGTH,
} from "./constants.js";
import { toNumber, calculateValue, toString } from "./utils/index.js";

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

  updateFontSize() {
    if (this.display.innerText.length >= MAX_BIG_DISPLAY_LENGTH - 2) {
      this.display.style.fontSize = `${DISPLAY_SMALL_FONT_SIZE}px`;
    } else {
      this.display.style.fontSize = `${DISPLAY_BIG_FONT_SIZE}px`;
    }

    if (this.memoDisplay.innerText.length >= MAX_MEMO_LENGTH - 2) {
      this.memoDisplay.style.fontSize = `${SMALL_MEMO_FONT_SIZE}px`;
    } else {
      this.memoDisplay.style.fontSize = `${BIG_MEMO_FONT_SIZE}px`;
    }
  }

  handleValueInput(value) {
    if (this.display.innerText.length >= MAX_SMALL_DISPLAY_LENGTH) {
      if (value === "-") {
        this.handleSubtract();
        this.updateFontSize();
        this.updateValues();
      }

      return;
    }

    if (value === ",") {
      if (!this.display.innerText.includes(",")) {
        this.display.innerText += value;
      }
    } else if (this.display.innerText === "0") {
      if (value === "-") {
        this.handleNegate();
        this.display.innerText = "-0";
      } else {
        this.display.innerText = value;
      }
    } else if (this.display.innerText === "-0") {
      if (value !== "-") {
        this.display.innerText = `-${value}`;
      } else {
        this.handleSubtract();
      }
    } else if (this.display.innerText == "Infinity") {
      this.handleReset();
      this.display.innerText = value;
    } else {
      if (value === "-") {
        this.handleSubtract();
      } else {
        this.display.innerText += value;
      }
    }

    this.updateFontSize();
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

    this.updateFontSize();
    this.updateValues();
  }

  handleReset() {
    this.display.innerText = "0";
    this.memoDisplay.innerText = "";
    this.action = "";
    this.firstValue = 0;
    this.secondValue = 0;
    this.updateFontSize();
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
    this.firstValue *= -1;

    this.display.innerText = toString(this.firstValue);
    if (this.memoDisplay.innerText) {
      this.memoDisplay.innerText = `${toString(this.firstValue)} ${this.action} ${toString(this.secondValue)}`;
    }

    this.updateFontSize();
  }

  handlePercentage() {
    this.firstValue /= 100;

    this.display.innerText = toString(this.firstValue);
    this.memoDisplay.innerText = `${toString(this.firstValue)} ${this.action}`;

    this.updateFontSize();
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

    if (this.secondValue === 0) {
      this.memoDisplay.innerText = `${toString(prevValue)} =`;
    } else {
      this.memoDisplay.innerText = `${toString(prevValue)} ${this.action} ${toString(this.secondValue)} =`;
    }

    this.updateFontSize();
  }
}

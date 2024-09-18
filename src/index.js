import { switchTheme, loadTheme } from "./themeSwitcher.js";
import { Calculator } from "./calculator.js";

import "./index.css";

const numberButtons = document.querySelectorAll(".number-btn");

const calculatorDisplay = document.getElementById("display");

const calculateButton = document.getElementById("calculate");
const resetButton = document.getElementById("reset");
const percentButton = document.getElementById("percent");
const negateButton = document.getElementById("negate");
const plusButton = document.getElementById("plus");
const minusButton = document.getElementById("minus");
const multiplyButton = document.getElementById("multiply");
const divideButton = document.getElementById("divide");

const themeButton = document.getElementById("theme-button");

themeButton.addEventListener("click", () => {
  switchTheme();
});

window.addEventListener("load", () => {
  loadTheme();
});

const calculator = new Calculator(calculatorDisplay);

numberButtons.forEach((btn) =>
  btn.addEventListener("click", () => {
    calculator.handleValueInput(btn.innerText);
  }),
);

resetButton.addEventListener("click", () => {
  calculator.handleReset();
});

plusButton.addEventListener("click", () => {
  calculator.handleAdd();
});

minusButton.addEventListener("click", () => {
  calculator.handleSubtract();
});

multiplyButton.addEventListener("click", () => {
  calculator.handleMultiply();
});

divideButton.addEventListener("click", () => {
  calculator.handleDivide();
});

negateButton.addEventListener("click", () => {
  calculator.handleNegate();
});

percentButton.addEventListener("click", () => {
  calculator.handlePercentage();
});

calculateButton.addEventListener("click", () => {
  calculator.handleCalculate();
});

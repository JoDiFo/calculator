import { switchTheme, loadTheme } from "./themeSwitcher.js";
import { Calculator } from "./calculator.js";
import { handleCloseHelpBlockClass, handleOpenHelpBlockClass } from "./help.js";

import "./styles/index.css";

const numberButtons = document.querySelectorAll(".number-btn");

const calculatorDisplay = document.getElementById("display");
const memoDisplay = document.getElementById("memo-display");

const calculateButton = document.getElementById("calculate");
const resetButton = document.getElementById("reset");
const percentButton = document.getElementById("percent");
const negateButton = document.getElementById("negate");
const plusButton = document.getElementById("plus");
const minusButton = document.getElementById("minus");
const multiplyButton = document.getElementById("multiply");
const divideButton = document.getElementById("divide");

const themeButton = document.getElementById("theme-button");

const helpButton = document.getElementById("help-button");
const helpBlock = document.getElementById("help-block");

themeButton.addEventListener("click", () => {
  switchTheme();
});

window.addEventListener("load", () => {
  loadTheme();
});

helpButton.addEventListener("click", (e) => {
  e.stopPropagation();

  handleOpenHelpBlockClass(helpBlock);
});

document.body.addEventListener("click", () => {
  handleCloseHelpBlockClass(helpBlock);
});

const calculator = new Calculator(calculatorDisplay, memoDisplay);

document.body.addEventListener("keydown", (e) => {
  const key = e.key.toLowerCase();

  switch (key) {
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
    case "0":
    case ",":
      calculator.handleValueInput(key);
      break;
    case "backspace":
      calculator.handleDelete();
      break;
    case "+":
      calculator.handleAdd();
      break;
    case "-":
      calculator.handleSubtract();
      break;
    case "*":
      calculator.handleMultiply();
      break;
    case "/":
      calculator.handleDivide();
      break;
    case "%":
      calculator.handlePercentage();
      break;
    case "n":
      calculator.handleNegate();
      break;
    case "c":
      calculator.handleReset();
      break;
    case "=":
    case "enter":
      calculator.handleCalculate();
      break;
    case "f1":
      handleOpenHelpBlockClass(helpBlock);
      break;
  }
});

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

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

let displayedValue = "0";

const operation = {
  firstValue: 0,
  action: "",
};

numberButtons.forEach((btn) =>
  btn.addEventListener("click", () => {
    if (displayedValue === "0") {
      displayedValue = btn.innerText;
    } else {
      displayedValue += btn.innerText;
    }

    calculatorDisplay.innerText = displayedValue;
  }),
);

resetButton.addEventListener("click", () => {
  displayedValue = "0";
  operation.action = "0";
  operation.firstValue = 0;
  calculatorDisplay.innerText = displayedValue;
});

plusButton.addEventListener("click", () => {
  operation.firstValue = Number(displayedValue);
  operation.action = "+";

  displayedValue = "0";

  calculatorDisplay.innerText = displayedValue;
});

minusButton.addEventListener("click", () => {
  operation.firstValue = Number(displayedValue);
  operation.action = "-";

  displayedValue = "0";

  calculatorDisplay.innerText = displayedValue;
});

multiplyButton.addEventListener("click", () => {
  operation.firstValue = Number(displayedValue);
  operation.action = "*";

  displayedValue = "0";

  calculatorDisplay.innerText = displayedValue;
});

divideButton.addEventListener("click", () => {
  operation.firstValue = Number(displayedValue);
  operation.action = "/";

  displayedValue = "0";

  calculatorDisplay.innerText = displayedValue;
});

negateButton.addEventListener("click", () => {
  operation.firstValue = Number(displayedValue) * -1;

  displayedValue = operation.firstValue;
  calculatorDisplay.innerText = displayedValue;
});

percentButton.addEventListener("click", () => {
  operation.firstValue = Number(displayedValue) / 100;

  displayedValue = operation.firstValue;
  calculatorDisplay.innerText = displayedValue;
});

calculateButton.addEventListener("click", () => {
  const { firstValue, action } = operation;

  operation.firstValue = calculateValue(
    Number(firstValue),
    Number(displayedValue),
    action,
  );

  displayedValue = operation.firstValue;
  calculatorDisplay.innerText = displayedValue;
});

function calculateValue(first, second, operation) {
  switch (operation) {
    case "+":
      return first + second;
    case "-":
      return first - second;
    case "*":
      return first * second;
    case "/":
      return first / second;
    default:
      throw new Error("Unknown Operation");
  }
}

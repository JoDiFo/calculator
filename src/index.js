import "./index.css";

const numberButtons = document.querySelectorAll(".number-btn");

const calculatorDisplay = document.getElementById("display");

const calculateButton = document.getElementById("calculate");
const resetButton = document.getElementById("reset");

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

calculateButton.addEventListener("click", () => {
  displayedValue = eval(
    `${operation.firstValue}${operation.action}${displayedValue}`,
  );
  operation.firstValue = Number(displayedValue);

  calculatorDisplay.innerText = displayedValue;
});

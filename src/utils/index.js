import { MAX_SMALL_DISPLAY_LENGTH } from "../constants.js";

/**
 *
 * @param {string} str string to convert
 * @returns converted string
 */
export function toNumber(str) {
  if (typeof str === "string") {
    return Number(
      Number(str.split(",").join(".")).toPrecision(MAX_SMALL_DISPLAY_LENGTH),
    );
  }

  return str;
}

/**
 *
 * @param {number} num number to convert
 * @returns converted number
 */
export function toString(num) {
  return Number(num).toString().split(".").join(",");
}

/**
 *
 * @param {number} first first value
 * @param {number} second second value
 * @param {string} operation operation to perform
 * @returns result of the operation
 */
export function calculateValue(first, second, operation) {
  switch (operation) {
    case "+":
      return Number(first + second);
    case "-":
      return Number(first - second);
    case "*":
      return first * second;
    case "/":
      return first / second;
    default:
      throw new Error("Unknown Operation");
  }
}

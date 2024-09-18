import { APPEAR_CLASS, HIDDEN_CLASS } from "./constants.js";

export function handleCloseHelpBlockClass(helpBlock) {
  helpBlock.classList.add(HIDDEN_CLASS);
  helpBlock.classList.remove(APPEAR_CLASS);
}

export function handleOpenHelpBlockClass(helpBlock) {
  helpBlock.classList.remove(HIDDEN_CLASS);
  helpBlock.classList.add(APPEAR_CLASS);

  setTimeout(() => {
    handleCloseHelpBlockClass(helpBlock);
  }, 2000);
}

import {
  DARK_THEME,
  LIGHT_THEME,
  LOCAL_STORAGE_THEME_KEY,
} from "./constants.js";

export function switchTheme() {
  const theme = document.body.classList[0];
  document.body.classList.remove(theme);

  const newTheme = theme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME;
  document.body.classList.add(newTheme);
  localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
}

export function loadTheme() {
  const theme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) || DARK_THEME;
  document.body.classList.add(theme);
}

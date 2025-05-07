export function loadTheme() {
  document.documentElement.classList.toggle(
    "dark",
    localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches),
  );
}

export function setLightTheme() {
  localStorage.theme = "light";
  loadTheme();
}

export function setDarkTheme() {
  localStorage.theme = "dark";
  loadTheme();
}

export function setSystemTheme() {
  localStorage.removeItem("theme");
  loadTheme();
}

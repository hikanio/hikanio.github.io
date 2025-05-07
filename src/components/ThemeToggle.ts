import { setLightTheme, setDarkTheme } from "../theme.ts";
import { SunIcon } from "../icons/SunIcon.ts";
import { MoonIcon } from "../icons/MoonIcon.ts";

export function createThemeToggle() {
  const themeToggle = document.createElement("button");
  themeToggle.className =
    "theme-toggle relative w-16 h-8 bg-gray-200 dark:bg-gray-700 rounded-full p-1 transition-colors duration-300";
  themeToggle.title = "Toggle theme";
  themeToggle.innerHTML = `
    <div class="toggle-icons flex justify-between w-full">
      <span class="text-amber-500 z-10">
        ${SunIcon()}
      </span>
      <span class="text-amber-500 z-10">
        ${MoonIcon()}
      </span>
    </div>
    <div class="toggle-thumb absolute top-1 w-6 h-6 dark:bg-gray-600 bg-gray-100 rounded-full shadow-md transform transition-transform duration-300 ease-in-out left-1 dark:left-9"></div>
  `;

  themeToggle.addEventListener("click", () => {
    if (document.documentElement.classList.contains("dark")) {
      setLightTheme();
    } else {
      setDarkTheme();
    }
  });

  return themeToggle;
}

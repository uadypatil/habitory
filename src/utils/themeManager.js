import { THEME_STATE_LIGHT, THEME_STATE_DARK } from "../data/literals";

/**
 * Load default theme on first visit
 */
export const defaultThemeLoader = () => {
    if (!localStorage.getItem("theme_state")) {
        localStorage.setItem("theme_state", THEME_STATE_LIGHT);
    }

    applyTheme(); // apply theme immediately on load
};

/**
 * Toggle theme and persist it
 */
export const toggleTheme = (themeState) => {
    localStorage.setItem("theme_state", themeState);
    applyTheme();
};

/**
 * Apply current theme to DOM (for Tailwind)
 */
export const applyTheme = () => {
    const theme = localStorage.getItem("theme_state") || THEME_STATE_LIGHT;

    if (theme === THEME_STATE_DARK) {
        document.documentElement.classList.add("dark");
    } else {
        document.documentElement.classList.remove("dark");
    }
};

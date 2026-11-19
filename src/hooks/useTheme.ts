import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

/** The same three choices as in the app's settings. */
export type ThemeMode = "system" | "light" | "dark";

export const THEME_STORAGE_KEY = "unspend-theme";

const THEME_COLOR = { light: "#F5F5F5", dark: "#0D0D0D" };

const prefersDark = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches;

const apply = (mode: ThemeMode) => {
    const theme =
        mode === "system" ? (prefersDark() ? "dark" : "light") : mode;
    document.documentElement.dataset.theme = theme;
    document
        .querySelector('meta[name="theme-color"]')
        ?.setAttribute("content", THEME_COLOR[theme]);
};

/**
 * The visitor's theme choice. "system" follows the device and keeps
 * following it while the page is open. index.html applies the stored choice
 * before the first paint.
 */
export const useTheme = () => {
    const [stored, setMode] = useLocalStorage<ThemeMode>(
        THEME_STORAGE_KEY,
        "system",
    );
    const mode: ThemeMode =
        stored === "light" || stored === "dark" ? stored : "system";

    useEffect(() => {
        apply(mode);
        if (mode !== "system") return;
        const query = window.matchMedia("(prefers-color-scheme: dark)");
        const onChange = () => apply("system");
        query.addEventListener("change", onChange);
        return () => query.removeEventListener("change", onChange);
    }, [mode]);

    return { mode, setMode };
};

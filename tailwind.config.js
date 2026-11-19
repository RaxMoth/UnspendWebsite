/**
 * The website's design tokens, mirrored from the app's design system
 * (BackYourTime/docs/DESIGN_SYSTEM.md, lib/core/theme/). Colours are CSS
 * variables defined per palette in src/index.css; everything else is the
 * app's scale in CSS pixels.
 *
 * @type {import('tailwindcss').Config}
 */
const token = (name) => `rgb(var(--${name}) / <alpha-value>)`;

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                // app_colors.dart
                background: token("background"),
                surface: token("surface"),
                border: token("border"),
                fg: token("fg"), // textPrimary
                muted: token("muted"), // textSecondary
                accent: {
                    DEFAULT: token("accent"), // graphics
                    text: token("accent-text"), // text
                    fill: token("accent-fill"), // buttons
                    container: token("accent-container"),
                },
                success: {
                    DEFAULT: token("success"),
                    text: token("success-text"),
                },
                // The colour of the nearest `.tone-*` ancestor (a profile
                // colour): raw, readable as text, and as a button.
                tone: {
                    DEFAULT: token("tone"),
                    text: token("tone-text"),
                    fill: token("tone-fill"),
                    "on-fill": token("tone-on-fill"),
                },
            },
            // AppOpacity — use as `bg-tone/tint`, `border-tone/outline`.
            opacity: {
                wash: "0.08",
                tint: "0.15",
                outline: "0.4",
                disabled: "0.5",
            },
            // AppRadius
            borderRadius: {
                bar: "4px",
                chip: "8px",
                control: "12px",
                card: "16px",
                tile: "20px",
            },
            // AppTextStyles, plus two larger steps a web page needs.
            fontSize: {
                micro: ["11px", { lineHeight: "1.3" }],
                caption: ["12px", { lineHeight: "1.35" }],
                "body-sm": ["13px", { lineHeight: "1.45" }],
                body: ["14px", { lineHeight: "1.5" }],
                label: ["15px", { lineHeight: "1.4", fontWeight: "600" }],
                "body-lg": ["16px", { lineHeight: "1.6" }],
                lede: ["18px", { lineHeight: "1.55" }],
                subheading: ["16px", { lineHeight: "1.35", fontWeight: "600" }],
                heading: ["18px", { lineHeight: "1.3", fontWeight: "600" }],
                title: ["20px", { lineHeight: "1.3", fontWeight: "700" }],
                "screen-title": [
                    "24px",
                    { lineHeight: "1.2", fontWeight: "700" },
                ],
                hero: ["26px", { lineHeight: "1.2", fontWeight: "700" }],
                numeral: ["32px", { lineHeight: "1.15", fontWeight: "700" }],
                display: ["40px", { lineHeight: "1.1", fontWeight: "700" }],
                section: [
                    "clamp(1.75rem, 1.2rem + 2.2vw, 2.5rem)",
                    {
                        lineHeight: "1.12",
                        fontWeight: "700",
                        letterSpacing: "-0.02em",
                    },
                ],
                page: [
                    "clamp(2.125rem, 1.3rem + 3.4vw, 3.25rem)",
                    {
                        lineHeight: "1.06",
                        fontWeight: "700",
                        letterSpacing: "-0.025em",
                    },
                ],
                headline: [
                    "clamp(2.5rem, 1.4rem + 5vw, 4.25rem)",
                    {
                        lineHeight: "1.02",
                        fontWeight: "700",
                        letterSpacing: "-0.03em",
                    },
                ],
            },
            // AppDurations, AppCurves
            transitionDuration: {
                fast: "150ms",
                medium: "250ms",
                slow: "300ms",
            },
            transitionTimingFunction: {
                standard: "ease-in-out",
                enter: "ease-out",
            },
            maxWidth: {
                content: "560px", // AppSizes.maxContentWidth
                prose: "680px",
                page: "1120px",
            },
            minHeight: { tap: "48px" }, // AppSizes.tapTarget
            minWidth: { tap: "48px" },
            fontFamily: {
                // The app uses the platform's own typeface; so does the site.
                sans: [
                    "-apple-system",
                    "BlinkMacSystemFont",
                    '"SF Pro Text"',
                    '"Segoe UI"',
                    "Roboto",
                    '"Helvetica Neue"',
                    "Arial",
                    "sans-serif",
                ],
            },
        },
    },
    plugins: [],
};

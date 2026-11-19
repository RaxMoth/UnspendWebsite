/**
 * The nine colours a profile can have in the app (ProfileColor.palette).
 * Each has a `.tone-*` class in index.css that sets the colour for
 * everything inside it.
 */
export type Tone =
    | "red"
    | "orange"
    | "amber"
    | "green"
    | "teal"
    | "blue"
    | "indigo"
    | "purple"
    | "pink";

const TONE_CLASS: Record<Tone, string> = {
    red: "tone-red",
    orange: "tone-orange",
    amber: "tone-amber",
    green: "tone-green",
    teal: "tone-teal",
    blue: "tone-blue",
    indigo: "tone-indigo",
    purple: "tone-purple",
    pink: "tone-pink",
};

export const toneClass = (tone?: Tone): string =>
    tone ? TONE_CLASS[tone] : "";

/** Joins class names, skipping the empty ones. */
export const cx = (...parts: (string | false | null | undefined)[]): string =>
    parts.filter(Boolean).join(" ");

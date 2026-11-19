import React from "react";
import { cx, toneClass, type Tone } from "./tones";

interface AppCardProps extends React.HTMLAttributes<HTMLElement> {
    as?: "div" | "section" | "article" | "li";
    /** The colour the card is highlighted or outlined in. */
    tone?: Tone;
    /** A soft wash and outline in the tone: on, selected, needs attention. */
    highlighted?: boolean;
    /** Only the outline in the tone (an active profile). */
    outlined?: boolean;
    /** The red gradient of a summary while something is active. */
    active?: boolean;
    /** A quieter, smaller-radius tile for use inside another card. */
    inset?: boolean;
}

/** The surface for grouped content: rounded, hairline border, no shadow. */
const AppCard: React.FC<AppCardProps> = ({
    as: Tag = "div",
    tone,
    highlighted = false,
    outlined = false,
    active = false,
    inset = false,
    className,
    children,
    ...rest
}) => (
    <Tag
        className={cx(
            "border transition-colors duration-medium",
            inset ? "rounded-control bg-background" : "rounded-card bg-surface",
            toneClass(tone),
            highlighted && "tone-wash border-tone/outline",
            outlined && "border-tone/outline",
            active && "active-gradient border-accent/outline",
            className,
        )}
        {...rest}
    >
        {children}
    </Tag>
);

export default AppCard;

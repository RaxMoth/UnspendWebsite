import React from "react";
import type { IconName } from "../icons";
import Icon from "./Icon";
import { cx, toneClass, type Tone } from "./tones";

interface ChipProps {
    children: React.ReactNode;
    tone?: Tone;
    icon?: IconName;
    /** Grey: the profile it belongs to is switched off. */
    muted?: boolean;
    /** Larger, for a value or a status rather than a tag. */
    prominent?: boolean;
    className?: string;
}

/** A small label on a tint of its colour: a rule, a count, a status. */
const Chip: React.FC<ChipProps> = ({
    children,
    tone,
    icon,
    muted = false,
    prominent = false,
    className,
}) => (
    <span
        className={cx(
            "inline-flex items-center rounded-chip font-semibold transition-colors duration-medium",
            prominent
                ? "gap-1.5 px-3 py-1.5 text-body-sm"
                : "gap-1 px-2 py-1 text-micro",
            toneClass(tone),
            muted ? "bg-muted/tint text-muted" : "bg-tone/tint text-tone-text",
            className,
        )}
    >
        {icon && <Icon name={icon} size={prominent ? 16 : 14} />}
        {children}
    </span>
);

export default Chip;

import React from "react";
import type { IconName } from "../icons";
import Icon from "./Icon";
import { cx, toneClass, type Tone } from "./tones";

const SIZES = { xs: 32, sm: 44, md: 48, lg: 56, hero: 80 } as const;

interface IconBadgeProps {
    icon: IconName;
    tone?: Tone;
    /** A named size, or an edge length in pixels. */
    size?: keyof typeof SIZES | number;
    /** Greyed out: the thing it stands for is switched off. */
    muted?: boolean;
    /** On the soft red surface instead of a tint (active summary). */
    solid?: boolean;
    className?: string;
}

/**
 * An icon on a soft tile of its own colour — the app's way of giving a
 * card, a section or an empty state a face. The icon fills half the tile;
 * the corners are a quarter of its size.
 */
const IconBadge: React.FC<IconBadgeProps> = ({
    icon,
    tone,
    size = "md",
    muted = false,
    solid = false,
    className,
}) => {
    const edge = typeof size === "number" ? size : SIZES[size];
    return (
        <span
            className={cx(
                "inline-flex shrink-0 items-center justify-center transition-colors duration-medium",
                toneClass(tone),
                muted
                    ? "bg-border text-muted"
                    : solid
                      ? "bg-accent-container text-accent"
                      : "bg-tone/tint text-tone-text",
                className,
            )}
            style={{ width: edge, height: edge, borderRadius: edge * 0.25 }}
        >
            <Icon name={icon} size={edge * 0.5} />
        </span>
    );
};

export default IconBadge;

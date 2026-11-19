import React from "react";
import { ICONS, type IconName } from "../icons";

interface IconProps {
    name: IconName;
    /** Edge length in pixels (AppSizes: 14, 18, 20, 24, 28, 40, 64). */
    size?: number;
    className?: string;
    /** Announced by screen readers; without it the icon is decorative. */
    label?: string;
}

/** A Material "rounded" icon, in the current text colour. */
const Icon: React.FC<IconProps> = ({ name, size = 24, className, label }) => (
    <svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="currentColor"
        className={`shrink-0 ${className ?? ""}`}
        role={label ? "img" : undefined}
        aria-label={label}
        aria-hidden={label ? undefined : true}
        focusable="false"
    >
        {ICONS[name].map((d) => (
            <path key={d} d={d} />
        ))}
    </svg>
);

export default Icon;

import React from "react";
import { cx } from "./tones";

/** The small, slightly spaced heading above a group. */
const SectionLabel: React.FC<{
    children: React.ReactNode;
    className?: string;
}> = ({ children, className }) => (
    <p
        className={cx(
            "text-body-sm font-semibold tracking-[0.5px] text-muted",
            className,
        )}
    >
        {children}
    </p>
);

export default SectionLabel;

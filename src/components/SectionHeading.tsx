import React from "react";
import { SectionLabel, cx } from "./UI";

interface SectionHeadingProps {
    label: string;
    title: React.ReactNode;
    /** The paragraph under the title. */
    children?: React.ReactNode;
    /** `h1` at the top of a page, `h2` for a section within one. */
    level?: "h1" | "h2";
    className?: string;
}

/** Label, title and introduction at the top of a page or section. */
const SectionHeading: React.FC<SectionHeadingProps> = ({
    label,
    title,
    children,
    level: Tag = "h2",
    className,
}) => (
    <div className={cx("max-w-prose", className)}>
        <SectionLabel>{label}</SectionLabel>
        <Tag className={cx("mt-3", Tag === "h1" ? "text-page" : "text-section")}>
            {title}
        </Tag>
        {children && <p className="mt-5 text-lede text-muted">{children}</p>}
    </div>
);

export default SectionHeading;

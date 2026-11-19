import React from "react";
import { cx } from "./tones";

/** Centres page content and keeps it off the screen edges. */
const Container: React.FC<{
    children: React.ReactNode;
    className?: string;
}> = ({ children, className }) => (
    <div className={cx("mx-auto w-full max-w-page px-5 sm:px-8", className)}>
        {children}
    </div>
);

export default Container;

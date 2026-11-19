import React, { useEffect, useRef, useState } from "react";
import { cx } from "./tones";

interface RevealProps {
    children: React.ReactNode;
    className?: string;
    /** Milliseconds to wait, to stagger neighbours. */
    delay?: number;
}

/**
 * Content that appears as it scrolls into view: a short fade and rise.
 * With Reduce Motion it is simply there.
 */
const Reveal: React.FC<RevealProps> = ({ children, className, delay = 0 }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [shown, setShown] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element || typeof IntersectionObserver === "undefined") {
            setShown(true);
            return;
        }
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShown(true);
                    observer.disconnect();
                }
            },
            { rootMargin: "0px 0px -32px 0px" },
        );
        observer.observe(element);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={cx(
                "transition-[opacity,transform] duration-slow ease-enter",
                shown ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0",
                className,
            )}
            style={delay ? { transitionDelay: `${delay}ms` } : undefined}
        >
            {children}
        </div>
    );
};

export default Reveal;

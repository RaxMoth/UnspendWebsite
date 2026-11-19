import React from "react";
import { cx } from "../UI";

interface PhoneFrameProps {
    children: React.ReactNode;
    /** What the phone shows, for screen readers. */
    label: string;
    /** Height of the screen in pixels. */
    height?: number;
    className?: string;
}

/** An iPhone-shaped frame around a mock screen. */
const PhoneFrame: React.FC<PhoneFrameProps> = ({
    children,
    label,
    height = 680,
    className,
}) => (
    <div
        role="group"
        aria-label={label}
        className={cx(
            "relative mx-auto w-full max-w-[340px] rounded-[46px] border border-[#3a3a3a] bg-[#060606] p-[9px] shadow-[0_40px_80px_-40px_rgba(0,0,0,0.55)]",
            className,
        )}
    >
        <div
            className="relative overflow-hidden rounded-[37px] bg-background"
            style={{ height }}
        >
            <div
                aria-hidden
                className="absolute left-1/2 top-[10px] z-20 h-[24px] w-[84px] -translate-x-1/2 rounded-full bg-black"
            />
            {children}
        </div>
    </div>
);

/** Clock, signal and battery at the top of a mock screen. */
export const StatusBar: React.FC<{ className?: string }> = ({ className }) => (
    <div
        aria-hidden
        className={cx(
            "flex h-[46px] shrink-0 items-end justify-between px-7 pb-[7px] text-body font-semibold",
            className,
        )}
    >
        <span>9:41</span>
        <span className="flex items-center gap-1.5">
            <svg width="17" height="11" viewBox="0 0 17 11" fill="currentColor">
                <rect x="0" y="7" width="3" height="4" rx="1" />
                <rect x="4.7" y="5" width="3" height="6" rx="1" />
                <rect x="9.3" y="2.5" width="3" height="8.5" rx="1" />
                <rect x="14" y="0" width="3" height="11" rx="1" />
            </svg>
            <svg width="25" height="12" viewBox="0 0 25 12">
                <rect
                    x="0.5"
                    y="0.5"
                    width="21"
                    height="11"
                    rx="3.2"
                    fill="none"
                    stroke="currentColor"
                    opacity="0.4"
                />
                <rect
                    x="2"
                    y="2"
                    width="18"
                    height="8"
                    rx="1.8"
                    fill="currentColor"
                />
                <path
                    d="M23 4v4c.8-.3 1.5-1 1.5-2S23.8 4.3 23 4z"
                    fill="currentColor"
                    opacity="0.4"
                />
            </svg>
        </span>
    </div>
);

export default PhoneFrame;

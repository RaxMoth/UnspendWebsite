import React from "react";
import { cx, toneClass, type Tone } from "./tones";

interface SwitchProps {
    checked: boolean;
    onChange: (checked: boolean) => void;
    /** What it switches, for screen readers. */
    label: string;
    /** Track colour when on; the brand red when not given. */
    tone?: Tone;
    disabled?: boolean;
}

/**
 * The app's on/off switch: an iOS switch in a full-size tap target.
 */
const Switch: React.FC<SwitchProps> = ({
    checked,
    onChange,
    label,
    tone,
    disabled = false,
}) => (
    <button
        type="button"
        role="switch"
        aria-checked={checked}
        aria-label={label}
        disabled={disabled}
        onClick={() => onChange(!checked)}
        className={cx(
            "inline-flex min-h-tap min-w-[56px] shrink-0 items-center justify-center rounded-full disabled:opacity-disabled",
            toneClass(tone),
        )}
    >
        <span
            className={cx(
                "relative h-[28px] w-[46px] rounded-full transition-colors duration-medium ease-standard",
                checked ? "bg-tone" : "bg-border",
            )}
        >
            <span
                className={cx(
                    "absolute left-[2px] top-[2px] h-[24px] w-[24px] rounded-full bg-white shadow-sm transition-transform duration-medium ease-standard",
                    checked && "translate-x-[18px]",
                )}
            />
        </span>
    </button>
);

export default Switch;

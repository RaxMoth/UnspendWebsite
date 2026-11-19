import React from "react";
import { Link } from "react-router-dom";
import type { IconName } from "../icons";
import Icon from "./Icon";
import { cx } from "./tones";

interface ButtonProps {
    children: React.ReactNode;
    /** `primary` is filled in the brand red; `secondary` is the quieter,
     *  outlined alternative. */
    variant?: "primary" | "secondary";
    icon?: IconName;
    trailingIcon?: IconName;
    /** A route of this site. */
    to?: string;
    /** Any other link. */
    href?: string;
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
}

const BASE =
    "inline-flex min-h-tap select-none items-center justify-center gap-2 rounded-control px-5 py-3 text-center text-subheading transition duration-fast ease-standard";

const VARIANT = {
    primary: "bg-accent-fill text-white hover:brightness-110 active:brightness-95",
    secondary:
        "border bg-surface text-fg hover:border-muted/60 active:bg-background",
};

/**
 * The button for the main action of a page or section. It is a link when
 * it has somewhere to go (`to`, `href`) and a button otherwise.
 */
const Button: React.FC<ButtonProps> = ({
    children,
    variant = "primary",
    icon,
    trailingIcon,
    to,
    href,
    onClick,
    disabled = false,
    className,
}) => {
    const classes = cx(
        BASE,
        VARIANT[variant],
        disabled && "pointer-events-none opacity-disabled",
        className,
    );
    const content = (
        <>
            {icon && <Icon name={icon} size={18} />}
            <span>{children}</span>
            {trailingIcon && <Icon name={trailingIcon} size={18} />}
        </>
    );

    if (to && !disabled) {
        return (
            <Link to={to} className={classes} onClick={onClick}>
                {content}
            </Link>
        );
    }
    if (href && !disabled) {
        const external = /^https?:/.test(href);
        return (
            <a
                href={href}
                className={classes}
                onClick={onClick}
                {...(external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
            >
                {content}
            </a>
        );
    }
    return (
        <button
            type="button"
            className={classes}
            onClick={onClick}
            disabled={disabled}
        >
            {content}
        </button>
    );
};

export default Button;

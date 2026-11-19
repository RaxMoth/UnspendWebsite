import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { NAVIGATION, SITE } from "../config/site";
import { useTheme, type ThemeMode } from "../hooks";
import { Container, Icon, cx, type IconName } from "./UI";

const THEME_ORDER: ThemeMode[] = ["system", "light", "dark"];
const THEME_ICON: Record<ThemeMode, IconName> = {
    system: "brightnessAuto",
    light: "lightMode",
    dark: "darkMode",
};
const THEME_NAME: Record<ThemeMode, string> = {
    system: "System",
    light: "Light",
    dark: "Dark",
};

const ICON_BUTTON =
    "inline-flex h-12 w-12 items-center justify-center rounded-control text-muted transition-colors duration-fast hover:text-fg";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    cx(
        "rounded-control px-3 py-2 text-body font-semibold transition-colors duration-fast",
        isActive ? "text-fg" : "text-muted hover:text-fg",
    );

/** The app's mark and name, as at the top of its dashboard. */
export const Wordmark: React.FC = () => (
    <Link to="/" className="flex items-center gap-2.5 rounded-control">
        <Icon name="shield" size={28} className="text-accent" />
        <span className="text-title tracking-tight">{SITE.name}</span>
    </Link>
);

const Header: React.FC = () => {
    const { mode, setMode } = useTheme();
    const [menuOpen, setMenuOpen] = useState(false);
    const { pathname } = useLocation();
    const nextMode =
        THEME_ORDER[(THEME_ORDER.indexOf(mode) + 1) % THEME_ORDER.length];

    // Going somewhere closes the menu.
    useEffect(() => setMenuOpen(false), [pathname]);

    return (
        <header
            className={cx(
                "sticky top-0 z-40 border-b",
                // Page content must not show through the open menu.
                menuOpen
                    ? "bg-background"
                    : "bg-background/85 backdrop-blur-md",
            )}
        >
            <Container className="flex h-16 items-center justify-between">
                <Wordmark />

                <div className="flex items-center">
                    <nav
                        aria-label="Main"
                        className="mr-2 hidden items-center md:flex"
                    >
                        {NAVIGATION.map((item) => (
                            <NavLink
                                key={item.to}
                                to={item.to}
                                className={navLinkClass}
                            >
                                {item.label}
                            </NavLink>
                        ))}
                    </nav>

                    <button
                        type="button"
                        onClick={() => setMode(nextMode)}
                        className={ICON_BUTTON}
                        title={`Theme: ${THEME_NAME[mode]}`}
                        aria-label={`Theme: ${THEME_NAME[mode]}. Switch to ${THEME_NAME[nextMode]}.`}
                    >
                        <Icon name={THEME_ICON[mode]} />
                    </button>

                    <button
                        type="button"
                        onClick={() => setMenuOpen((open) => !open)}
                        className={cx(ICON_BUTTON, "-mr-3 md:hidden")}
                        aria-label={menuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={menuOpen}
                        aria-controls="mobile-menu"
                    >
                        <Icon name={menuOpen ? "close" : "menu"} />
                    </button>
                </div>
            </Container>

            {menuOpen && (
                <nav
                    id="mobile-menu"
                    aria-label="Main"
                    className="border-t md:hidden"
                >
                    <Container className="flex flex-col py-2">
                        {NAVIGATION.map((item) => (
                            <NavLink
                                key={item.to}
                                to={item.to}
                                className={({ isActive }) =>
                                    cx(
                                        "flex min-h-tap items-center text-body-lg font-semibold",
                                        isActive ? "text-fg" : "text-muted",
                                    )
                                }
                            >
                                {item.label}
                            </NavLink>
                        ))}
                    </Container>
                </nav>
            )}
        </header>
    );
};

export default Header;

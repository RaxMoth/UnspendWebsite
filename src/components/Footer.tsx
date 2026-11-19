import React from "react";
import { Link } from "react-router-dom";
import { SITE } from "../config/site";
import { Wordmark } from "./Header";
import { Container, SectionLabel } from "./UI";

const LINK = "text-body text-muted transition-colors duration-fast hover:text-fg";

const GROUPS = [
    {
        title: "Unspend",
        links: [
            { label: "Features", to: "/features" },
            { label: "About", to: "/about" },
            { label: "Support", to: "/support" },
        ],
    },
    {
        title: "Legal",
        links: [
            { label: "Privacy Policy", to: "/privacy" },
            { label: "Terms of Service", to: "/terms" },
        ],
    },
];

const Footer: React.FC = () => (
    <footer className="mt-auto border-t">
        <Container className="py-12">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
                <div>
                    <Wordmark />
                    <p className="mt-4 max-w-xs text-body text-muted">
                        {SITE.tagline} An app blocker for iPhone that keeps
                        everything on your device.
                    </p>
                </div>

                {GROUPS.map((group) => (
                    <nav key={group.title} aria-label={group.title}>
                        <SectionLabel>{group.title}</SectionLabel>
                        <ul className="mt-3 space-y-2.5">
                            {group.links.map((link) => (
                                <li key={link.to}>
                                    <Link to={link.to} className={LINK}>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                ))}

                <div>
                    <SectionLabel>Contact</SectionLabel>
                    <ul className="mt-3 space-y-2.5">
                        <li>
                            <a
                                href={`mailto:${SITE.supportEmail}`}
                                className={LINK}
                            >
                                {SITE.supportEmail}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="mt-12 flex flex-col gap-2 border-t pt-6 text-caption text-muted sm:flex-row sm:justify-between">
                <p>
                    &copy; {new Date().getFullYear()} {SITE.name}. All rights
                    reserved.
                </p>
                <p>
                    iPhone, Screen Time and App Store are trademarks of Apple
                    Inc.
                </p>
            </div>
        </Container>
    </footer>
);

export default Footer;

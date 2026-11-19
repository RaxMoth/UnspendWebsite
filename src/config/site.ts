/**
 * Facts about the app that more than one page states. They mirror the app
 * repository (README, docs/FEATURES.md, store/app-store-listing.md); change
 * them here when they change there.
 */
export const SITE = {
    name: "Unspend",
    tagline: "Block apps. Take back time.",
    description:
        "Unspend blocks the apps that eat your day — with schedules, daily limits and task lists, enforced by iOS itself. No account, no tracking; everything stays on your iPhone.",

    /** Where questions go. The same address as in the app's store listing. */
    supportEmail: "support@unspend.app",

    /**
     * The App Store link. While it is null the site says "Coming soon";
     * set it once the app is live and the download buttons appear.
     */
    appStoreUrl: null as string | null,

    minimumIos: "16",
    cooldownMinutes: 5,
    languages: ["English", "German", "Spanish", "French", "Croatian"],
} as const;

export const NAVIGATION = [
    { label: "Features", to: "/features" },
    { label: "About", to: "/about" },
    { label: "Support", to: "/support" },
    { label: "Privacy", to: "/privacy" },
] as const;

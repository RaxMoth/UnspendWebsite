import type { IconName } from "../components/icons";

/**
 * The four ways a profile can block, with the app's own names and
 * descriptions (strings.dart) and the store listing's explanations.
 */
export interface Rule {
    id: string;
    icon: IconName;
    title: string;
    /** The one-liner under the rule's switch in the app. */
    summary: string;
    body: string;
}

export const RULES: Rule[] = [
    {
        id: "manual",
        icon: "touchApp",
        title: "Manual",
        summary: "Blocked from activation until deactivation",
        body: "Tap to block, tap to unblock — with a cooldown and a PIN in between, so you can't cave instantly.",
    },
    {
        id: "schedule",
        icon: "schedule",
        title: "Schedule",
        summary: "Hard-block during a daily time window",
        body: "Block during work hours, study time or after bedtime. A window can run overnight.",
    },
    {
        id: "limit",
        icon: "timer",
        title: "Usage Limit",
        summary: "Soft-block after a daily screen-time budget",
        body: "Give yourself 20 minutes of social. After that, blocked until tomorrow.",
    },
    {
        id: "tasks",
        icon: "checklist",
        title: "Task Mode",
        summary: "Block until all tasks are completed",
        body: "Block until your to-dos are done. Check them off to earn access; the list starts over every day.",
    },
];

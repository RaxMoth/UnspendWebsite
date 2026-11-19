import React, { useEffect, useId, useRef, useState } from "react";
import {
    AppCard,
    Chip,
    Icon,
    IconBadge,
    Switch,
    cx,
    type IconName,
    type Tone,
} from "../UI";
import PhoneFrame, { StatusBar } from "./PhoneFrame";

/**
 * The app's dashboard, rebuilt from the site's components and working like
 * the real one: profiles switch on at once, switching one off takes the
 * cooldown, tasks can be ticked. Wording and layout follow the app
 * (dashboard_body.dart, summary_card.dart, profile_card.dart, pin_gate.dart).
 */

/** The app waits five minutes; nobody would watch a demo that long. */
const DEMO_COOLDOWN_SECONDS = 5;

interface DemoTask {
    id: string;
    title: string;
    done: boolean;
}

interface DemoProfile {
    id: string;
    name: string;
    tone: Tone;
    icon: IconName;
    apps: number;
    active: boolean;
    schedule?: string;
    limit?: string;
    tasks?: DemoTask[];
}

const INITIAL_PROFILES: DemoProfile[] = [
    {
        id: "social",
        name: "Social media",
        tone: "red",
        icon: "peopleAlt",
        apps: 12,
        active: true,
        schedule: "09:00–17:30",
        tasks: [
            { id: "read", title: "Read twenty pages", done: true },
            { id: "run", title: "Go for a run", done: false },
        ],
    },
    {
        id: "video",
        name: "Video",
        tone: "blue",
        icon: "playCircle",
        apps: 4,
        active: true,
        limit: "45 min",
    },
    {
        id: "games",
        name: "Games",
        tone: "purple",
        icon: "sportsEsports",
        apps: 3,
        active: false,
    },
];

const subtitleOf = (profile: DemoProfile): string => {
    const parts = [`${profile.apps} apps`];
    if (profile.schedule) parts.push(profile.schedule);
    if (profile.limit) parts.push(`${profile.limit} limit`);
    if (profile.tasks) {
        const done = profile.tasks.filter((task) => task.done).length;
        parts.push(`${done}/${profile.tasks.length} tasks`);
    }
    if (parts.length === 1) parts.push("Manual");
    return parts.join(" · ");
};

/** Whether an active profile blocks at 9:41, and why (ShieldPolicy). */
const statusOf = (profile: DemoProfile): { blocking: boolean; reason: string } => {
    const remaining = profile.tasks?.filter((task) => !task.done).length ?? 0;
    if (remaining > 0) {
        return {
            blocking: true,
            reason: `${remaining} task${remaining === 1 ? "" : "s"} remaining`,
        };
    }
    if (profile.schedule) {
        return { blocking: true, reason: "Inside schedule window" };
    }
    if (profile.limit) {
        return {
            blocking: false,
            reason: "All requirements met — apps accessible",
        };
    }
    return { blocking: true, reason: "Manual mode — deactivate to unlock" };
};

const PhoneDemo: React.FC<{ className?: string }> = ({ className }) => {
    const [profiles, setProfiles] = useState(INITIAL_PROFILES);
    const [pendingId, setPendingId] = useState<string | null>(null);
    const [remaining, setRemaining] = useState(DEMO_COOLDOWN_SECONDS);
    const screenRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLElement | null>(null);

    const activeCount = profiles.filter((profile) => profile.active).length;
    const anyActive = activeCount > 0;
    const pending = profiles.find((profile) => profile.id === pendingId);

    // The cooldown counts down while its dialog is open.
    useEffect(() => {
        if (!pendingId || remaining <= 0) return;
        const timer = window.setTimeout(
            () => setRemaining((seconds) => seconds - 1),
            1000,
        );
        return () => window.clearTimeout(timer);
    }, [pendingId, remaining]);

    // Nothing behind the dialog can be reached while it is open.
    useEffect(() => {
        screenRef.current?.toggleAttribute("inert", pendingId !== null);
    }, [pendingId]);

    const setActive = (id: string, active: boolean) =>
        setProfiles((all) =>
            all.map((profile) =>
                profile.id === id ? { ...profile, active } : profile,
            ),
        );

    const toggle = (profile: DemoProfile) => {
        if (!profile.active) {
            setActive(profile.id, true);
            return;
        }
        triggerRef.current = document.activeElement as HTMLElement | null;
        setRemaining(DEMO_COOLDOWN_SECONDS);
        setPendingId(profile.id);
    };

    const closeDialog = (deactivate: boolean) => {
        if (deactivate && pendingId) setActive(pendingId, false);
        setPendingId(null);
        triggerRef.current?.focus();
    };

    const toggleTask = (profileId: string, taskId: string) =>
        setProfiles((all) =>
            all.map((profile) =>
                profile.id === profileId
                    ? {
                          ...profile,
                          tasks: profile.tasks?.map((task) =>
                              task.id === taskId
                                  ? { ...task, done: !task.done }
                                  : task,
                          ),
                      }
                    : profile,
            ),
        );

    return (
        <PhoneFrame
            label="The Unspend dashboard — a working demo"
            className={className}
        >
            <div ref={screenRef} className="flex h-full flex-col">
                <StatusBar />
                <div className="flex items-center gap-2.5 px-4 pb-3 pt-3">
                    <Icon name="shield" size={24} className="text-accent" />
                    <span className="flex-1 text-[21px] font-bold leading-none">
                        Unspend
                    </span>
                    <Icon name="settings" size={22} className="text-muted" />
                </div>

                <div className="flex-1 space-y-2.5 px-4">
                    <AppCard
                        active={anyActive}
                        className="flex items-center gap-3 p-3.5"
                        aria-live="polite"
                    >
                        <IconBadge
                            icon="shield"
                            size={46}
                            solid={anyActive}
                            muted={!anyActive}
                        />
                        <div className="min-w-0 flex-1">
                            <p className="text-label leading-tight">
                                {!anyActive
                                    ? "Shields Inactive"
                                    : activeCount === profiles.length
                                      ? "All Shields Active"
                                      : `${activeCount} of ${profiles.length} Active`}
                            </p>
                            <p className="mt-1 text-caption text-muted">
                                {anyActive
                                    ? "Blocking distracting apps"
                                    : "No profiles are active"}
                            </p>
                        </div>
                        {anyActive && (
                            <span
                                aria-hidden
                                className="mr-1 h-2.5 w-2.5 shrink-0 rounded-full bg-accent shadow-[0_0_8px_2px_rgb(var(--accent)/0.4)]"
                            />
                        )}
                    </AppCard>

                    <div className="flex items-baseline justify-between px-0.5 pt-3">
                        <span className="text-subheading">Profiles</span>
                        <span className="text-caption text-muted">
                            {profiles.length}
                        </span>
                    </div>

                    {profiles.map((profile) => (
                        <ProfileCard
                            key={profile.id}
                            profile={profile}
                            onToggle={() => toggle(profile)}
                            onToggleTask={(taskId) =>
                                toggleTask(profile.id, taskId)
                            }
                        />
                    ))}
                </div>

                <span
                    aria-hidden
                    className="absolute bottom-4 right-4 flex h-12 w-12 items-center justify-center rounded-card bg-accent-fill text-white"
                >
                    <Icon name="add" size={24} />
                </span>
            </div>

            {pending && (
                <CooldownDialog
                    remaining={remaining}
                    onCancel={() => closeDialog(false)}
                    onDeactivate={() => closeDialog(true)}
                />
            )}
        </PhoneFrame>
    );
};

interface ProfileCardProps {
    profile: DemoProfile;
    onToggle: () => void;
    onToggleTask: (taskId: string) => void;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
    profile,
    onToggle,
    onToggleTask,
}) => {
    const { blocking, reason } = statusOf(profile);
    const hasRules = Boolean(profile.schedule || profile.limit || profile.tasks);

    return (
        <AppCard
            tone={profile.tone}
            outlined={profile.active}
            className="py-1.5 pl-3 pr-1"
        >
            <div className="flex items-center gap-2.5">
                <IconBadge
                    icon={profile.icon}
                    size={40}
                    muted={!profile.active}
                />
                <div className="min-w-0 flex-1 py-1">
                    <p className="text-body font-semibold leading-tight">
                        {profile.name}
                    </p>
                    <p className="mt-0.5 text-micro text-muted">
                        {subtitleOf(profile)}
                    </p>
                </div>
                {profile.active && (
                    <span
                        title={reason}
                        className={cx(
                            "inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-[7px] bg-tone/tint text-tone-text",
                            !blocking && "tone-green",
                        )}
                    >
                        <Icon
                            name={blocking ? "lock" : "lockOpen"}
                            size={14}
                            label={reason}
                        />
                    </span>
                )}
                <Switch
                    checked={profile.active}
                    tone={profile.tone}
                    label={`${profile.active ? "Deactivate Shield" : "Activate Shield"}, ${profile.name}`}
                    onChange={onToggle}
                />
            </div>

            {hasRules && (
                <div className="flex flex-wrap gap-1.5 pb-1.5 pr-2">
                    {profile.schedule && (
                        <Chip icon="schedule" muted={!profile.active}>
                            Schedule
                        </Chip>
                    )}
                    {profile.limit && (
                        <Chip icon="timer" muted={!profile.active}>
                            Usage Limit
                        </Chip>
                    )}
                    {profile.tasks && (
                        <Chip icon="checklist" muted={!profile.active}>
                            Task Mode
                        </Chip>
                    )}
                </div>
            )}

            {profile.tasks && (
                <div className="mr-2 mt-1 border-t pt-1">
                    {profile.tasks.map((task) => (
                        <button
                            key={task.id}
                            type="button"
                            role="checkbox"
                            aria-checked={task.done}
                            onClick={() => onToggleTask(task.id)}
                            className="flex min-h-[38px] w-full items-center gap-2.5 rounded-chip text-left"
                        >
                            <Icon
                                name={
                                    task.done
                                        ? "checkCircle"
                                        : "radioButtonUnchecked"
                                }
                                size={18}
                                className={
                                    task.done
                                        ? "text-success-text"
                                        : "text-muted"
                                }
                            />
                            <span
                                className={cx(
                                    "text-body-sm transition-colors duration-fast",
                                    task.done && "text-muted line-through",
                                )}
                            >
                                {task.title}
                            </span>
                        </button>
                    ))}
                </div>
            )}
        </AppCard>
    );
};

interface CooldownDialogProps {
    remaining: number;
    onCancel: () => void;
    onDeactivate: () => void;
}

/** The gate in front of deactivating: wait out the timer, then confirm. */
const CooldownDialog: React.FC<CooldownDialogProps> = ({
    remaining,
    onCancel,
    onDeactivate,
}) => {
    const titleId = useId();
    const cancelRef = useRef<HTMLButtonElement>(null);
    const waiting = remaining > 0;
    const minutes = String(Math.floor(remaining / 60)).padStart(2, "0");
    const seconds = String(remaining % 60).padStart(2, "0");

    useEffect(() => {
        cancelRef.current?.focus();
    }, []);

    return (
        <div
            className="absolute inset-0 z-30 flex items-center justify-center bg-black/55 px-5"
            onKeyDown={(event) => {
                if (event.key === "Escape") onCancel();
            }}
        >
            <div
                role="dialog"
                aria-modal="true"
                aria-labelledby={titleId}
                className="w-full rounded-card border bg-surface p-5"
            >
                <h3 id={titleId} className="text-heading">
                    {waiting ? "Deactivate" : "Confirm Deactivation"}
                </h3>

                {waiting ? (
                    <div className="pt-3 text-center">
                        <p
                            className="tabular text-display text-accent"
                            role="timer"
                        >
                            {minutes}:{seconds}
                        </p>
                        <p className="mt-3 text-body-sm text-muted">
                            Take a moment to reconsider.
                            <br />
                            The shield will be deactivatable after the timer.
                        </p>
                        <div className="mt-4 h-1 overflow-hidden rounded-bar bg-border">
                            <div
                                className="h-full bg-accent transition-[width] duration-1000 ease-linear"
                                style={{
                                    width: `${(1 - remaining / DEMO_COOLDOWN_SECONDS) * 100}%`,
                                }}
                            />
                        </div>
                    </div>
                ) : (
                    <p className="mt-3 text-body text-muted">
                        Are you sure you want to deactivate?
                    </p>
                )}

                <div className="-mb-2 -mr-2 mt-3 flex justify-end gap-1">
                    <button
                        ref={cancelRef}
                        type="button"
                        onClick={onCancel}
                        className="min-h-tap rounded-control px-3 text-body text-muted"
                    >
                        Cancel
                    </button>
                    {!waiting && (
                        <button
                            type="button"
                            onClick={onDeactivate}
                            className="min-h-tap rounded-control px-3 text-body font-semibold text-accent-text"
                        >
                            Deactivate
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PhoneDemo;

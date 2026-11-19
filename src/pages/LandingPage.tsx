import React from "react";
import { Link } from "react-router-dom";
import PhoneDemo from "../components/demo/PhoneDemo";
import ShieldPreview from "../components/demo/ShieldPreview";
import SectionHeading from "../components/SectionHeading";
import {
    AppCard,
    Button,
    Chip,
    Container,
    Icon,
    IconBadge,
    Reveal,
    SectionLabel,
    type IconName,
} from "../components/UI";
import { SITE } from "../config/site";
import { RULES } from "../content/rules";
import { usePageTitle } from "../hooks";

const released = SITE.appStoreUrl !== null;

const Hero: React.FC = () => (
    <section className="relative overflow-hidden">
        {/* The red of an active shield, glowing behind the phone. */}
        <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-[-10%] h-[720px] w-[720px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgb(var(--accent)/0.16),transparent)] lg:left-[72%] lg:top-[-4%]"
        />
        <Container className="relative grid items-center gap-14 pb-20 pt-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10 lg:pb-28 lg:pt-20">
            <div>
                <Chip prominent icon="phoneIphone">
                    {released
                        ? "Now on the App Store"
                        : "Coming soon to the App Store"}
                </Chip>
                <h1 className="mt-6 text-headline">
                    Take back
                    <br />
                    your time.
                </h1>
                <p className="mt-6 max-w-content text-lede text-muted">
                    Unspend blocks the apps that quietly eat your day. Pick
                    them, set a rule, get out of the way. iOS itself enforces
                    the block — so it's real, not a willpower test you'll fail
                    at 11pm.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    {released ? (
                        <Button href={SITE.appStoreUrl ?? undefined}>
                            Download on the App Store
                        </Button>
                    ) : (
                        <Button to="/features" trailingIcon="arrowForward">
                            See everything it does
                        </Button>
                    )}
                    <Button
                        variant="secondary"
                        to={released ? "/features" : "/#protection"}
                    >
                        {released ? "See everything it does" : "Why it holds"}
                    </Button>
                </div>
                <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-body text-muted">
                    {[
                        `iPhone · iOS ${SITE.minimumIos}+`,
                        "No account, no tracking",
                        `${SITE.languages.length} languages`,
                    ].map((fact) => (
                        <li key={fact} className="flex items-center gap-1.5">
                            <Icon
                                name="check"
                                size={18}
                                className="text-success-text"
                            />
                            {fact}
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <PhoneDemo />
                <p className="mx-auto mt-5 max-w-[340px] text-center text-caption text-muted">
                    A working demo — try the switches and the tasks. In the
                    app the cooldown is {SITE.cooldownMinutes} minutes, and a
                    PIN follows.
                </p>
            </div>
        </Container>
    </section>
);

const STACK_EXAMPLE: { icon: IconName; title: string; value: string }[] = [
    { icon: "schedule", title: "Schedule", value: "09:00–17:00" },
    { icon: "checklist", title: "Task Mode", value: "0/3 tasks" },
    { icon: "timer", title: "Usage Limit", value: "30 min" },
];

const Rules: React.FC = () => (
    <section id="rules" className="border-t py-20 lg:py-28">
        <Container>
            <SectionHeading label="Block rules" title="Four ways to block.">
                A profile is a group of apps, categories and websites with
                its own rules. Use one rule, or combine them.
            </SectionHeading>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {RULES.map((rule, index) => (
                    <Reveal key={rule.id} delay={index * 60} className="h-full">
                        <AppCard className="h-full p-5">
                            <IconBadge icon={rule.icon} />
                            <h3 className="mt-5 text-heading">{rule.title}</h3>
                            <p className="mt-2 text-body-lg text-muted">
                                {rule.body}
                            </p>
                        </AppCard>
                    </Reveal>
                ))}
            </div>

            <Reveal className="mt-4">
                <AppCard className="grid items-center gap-8 p-6 md:grid-cols-2 md:p-8">
                    <div>
                        <SectionLabel>Stack them</SectionLabel>
                        <p className="mt-3 text-screen-title tracking-tight">
                            “Block Instagram between 9 and 5, and only after
                            I've done my three tasks, and with a 30-minute
                            daily ceiling.”
                        </p>
                        <p className="mt-4 text-body-lg text-muted">
                            Unspend stacks the rules. The apps stay blocked
                            while any of them says so — the strictest one
                            wins.
                        </p>
                    </div>
                    <ul className="space-y-2.5">
                        {STACK_EXAMPLE.map((rule) => (
                            <AppCard
                                as="li"
                                key={rule.title}
                                inset
                                highlighted
                                className="flex items-center gap-3 px-4 py-3"
                            >
                                <Icon
                                    name={rule.icon}
                                    className="text-tone-text"
                                />
                                <span className="flex-1 text-label">
                                    {rule.title}
                                </span>
                                <Chip prominent>{rule.value}</Chip>
                            </AppCard>
                        ))}
                    </ul>
                </AppCard>
            </Reveal>
        </Container>
    </section>
);

const PROTECTION: { icon: IconName; title: string; body: string }[] = [
    {
        icon: "shield",
        title: "Enforced by iOS",
        body: "Blocks are applied by Apple's Screen Time, at the system level. They hold while Unspend is closed.",
    },
    {
        icon: "hourglassTop",
        title: `${SITE.cooldownMinutes}-minute cooldown`,
        body: "Lifting a block starts a timer first. Take a moment to reconsider.",
    },
    {
        icon: "key",
        title: "A PIN you don't know",
        body: "Hand your phone to a trusted person. They set the PIN that deactivating requires.",
    },
    {
        icon: "deleteForever",
        title: "Uninstall protection",
        body: "While a block is running, apps can't be deleted from the phone. Removing Unspend is no way around it.",
    },
];

const Protection: React.FC = () => (
    <section id="protection" className="border-t py-20 lg:py-28">
        <Container className="grid items-center gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <Reveal className="order-last lg:order-first">
                <ShieldPreview className="max-w-[290px]" />
            </Reveal>

            <div>
                <SectionHeading
                    label="Unskippable protection"
                    title="A real block, not a willpower test."
                >
                    Most blockers are one tap away from being off. Unspend
                    makes giving in slow, deliberate and — if you want —
                    someone else's decision.
                </SectionHeading>

                <ul className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2">
                    {PROTECTION.map((item, index) => (
                        <li key={item.title}>
                            <Reveal delay={index * 60}>
                                <IconBadge icon={item.icon} size="sm" />
                                <h3 className="mt-4 text-heading">
                                    {item.title}
                                </h3>
                                <p className="mt-2 text-body-lg text-muted">
                                    {item.body}
                                </p>
                            </Reveal>
                        </li>
                    ))}
                </ul>
            </div>
        </Container>
    </section>
);

const MODES: {
    icon: IconName;
    title: string;
    quote: string;
    points: string[];
}[] = [
    {
        icon: "person",
        title: "This is my iPhone",
        quote: "I want to block apps for myself.",
        points: [
            "A trusted person sets the PIN, so you can't talk yourself out of a block.",
            "Screen Time access is asked for once, on first use.",
        ],
    },
    {
        icon: "childCare",
        title: "This is my child's iPhone",
        quote: "I'm a parent or guardian and decide what gets blocked.",
        points: [
            "Approve Unspend once with your Apple Account, through Family Sharing.",
            "Your child can't delete Unspend or switch it off, and only your PIN lifts a block.",
        ],
    },
];

const Modes: React.FC = () => (
    <section className="border-t py-20 lg:py-28">
        <Container>
            <SectionHeading label="For you — or for your child" title="Who uses this iPhone?">
                Unspend can hold you to your own limits, or help you look
                after your child's iPhone. You choose on first launch.
            </SectionHeading>

            <div className="mt-12 grid gap-4 md:grid-cols-2">
                {MODES.map((mode, index) => (
                    <Reveal key={mode.title} delay={index * 60} className="h-full">
                        <AppCard className="h-full p-6 md:p-8">
                            <div className="flex items-center gap-4">
                                <IconBadge icon={mode.icon} size="lg" />
                                <div>
                                    <h3 className="text-title">{mode.title}</h3>
                                    <p className="mt-1 text-body text-muted">
                                        {mode.quote}
                                    </p>
                                </div>
                            </div>
                            <ul className="mt-6 space-y-3 border-t pt-6">
                                {mode.points.map((point) => (
                                    <li
                                        key={point}
                                        className="flex gap-3 text-body-lg"
                                    >
                                        <Icon
                                            name="checkCircle"
                                            size={20}
                                            className="mt-[3px] text-success-text"
                                        />
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </AppCard>
                    </Reveal>
                ))}
            </div>
        </Container>
    </section>
);

const PRIVACY: { icon: IconName; text: string }[] = [
    { icon: "noAccounts", text: "No accounts, no sign-in, no cloud." },
    { icon: "queryStats", text: "No analytics, no tracking, no ads." },
    { icon: "phoneIphone", text: "Your data stays on your device. Period." },
    {
        icon: "key",
        text: "Your PIN is hashed and stored in the iOS Keychain — not even Unspend can read it.",
    },
];

const Privacy: React.FC = () => (
    <section className="border-t py-20 lg:py-28">
        <Container>
            <Reveal>
                <AppCard className="grid gap-10 p-6 md:p-10 lg:grid-cols-2 lg:gap-16">
                    <div>
                        <SectionHeading
                            label="Private by design"
                            title="Yours alone. Nothing leaves your device."
                        >
                            Unspend runs entirely on your iPhone. It has no
                            server to send anything to.
                        </SectionHeading>
                        <Link
                            to="/privacy"
                            className="mt-6 inline-flex min-h-tap items-center gap-1.5 text-body font-semibold text-accent-text"
                        >
                            Read the privacy policy
                            <Icon name="arrowForward" size={18} />
                        </Link>
                    </div>
                    <ul className="space-y-2.5 self-center">
                        {PRIVACY.map((item) => (
                            <AppCard
                                as="li"
                                key={item.text}
                                inset
                                className="flex items-center gap-4 p-4"
                            >
                                <IconBadge
                                    icon={item.icon}
                                    tone="green"
                                    size="sm"
                                />
                                <span className="text-body-lg">{item.text}</span>
                            </AppCard>
                        ))}
                    </ul>
                </AppCard>
            </Reveal>
        </Container>
    </section>
);

const Closing: React.FC = () => (
    <section className="pb-20 lg:pb-28">
        <Container>
            <Reveal>
                <AppCard
                    active
                    className="flex flex-col items-center px-6 py-14 text-center md:py-20"
                >
                    <IconBadge icon="shield" size="hero" solid />
                    <h2 className="mt-8 max-w-prose text-section">
                        Built solo, for people who already know they have a
                        phone problem.
                    </h2>
                    <p className="mt-4 max-w-content text-lede text-muted">
                        And who just want a tool that actually works.
                    </p>
                    <div className="mt-8">
                        {released ? (
                            <Button href={SITE.appStoreUrl ?? undefined}>
                                Download on the App Store
                            </Button>
                        ) : (
                            <Chip prominent icon="phoneIphone">
                                Coming soon to the App Store
                            </Chip>
                        )}
                    </div>
                </AppCard>
            </Reveal>
        </Container>
    </section>
);

const LandingPage: React.FC = () => {
    usePageTitle();
    return (
        <>
            <Hero />
            <Rules />
            <Protection />
            <Modes />
            <Privacy />
            <Closing />
        </>
    );
};

export default LandingPage;

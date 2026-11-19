import React from "react";
import SectionHeading from "../components/SectionHeading";
import {
    AppCard,
    Button,
    Chip,
    Container,
    IconBadge,
    Reveal,
    type IconName,
} from "../components/UI";
import { SITE } from "../config/site";
import { usePageTitle } from "../hooks";

const PRINCIPLES: { icon: IconName; title: string; body: string }[] = [
    {
        icon: "shield",
        title: "A block has to be real",
        body: "If one tap ends it, it is a suggestion. Unspend lets iOS enforce the block and puts a cooldown and a PIN in front of lifting it.",
    },
    {
        icon: "cloudOff",
        title: "Nothing leaves the phone",
        body: "No accounts, no analytics, no network. An app that guards your attention shouldn't be collecting anything about it.",
    },
    {
        icon: "accessibilityNew",
        title: "Usable by everyone",
        body: "Five languages, VoiceOver, large text, increased contrast and reduced motion are part of the app, not extras.",
    },
];

/** The rule the app and iOS both follow (README, "How blocking works"). */
const CONDITIONS = [
    "it has no rule switched on — manual: blocked until you deactivate it",
    "a schedule is on and the time is inside its window",
    "task mode is on and today's tasks are not all done",
    "a usage limit is on and today's limit is used up",
];

const FACTS: { label: string; value: string }[] = [
    {
        label: "Platform",
        value: `iPhone, iOS ${SITE.minimumIos}+, portrait and landscape. Android in progress.`,
    },
    { label: "Languages", value: SITE.languages.join(" · ") },
    {
        label: "Storage",
        value: "100% on-device. No accounts, no analytics, no network.",
    },
    {
        label: "PIN",
        value: "SHA-256 with a per-install salt, stored in the iOS Keychain.",
    },
];

const About: React.FC = () => {
    usePageTitle("About");
    return (
        <>
            <section className="pb-16 pt-14 lg:pb-20 lg:pt-20">
                <Container>
                    <SectionHeading
                        level="h1"
                        label="About"
                        title="A tool that actually works."
                    >
                        Unspend is an app blocker for iPhone, built solo. It is
                        for people who already know they have a phone problem
                        and don't need another reminder — they need the door
                        to stay shut.
                    </SectionHeading>
                </Container>
            </section>

            <section className="border-t py-16 lg:py-20">
                <Container>
                    <SectionHeading label="Principles" title="What it stands on." />
                    <div className="mt-10 grid gap-4 md:grid-cols-3">
                        {PRINCIPLES.map((principle, index) => (
                            <Reveal
                                key={principle.title}
                                delay={index * 60}
                                className="h-full"
                            >
                                <AppCard className="h-full p-6">
                                    <IconBadge icon={principle.icon} />
                                    <h3 className="mt-5 text-heading">
                                        {principle.title}
                                    </h3>
                                    <p className="mt-2 text-body-lg text-muted">
                                        {principle.body}
                                    </p>
                                </AppCard>
                            </Reveal>
                        ))}
                    </div>
                </Container>
            </section>

            <section className="border-t py-16 lg:py-20">
                <Container className="grid gap-10 lg:grid-cols-2 lg:gap-16">
                    <SectionHeading
                        label="How blocking works"
                        title="iOS enforces it, not the app."
                    >
                        When you activate a profile, Unspend hands its rules to
                        Apple's Screen Time. From then on the system checks
                        them at every boundary — a schedule starting or
                        ending, midnight, a limit being reached — also while
                        Unspend is closed.
                    </SectionHeading>

                    <Reveal>
                        <AppCard className="p-6">
                            <p className="text-label">
                                A profile's apps are blocked while
                            </p>
                            <ul className="mt-4 space-y-2.5">
                                {CONDITIONS.map((condition, index) => (
                                    <li
                                        key={condition}
                                        className="flex items-start gap-3"
                                    >
                                        <span className="mt-0.5 w-9 shrink-0">
                                            {index > 0 && <Chip>or</Chip>}
                                        </span>
                                        <span className="text-body-lg">
                                            {condition}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                            <p className="mt-5 border-t pt-5 text-body text-muted">
                                Rules stack. Each profile has its own shield,
                                so profiles that share an app block it
                                independently.
                            </p>
                        </AppCard>
                    </Reveal>
                </Container>
            </section>

            <section className="border-t py-16 lg:py-20">
                <Container>
                    <SectionHeading label="At a glance" title="The facts." />
                    <AppCard className="mt-10 divide-y">
                        {FACTS.map((fact) => (
                            <div
                                key={fact.label}
                                className="grid gap-1 px-6 py-4 sm:grid-cols-[180px_1fr] sm:gap-6"
                            >
                                <p className="text-label text-muted">
                                    {fact.label}
                                </p>
                                <p className="text-body-lg">{fact.value}</p>
                            </div>
                        ))}
                    </AppCard>

                    <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                        <Button to="/features" trailingIcon="arrowForward">
                            See the features
                        </Button>
                        <Button
                            variant="secondary"
                            icon="mail"
                            href={`mailto:${SITE.supportEmail}`}
                        >
                            Get in touch
                        </Button>
                    </div>
                </Container>
            </section>
        </>
    );
};

export default About;

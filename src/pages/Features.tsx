import React from "react";
import SectionHeading from "../components/SectionHeading";
import {
    AppCard,
    Button,
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

interface Feature {
    icon: IconName;
    title: string;
    body: string;
}

const BLOCKING: Feature[] = [
    {
        icon: "apps",
        title: "Apps, categories and websites",
        body: "Pick single apps, whole app categories or websites in Apple's own picker. iOS itself blocks them.",
    },
    {
        icon: "layers",
        title: "One rule decides",
        body: "A profile's apps are blocked while any enabled rule says so — also while Unspend is closed, and across the reset at midnight.",
    },
    {
        icon: "shield",
        title: "A shield per profile",
        body: "Profiles block independently. If two share an app and you switch one off, the other keeps it blocked.",
    },
    {
        icon: "block",
        title: "Its own block screen",
        body: "The screen over a blocked app speaks your language and names the profile that is blocking it.",
    },
];

const PROTECTION: Feature[] = [
    {
        icon: "hourglassTop",
        title: "Cooldown, then PIN",
        body: `Deactivating takes a ${SITE.cooldownMinutes}-minute cooldown, then the PIN if one is set.`,
    },
    {
        icon: "key",
        title: "A PIN that stays secret",
        body: "Stored only as a salted hash in the iOS Keychain. Repeated wrong attempts lock it for a while — closing the app doesn't reset that.",
    },
    {
        icon: "lock",
        title: "Locked while active",
        body: "While a profile is active, its rules, apps and tasks can't be changed. Changing the PIN and deleting all data take the cooldown too.",
    },
    {
        icon: "deleteForever",
        title: "Uninstall protection",
        body: "While a profile is active, apps can't be deleted from the phone. On by default; switching it off takes the PIN.",
    },
];

const APP: Feature[] = [
    {
        icon: "contrast",
        title: "Light, dark, system",
        body: "Three themes, and a stronger-contrast variant of each when Increase Contrast is on.",
    },
    {
        icon: "translate",
        title: `${SITE.languages.length} languages`,
        body: `${SITE.languages.slice(0, -1).join(", ")} and ${SITE.languages[SITE.languages.length - 1]} — including the block screen.`,
    },
    {
        icon: "accessibilityNew",
        title: "Accessible",
        body: "VoiceOver labels, large tap targets, readable contrast, and text that follows the system size up to twice as large.",
    },
    {
        icon: "animation",
        title: "Calm when you ask",
        body: "With Reduce Motion on, things change without moving.",
    },
    {
        icon: "phoneIphone",
        title: "Portrait and landscape",
        body: `Made for iPhone, iOS ${SITE.minimumIos} or later.`,
    },
    {
        icon: "cloudOff",
        title: "100% on-device",
        body: "No account, no network, no analytics. Delete All Data removes everything, including the app selections held by iOS.",
    },
];

const FeatureGrid: React.FC<{ features: Feature[]; columns?: 2 | 3 }> = ({
    features,
    columns = 2,
}) => (
    <ul
        className={`mt-10 grid gap-4 sm:grid-cols-2 ${columns === 3 ? "lg:grid-cols-3" : ""}`}
    >
        {features.map((feature, index) => (
            <li key={feature.title}>
                <Reveal delay={(index % columns) * 60} className="h-full">
                    <AppCard className="flex h-full gap-4 p-5">
                        <IconBadge icon={feature.icon} size="sm" />
                        <div>
                            <h3 className="text-heading">{feature.title}</h3>
                            <p className="mt-1.5 text-body-lg text-muted">
                                {feature.body}
                            </p>
                        </div>
                    </AppCard>
                </Reveal>
            </li>
        ))}
    </ul>
);

const Features: React.FC = () => {
    usePageTitle("Features");
    return (
        <>
            <section className="pb-16 pt-14 lg:pb-20 lg:pt-20">
                <Container>
                    <SectionHeading
                        level="h1"
                        label="Features"
                        title="Everything Unspend does."
                    >
                        Pick the apps that eat your day, set rules, get out of
                        the way. This is what ships in version 1.
                    </SectionHeading>
                </Container>
            </section>

            <section className="border-t py-16 lg:py-20">
                <Container>
                    <SectionHeading label="Block rules" title="Four rules, stackable.">
                        Combine any of them in one profile. With none enabled,
                        the profile is manual: blocked from the moment you
                        activate it.
                    </SectionHeading>

                    <ul className="mt-10 grid gap-3 md:grid-cols-2">
                        {RULES.map((rule) => (
                            <AppCard
                                as="li"
                                key={rule.id}
                                highlighted
                                className="flex gap-4 p-5"
                            >
                                <Icon
                                    name={rule.icon}
                                    className="mt-0.5 text-tone-text"
                                />
                                <div>
                                    <h3 className="text-label">{rule.title}</h3>
                                    <p className="mt-0.5 text-caption text-muted">
                                        {rule.summary}
                                    </p>
                                    <p className="mt-3 text-body-lg">
                                        {rule.body}
                                    </p>
                                </div>
                            </AppCard>
                        ))}
                    </ul>

                    <FeatureGrid features={BLOCKING} />
                </Container>
            </section>

            <section className="border-t py-16 lg:py-20">
                <Container>
                    <SectionHeading
                        label="Protection against giving in"
                        title="Hard to switch off, on purpose."
                    >
                        The moment you most want a block gone is the moment it
                        matters. So lifting one takes time, and a PIN someone
                        else holds.
                    </SectionHeading>
                    <FeatureGrid features={PROTECTION} />
                </Container>
            </section>

            <section className="border-t py-16 lg:py-20">
                <Container>
                    <SectionHeading
                        label="For yourself or for your child"
                        title="Two ways to use it."
                    >
                        Chosen on first launch, and changeable in Settings
                        while nothing is active.
                    </SectionHeading>
                    <div className="mt-10 grid gap-4 md:grid-cols-2">
                        <AppCard className="p-6">
                            <IconBadge icon="person" />
                            <h3 className="mt-5 text-heading">My iPhone</h3>
                            <p className="mt-2 text-body-lg text-muted">
                                Unspend asks for Screen Time access for you. A
                                trusted person sets the PIN, so you can't talk
                                yourself out of a block.
                            </p>
                        </AppCard>
                        <AppCard className="p-6">
                            <IconBadge icon="childCare" />
                            <h3 className="mt-5 text-heading">
                                My child's iPhone
                            </h3>
                            <p className="mt-2 text-body-lg text-muted">
                                A parent or guardian approves Unspend with
                                their Apple Account through Family Sharing.
                                After that, iOS keeps the child from deleting
                                Unspend or switching it off.
                            </p>
                        </AppCard>
                    </div>
                </Container>
            </section>

            <section className="border-t py-16 lg:py-20">
                <Container>
                    <SectionHeading label="The app" title="Made with care.">
                        The details that make an app pleasant to live with —
                        and usable for everyone.
                    </SectionHeading>
                    <FeatureGrid features={APP} columns={3} />
                </Container>
            </section>

            <section className="border-t py-16 lg:py-20">
                <Container>
                    <AppCard className="flex flex-col gap-6 p-6 md:flex-row md:items-center md:p-8">
                        <IconBadge icon="android" tone="green" size="lg" />
                        <div className="flex-1">
                            <SectionLabel>In progress</SectionLabel>
                            <h2 className="mt-1 text-title">
                                Unspend for Android
                            </h2>
                            <p className="mt-2 max-w-prose text-body-lg text-muted">
                                The same profiles and rules, for Android 8 and
                                later. Not there yet: uninstall protection, the
                                child's-phone mode and blocking websites.
                            </p>
                        </div>
                        <Button variant="secondary" to="/support">
                            Questions?
                        </Button>
                    </AppCard>
                </Container>
            </section>
        </>
    );
};

export default Features;

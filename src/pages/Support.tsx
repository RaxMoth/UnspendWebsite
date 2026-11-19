import React from "react";
import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";
import {
    AppCard,
    Button,
    Container,
    Icon,
    IconBadge,
    SectionLabel,
} from "../components/UI";
import { SITE } from "../config/site";
import { FAQ } from "../content/faq";
import { usePageTitle } from "../hooks";

const Support: React.FC = () => {
    usePageTitle("Support");
    return (
        <>
            <section className="pb-12 pt-14 lg:pt-20">
                <Container>
                    <SectionHeading
                        level="h1"
                        label="Support"
                        title="Questions, answered."
                    >
                        How Unspend behaves and why. If yours isn't here,
                        write — a person reads it.
                    </SectionHeading>
                </Container>
            </section>

            <section className="pb-16 lg:pb-20">
                <Container className="grid gap-12 lg:grid-cols-[1fr_340px] lg:gap-16">
                    <div className="space-y-10">
                        {FAQ.map((group) => (
                            <section key={group.title}>
                                <SectionLabel>{group.title}</SectionLabel>
                                <div className="mt-3 space-y-2.5">
                                    {group.items.map((item) => (
                                        <details
                                            key={item.question}
                                            className="group rounded-card border bg-surface"
                                        >
                                            <summary className="flex min-h-tap cursor-pointer list-none items-center justify-between gap-4 rounded-card px-5 py-4 text-label [&::-webkit-details-marker]:hidden">
                                                {item.question}
                                                <Icon
                                                    name="expandMore"
                                                    className="text-muted transition-transform duration-medium group-open:rotate-180"
                                                />
                                            </summary>
                                            <p className="px-5 pb-5 text-body-lg text-muted">
                                                {item.answer}
                                            </p>
                                        </details>
                                    ))}
                                </div>
                            </section>
                        ))}
                    </div>

                    <aside className="lg:sticky lg:top-24 lg:self-start">
                        <AppCard highlighted className="p-6">
                            <IconBadge icon="mail" />
                            <h2 className="mt-5 text-heading">
                                Still stuck?
                            </h2>
                            <p className="mt-2 text-body-lg text-muted">
                                Tell us what you did and what happened. The
                                iPhone model and iOS version help.
                            </p>
                            <Button
                                href={`mailto:${SITE.supportEmail}`}
                                icon="mail"
                                className="mt-5 w-full"
                            >
                                {SITE.supportEmail}
                            </Button>
                            <p className="mt-4 text-caption text-muted">
                                Unspend sends us nothing by itself — see the{" "}
                                <Link
                                    to="/privacy"
                                    className="font-semibold text-accent-text"
                                >
                                    privacy policy
                                </Link>
                                .
                            </p>
                        </AppCard>
                    </aside>
                </Container>
            </section>
        </>
    );
};

export default Support;

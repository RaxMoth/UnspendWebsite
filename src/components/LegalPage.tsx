import React from "react";
import { Container, SectionLabel } from "./UI";

interface LegalPageProps {
    title: string;
    updated: string;
    children: React.ReactNode;
}

/** A page of running text: privacy policy, terms. */
const LegalPage: React.FC<LegalPageProps> = ({ title, updated, children }) => (
    <Container className="pb-20 pt-14 lg:pb-28 lg:pt-20">
        <article className="max-w-prose">
            <SectionLabel>Last updated: {updated}</SectionLabel>
            <h1 className="mt-3 text-page">{title}</h1>
            <div className="mt-8 space-y-10">{children}</div>
        </article>
    </Container>
);

/**
 * One part of a legal page. Paragraphs and lists inside it are styled
 * here, so the text itself stays free of class names.
 */
export const LegalSection: React.FC<{
    title?: string;
    children: React.ReactNode;
}> = ({ title, children }) => (
    <section className="space-y-4 text-body-lg text-muted [&_a]:font-semibold [&_a]:text-accent-text [&_code]:rounded [&_code]:bg-fg/10 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:text-[0.875em] [&_code]:text-fg [&_li]:pl-1 [&_strong]:font-semibold [&_strong]:text-fg [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
        {title && <h2 className="text-title text-fg">{title}</h2>}
        {children}
    </section>
);

export default LegalPage;

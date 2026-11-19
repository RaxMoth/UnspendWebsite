import React from "react";
import { Link } from "react-router-dom";
import LegalPage, { LegalSection } from "../components/LegalPage";
import { SITE } from "../config/site";
import { usePageTitle } from "../hooks";

const TermsOfService: React.FC = () => {
    usePageTitle("Terms of Service");
    return (
        <LegalPage title="Terms of Service" updated="5 March 2026">
            <LegalSection title="1. Acceptance of Terms">
                <p>
                    By downloading, installing, or using Unspend ("the app"),
                    you agree to be bound by these Terms of Service. If you do
                    not agree to these terms, do not use the app.
                </p>
            </LegalSection>

            <LegalSection title="2. Description of Service">
                <p>
                    Unspend is a screen time management app for iOS that
                    allows you to block selected apps using Apple's Screen
                    Time framework. The app provides features including
                    blocking profiles, scheduled blocks, usage limits, task
                    mode, and PIN-protected deactivation.
                </p>
            </LegalSection>

            <LegalSection title="3. Requirements">
                <ul>
                    <li>iOS {SITE.minimumIos}.0 or later</li>
                    <li>
                        Screen Time authorization must be granted for the app
                        to function
                    </li>
                    <li>
                        An Apple device that supports the Family Controls
                        framework
                    </li>
                </ul>
            </LegalSection>

            <LegalSection title="4. User Responsibilities">
                <ul>
                    <li>
                        You are responsible for remembering your deactivation
                        PIN. We cannot recover or reset it.
                    </li>
                    <li>
                        You acknowledge that blocking apps may prevent access
                        to important services. Use the app responsibly.
                    </li>
                    <li>
                        You are responsible for ensuring the app is configured
                        appropriately for your needs.
                    </li>
                </ul>
            </LegalSection>

            <LegalSection title="5. Limitation of Liability">
                <p>
                    Unspend is provided "as is" without warranties of any
                    kind, express or implied. We are not liable for any
                    damages arising from the use or inability to use the app,
                    including but not limited to missed notifications,
                    inability to access blocked apps in emergencies, or data
                    loss. The app relies on Apple's Screen Time APIs, and
                    functionality may change with iOS updates.
                </p>
            </LegalSection>

            <LegalSection title="6. Intellectual Property">
                <p>
                    All content, design, and code of Unspend are owned by the
                    developer and are protected by applicable intellectual
                    property laws. You may not copy, modify, distribute, or
                    reverse-engineer the app.
                </p>
            </LegalSection>

            <LegalSection title="7. Privacy">
                <p>
                    Your use of Unspend is also governed by our{" "}
                    <Link to="/privacy">Privacy Policy</Link>, which describes
                    how we handle your data.
                </p>
            </LegalSection>

            <LegalSection title="8. Termination">
                <p>
                    You may stop using Unspend at any time by uninstalling the
                    app. All locally stored data will be removed upon
                    uninstallation. We reserve the right to discontinue the
                    app at any time.
                </p>
            </LegalSection>

            <LegalSection title="9. Changes to These Terms">
                <p>
                    We may update these Terms from time to time. Changes will
                    be posted on this page with an updated revision date.
                    Continued use of the app after changes constitutes
                    acceptance of the revised terms.
                </p>
            </LegalSection>

            <LegalSection title="10. Contact">
                <p>
                    If you have any questions about these Terms, please
                    contact us at:{" "}
                    <a href={`mailto:${SITE.supportEmail}`}>
                        {SITE.supportEmail}
                    </a>
                </p>
            </LegalSection>
        </LegalPage>
    );
};

export default TermsOfService;

import React from "react";
import LegalPage, { LegalSection } from "../components/LegalPage";
import { SITE } from "../config/site";
import { usePageTitle } from "../hooks";

/**
 * The app's privacy policy. The text is the one in the app repository
 * (store/privacy-policy.html) — change both together.
 */
const PrivacyPolicy: React.FC = () => {
    usePageTitle("Privacy Policy");
    return (
        <LegalPage title="Privacy Policy" updated="12 May 2026">
            <LegalSection>
                <p>
                    Unspend is built to help you take back your time. We do
                    that by giving you tools that run entirely on your device.{" "}
                    <strong>
                        We do not collect, transmit, sell, or share any of your
                        personal data.
                    </strong>
                </p>
            </LegalSection>

            <LegalSection title="What we store, and where">
                <ul>
                    <li>
                        <strong>
                            Blocking profiles, schedules, tasks, and stats
                        </strong>{" "}
                        are saved using on-device{" "}
                        <code>SharedPreferences</code>.
                    </li>
                    <li>
                        <strong>Your PIN</strong> is hashed (SHA-256 with a
                        per-install random salt) and stored in the iOS
                        Keychain. The PIN itself never leaves your device, and
                        the hash is unreadable without your PIN.
                    </li>
                    <li>
                        <strong>The list of apps you choose to block</strong>{" "}
                        is held by Apple's <code>FamilyControls</code>{" "}
                        framework. iOS manages this directly; we cannot read,
                        export, or share the list, and neither can anyone
                        else.
                    </li>
                </ul>
            </LegalSection>

            <LegalSection title="What we don't do">
                <ul>
                    <li>No analytics SDKs, tracking pixels, or telemetry.</li>
                    <li>No accounts or sign-in.</li>
                    <li>
                        No network requests for user data — the app runs
                        offline.
                    </li>
                    <li>
                        No advertising, no ad networks, no SDKs that could
                        share data with third parties.
                    </li>
                    <li>
                        No use of <code>IDFA</code> / App Tracking Transparency
                        — we don't track you across apps or websites.
                    </li>
                </ul>
            </LegalSection>

            <LegalSection title="Family Controls / Screen Time API">
                <p>
                    Unspend requests Family Controls authorization so iOS can
                    enforce your self-imposed blocks. This authorization is
                    requested on first use and stays local to your device. We
                    use this API only to:
                </p>
                <ul>
                    <li>
                        Read which apps and categories you've chosen to block
                        (you select them via Apple's system picker — the
                        selection never leaves Apple's framework).
                    </li>
                    <li>
                        Apply and remove iOS shields when you activate or
                        deactivate a profile.
                    </li>
                    <li>
                        Schedule time-based blocks and usage limits through
                        Apple's <code>DeviceActivity</code> framework.
                    </li>
                </ul>
            </LegalSection>

            <LegalSection title="Your control">
                <p>
                    You can delete every byte of data Unspend has stored on
                    your device at any time: open the app, go to{" "}
                    <em>Settings → Delete All Data</em>. This removes all
                    profiles, your PIN, the daily activity log, and any
                    pending shields. Uninstalling the app removes everything
                    iOS keeps for the app as well.
                </p>
            </LegalSection>

            <LegalSection title="Children">
                <p>
                    Unspend can be used on your own iPhone or, by a parent or
                    guardian, on a child's iPhone. In both cases it works the
                    same way: everything stays on the device. We don't
                    collect any information from anyone, including children
                    under 13, and a parent's approval is handled by Apple's
                    Screen Time, not by us.
                </p>
            </LegalSection>

            <LegalSection title="Changes to this policy">
                <p>
                    If we change how the app handles data we'll update this
                    page and, where required, prompt you inside the app on
                    next launch.
                </p>
            </LegalSection>

            <LegalSection title="Contact">
                <p>
                    Questions? Email{" "}
                    <a href={`mailto:${SITE.supportEmail}`}>
                        {SITE.supportEmail}
                    </a>
                    .
                </p>
            </LegalSection>
        </LegalPage>
    );
};

export default PrivacyPolicy;

const PrivacyPolicy: React.FC = () => {
    return (
        <div className="min-h-screen bg-white py-16 px-4">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-900 mb-2">
                    Privacy Policy
                </h1>
                <p className="text-gray-500 mb-10">
                    Last updated: March 5, 2026
                </p>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                        1. Introduction
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        Unspend ("we", "our", or "the app") is an iOS
                        application that helps you reduce screen time by
                        blocking distracting apps. We are committed to
                        protecting your privacy. This Privacy Policy explains
                        what data we collect, how we use it, and your rights
                        regarding your information.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                        2. Data We Collect
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        Unspend is designed with a{" "}
                        <strong>privacy-first</strong> approach. We collect as
                        little data as possible:
                    </p>
                    <ul className="list-disc pl-6 text-gray-600 space-y-2">
                        <li>
                            <strong>App selections:</strong> The apps you choose
                            to block are stored locally on your device using
                            Apple's Screen Time framework. We never see or
                            transmit the names of these apps.
                        </li>
                        <li>
                            <strong>Profile data:</strong> Blocking profiles
                            (names, schedules, time limits, tasks) are stored
                            locally on your device only.
                        </li>
                        <li>
                            <strong>PIN:</strong> If you set a deactivation PIN,
                            it is cryptographically hashed and stored locally.
                            We never store or transmit your PIN in plain text.
                        </li>
                        <li>
                            <strong>Theme & language preferences:</strong>{" "}
                            Stored locally on your device.
                        </li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                        3. Data We Do NOT Collect
                    </h2>
                    <ul className="list-disc pl-6 text-gray-600 space-y-2">
                        <li>
                            We do <strong>not</strong> collect personal
                            information such as your name, email address, or
                            phone number.
                        </li>
                        <li>
                            We do <strong>not</strong> use analytics, tracking,
                            or advertising SDKs.
                        </li>
                        <li>
                            We do <strong>not</strong> transmit any data to
                            external servers. All data stays on your device.
                        </li>
                        <li>
                            We do <strong>not</strong> have access to your
                            actual app usage data. Apple's Screen Time APIs are
                            opaque by design — apps only receive anonymous
                            tokens, never actual app names or usage details.
                        </li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                        4. Apple Screen Time & Family Controls
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        Unspend uses Apple's Family Controls, Managed Settings,
                        and Device Activity frameworks to block apps. These
                        frameworks are privacy-preserving by design: your app
                        selections are represented as opaque tokens that cannot
                        be reverse-engineered into app names. Unspend never
                        accesses or stores identifiable information about which
                        specific apps you use or for how long.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                        5. Data Storage & Security
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        All data is stored locally on your device using iOS
                        secure storage mechanisms. Your PIN is salted and hashed
                        using SHA-256 before storage. No data is backed up to
                        external cloud services by the app itself. Standard
                        iCloud/iTunes backups may include app data per your iOS
                        settings.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                        6. Third-Party Services
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        Unspend does not integrate any third-party analytics,
                        advertising, or tracking services. The app has no
                        network communication beyond what is required by iOS
                        system frameworks.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                        7. Children's Privacy
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        Unspend does not collect personal information from
                        anyone, including children under the age of 13. The app
                        is designed as a self-use screen time management tool.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                        8. Your Rights
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        Since all data is stored locally on your device, you
                        have full control. You can delete all app data at any
                        time by uninstalling Unspend. No account creation is
                        required, and no data persists on any server after
                        removal.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                        9. Changes to This Policy
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        We may update this Privacy Policy from time to time. Any
                        changes will be posted on this page with an updated
                        revision date. Continued use of the app after changes
                        constitutes acceptance of the revised policy.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                        10. Contact Us
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        If you have any questions about this Privacy Policy,
                        please contact us at:{" "}
                        <a
                            href="mailto:maxfritzroth@gmail.com"
                            className="text-blue-600 hover:underline"
                        >
                            maxfritzroth@gmail.com
                        </a>
                    </p>
                </section>
            </div>
        </div>
    );
};

export default PrivacyPolicy;

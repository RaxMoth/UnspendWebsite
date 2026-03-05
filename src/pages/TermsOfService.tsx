const TermsOfService: React.FC = () => {
    return (
        <div className="min-h-screen bg-white py-16 px-4">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-900 mb-2">
                    Terms of Service
                </h1>
                <p className="text-gray-500 mb-10">
                    Last updated: March 5, 2026
                </p>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                        1. Acceptance of Terms
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        By downloading, installing, or using Unspend ("the
                        app"), you agree to be bound by these Terms of Service.
                        If you do not agree to these terms, do not use the app.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                        2. Description of Service
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        Unspend is a screen time management app for iOS that
                        allows you to block selected apps using Apple's Screen
                        Time framework. The app provides features including
                        blocking profiles, scheduled blocks, usage limits, task
                        mode, and PIN-protected deactivation.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                        3. Requirements
                    </h2>
                    <ul className="list-disc pl-6 text-gray-600 space-y-2">
                        <li>iOS 16.0 or later</li>
                        <li>
                            Screen Time authorization must be granted for the
                            app to function
                        </li>
                        <li>
                            An Apple device that supports the Family Controls
                            framework
                        </li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                        4. User Responsibilities
                    </h2>
                    <ul className="list-disc pl-6 text-gray-600 space-y-2">
                        <li>
                            You are responsible for remembering your
                            deactivation PIN. We cannot recover or reset it.
                        </li>
                        <li>
                            You acknowledge that blocking apps may prevent
                            access to important services. Use the app
                            responsibly.
                        </li>
                        <li>
                            You are responsible for ensuring the app is
                            configured appropriately for your needs.
                        </li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                        5. Limitation of Liability
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        Unspend is provided "as is" without warranties of any
                        kind, express or implied. We are not liable for any
                        damages arising from the use or inability to use the
                        app, including but not limited to missed notifications,
                        inability to access blocked apps in emergencies, or data
                        loss. The app relies on Apple's Screen Time APIs, and
                        functionality may change with iOS updates.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                        6. Intellectual Property
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        All content, design, and code of Unspend are owned by
                        the developer and are protected by applicable
                        intellectual property laws. You may not copy, modify,
                        distribute, or reverse-engineer the app.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                        7. Privacy
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        Your use of Unspend is also governed by our{" "}
                        <a
                            href="/privacy"
                            className="text-blue-600 hover:underline"
                        >
                            Privacy Policy
                        </a>
                        , which describes how we handle your data.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                        8. Termination
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        You may stop using Unspend at any time by uninstalling
                        the app. All locally stored data will be removed upon
                        uninstallation. We reserve the right to discontinue the
                        app at any time.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                        9. Changes to These Terms
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        We may update these Terms from time to time. Changes
                        will be posted on this page with an updated revision
                        date. Continued use of the app after changes constitutes
                        acceptance of the revised terms.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                        10. Contact
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        If you have any questions about these Terms, please
                        contact us at:{" "}
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

export default TermsOfService;

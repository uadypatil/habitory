import React from "react";
import { FiShield, FiLock, FiInfo } from "react-icons/fi";

export default function UserPrivacyPolicy() {
    return (
        <div className="min-h-screen bg-gray-50 px-4 py-6 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
                        Privacy Policy
                    </h1>
                    <p className="text-gray-600 mt-1 text-sm sm:text-base">
                        Habitory Privacy Policy
                    </p>
                </div>

                {/* Policy Card */}
                <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8 space-y-8">
                    {/* Meta */}
                    <div className="text-sm text-gray-500">
                        <p>
                            <strong>Effective Date:</strong> January 5, 2026
                        </p>
                        <p>
                            <strong>Last Updated:</strong> January 5, 2026
                        </p>
                    </div>

                    {/* Section 1 */}
                    <section>
                        <h2 className="flex items-center gap-2 text-lg font-semibold text-gray-700 mb-2">
                            <FiInfo className="text-blue-500" />
                            1. Introduction
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            Welcome to Habitory. We respect your privacy and are committed to
                            protecting your personal data. This Privacy Policy explains how we
                            collect, use, and safeguard your information when you use our
                            mobile application and services. By using Habitory, you agree to
                            the practices described in this policy.
                        </p>
                    </section>

                    {/* Section 2 */}
                    <section>
                        <h2 className="flex items-center gap-2 text-lg font-semibold text-gray-700 mb-2">
                            <FiInfo className="text-blue-500" />
                            2. Data We Collect
                        </h2>
                        <p className="text-gray-600 mb-3">
                            We only collect data that is essential to help you build
                            discipline and track your progress.
                        </p>
                        <ul className="list-disc pl-5 space-y-2 text-gray-600">
                            <li>
                                <strong>Account Data:</strong> Email address, name, and profile
                                picture (if you sign up via Google, Apple, or email).
                            </li>
                            <li>
                                <strong>Habit Data:</strong> Your created habits, frequency,
                                completion logs, and self-reported notes.
                            </li>
                            <li>
                                <strong>Health Data (Optional):</strong> With your explicit
                                permission, we may sync with Apple Health or Google Fit to
                                automate habit completion (e.g., step counts).
                            </li>
                            <li>
                                <strong>Usage & Device Data:</strong> IP address, device type,
                                operating system, and anonymized app usage statistics (via tools
                                like Firebase Crashlytics) to improve performance.
                            </li>
                        </ul>
                    </section>

                    {/* Section 3 */}
                    <section>
                        <h2 className="flex items-center gap-2 text-lg font-semibold text-gray-700 mb-2">
                            <FiInfo className="text-blue-500" />
                            3. How We Use Your Data
                        </h2>
                        <ul className="list-disc pl-5 space-y-2 text-gray-600">
                            <li>Provide, maintain, and personalize your habit-tracking experience.</li>
                            <li>Synchronize your data across multiple devices.</li>
                            <li>Send reminders and push notifications (you can opt-out anytime).</li>
                            <li>Analyze anonymized trends to improve app features.</li>
                            <li>Provide customer support when you reach out to us.</li>
                        </ul>
                    </section>

                    {/* Section 4 */}
                    <section>
                        <h2 className="flex items-center gap-2 text-lg font-semibold text-gray-700 mb-2">
                            <FiLock className="text-green-500" />
                            4. Data Storage and Security
                        </h2>
                        <ul className="list-disc pl-5 space-y-2 text-gray-600">
                            <li>
                                <strong>Local Storage:</strong> By default, your habit logs are
                                stored locally on your device.
                            </li>
                            <li>
                                <strong>Cloud Sync:</strong> If you create an account, your data
                                is encrypted and stored on secure cloud servers (e.g., AWS or
                                Google Cloud).
                            </li>
                            <li>
                                <strong>Security Measures:</strong> We use industry-standard
                                SSL/TLS encryption for all data in transit and at-rest
                                encryption for our databases.
                            </li>
                        </ul>
                    </section>

                    {/* Section 5 */}
                    <section>
                        <h2 className="flex items-center gap-2 text-lg font-semibold text-gray-700 mb-2">
                            <FiShield className="text-purple-500" />
                            5. Third-Party Sharing
                        </h2>
                        <p className="text-gray-600 mb-3">
                            We do not sell your personal data. We only share information with
                            trusted service providers to operate the app:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 text-gray-600">
                            <li>Analytics: Google Analytics for Firebase (anonymized usage data).</li>
                            <li>Authentication: Firebase Auth / Apple Sign-In.</li>
                            <li>Cloud Hosting: To sync your data safely.</li>
                        </ul>
                    </section>

                    {/* Section 6 */}
                    <section>
                        <h2 className="text-lg font-semibold text-gray-700 mb-2">
                            6. Your Rights (GDPR & CCPA)
                        </h2>
                        <ul className="list-disc pl-5 space-y-2 text-gray-600">
                            <li>Right to Access your stored data.</li>
                            <li>Right to Correction of inaccurate information.</li>
                            <li>
                                Right to Deletion — delete your account and all data from app
                                settings.
                            </li>
                            <li>Right to Data Portability.</li>
                        </ul>
                    </section>

                    {/* Section 7 */}
                    <section>
                        <h2 className="text-lg font-semibold text-gray-700 mb-2">
                            7. Children’s Privacy
                        </h2>
                        <p className="text-gray-600">
                            Habitory is not intended for children under 13. We do not knowingly
                            collect data from children. If such data is discovered, it will be
                            deleted immediately.
                        </p>
                    </section>

                    {/* Section 8 */}
                    <section>
                        <h2 className="text-lg font-semibold text-gray-700 mb-2">
                            8. Changes to This Policy
                        </h2>
                        <p className="text-gray-600">
                            We may update this policy occasionally. Significant changes will
                            be communicated via in-app notifications or email.
                        </p>
                    </section>

                    {/* Section 9 */}
                    <section>
                        <h2 className="text-lg font-semibold text-gray-700 mb-2">
                            9. Contact Us
                        </h2>
                        <p className="text-gray-600">
                            If you have questions regarding this policy, please contact us:
                        </p>
                        <p className="text-gray-600 mt-2">
                            <strong>Email:</strong> support@habitory.com
                            <br />
                            <strong>Website:</strong> www.habitory.com/privacy
                        </p>
                    </section>
                </div>

                {/* Footer */}
                <div className="text-center text-xs text-gray-400 mt-10">
                    © {new Date().getFullYear()} Habitory. All rights reserved.
                </div>
            </div>
        </div>
    );
}

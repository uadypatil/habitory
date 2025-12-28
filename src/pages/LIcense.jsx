import { Link, useNavigate } from "react-router-dom";
import { Shield, CheckCircle, ArrowLeft } from "lucide-react";

export default function License() {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen bg-gray-50 py-12 px-6">
            <div className="max-w-5xl mx-auto space-y-12">

                {/* Header */}
                <div className="text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-100 mb-6">
                        <Shield className="w-10 h-10 text-blue-600" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
                        License Agreement
                    </h1>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                        By using Discipline App, you agree to the following terms and conditions.
                    </p>
                </div>

                {/* Main Content Card */}
                <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 hover:shadow-xl transition">
                    <div className="prose max-w-none text-gray-700 space-y-8">

                        {/* Section 1 */}
                        <section>
                            <h2 className="text-2xl font-semibold text-blue-600 flex items-center gap-3 mb-4">
                                <CheckCircle className="w-7 h-7" />
                                1. Acceptance of Terms
                            </h2>
                            <p>
                                Discipline App ("the App") is provided by the Discipline team. By accessing or using the App,
                                you agree to be bound by this License Agreement. If you do not agree with any part of these terms,
                                you may not use the App.
                            </p>
                        </section>

                        {/* Section 2 */}
                        <section>
                            <h2 className="text-2xl font-semibold text-blue-600 flex items-center gap-3 mb-4">
                                <CheckCircle className="w-7 h-7" />
                                2. Use License
                            </h2>
                            <p>
                                We grant you a limited, non-exclusive, non-transferable, and revocable license to use the App
                                for your personal, non-commercial use. You may not modify, distribute, or reverse-engineer the App.
                            </p>
                        </section>

                        {/* Section 3 */}
                        <section>
                            <h2 className="text-2xl font-semibold text-blue-600 flex items-center gap-3 mb-4">
                                <CheckCircle className="w-7 h-7" />
                                3. User Content & Privacy
                            </h2>
                            <p>
                                You retain ownership of the data you input (habits, goals, progress). We collect and use this data
                                solely to provide and improve the service, in accordance with our Privacy Policy.
                            </p>
                        </section>

                        {/* Section 4 */}
                        <section>
                            <h2 className="text-2xl font-semibold text-blue-600 flex items-center gap-3 mb-4">
                                <CheckCircle className="w-7 h-7" />
                                4. Disclaimer
                            </h2>
                            <p>
                                The App is provided "as is" without warranties of any kind. We do not guarantee that the App will
                                always be available or error-free. Use at your own risk.
                            </p>
                        </section>

                        {/* Section 5 */}
                        <section>
                            <h2 className="text-2xl font-semibold text-blue-600 flex items-center gap-3 mb-4">
                                <CheckCircle className="w-7 h-7" />
                                5. Changes to Terms
                            </h2>
                            <p>
                                We may update this License Agreement from time to time. Continued use of the App after changes
                                constitutes acceptance of the new terms.
                            </p>
                        </section>

                        {/* Section 6 */}
                        <section>
                            <h2 className="text-2xl font-semibold text-blue-600 flex items-center gap-3 mb-4">
                                <CheckCircle className="w-7 h-7" />
                                6. Contact Us
                            </h2>
                            <p>
                                If you have any questions about this License Agreement, please contact us at{" "}
                                <a href="mailto:support@disciplineapp.com" className="text-blue-600 hover:underline font-medium">
                                    support@disciplineapp.com
                                </a>.
                            </p>
                        </section>
                    </div>

                    {/* Last Updated */}
                    <div className="mt-12 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
                        Last updated: December 28, 2025
                    </div>
                </div>

                {/* Only Back Button */}
                <div className="text-center">

                    <button
                        onClick={() => navigate(-1)}
                        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-lg transition"
                    >
                        <ArrowLeft className="w-6 h-6" />
                        Back
                    </button>
                </div>

            </div>
        </div>
    );
}
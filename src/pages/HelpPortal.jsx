import BasePortal from "../layouts/BasePortal";
import { Link } from "react-router-dom";
import { Mail, MessageSquare, Send, HelpCircle, Target, Info } from "lucide-react";
import { useState } from "react";
import { GrDashboard } from "react-icons/gr";

export default function HelpPortal() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Contact form submitted:", formData);
        alert("Thank you for your message! We'll get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <>
            {/* ABOUT SECTION */}
            <section className="py-28 bg-white">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h1 className="text-5xl font-bold text-blue-600">
                        About Discipline App
                    </h1>

                    <p className="mt-8 text-lg text-gray-600 max-w-3xl mx-auto">
                        We help you build lasting habits and achieve your goals through simple, frictionless tracking and powerful insights.
                    </p>

                    <div className="mt-16 grid md:grid-cols-3 gap-12">
                        {[
                            {
                                icon: <HelpCircle className="w-8 h-8" />,
                                title: "Simple Habit Tracking",
                                desc: "Mark daily habits effortlessly and visualize your consistency with streaks and calendars.",
                            },
                            {
                                icon: <Target className="w-8 h-8" />,
                                title: "Goal Setting",
                                desc: "Create weekly and monthly goals that align with your long-term aspirations.",
                            },
                            {
                                icon: <Info className="w-8 h-8" />,
                                title: "Actionable Insights",
                                desc: "Get streaks, trends, and stats to understand your progress and stay motivated.",
                            },
                        ].map(({ icon, title, desc }) => (
                            <div
                                key={title}
                                className="p-8 border rounded-2xl hover:shadow-xl transition text-center"
                            >
                                <div className="w-16 h-16 mx-auto rounded-full bg-blue-600 text-white flex items-center justify-center mb-6">
                                    {icon}
                                </div>

                                <h3 className="text-xl font-semibold text-blue-600">
                                    {title}
                                </h3>

                                <p className="mt-4 text-gray-600">
                                    {desc}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12">
                        <Link
                            to="/register"
                            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition"
                        >
                            Start Your Journey
                        </Link>
                    </div>
                </div>
            </section>

            {/* CONTACT SECTION */}
            <section className="py-28 bg-gray-100">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-16">
                        Get in Touch
                    </h2>

                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        {/* Contact Info */}
                        <div>
                            <h3 className="text-2xl font-semibold text-blue-600 mb-8">
                                We'd Love to Hear From You
                            </h3>

                            <p className="text-gray-600 mb-10">
                                Have questions, feedback, or suggestions? Reach out — we're here to help you on your discipline journey.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <Mail className="w-6 h-6 text-blue-600" />
                                    <span className="text-gray-700">support@disciplineapp.com</span>
                                </div>

                                <div className="flex items-center gap-4">
                                    <MessageSquare className="w-6 h-6 text-blue-600" />
                                    <span className="text-gray-700">Live chat available in-app</span>
                                </div>

                                <div className="flex items-center gap-4">

                                    <GrDashboard className="w-6 h-6 text-blue-600" />
                                    <Link
                                        to="/dashboard"
                                        className="hover:text-blue-600"
                                    >
                                        <span className="text-gray-700">Try Dashboard</span>
                                    </Link>
                                </div>
                            </div>

                            <img
                                src="https://img.freepik.com/free-vector/contact-us-concept-illustration_114360-3147.jpg"
                                alt="Contact illustration"
                                className="mt-10 rounded-2xl shadow-xl hidden md:block"
                            />
                        </div>

                        {/* Contact Form */}
                        <div className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-xl transition">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="6"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition resize-none"
                                        placeholder="How can we help you?"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 text-white px-6 py-4 rounded-xl font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-2"
                                >
                                    Send Message
                                    <Send className="w-5 h-5" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
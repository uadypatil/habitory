import BasePortal from "../layouts/BasePortal";
import { Link } from "react-router-dom";
import { Target, CalendarCheck, Flame, Trophy } from "lucide-react";

export default function Landing() {
    return (
        <>
            {/* HERO */}
            < section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-32" >
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
                    <div>
                        <h1 className="text-5xl font-bold leading-tight">
                            Discipline, <br /> Built Daily.
                        </h1>

                        <p className="mt-6 text-lg text-blue-100 max-w-lg">
                            Track habits, routines, and goals — stay consistent without friction.
                        </p>

                        <div className="mt-10 flex gap-4">
                            <Link
                                to="/register"
                                className="bg-white text-blue-600 px-7 py-4 rounded-xl font-semibold hover:bg-gray-100 transition"
                            >
                                Get Started
                            </Link>

                            <a
                                href="#features"
                                className="border border-white px-7 py-4 rounded-xl hover:bg-white hover:text-blue-600 transition"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>

                    <img
                        src="https://img.freepik.com/free-vector/discipline-abstract-concept_335657-3018.jpg"
                        alt="Discipline illustration"
                        className="rounded-2xl shadow-xl hidden md:block"
                    />
                </div>
            </section >

            {/* FEATURES */}
            <section id="features" className="py-28 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center">
                        Core Features
                    </h2>

                    <div className="mt-16 grid md:grid-cols-3 gap-12">
                        {[
                            {
                                title: "Habit Tracking",
                                desc: "Daily habits with clear completion visuals",
                                img: "https://img.freepik.com/free-vector/habit-tracker-concept-illustration_114360-4545.jpg",
                            },
                            {
                                title: "Goal Management",
                                desc: "Weekly & monthly goals made simple",
                                img: "https://img.freepik.com/free-vector/goal-achievement-concept-illustration_114360-5603.jpg",
                            },
                            {
                                title: "Progress Insights",
                                desc: "Streaks, trends, and performance stats",
                                img: "https://img.freepik.com/free-vector/data-analysis-concept-illustration_114360-8053.jpg",
                            },
                        ].map(({ title, desc, img }) => (
                            <div
                                key={title}
                                className="p-8 border rounded-2xl hover:shadow-xl transition text-center"
                            >
                                <img
                                    src={img}
                                    alt={title}
                                    className="h-44 mx-auto mb-6 rounded-lg object-contain"
                                />

                                <h3 className="text-xl font-semibold text-blue-600">
                                    {title}
                                </h3>

                                <p className="mt-4 text-gray-600">
                                    {desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* USE CASES */}
            <section id="use-cases" className="py-28 bg-gray-100">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold">
                        Who Is It For?
                    </h2>

                    <div className="mt-16 grid md:grid-cols-4 gap-10">
                        {[
                            {
                                role: "Students",
                                img: "https://img.freepik.com/free-vector/students-studying-online-concept_114360-5537.jpg",
                            },
                            {
                                role: "Professionals",
                                img: "https://img.freepik.com/free-vector/business-people-working-concept_114360-4429.jpg",
                            },
                            {
                                role: "Athletes",
                                img: "https://img.freepik.com/free-vector/athlete-training-concept_114360-2075.jpg",
                            },
                            {
                                role: "Creators",
                                img: "https://img.freepik.com/free-vector/content-creator-concept-illustration_114360-5380.jpg",
                            },
                        ].map(({ role, img }) => (
                            <div
                                key={role}
                                className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition"
                            >
                                <img
                                    src={img}
                                    alt={role}
                                    className="h-40 mx-auto mb-6 rounded-lg object-contain"
                                />

                                <h4 className="text-xl font-semibold text-blue-600">
                                    {role}
                                </h4>

                                <p className="mt-3 text-gray-600">
                                    Build discipline tailored to your daily routine.
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* WORKFLOW */}
            <section id="workflow" className="py-28 bg-white">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold">
                        How It Works
                    </h2>

                    <div className="mt-20 flex flex-col md:flex-row items-center justify-between gap-10">
                        {[
                            {
                                title: "Create Goals",
                                desc: "Define habits & targets",
                                icon: "🎯",
                            },
                            {
                                title: "Track Daily",
                                desc: "Mark progress each day",
                                icon: "📅",
                            },
                            {
                                title: "Build Streaks",
                                desc: "Stay consistent visually",
                                icon: "🔥",
                            },
                            {
                                title: "Stay Disciplined",
                                desc: "Achieve long-term growth",
                                icon: "🏆",
                            },
                        ].map((item, index) => (
                            <div key={item.title} className="relative flex items-center">

                                {/* ARROW BODY */}
                                <div className="bg-blue-50 border border-blue-100 px-10 py-8 rounded-xl flex items-center gap-6 min-w-[260px] hover:shadow-lg transition">

                                    {/* ICON CIRCLE */}
                                    <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl">
                                        {item.icon}
                                    </div>

                                    {/* TEXT */}
                                    <div className="text-left">
                                        <h4 className="font-semibold text-blue-600 text-lg">
                                            {item.title}
                                        </h4>
                                        <p className="text-gray-600 text-sm mt-1">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>

                                {/* ARROW HEAD (desktop only) */}
                                {index !== 3 && (
                                    <div className="hidden md:block w-0 h-0 border-t-[32px] border-b-[32px] border-l-[32px] border-t-transparent border-b-transparent border-l-blue-50 -ml-1" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* TESTIMONIALS */}
            <section className="py-28 bg-gray-100">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold">
                        What Users Say
                    </h2>

                    <div className="mt-20 grid md:grid-cols-3 gap-12">
                        {[
                            "Helped me stay consistent daily.",
                            "The streak system changed my routine.",
                            "Simple, clean, and effective.",
                        ].map((text, i) => (
                            <div
                                key={i}
                                className="relative bg-white pt-16 p-8 rounded-2xl shadow-md hover:shadow-xl transition"
                            >
                                {/* USER ICON */}
                                <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-white text-2xl shadow-lg">
                                    👤
                                </div>

                                {/* TESTIMONIAL */}
                                <p className="text-gray-600 italic text-lg">
                                    “{text}”
                                </p>

                                {/* USER META (optional) */}
                                <div className="mt-6 text-sm text-gray-500 font-medium">
                                    Verified User
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* CTA STRIP (NEW) */}
            < section className="py-24 bg-blue-600 text-white text-center" >
                <h2 className="text-4xl font-bold">
                    Start Building Discipline Today
                </h2>

                <Link
                    to="/register"
                    className="inline-block mt-8 bg-white text-blue-600 px-10 py-4 rounded-xl font-semibold hover:bg-gray-100 transition"
                >
                    Get Started Free
                </Link>
            </section >

            {/* FAQ (NEW) */}
            < section id="faq" className="py-28 bg-white" >
                <div className="max-w-5xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center">
                        FAQs
                    </h2>

                    <div className="mt-14 space-y-6">
                        {[
                            ["Is it free?", "Yes, you can start completely free."],
                            ["Is my data safe?", "Your data is securely stored."],
                            ["Can I use it on mobile?", "Yes, it works as a PWA."],
                        ].map(([q, a]) => (
                            <div key={q} className="border p-6 rounded-xl">
                                <h4 className="font-semibold text-lg">{q}</h4>
                                <p className="mt-2 text-gray-600">{a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section >
        </>
    );
}

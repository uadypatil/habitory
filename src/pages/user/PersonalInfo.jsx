import { useState, useEffect } from "react";
import { FiCheckCircle } from "react-icons/fi";

// Helper to get progress bar color
const getProgressColor = (percent, isCheatDay = false) => {
    if (isCheatDay) return "#e5e7eb"; // gray-200
    if (percent >= 90) return "#4ade80"; // green-400
    if (percent >= 60) return "#facc15"; // yellow-400
    if (percent >= 30) return "#f97316"; // orange-500
    return "#ef4444"; // red-500
};

export default function PersonalInfo({ user, tasks = [], weeklyProgress = [] }) {
    // ------------------ User Info ------------------
    const {
        name = "John Doe",
        email = "johndoe@example.com",
        profilePhoto = "https://i.pravatar.cc/150?img=3",
        weight = 70, // kg
        height = 175, // cm
        age = 25,
        gender = "Male",
        location = "New York, USA",
        activityLevel = "Moderate",
        membershipStatus = "Premium",
        waterConsumed = 2.5,
        waterLimit = 5,
    } = user || {};

    const infoList = [
        { label: "Weight", value: `${weight} kg` },
        { label: "Height", value: `${height} cm` },
        { label: "Age", value: age },
        { label: "Gender", value: gender },
        { label: "Location", value: location },
        { label: "Activity Level", value: activityLevel },
        { label: "Membership", value: membershipStatus },
    ];

    // ------------------ Daily Progress ------------------
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter((task) => task.completed).length;
    const progressPercent = totalTasks ? Math.round((completedTasks / totalTasks) * 100) : 0;

    const [dailyTasks, setDailyTasks] = useState(tasks);
    const [waterLevel, setWaterLevel] = useState(0);

    const remainingWater = Math.max(0, waterLimit - waterConsumed);

    useEffect(() => {
        const targetPercent = Math.min(100, (waterConsumed / waterLimit) * 100);
        const timer = setTimeout(() => setWaterLevel(targetPercent), 300);
        return () => clearTimeout(timer);
    }, [waterConsumed, waterLimit]);

    const toggleTask = (index) => {
        const updatedTasks = [...dailyTasks];
        updatedTasks[index].completed = !updatedTasks[index].completed;
        setDailyTasks(updatedTasks);
    };

    const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

    // ------------------ Render ------------------
    return (
        <div className="min-h-screen bg-gray-50 py-12 px-6">
            <div className="max-w-5xl mx-auto space-y-8">
                {/* ===== Profile Header ===== */}
                <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col md:flex-row items-center md:items-start gap-8 hover:shadow-xl transition">
                    <img
                        src={profilePhoto}
                        alt={name}
                        className="w-32 h-32 rounded-full object-cover shadow-md border-4 border-blue-100"
                    />
                    <div className="flex-1 text-center md:text-left">
                        <h1 className="text-3xl font-bold text-gray-800">{name}</h1>
                        <p className="text-gray-600 mt-1">{email}</p>

                        {/* Personal Info Grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
                            {infoList.map((item, i) => (
                                <div
                                    key={i}
                                    className="bg-blue-50 rounded-xl p-4 text-center hover:shadow-md transition"
                                >
                                    <span className="text-sm text-gray-500">{item.label}</span>
                                    <p className="text-lg font-semibold text-blue-700 mt-1">
                                        {item.value}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ===== Today's Progress ===== */}
                <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Today's Progress</h2>
                    <div className="w-full bg-gray-200 rounded-full h-6 overflow-hidden">
                        <div
                            className="h-full rounded-full transition-all duration-700 ease-out"
                            style={{
                                width: `${progressPercent}%`,
                                backgroundColor: getProgressColor(progressPercent),
                            }}
                        />
                    </div>
                    <p className="mt-3 text-lg text-gray-700 font-medium">
                        {progressPercent}% completed ({completedTasks}/{totalTasks} tasks)
                    </p>
                </div>

                {/* ===== Today's Tasks ===== */}
                <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Today's Tasks</h2>
                    <ul className="space-y-3">
                        {dailyTasks.length > 0 ? (
                            dailyTasks.map((task, i) => (
                                <li
                                    key={i}
                                    className="flex items-center justify-between bg-gray-50 rounded-xl p-4 hover:bg-blue-50 transition"
                                >
                                    <span
                                        className={`text-base ${task.completed
                                                ? "line-through text-gray-500"
                                                : "text-gray-800"
                                            }`}
                                    >
                                        {task.name}
                                    </span>
                                    <button
                                        onClick={() => toggleTask(i)}
                                        className={`p-3 rounded-full transition ${task.completed
                                                ? "bg-green-500 text-white"
                                                : "bg-gray-300 text-gray-600 hover:bg-gray-400"
                                            }`}
                                    >
                                        <FiCheckCircle className="w-5 h-5" />
                                    </button>
                                </li>
                            ))
                        ) : (
                            <p className="text-center text-gray-500 py-8">
                                No tasks for today. Enjoy your rest!
                            </p>
                        )}
                    </ul>
                </div>

                {/* ===== Weekly Progress + Water Intake ===== */}
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Weekly Progress */}
                    <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Weekly Progress</h2>
                        <div className="flex items-end justify-between h-64 gap-2">
                            {weeklyProgress.map((day, i) => {
                                const isCheatDay = day === null;
                                const percent = isCheatDay ? 0 : day;
                                return (
                                    <div key={i} className="flex flex-col items-center flex-1">
                                        <div
                                            className="w-full max-w-12 rounded-lg transition-all duration-700"
                                            style={{
                                                height: `${percent * 2}px`,
                                                backgroundColor: getProgressColor(percent, isCheatDay),
                                            }}
                                        />
                                        <span className="mt-3 text-sm font-medium text-gray-600">
                                            {weekDays[i]}
                                        </span>
                                        <span className="text-xs text-gray-500">
                                            {isCheatDay ? "Cheat Day" : `${percent}%`}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Water Intake */}
                    <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition flex flex-col items-center justify-center">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Water Intake</h2>
                        <div className="relative w-40 h-80 bg-gray-200 rounded-full overflow-hidden shadow-inner">
                            <div
                                className="absolute bottom-0 w-full bg-blue-500 transition-all duration-1000 ease-out"
                                style={{ height: `${waterLevel}%` }}
                            />
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-white font-bold">
                                <span className="text-4xl">{waterConsumed}L</span>
                                <span className="text-lg mt-1">of {waterLimit}L</span>
                            </div>
                        </div>
                        <div className="mt-8 space-y-3 text-center">
                            <p className="text-lg text-green-600 font-medium">
                                ✓ {waterConsumed}L Consumed
                            </p>
                            <p className="text-lg text-gray-600 font-medium">
                                {remainingWater}L Remaining
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
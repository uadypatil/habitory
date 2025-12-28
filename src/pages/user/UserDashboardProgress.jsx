import React, { useState, useEffect } from "react";
import { FiCheckCircle } from "react-icons/fi";

// Helper function to determine progress bar color
const getProgressColor = (percent, isCheatDay = false) => {
    if (isCheatDay) return "#e5e7eb"; // gray for cheat day
    if (percent >= 90) return "#4ade80"; // green
    if (percent >= 60) return "#facc15"; // yellow
    if (percent >= 30) return "#f97316"; // orange
    return "#ef4444"; // red
};

export default function UserDashboardProgress({
    tasks = [],
    weeklyProgress = [],
    waterConsumed = 2.5,
    waterLimit = 5,
}) {
    const [dailyTasks, setDailyTasks] = useState(tasks);
    const [waterLevel, setWaterLevel] = useState(0);
    const [currentWaterConsumed, setCurrentWaterConsumed] = useState(waterConsumed);
    const [inputValue, setInputValue] = useState('');

    // Sync dailyTasks when props change (e.g. new day)
    useEffect(() => {
        setDailyTasks(tasks);
    }, [tasks]);

    // Sync currentWaterConsumed if prop changes externally
    useEffect(() => {
        setCurrentWaterConsumed(waterConsumed);
    }, [waterConsumed]);

    // Calculate progress from local state (dailyTasks), not props
    const totalTasks = dailyTasks.length;
    const completedTasks = dailyTasks.filter((task) => task.completed).length;
    const progressPercent = totalTasks
        ? Math.round((completedTasks / totalTasks) * 100)
        : 0;

    // Animate water level smoothly on mount or when values change
    useEffect(() => {
        const targetPercent = Math.min(100, (currentWaterConsumed / waterLimit) * 100);
        let start = 0;
        const duration = 1000;
        const increment = targetPercent / (duration / 16); // ~60fps

        const timer = setInterval(() => {
            start += increment;
            if (start >= targetPercent) {
                setWaterLevel(targetPercent);
                clearInterval(timer);
            } else {
                setWaterLevel(start);
            }
        }, 16);

        return () => clearInterval(timer);
    }, [currentWaterConsumed, waterLimit]);

    const toggleTask = (index) => {
        const updatedTasks = [...dailyTasks];
        updatedTasks[index].completed = !updatedTasks[index].completed;
        setDailyTasks(updatedTasks);
    };

    const addWaterIntake = () => {
        const addAmount = parseFloat(inputValue) || 0;
        if (addAmount > 0) {
            setCurrentWaterConsumed((prev) => prev + addAmount);
            setInputValue('');
        }
    };

    const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const remainingWater = Number(Math.max(0, waterLimit - currentWaterConsumed).toFixed(1));

    return (
        <div className="space-y-6">
            {/* Daily Progress Bar */}
            <div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-700 mb-2">
                    Today's Progress
                </h2>
                <div className="w-full bg-gray-200 rounded-full h-5 md:h-6 overflow-hidden">
                    <div
                        className="h-full rounded-full transition-all duration-700 ease-out"
                        style={{
                            width: `${progressPercent}%`,
                            backgroundColor: getProgressColor(progressPercent),
                        }}
                    />
                </div>
                <p className="mt-2 text-gray-600 font-medium text-sm md:text-base">
                    {completedTasks}/{totalTasks} tasks • {progressPercent}% completed
                </p>
            </div>

            {/* Daily Tasks */}
            <div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-700 mb-2">
                    Today's Tasks
                </h2>
                <ul className="space-y-2">
                    {dailyTasks.length > 0 ? (
                        dailyTasks.map((task, i) => (
                            <li
                                key={i}
                                className="flex items-center justify-between bg-white rounded-xl p-3 shadow hover:bg-blue-50 transition cursor-pointer"
                                onClick={() => toggleTask(i)} // Optional: click whole item
                            >
                                <span
                                    className={`text-sm md:text-base font-medium ${task.completed
                                            ? "line-through text-gray-400"
                                            : "text-gray-800"
                                        }`}
                                >
                                    {task.name}
                                </span>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        toggleTask(i);
                                    }}
                                    className={`p-2 rounded-full transition-all ${task.completed
                                            ? "bg-green-600 text-white scale-110"
                                            : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                                        }`}
                                >
                                    <FiCheckCircle size={20} />
                                </button>
                            </li>
                        ))
                    ) : (
                        <p className="text-gray-500 text-center py-4">No tasks for today!</p>
                    )}
                </ul>
            </div>

            {/* Bottom Section: Weekly Progress + Water Tracker */}
            <div className="flex flex-col md:flex-row h-[50vh] gap-6">
                {/* Weekly Progress */}
                <div className="flex-1 bg-white rounded-2xl shadow p-4 md:p-6 flex flex-col">
                    <h2 className="text-xl md:text-2xl font-bold text-gray-700 mb-4">
                        Weekly Progress
                    </h2>
                    <div className="flex justify-between items-end h-full gap-2">
                        {weeklyProgress.map((day, i) => {
                            const isCheatDay = day === null;
                            const displayPercent = isCheatDay ? 0 : day;
                            const maxHeight = 220; // Max bar height in px
                            const barHeight = isCheatDay ? 8 : (displayPercent / 100) * maxHeight;

                            return (
                                <div key={i} className="flex flex-col items-center flex-1">
                                    <div
                                        className="w-8 md:w-10 rounded-t-lg transition-all duration-700 ease-out"
                                        style={{
                                            height: `${barHeight}px`,
                                            backgroundColor: getProgressColor(displayPercent, isCheatDay),
                                            minHeight: isCheatDay ? "8px" : "0px",
                                        }}
                                    />
                                    <span className="text-xs md:text-sm mt-2 text-gray-600">
                                        {isCheatDay ? "-" : `${displayPercent}%`}
                                    </span>
                                    <span className="text-xs md:text-sm font-medium text-gray-700">
                                        {weekDays[i]}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Water Tracker with info beside */}
                <div className="flex-1 bg-white rounded-2xl shadow p-4 md:p-6 flex flex-col md:flex-row items-center justify-center gap-6">
                    <div className="flex flex-col items-center">
                        <h2 className="text-xl md:text-2xl font-bold text-gray-700 mb-4">
                            Water Intake
                        </h2>
                        <div className="relative w-32 md:w-40 h-72 md:h-80 bg-gray-200 rounded-full overflow-hidden border-4 border-gray-300">
                            <div
                                className="absolute bottom-0 w-full bg-gradient-to-t from-blue-600 to-blue-400 transition-all duration-1500 ease-out shadow-lg"
                                style={{ height: `${waterLevel}%` }}
                            />
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-white font-bold text-2xl md:text-3xl drop-shadow-md">
                                <span>{currentWaterConsumed.toFixed(1)}L</span>
                                <span className="text-lg md:text-xl">of {waterLimit}L</span>
                            </div>
                        </div>
                        <p className="mt-4 text-sm text-gray-500">Stay hydrated!</p>
                    </div>

                    {/* Info Section */}
                    <div className="flex flex-col justify-center gap-4 text-left">
                        <div className="flex items-center gap-3">
                            <div className="w-5 h-5 bg-blue-500 rounded-full" />
                            <span className="text-gray-700 font-medium text-base md:text-lg">
                                {currentWaterConsumed.toFixed(1)}L Consumed
                            </span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-5 h-5 bg-gray-300 rounded-full" />
                            <span className="text-gray-700 font-medium text-base md:text-lg">
                                {remainingWater}L Remaining
                            </span>
                        </div>
                        <div className="mt-4 text-sm text-gray-600">
                            {waterLevel >= 100 ? "🎉 Goal reached!" : "Keep going!"}
                        </div>
                        {/* Add Water Intake Option */}
                        <div className="mt-4 flex items-center gap-2">
                            <input
                                type="number"
                                step="0.1"
                                min="0"
                                placeholder="0.0"
                                className="w-20 p-2 border border-gray-300 rounded-lg text-gray-700 text-base focus:outline-none focus:border-blue-500 transition"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                            />
                            <button
                                onClick={addWaterIntake}
                                className="px-4 py-2 bg-blue-500 text-white font-medium text-base rounded-lg hover:bg-blue-600 transition"
                            >
                                Take Water
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
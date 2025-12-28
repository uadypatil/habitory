import React, { useState } from "react";
import { FiPlus, FiCheckCircle, FiClock, FiTarget, FiZap, FiX } from "react-icons/fi";

const presetTasks = [
    { name: "Morning Workout", category: "Exercise", duration: "30 mins", icon: <FiZap className="text-yellow-500" /> },
    { name: "Evening Cardio", category: "Exercise", duration: "45 mins", icon: <FiTarget className="text-red-500" /> },
    { name: "Meditate", category: "Mindfulness", duration: "10 mins", icon: <FiClock className="text-purple-500" /> },
    { name: "Read Book", category: "Personal Growth", duration: "30 mins", icon: <FiTarget className="text-indigo-500" /> },
    { name: "Drink 8 Glasses of Water", category: "Health", duration: "All day", icon: <FiCheckCircle className="text-blue-500" /> },
    { name: "Prepare Healthy Meal", category: "Nutrition", duration: "20 mins", icon: <FiPlus className="text-green-500" /> },
    { name: "Walk 10,000 Steps", category: "Activity", duration: "All day", icon: <FiTarget className="text-teal-500" /> },
    { name: "Journaling", category: "Mindfulness", duration: "15 mins", icon: <FiClock className="text-pink-500" /> },
    { name: "Stretch/Yoga", category: "Exercise", duration: "20 mins", icon: <FiZap className="text-orange-500" /> },
    { name: "No Screen Time After 9PM", category: "Habit", duration: "Evening", icon: <FiX className="text-gray-600" /> },
];

export default function AddNewTaskPage({ onAddTask }) {
    const [formData, setFormData] = useState({
        name: "",
        category: "Exercise",
        duration: "",
        notes: "",
    });

    const [isAdding, setIsAdding] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const handlePresetClick = (task) => {
        setFormData({
            name: task.name,
            category: task.category,
            duration: task.duration,
            notes: "",
        });

        // On mobile, smooth scroll to form after selecting preset
        document.getElementById("task-form")?.scrollIntoView({ behavior: "smooth" });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name.trim()) return;

        setIsAdding(true);

        setTimeout(() => {
            const newTask = {
                name: formData.name.trim(),
                completed: false,
                category: formData.category,
                duration: formData.duration,
                notes: formData.notes.trim(),
            };

            if (onAddTask) onAddTask(newTask);

            setShowSuccess(true);
            setIsAdding(false);

            setTimeout(() => {
                setShowSuccess(false);
                setFormData({ name: "", category: "Exercise", duration: "", notes: "" });
            }, 2000);
        }, 800);
    };

    return (
        <div className="min-h-screen bg-gray-50 py-6 px-4 sm:py-8 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
                        Add New Task
                    </h1>
                    <p className="mt-2 text-sm sm:text-base text-gray-600">
                        Choose a preset or create a custom one
                    </p>
                </div>

                {/* Mobile-First Layout: Stack on small, side-by-side on large */}
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                    {/* Preset Tasks Section */}
                    <div className="w-full lg:w-1/3 order-1 lg:order-1">
                        <h2 className="text-lg sm:text-xl font-bold text-gray-700 mb-4 flex items-center gap-2">
                            <FiTarget className="text-blue-500" />
                            Quick Presets
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 max-h-[60vh] lg:max-h-none overflow-y-auto lg:overflow-visible">
                            {presetTasks.map((task, i) => (
                                <button
                                    key={i}
                                    onClick={() => handlePresetClick(task)}
                                    className="w-full text-left bg-white rounded-xl p-4 shadow-md hover:shadow-xl hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 active:scale-95"
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="text-2xl sm:text-3xl">{task.icon}</div>
                                            <div>
                                                <p className="font-medium text-gray-800 text-sm sm:text-base">
                                                    {task.name}
                                                </p>
                                                <p className="text-xs sm:text-sm text-gray-500 mt-1">
                                                    {task.category} • {task.duration}
                                                </p>
                                            </div>
                                        </div>
                                        <FiPlus className="text-gray-400 text-lg sm:text-xl" />
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Form Section */}
                    <div id="task-form" className="w-full lg:w-2/3 order-2 lg:order-2">
                        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
                            <h2 className="text-xl sm:text-2xl font-bold text-gray-700 mb-6">
                                Create Your Task
                            </h2>

                            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                                {/* Task Name */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Task Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        placeholder="e.g., Morning Run"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-gray-800 text-base"
                                    />
                                </div>

                                {/* Category */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Category
                                    </label>
                                    <select
                                        value={formData.category}
                                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition text-gray-800 text-base"
                                    >
                                        <option>Exercise</option>
                                        <option>Mindfulness</option>
                                        <option>Nutrition</option>
                                        <option>Health</option>
                                        <option>Personal Growth</option>
                                        <option>Activity</option>
                                        <option>Habit</option>
                                        <option>Other</option>
                                    </select>
                                </div>

                                {/* Duration */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Expected Duration
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.duration}
                                        onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                                        placeholder="e.g., 30 mins, 1 hour, All day"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition text-gray-800 text-base"
                                    />
                                </div>

                                {/* Notes */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Notes (Optional)
                                    </label>
                                    <textarea
                                        rows="3"
                                        value={formData.notes}
                                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                                        placeholder="Any reminders, goals, or details..."
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition text-gray-800 text-base resize-none"
                                    />
                                </div>

                                {/* Submit Button */}
                                <div className="pt-4">
                                    <button
                                        type="submit"
                                        disabled={isAdding || !formData.name.trim()}
                                        className={`w-full py-4 rounded-xl font-bold text-white text-lg transition-all duration-300 flex items-center justify-center gap-3 shadow-lg ${isAdding || !formData.name.trim()
                                                ? "bg-gray-400 cursor-not-allowed"
                                                : "bg-blue-500 hover:bg-blue-600 active:scale-95 transform"
                                            }`}
                                    >
                                        {isAdding ? (
                                            <>Adding...</>
                                        ) : showSuccess ? (
                                            <>
                                                <FiCheckCircle size={24} />
                                                Task Added!
                                            </>
                                        ) : (
                                            <>
                                                <FiPlus size={24} />
                                                Add Task to Today
                                            </>
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
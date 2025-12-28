import { FiTrendingUp, FiCheckCircle, FiTarget, FiCalendar } from "react-icons/fi";
import { FaRegClock } from "react-icons/fa";
import { GiWeightLiftingUp } from "react-icons/gi";
import UserDashboardProgress from "./UserDashboardProgress";

export default function UserDashboard() {
    // Example tasks
    const tasks = [
        { name: "Morning Workout", completed: true },
        { name: "Track Daily Habits", completed: false },
        { name: "Update Monthly Goal", completed: false },
        { name: "Evening Meditation", completed: false },
    ];

    // null = cheat day
    const weeklyProgress = [20, 40, null, 80, 50, 90, 100];

    // Example water consumption
    const waterConsumed = 3.2;
    const waterLimit = 5;

    return (
        <div className="space-y-8 p-6">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-600">
                Welcome Back, John!
            </h1>

            <UserDashboardProgress
                tasks={tasks}
                weeklyProgress={weeklyProgress}
                waterConsumed={waterConsumed}
                waterLimit={waterLimit}
            />
        </div>
    );
}

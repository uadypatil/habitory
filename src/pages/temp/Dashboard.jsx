import { FiTrendingUp, FiCheckCircle, FiTarget, FiCalendar } from "react-icons/fi";
import { FaRegClock } from "react-icons/fa";
import { GiWeightLiftingUp } from "react-icons/gi";

export default function Dashboard() {
    return (
        <div className="space-y-6">
            {/* Welcome Header */}
            <h1 className="text-3xl md:text-4xl font-bold text-blue-600" data-aos="fade-down">
                Welcome Back, John!
            </h1>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center" data-aos="fade-up">
                    <FiCheckCircle className="text-blue-600 text-4xl mb-4" />
                    <p className="font-semibold text-gray-700">Tasks Completed</p>
                    <p className="text-2xl font-bold mt-2">12</p>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center" data-aos="fade-up" data-aos-delay="100">
                    <FiTrendingUp className="text-blue-600 text-4xl mb-4" />
                    <p className="font-semibold text-gray-700">Streak Days</p>
                    <p className="text-2xl font-bold mt-2">8</p>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center" data-aos="fade-up" data-aos-delay="200">
                    <FiTarget className="text-blue-600 text-4xl mb-4" />
                    <p className="font-semibold text-gray-700">Goals Set</p>
                    <p className="text-2xl font-bold mt-2">5</p>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center" data-aos="fade-up" data-aos-delay="300">
                    <GiWeightLiftingUp className="text-blue-600 text-4xl mb-4" />
                    <p className="font-semibold text-gray-700">Fitness Routines</p>
                    <p className="text-2xl font-bold mt-2">7</p>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center" data-aos="fade-up" data-aos-delay="400">
                    <FiCalendar className="text-blue-600 text-4xl mb-4" />
                    <p className="font-semibold text-gray-700">Habits Tracked</p>
                    <p className="text-2xl font-bold mt-2">15</p>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center" data-aos="fade-up" data-aos-delay="500">
                    <FaRegClock className="text-blue-600 text-4xl mb-4" />
                    <p className="font-semibold text-gray-700">Hours Spent</p>
                    <p className="text-2xl font-bold mt-2">24h</p>
                </div>
            </div>

            {/* Recent Activities Table */}
            <div className="bg-white rounded-2xl shadow-lg p-6" data-aos="fade-up">
                <h2 className="text-xl font-bold text-gray-700 mb-4">Recent Activities</h2>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="p-3 font-semibold text-gray-600">Activity</th>
                                <th className="p-3 font-semibold text-gray-600">Type</th>
                                <th className="p-3 font-semibold text-gray-600">Date</th>
                                <th className="p-3 font-semibold text-gray-600">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                { task: 'Morning Workout', type: 'Fitness', date: '2025-12-28', status: '✔' },
                                { task: 'Tracked Daily Habits', type: 'Routine', date: '2025-12-27', status: '✔' },
                                { task: 'Updated Monthly Goal', type: 'Goal', date: '2025-12-26', status: '✔' },
                                { task: 'Completed Yoga Session', type: 'Fitness', date: '2025-12-25', status: '✔' },
                            ].map((item, i) => (
                                <tr key={i} className="hover:bg-blue-50 transition">
                                    <td className="p-3">{item.task}</td>
                                    <td className="p-3">{item.type}</td>
                                    <td className="p-3">{item.date}</td>
                                    <td className="p-3 text-blue-600 font-semibold">{item.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Quick Actions Section */}
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
                {[
                    { name: "Add Task", icon: <FiCheckCircle className="text-3xl text-white" /> },
                    { name: "Set Goal", icon: <FiTarget className="text-3xl text-white" /> },
                    { name: "Track Habit", icon: <FiTrendingUp className="text-3xl text-white" /> },
                    { name: "View Progress", icon: <FiCalendar className="text-3xl text-white" /> },
                ].map((action, i) => (
                    <div key={i} className="bg-blue-600 rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center hover:bg-blue-700 transition" data-aos="fade-up" data-aos-delay={i * 100}>
                        {action.icon}
                        <p className="mt-3 text-white font-semibold">{action.name}</p>
                    </div>
                ))}
            </div>

        </div>
    );
}

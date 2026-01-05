import React, { useEffect, useState } from "react";
import {
    FiEdit,
    FiTrash2,
    FiCheckCircle,
    FiCircle,
    FiSave,
    FiX
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import {
    getTasks,
    updateTask,
    deleteTask,
    toggleTaskComplete
} from "../../helpers/UserTaskCreateHelper";


export default function UserTaskList() {
    const [tasks, setTasks] = useState([]);
    const [editingIndex, setEditingIndex] = useState(null);
    const [editData, setEditData] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        setTasks(getTasks());
    }, []);

    const refreshTasks = () => {
        setTasks(getTasks());
    };

    const handleSave = (index) => {
        if (!editData.name.trim()) return;
        updateTask(index, editData);
        setEditingIndex(null);
        refreshTasks();
    };

    const handleToggle = (index) => {
        toggleTaskComplete(index);
        refreshTasks();
    };

    const handleDelete = (index) => {
        deleteTask(index);
        refreshTasks();
    };

    return (
        <div className="min-h-screen bg-gray-50 px-4 py-6 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
                            Your Tasks
                        </h1>
                        <p className="text-gray-600 mt-1">
                            Edit, delete or complete your tasks
                        </p>
                    </div>

                    <button
                        onClick={() => navigate("/add-task")}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                        + Add Task
                    </button>
                </div>

                {!tasks.length && (
                    <div className="text-center py-16 text-gray-500">
                        No tasks yet. Start adding some 🚀
                    </div>
                )}

                <div className="space-y-4">
                    {tasks.map((task, index) => {
                        const isEditing = editingIndex === index;

                        return (
                            <div
                                key={index}
                                className={`bg-white rounded-xl shadow-md p-5 ${task.completed ? "opacity-70" : ""
                                    }`}
                            >
                                <div className="flex justify-between gap-4">
                                    <div className="flex gap-3">
                                        <button onClick={() => handleToggle(index)}>
                                            {task.completed ? (
                                                <FiCheckCircle className="text-green-500 text-xl mt-1" />
                                            ) : (
                                                <FiCircle className="text-gray-400 text-xl mt-1" />
                                            )}
                                        </button>

                                        <div>
                                            {isEditing ? (
                                                <input
                                                    value={editData.name}
                                                    onChange={(e) =>
                                                        setEditData({ ...editData, name: e.target.value })
                                                    }
                                                    className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
                                                />
                                            ) : (
                                                <h3
                                                    className={`font-semibold ${task.completed ? "line-through" : ""
                                                        }`}
                                                >
                                                    {task.name}
                                                </h3>
                                            )}

                                            <p className="text-sm text-gray-500 mt-1">
                                                {task.category} • {task.duration || "No duration"}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-2">
                                        {isEditing ? (
                                            <>
                                                <button
                                                    onClick={() => handleSave(index)}
                                                    className="text-green-600"
                                                >
                                                    <FiSave />
                                                </button>
                                                <button
                                                    onClick={() => setEditingIndex(null)}
                                                    className="text-gray-500"
                                                >
                                                    <FiX />
                                                </button>
                                            </>
                                        ) : (
                                            <>
                                                <button
                                                    onClick={() => {
                                                        setEditingIndex(index);
                                                        setEditData(task);
                                                    }}
                                                    className="text-blue-500"
                                                >
                                                    <FiEdit />
                                                </button>
                                                <button
                                                    onClick={() => handleDelete(index)}
                                                    className="text-red-500"
                                                >
                                                    <FiTrash2 />
                                                </button>
                                            </>
                                        )}
                                    </div>
                                </div>

                                {(task.notes || isEditing) && (
                                    <div className="mt-4 pl-8">
                                        {isEditing ? (
                                            <textarea
                                                rows="2"
                                                value={editData.notes}
                                                onChange={(e) =>
                                                    setEditData({ ...editData, notes: e.target.value })
                                                }
                                                className="w-full border rounded-lg px-3 py-2 resize-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        ) : (
                                            <p className="text-sm text-gray-600">{task.notes}</p>
                                        )}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

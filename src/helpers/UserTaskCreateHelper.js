const STORAGE_KEY = "user_tasks";

/* Get all tasks */
export const getTasks = () => {
    try {
        return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    } catch {
        return [];
    }
};

/* Save all tasks */
const saveTasks = (tasks) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
};

/* Add task */
export const addTask = (task) => {
    const tasks = getTasks();
    saveTasks([...tasks, task]);
};

/* Update task */
export const updateTask = (index, updatedTask) => {
    const tasks = getTasks();
    tasks[index] = updatedTask;
    saveTasks(tasks);
};

/* Delete task */
export const deleteTask = (index) => {
    const tasks = getTasks().filter((_, i) => i !== index);
    saveTasks(tasks);
};

/* Toggle complete */
export const toggleTaskComplete = (index) => {
    const tasks = getTasks();
    tasks[index].completed = !tasks[index].completed;
    saveTasks(tasks);
};

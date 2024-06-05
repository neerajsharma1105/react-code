import React, { useState, useEffect, useCallback, useMemo } from "react";
import Task from "./Task";

function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [filter, setFilter] = useState("all");
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    const fetchData = async () => {};
    fetchData();
  }, [tasks]);

  const handleAddTask = useCallback(() => {
    if (newTask.trim() === "") {
      setFeedback("Task cannot be empty");
      return;
    }
    setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
    setNewTask("");
    setFeedback("Task added successfully");
  }, [newTask, tasks]);

  const handleDeleteTask = useCallback(
    (taskId) => {
      setTasks(tasks.filter((task) => task.id !== taskId));
      setFeedback("Task deleted successfully");
    },
    [tasks]
  );

  const handleToggleComplete = useCallback(
    (taskId) => {
      setTasks(
        tasks.map((task) =>
          task.id === taskId ? { ...task, completed: !task.completed } : task
        )
      );
      setFeedback("Task status updated");
    },
    [tasks]
  );

  const handleFilterChange = useCallback((newFilter) => {
    setFilter(newFilter);
    setFeedback(`Filter set to ${newFilter}`);
  }, []);

  const getFilteredTasks = useMemo(() => {
    if (filter === "completed") return tasks?.filter((task) => task?.completed);
    if (filter === "incomplete")
      return tasks?.filter((task) => !task?.completed);
    return tasks;
  }, [tasks, filter]);

  return (
    <div className="task-manager">
      <h1>Task Manager</h1>
      <div className="feedback">{feedback}</div>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        aria-label="New task"
      />
      <button onClick={handleAddTask}>Add Task</button>
      <div className="filter-buttons">
        <button onClick={() => handleFilterChange("all")}>All</button>
        <button onClick={() => handleFilterChange("completed")}>
          Completed
        </button>
        <button onClick={() => handleFilterChange("incomplete")}>
          Incomplete
        </button>
      </div>
      <ul className="task-list">
        {getFilteredTasks?.map((task) => (
          <Task
            key={task.id}
            task={task}
            onToggleComplete={() => handleToggleComplete(task.id)}
            onDelete={() => handleDeleteTask(task.id)}
          />
        ))}
      </ul>
    </div>
  );
}

export default TaskManager;

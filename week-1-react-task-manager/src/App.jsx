import { useEffect, useMemo, useState } from "react";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./App.css";

const STORAGE_KEY = "react-task-manager-tasks";

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem(STORAGE_KEY);

    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [taskText, setTaskText] = useState("");
  const [filter, setFilter] = useState("all");
  const [message, setMessage] = useState("");

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  const completedCount = tasks.filter((task) => task.completed).length;
  const activeCount = tasks.length - completedCount;

  const visibleTasks = useMemo(() => {
    if (filter === "active") {
      return tasks.filter((task) => !task.completed);
    }

    if (filter === "completed") {
      return tasks.filter((task) => task.completed);
    }

    return tasks;
  }, [tasks, filter]);

  function addTask() {
    const cleanText = taskText.trim();

    if (!cleanText) {
      showMessage("Please enter a task first.");
      return;
    }

    if (cleanText.length < 3) {
      showMessage("Task must contain at least 3 characters.");
      return;
    }

    const newTask = {
      id: crypto.randomUUID(),
      title: cleanText,
      completed: false,
    };

    setTasks((currentTasks) => [newTask, ...currentTasks]);
    setTaskText("");
    showMessage("Task added successfully.", "success");
  }

  function toggleTask(taskId) {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === taskId
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }

  function deleteTask(taskId) {
    setTasks((currentTasks) =>
      currentTasks.filter((task) => task.id !== taskId)
    );
  }

  function updateTask(taskId, updatedTitle) {
    const cleanTitle = updatedTitle.trim();

    if (!cleanTitle || cleanTitle.length < 3) {
      showMessage("Task must contain at least 3 characters.");
      return false;
    }

    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === taskId
          ? { ...task, title: cleanTitle }
          : task
      )
    );

    return true;
  }

  function clearCompleted() {
    setTasks((currentTasks) =>
      currentTasks.filter((task) => !task.completed)
    );
  }

  function showMessage(text, type = "error") {
    setMessage({ text, type });

    window.setTimeout(() => {
      setMessage("");
    }, 2500);
  }

  return (
    <div className="app-shell">
      <Header />

      <main className="app-main">
        <section className="hero-section">
          <div>
            <p className="eyebrow">React task manager</p>
            <h2>Organize your day with clarity.</h2>
            <p>
              Capture your priorities, track your progress, and keep
              your daily work moving forward.
            </p>
          </div>

          <div className="hero-badge">
            <span>✦</span>
            <strong>Stay focused</strong>
            <small>One task at a time</small>
          </div>
        </section>

        <TaskForm
          taskText={taskText}
          onTaskTextChange={setTaskText}
          onAddTask={addTask}
          message={message}
        />

        <section className="tasks-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Your workspace</p>
              <h2>My tasks</h2>
            </div>

            <button
              type="button"
              className="clear-button"
              onClick={clearCompleted}
            >
              Clear completed
            </button>
          </div>

          <div className="summary-grid">
            <div className="summary-card total-card">
              <strong>{tasks.length}</strong>
              <span>Total</span>
            </div>

            <div className="summary-card active-card">
              <strong>{activeCount}</strong>
              <span>Active</span>
            </div>

            <div className="summary-card completed-card">
              <strong>{completedCount}</strong>
              <span>Completed</span>
            </div>
          </div>

          <div className="filter-group">
            {["all", "active", "completed"].map((item) => (
              <button
                key={item}
                type="button"
                className={filter === item ? "filter active" : "filter"}
                onClick={() => setFilter(item)}
              >
                {item[0].toUpperCase() + item.slice(1)}
              </button>
            ))}
          </div>

          <TaskList
            tasks={visibleTasks}
            filter={filter}
            onToggleTask={toggleTask}
            onDeleteTask={deleteTask}
            onUpdateTask={updateTask}
          />
        </section>
      </main>
    </div>
  );
}

export default App;
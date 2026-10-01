import TaskItem from "./TaskItem";

function TaskList({
  tasks,
  filter,
  onToggleTask,
  onDeleteTask,
  onUpdateTask,
}) {
  if (tasks.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-icon">✦</div>
        <h3>
          {filter === "completed"
            ? "No completed tasks"
            : filter === "active"
              ? "No active tasks"
              : "No tasks yet"}
        </h3>
        <p>
          {filter === "all"
            ? "Add your first task to get started."
            : "Try another filter or update a task."}
        </p>
      </div>
    );
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggleTask={onToggleTask}
          onDeleteTask={onDeleteTask}
          onUpdateTask={onUpdateTask}
        />
      ))}
    </ul>
  );
}

export default TaskList;
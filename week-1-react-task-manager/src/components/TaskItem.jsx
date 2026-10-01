import { useState } from "react";

function TaskItem({
  task,
  onToggleTask,
  onDeleteTask,
  onUpdateTask,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);

  function handleSave() {
    const wasUpdated = onUpdateTask(task.id, editedTitle);

    if (wasUpdated) {
      setIsEditing(false);
    }
  }

  function handleCancel() {
    setEditedTitle(task.title);
    setIsEditing(false);
  }

  return (
    <li className={task.completed ? "task-item completed" : "task-item"}>
      <input
        className="task-checkbox"
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggleTask(task.id)}
        aria-label={`Mark ${task.title} as ${
          task.completed ? "active" : "completed"
        }`}
      />

      {isEditing ? (
        <div className="edit-area">
          <input
            className="edit-input"
            value={editedTitle}
            onChange={(event) => setEditedTitle(event.target.value)}
            autoFocus
          />

          <div className="edit-actions">
            <button type="button" onClick={handleSave}>
              Done
            </button>

            <button type="button" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <>
          <span className="task-title">{task.title}</span>

          <div className="task-actions">
            <button type="button" onClick={() => setIsEditing(true)}>
              Edit
            </button>

            <button
              type="button"
              className="delete-button"
              onClick={() => onDeleteTask(task.id)}
            >
              Delete
            </button>
          </div>
        </>
      )}
    </li>
  );
}

export default TaskItem;
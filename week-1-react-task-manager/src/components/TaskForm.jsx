function TaskForm({
  taskText,
  onTaskTextChange,
  onAddTask,
  message,
}) {
  function handleSubmit(event) {
    event.preventDefault();
    onAddTask();
  }

  return (
    <section className="form-section">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Make progress</p>
          <h2>Add a new task</h2>
        </div>
      </div>

      <form className="task-form" onSubmit={handleSubmit}>
        <label htmlFor="task-input">Task title</label>

        <div className="input-row">
          <input
            id="task-input"
            value={taskText}
            onChange={(event) => onTaskTextChange(event.target.value)}
            placeholder="e.g. Practice React components"
            autoComplete="off"
          />

          <button type="submit" className="add-button">
            Add task
          </button>
        </div>

        <p className={message.type === "success" ? "message success" : "message"}>
          {message.text}
        </p>
      </form>
    </section>
  );
}

export default TaskForm;
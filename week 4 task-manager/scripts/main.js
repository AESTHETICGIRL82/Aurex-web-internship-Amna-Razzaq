"use strict";

const STORAGE_KEY = "amna-task-manager-tasks";

const taskForm = document.querySelector("#task-form");
const taskInput = document.querySelector("#task-input");
const formMessage = document.querySelector("#form-message");
const taskList = document.querySelector("#task-list");
const emptyState = document.querySelector("#empty-state");
const filterButtons = document.querySelectorAll(".filter-button");
const clearCompletedButton = document.querySelector("#clear-completed");

const totalCount = document.querySelector("#total-count");
const activeCount = document.querySelector("#active-count");
const completedCount = document.querySelector("#completed-count");
const currentYear = document.querySelector("#current-year");

let tasks = loadTasks();
let currentFilter = "all";

currentYear.textContent = new Date().getFullYear();

renderTasks();

taskForm.addEventListener("submit", handleAddTask);
taskList.addEventListener("click", handleTaskAction);
taskList.addEventListener("change", handleTaskChange);
taskList.addEventListener("keydown", handleEditKeydown);

filterButtons.forEach((button) => {
  button.addEventListener("click", handleFilterChange);
});

clearCompletedButton.addEventListener("click", clearCompletedTasks);

function loadTasks() {
  const savedTasks = localStorage.getItem(STORAGE_KEY);

  if (!savedTasks) {
    return [];
  }

  try {
    const parsedTasks = JSON.parse(savedTasks);

    if (!Array.isArray(parsedTasks)) {
      return [];
    }

    return parsedTasks.filter((task) => {
      return (
        task &&
        typeof task.id === "string" &&
        typeof task.title === "string" &&
        typeof task.completed === "boolean"
      );
    });
  } catch (error) {
    console.error("Unable to load saved tasks:", error);
    return [];
  }
}

function saveTasks() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

function handleAddTask(event) {
  event.preventDefault();

  const title = taskInput.value.trim();

  if (!title) {
    showFormMessage("Please enter a task before adding it.");
    taskInput.focus();
    return;
  }

  if (title.length < 3) {
    showFormMessage("Task must contain at least 3 characters.");
    taskInput.focus();
    return;
  }

  const newTask = {
    id: crypto.randomUUID
      ? crypto.randomUUID()
      : `${Date.now()}-${Math.random()}`,
    title,
    completed: false,
    createdAt: new Date().toISOString()
  };

  tasks.unshift(newTask);
  saveTasks();
  renderTasks();

  taskForm.reset();
  showFormMessage("Task added successfully.", "success");
  taskInput.focus();
}

function handleTaskAction(event) {
  const actionButton = event.target.closest("button[data-action]");

  if (!actionButton) {
    return;
  }

  const taskItem = actionButton.closest(".task-item");
  const taskId = taskItem.dataset.id;
  const action = actionButton.dataset.action;

  if (action === "edit") {
    startEdit(taskItem);
  }

  if (action === "save") {
    saveEditedTask(taskId, taskItem);
  }

  if (action === "cancel") {
    cancelEdit(taskItem);
  }

  if (action === "delete") {
    deleteTask(taskId);
  }
}

function handleTaskChange(event) {
  const checkbox = event.target.closest(
    'input[data-action="toggle"]'
  );

  if (!checkbox) {
    return;
  }

  const taskItem = checkbox.closest(".task-item");
  toggleTask(taskItem.dataset.id);
}

function handleEditKeydown(event) {
  const editInput = event.target.closest(".edit-input");

  if (!editInput) {
    return;
  }

  const taskItem = editInput.closest(".task-item");

  if (event.key === "Enter") {
    event.preventDefault();
    saveEditedTask(taskItem.dataset.id, taskItem);
  }

  if (event.key === "Escape") {
    cancelEdit(taskItem);
  }
}

function startEdit(taskItem) {
  taskItem.classList.add("editing");

  const editInput = taskItem.querySelector(".edit-input");
  editInput.focus();
  editInput.select();
}

function cancelEdit(taskItem) {
  taskItem.classList.remove("editing");
}

function saveEditedTask(taskId, taskItem) {
  const editInput = taskItem.querySelector(".edit-input");
  const updatedTitle = editInput.value.trim();

  if (!updatedTitle) {
    editInput.setCustomValidity("Task title cannot be empty.");
    editInput.reportValidity();
    editInput.focus();
    return;
  }

  if (updatedTitle.length < 3) {
    editInput.setCustomValidity(
      "Task must contain at least 3 characters."
    );
    editInput.reportValidity();
    editInput.focus();
    return;
  }

  editInput.setCustomValidity("");

  tasks = tasks.map((task) => {
    if (task.id === taskId) {
      return {
        ...task,
        title: updatedTitle
      };
    }

    return task;
  });

  saveTasks();
  renderTasks();
}

function toggleTask(taskId) {
  tasks = tasks.map((task) => {
    if (task.id === taskId) {
      return {
        ...task,
        completed: !task.completed
      };
    }

    return task;
  });

  saveTasks();
  renderTasks();
}

function deleteTask(taskId) {
  tasks = tasks.filter((task) => task.id !== taskId);

  saveTasks();
  renderTasks();
}

function handleFilterChange(event) {
  currentFilter = event.currentTarget.dataset.filter;

  filterButtons.forEach((button) => {
    const isActive = button.dataset.filter === currentFilter;

    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  renderTasks();
}

function clearCompletedTasks() {
  const hasCompletedTasks = tasks.some((task) => task.completed);

  if (!hasCompletedTasks) {
    return;
  }

  tasks = tasks.filter((task) => !task.completed);

  saveTasks();
  renderTasks();
}

function getVisibleTasks() {
  if (currentFilter === "active") {
    return tasks.filter((task) => !task.completed);
  }

  if (currentFilter === "completed") {
    return tasks.filter((task) => task.completed);
  }

  return tasks;
}

function renderTasks() {
  const visibleTasks = getVisibleTasks();

  taskList.innerHTML = "";

  visibleTasks.forEach((task) => {
    taskList.appendChild(createTaskElement(task));
  });

  updateSummary();
  updateEmptyState(visibleTasks.length);
}

function createTaskElement(task) {
  const listItem = document.createElement("li");

  listItem.className = "task-item";
  listItem.dataset.id = task.id;

  if (task.completed) {
    listItem.classList.add("completed");
  }

  listItem.innerHTML = `
    <input
      class="task-checkbox"
      type="checkbox"
      data-action="toggle"
      ${task.completed ? "checked" : ""}
      aria-label="Mark task as ${
        task.completed ? "active" : "completed"
      }"
    >

    <div class="task-content">
      <span class="task-title">${escapeHtml(task.title)}</span>

      <form class="edit-form" novalidate>
        <input
          class="edit-input"
          type="text"
          value="${escapeAttribute(task.title)}"
          maxlength="100"
          aria-label="Edit task title"
        >

        <div class="edit-actions">
          <button
            type="button"
            class="save-button"
            data-action="save"
          >
            Done
          </button>

          <button
            type="button"
            class="cancel-button"
            data-action="cancel"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>

    <div class="task-actions">
      <button type="button" data-action="edit">
        Edit
      </button>

      <button
        type="button"
        class="delete-button"
        data-action="delete"
      >
        Delete
      </button>
    </div>
  `;

  return listItem;
}

function updateSummary() {
  const completedTasks = tasks.filter((task) => task.completed).length;
  const activeTasks = tasks.length - completedTasks;

  totalCount.textContent = tasks.length;
  activeCount.textContent = activeTasks;
  completedCount.textContent = completedTasks;
}

function updateEmptyState(visibleTaskCount) {
  const noVisibleTasks = visibleTaskCount === 0;

  emptyState.hidden = !noVisibleTasks;
  taskList.hidden = noVisibleTasks;

  const emptyHeading = emptyState.querySelector("h3");
  const emptyDescription = emptyState.querySelector("p:last-child");

  if (tasks.length > 0 && noVisibleTasks) {
    const messages = {
      active: {
        heading: "No active tasks",
        description: "All your tasks are completed."
      },
      completed: {
        heading: "No completed tasks",
        description: "Complete a task and it will appear here."
      },
      all: {
        heading: "No tasks yet",
        description: "Add your first task to get started."
      }
    };

    emptyHeading.textContent = messages[currentFilter].heading;
    emptyDescription.textContent =
      messages[currentFilter].description;
    return;
  }

  emptyHeading.textContent = "No tasks yet";
  emptyDescription.textContent = "Add your first task to get started.";
}

function showFormMessage(message, type = "error") {
  formMessage.textContent = message;
  formMessage.dataset.type = type;

  window.setTimeout(() => {
    formMessage.textContent = "";
    formMessage.dataset.type = "";
  }, 3000);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function escapeAttribute(value) {
  return escapeHtml(value)
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
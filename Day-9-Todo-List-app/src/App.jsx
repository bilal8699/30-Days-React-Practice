import React, { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  function addTask() {
    if (task.trim() === "") return;

    setTasks([
      ...tasks,
      { text: task, completed: false }
    ]);

    setTask("");
  }

  function deleteTask(index) {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
  }

  function toggleTask(index) {
    const updated = tasks.map((t, i) => {
      if (i === index) {
        return { ...t, completed: !t.completed };
      }
      return t;
    });

    setTasks(updated);
  }

  return (
    <div className="container">
      <h2>React Todo App</h2>

      <div className="input-box">
        <input
          type="text"
          placeholder="Enter task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>

      <ul>
        {tasks.map((t, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={t.completed}
              onChange={() => toggleTask(index)}
            />

            <span
              className={t.completed ? "completed" : ""}
            >
              {t.text}
            </span>

            <button onClick={() => deleteTask(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
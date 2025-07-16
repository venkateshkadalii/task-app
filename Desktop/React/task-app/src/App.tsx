import  { useState } from "react";

const App = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState<string[]>(() =>
    JSON.parse(localStorage.getItem("tasks") || "[]")
  );

  const addTask = () => {
    if (task.trim()) {
      const updated = [...tasks, task];
      setTasks(updated);
      localStorage.setItem("tasks", JSON.stringify(updated));
      setTask("");
    }
  };

  const deleteTask = (index: number) => {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
    localStorage.setItem("tasks", JSON.stringify(updated));
  };

  return (
    <div style={{ padding: "2rem", maxWidth: 500, margin: "auto" }}>
      <h2>Simple Task App</h2>
      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
      />
      <button onClick={addTask}>Add</button>
      <ul>
        {tasks.map((t, i) => (
          <li key={i}>
            {t} <button onClick={() => deleteTask(i)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;

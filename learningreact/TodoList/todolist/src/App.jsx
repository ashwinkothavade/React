import { useState } from "react";
import "./App.css";

function App() {
  const [todolist, setTodolist] = useState([]);
  const [newtask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    if (newtask.trim() === "") return; // Prevent adding empty tasks

    const task = {
      id: todolist.length === 0 ? 1 : todolist[todolist.length - 1].id + 1,
      taskname: newtask,
    };

    setTodolist([...todolist, task]);
    setNewTask(""); // Clear input after adding task
  };

  const deleteTask = (id) => {
    setTodolist(todolist.filter((task) => task.id !== id));
  };

  return (
    <div className="App">
      <div className="addtask">
        <input type="text" onChange={handleChange} value={newtask} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="list">
        {todolist.map((task) => (
          <div key={task.id}>
            <h1>{task.taskname}</h1>
            <button onClick={() => deleteTask(task.id)}>-</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

import Input from "./Input";
import { useState } from "react";

function AddTasks({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="bg-slate-200 space-y-4 p-6 rounded-md shadow flex flex-col">
      <h2 className="text-xl text-center font-bold">Add Task</h2>

      <Input
        type="text"
        placeholder="Task title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <Input
        type="text"
        placeholder="Task description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button
        onClick={() => {
          // Verificar vazio
          if (!title.trim() || !description.trim()) {
            return alert("Preencha todos os campos");
          }
          onAddTaskSubmit(title, description);
          setTitle("");
          setDescription("");
        }}
        className="bg-slate-500 text-white px-4 py-2 rounded-md"
      >
        AddTask
      </button>
    </div>
  );
}

export default AddTasks;

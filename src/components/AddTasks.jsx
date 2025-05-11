import { useState } from "react";
import { v4 } from "uuid";


export default function AddTask({ onAddTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      alert("Por favor, insira um título para a tarefa.");
      return;
    }

    const newTask = {
      id: v4(),
      title,
      description,
      isCompleted: false,
    };

    onAddTask(newTask);
    setTitle("");
    setDescription("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 w-full max-w-xl bg-slate-950 p-6 rounded-md shadow mt-6"
    >
      <h2 className="text-slate-100 text-2xl font-bold">Nova Tarefa</h2>

      <input
        type="text"
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="p-3 rounded-md bg-slate-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <textarea
        placeholder="Descrição"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="p-3 rounded-md bg-slate-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        rows="3"
      />

      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-500 transition-colors text-white p-3 rounded-md font-semibold"
      >
        Adicionar Tarefa
      </button>
    </form>
  );
}

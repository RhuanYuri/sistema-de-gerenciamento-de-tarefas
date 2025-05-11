import { useEffect, useState } from "react";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTasks";

export default function App() {
  const [tasks, setTasks] = useState(() => {
    const stored = localStorage.getItem("tasks");
    return stored ? JSON.parse(stored) : [];
  });

  // Alternar status da tarefa
  function onTasksClick(id) {
    const newTasks = tasks.map((task) =>
      task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
    );
    setTasks(newTasks);
  }

  // Deletar tarefa
  function deleteTask(id) {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  }

  // Adicionar nova tarefa
  const handleAddTask = (task) => {
    setTasks([...tasks, task]);
  };

  // Salvar no localStorage sempre que tasks mudar
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Buscar tarefas iniciais apenas se não houver nenhuma salva
  // useEffect(() => {
  //   if (tasks.length === 0) {
  //     fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         const initialTasks = data.map((item) => ({
  //           id: item.id,
  //           title: item.title,
  //           description: "Descrição da tarefa",
  //           isCompleted: item.completed,
  //         }));
  //         setTasks(initialTasks);
  //       })
  //       .catch((error) => console.error("Erro ao buscar tarefas:", error));
  //   }
  // }, []);

  return (
    <div className="flex flex-col items-center bg-slate-900 min-h-screen w-full p-6 overflow-y-auto">
      <h1 className="text-3xl text-slate-100 font-bold">
        Gerenciador de tarefas
      </h1>
      <AddTask onAddTask={handleAddTask} />
      <Tasks tasks={tasks} onTasksClick={onTasksClick} deleteTask={deleteTask} />
    </div>
  );
}

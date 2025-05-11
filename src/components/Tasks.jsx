import { Check, ChevronRight, Trash } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Tasks({ tasks, onTasksClick, deleteTask }) {
  const navigate = useNavigate();

  function handleTaskClick(task) {
    const query = new URLSearchParams();
    query.set("taskId", task.id);
    query.set("title", task.title);
    query.set("description", task.description);
    query.set("isCompleted", task.isCompleted);
    const url = `/task/?${query.toString()}`;
    navigate(url);
  }
  return (
    <ul className="flex flex-col justify-center items-center gap-4 w-full mt-6 p-6 rounded-md shadow bg-slate-950">
      {tasks.map((task) => (
        <li
          key={task.id}
          className="w-full flex cursor-pointer justify-between items-center gap-2"
        >
          <div
            onClick={() => onTasksClick(task.id)}
            className="bg-slate-800 p-4 w-full rounded-md flex flex-col md:flex-row justify-between items-center gap-4"
          >
            <div className="flex gap-4 items-center justify-center">
              {task.isCompleted && <Check className="text-slate-100" />}
              <div
                className={`text-slate-100 text-xl font-bold ${
                  task.isCompleted ? "line-through" : ""
                }`}
              >
                {task.title}
              </div>
            </div>
            <span className="text-slate-400">
              {task.isCompleted ? "Concluído" : "Pendente"}
            </span>
          </div>
          <button
            onClick={() => handleTaskClick(task)}
            className="bg-slate-700 text-slate-100 p-4 rounded-md hover:bg-slate-600 transition-colors self-center"
          >
            <ChevronRight />
          </button>
          <button
            onClick={() => deleteTask(task.id)}
            className="bg-slate-700 text-slate-100 p-4 rounded-md hover:bg-slate-600 transition-colors self-center"
          >
            <Trash className="text-red-500" />
          </button>
        </li>
      ))}
    </ul>
  );
}

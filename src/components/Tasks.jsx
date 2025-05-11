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
    <ul className="flex flex-col justify-center items-center gap-4 w-full mt-6 p-4 sm:p-6 rounded-md shadow bg-slate-950">
      {tasks.map((task) => (
        <li
          key={task.id}
          className="w-full flex flex-col md:flex-row gap-2 md:gap-4"
        >
          <div
            onClick={() => onTasksClick(task.id)}
            className="bg-slate-800 p-4 w-full rounded-md flex flex-col sm:flex-row justify-between items-center gap-3 cursor-pointer"
          >
            <div className="flex gap-3 items-center justify-center">
              {task.isCompleted && <Check className="text-slate-100 w-5 h-5 sm:w-6 sm:h-6" />}
              <div
                className={`text-slate-100 text-lg font-semibold ${
                  task.isCompleted ? "line-through" : ""
                }`}
              >
                {task.title}
              </div>
            </div>
            <span className="text-slate-400 text-sm sm:text-base">
              {task.isCompleted ? "Concluído" : "Pendente"}
            </span>
          </div>

          <div className="flex flex-row md:flex-col gap-2 self-stretch justify-between">
            <button
              onClick={() => handleTaskClick(task)}
              className="bg-slate-700 text-slate-100 p-3 rounded-md hover:bg-slate-600 transition-colors flex items-center justify-center"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <button
              onClick={() => deleteTask(task.id)}
              className="bg-slate-700 text-slate-100 p-3 rounded-md hover:bg-slate-600 transition-colors flex items-center justify-center"
            >
              <Trash className="text-red-500 w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

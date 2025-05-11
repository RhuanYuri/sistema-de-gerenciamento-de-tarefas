import { useSearchParams, useNavigate } from "react-router-dom";
import { CheckCircle, XCircle, ArrowLeft } from "lucide-react";

export default function TaskPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const taskId = searchParams.get("taskId") || null;
  const title = searchParams.get("title") || "Sem Título";
  const description = searchParams.get("description") || "Sem descrição";
  const isCompleted = searchParams.get("isCompleted") === "true";

  return (
    <div className="min-h-screen w-full bg-slate-900 text-white p-6 flex flex-col items-center">
      <div className="w-full max-w-2xl flex items-center justify-between mb-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-slate-300 hover:text-slate-100 transition-colors"
        >
          <ArrowLeft />
          <span>Voltar</span>
        </button>

        <h2 className="text-2xl font-bold text-slate-100 text-center w-full">
          Detalhes da Tarefa
        </h2>

        {/* Espaço reservado para alinhar o botão e manter o título centralizado */}
        <div className="w-[80px]" /> 
      </div>

      <div className="bg-slate-950 w-full max-w-2xl p-6 rounded-md shadow-md flex flex-col gap-4">
        <h1 className="text-3xl font-bold text-slate-100">{title}</h1>
        <p className="text-slate-300 text-lg">{description}</p>

        <div className="flex items-center gap-2 mt-4">
          {isCompleted ? (
            <>
              <CheckCircle className="text-green-500" />
              <span className="text-green-400 font-semibold">Concluída</span>
            </>
          ) : (
            <>
              <XCircle className="text-yellow-500" />
              <span className="text-yellow-400 font-semibold">Pendente</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

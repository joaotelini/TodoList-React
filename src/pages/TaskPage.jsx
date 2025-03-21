import { useSearchParams } from "react-router-dom";
import { ChevronLeftIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");

  function onGoBackClick() {
    navigate(-1);
  }

  return (
    <div className="h-screen w-screen bg-slate-500 p-6">
      <div className="w[500px] space-y-4">
        <div className="flex justify-center relative mb-6">
          <button
            onClick={onGoBackClick}
            className="absolute left-0 top-0 bottom-0 text-slate-100"
          >
            <ChevronLeftIcon />
          </button>
          <h1 className="text-3xl text-white font-bold text-center">
            Task Details
          </h1>
        </div>
        <div className="bg-slate-400 p-4 rounded-md shadow">
          <h2 className="text-xl text-slate-600 font-bold">{title}</h2>
          <p className="text-slate-600">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;

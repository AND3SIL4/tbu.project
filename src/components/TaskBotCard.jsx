import { Bot, Play } from "lucide-react";

const TaskBotCard = ({ title, variables, onClick }) => {
  return (
    <div className="max-w-xs bg-gray-200/40 rounded-xl p-6 shadow-sm hover:shadow-xl transition-shadow duration-300">
      <div className="grid place-items-center">
        <div className="mb-4 bg-blue-500 w-12 h-12 grid place-items-center rounded-full">
          <Bot className="w-9 h-9 text-white" />
        </div>
      </div>

      {/* Título y descripción */}
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-4">
        Variables de ingreso: {variables}
      </p>

      {/* Botón Execute */}
      <button
        onClick={onClick}
        className="w-full flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition-colors duration-200"
      >
        <Play className="w-4 h-4" />
        Execute
      </button>
    </div>
  );
};

export default TaskBotCard;

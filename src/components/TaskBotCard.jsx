import React, { useState } from "react";
import BotModal from "./BotModal";

const TaskBotCard = ({ bot }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <h2>Bot name: {bot.name}</h2>
      <button
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        Execute
      </button>
      {isModalOpen && (
        <BotModal
          bot={bot}
          onClose={() => {
            setIsModalOpen(false);
          }}
        />
      )}
    </div>
  );
};

export default TaskBotCard;

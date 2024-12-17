import React, { useState } from "react";
import axios from "../api/apiClient";

const BotModal = ({ bot, onClose }) => {
  const [inputVariables, setInputVariables] = useState({});
  console.log(bot, onClose);

  const handleExecute = async () => {
    try {
      const token = localStorage.getItem("token");
      console.log("The token is:", token);
    } catch (error) {
      console.error("Execution failed:", error);
      alert("Failed to execute the bot");
    }
  };
  return (
    <div>
      <h1>Hola Como estas</h1>
      <button></button>
    </div>
  );
};

export default BotModal;

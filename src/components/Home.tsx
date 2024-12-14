import React, { useEffect, useState } from "react";
import axios from "../api/apiClient";
import TaskBotCard from "./TaskBotCard";

const Home = () => {
  const [taskBots, setTaskBots] = useState([]);

  return (
    <div>
      <h2>Task bot list</h2>
    </div>
  );
};

export default Home;

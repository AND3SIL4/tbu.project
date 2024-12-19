import { useState, useEffect } from "react";
import SearchBar from "./ui/SearchBar";
import TaskBotCard from "./TaskBotCard";

const Home = () => {
  const [username, setUsername] = useState("Felipe Silva");

  useEffect(() => {}, []);

  return (
    <div className="max-w-5xl w-full overflow-x-hidden">
      <h2 className="text-5xl font-bold text-[#323743] py-6 text-center">
        Welcome to TBU <span className="text-[#006b8c]">{username}</span>
      </h2>
      <SearchBar />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        <TaskBotCard
          title="Prueba bot"
          variables="Variables"
          onClick={() => alert("Click ont he bot")}
        />
        <TaskBotCard
          title="Prueba bot"
          variables="Variables"
          onClick={() => alert("Click ont he bot")}
        />
        <TaskBotCard
          title="Prueba bot"
          variables="Variables"
          onClick={() => alert("Click ont he bot")}
        />{" "}
        <TaskBotCard
          title="Prueba bot"
          variables="Variables"
          onClick={() => alert("Click ont he bot")}
        />{" "}
        <TaskBotCard
          title="Prueba bot"
          variables="Variables"
          onClick={() => alert("Click ont he bot")}
        />{" "}
        <TaskBotCard
          title="Prueba bot"
          variables="Variables"
          onClick={() => alert("Click ont he bot")}
        />{" "}
        <TaskBotCard
          title="Prueba bot"
          variables="Variables"
          onClick={() => alert("Click ont he bot")}
        />{" "}
        <TaskBotCard
          title="Prueba bot"
          variables="Variables"
          onClick={() => alert("Click ont he bot")}
        />{" "}
        <TaskBotCard
          title="Prueba bot"
          variables="Variables"
          onClick={() => alert("Click ont he bot")}
        />{" "}
        <TaskBotCard
          title="Prueba bot"
          variables="Variables"
          onClick={() => alert("Click ont he bot")}
        />{" "}
        <TaskBotCard
          title="Prueba bot"
          variables="Variables"
          onClick={() => alert("Click ont he bot")}
        />{" "}
        <TaskBotCard
          title="Prueba bot"
          variables="Variables"
          onClick={() => alert("Click ont he bot")}
        />{" "}
        <TaskBotCard
          title="Prueba bot"
          variables="Variables"
          onClick={() => alert("Click ont he bot")}
        />{" "}
        <TaskBotCard
          title="Prueba bot"
          variables="Variables"
          onClick={() => alert("Click ont he bot")}
        />
      </div>
    </div>
  );
};

export default Home;

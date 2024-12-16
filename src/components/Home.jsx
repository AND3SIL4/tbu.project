import React, { useEffect, useState } from "react";
import Footer from "./Footer";

const Home = () => {
  const [taskBots, setTaskBots] = useState([]);

  return (
    <div>
      <h2>Task bot list</h2>
      <Footer />
    </div>
  );
};

export default Home;

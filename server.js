import axios from "axios";
import cors from "cors";
import express from "express";

// Start point of the backend
const app = express();
const PORT = 5000;

// Allow cors
app.use(cors());
app.use(express.json());

// Api urls for action
const urls = {
  login: "https://community.cloud.automationanywhere.digital/v2/authentication",
  taskbot: "",
  trigger: "",
};
// Endpoint to login into AA
app.post("/api/authentication", async (req, res) => {
  try {
    const response = await axios.post(urls.login, req.body);
    res.status(200).json(response.data);
  } catch (error) {
    //console.error(error);
    console.error(error.response);
    res.status(error.response.status).json({
      message: error.response.statusText,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server running at http://localhost:${PORT}`);
});

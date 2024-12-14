import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://community.cloud.automationanywhere.digital",
});

export default apiClient;

import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "f0b886aeb9034590a84df6aff7996020"
  }
});

export default apiClient;

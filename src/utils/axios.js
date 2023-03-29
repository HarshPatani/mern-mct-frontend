import axios from "axios";

const api = axios.create({
  baseURL: "https://mern-mct-backend.onrender.com/",
  timeout: 15000,
});

export { api };

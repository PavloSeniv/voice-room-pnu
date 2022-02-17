import axios from "axios";

const Axios = axios.create({
  // baseURL: "https://jsonplaceholder.typicode.com/",
  baseURL: "https://localhost:3001",
  // baseURL: "https://localhost:3001",
  // withCredentials: true, // CORSE
});

export { Axios };

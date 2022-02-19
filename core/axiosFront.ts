import axios from "axios";

const Axios = axios.create({
  // baseURL: "https://jsonplaceholder.typicode.com/",
  baseURL: "http://localhost:3000",
  // baseURL: "https://localhost:3001",
  withCredentials: true, // CORSE
});

export { Axios };
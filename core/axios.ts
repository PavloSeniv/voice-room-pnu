import axios from "axios";
import Cookies from "js-cookie";

const Axios = axios.create({
  // baseURL: "https://jsonplaceholder.typicode.com/",
  baseURL: "https://localhost:3001",
  // baseURL: "https://localhost:3001",
  // withCredentials: true, // CORSE
  headers: {
    Authorization: "Bearer " + Cookies.get("token")
  }
});

export { Axios };

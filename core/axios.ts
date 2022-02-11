import Axios from "axios";

const instanse = Axios.create({
  // baseURL: "https://jsonplaceholder.typicode.com/",
  baseURL: "http://localhost:3000",
  withCredentials: true, // CORSE
});

export default instanse;

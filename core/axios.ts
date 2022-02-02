import Axios from "axios";

const instanse = Axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  withCredentials: true, // CORSE
});

export default instanse;

import axios from "axios";

export const API_INSTANCE = axios.create({
  baseURL: "https://www.talaport.com/",
});

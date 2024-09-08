import axios from "axios";

export const API_INSTANCE = axios.create({
  baseURL: "http://159.223.118.41:9000/",
});

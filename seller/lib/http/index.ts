import axios from "axios";

export const API_INSTANCE = axios.create({
  baseURL: "http://localhost:9000/",
});

// export const API_INSTANCE = axios.create({
//   baseURL: "https://www.talaport.com/",
// });

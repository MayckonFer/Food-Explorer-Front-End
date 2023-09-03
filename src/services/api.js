import axios from "axios";

// api que está no ar : https://api-nodejs-foodexplorer.onrender.com

export const api = axios.create({
  baseURL: "http://localhost:3333",
});

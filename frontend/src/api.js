import axios from "axios";

export const api = axios.create({
  baseURL: "https://ganpati-jyotish.onrender.com"
});
